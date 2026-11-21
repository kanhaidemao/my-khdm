import { useEffect, useRef, useState } from 'react'

/** 进入视口附近才挂载重型组件，减轻首屏压力 */
export default function LazyMount({ children, rootMargin = '280px 0px', minHeight = 420, className = '' }) {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || ready) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setReady(true)
      return undefined
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true)
          io.disconnect()
        }
      },
      { rootMargin, threshold: 0.01 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [ready, rootMargin])

  return (
    <div ref={ref} className={className} style={ready ? undefined : { minHeight }}>
      {ready ? children : null}
    </div>
  )
}
