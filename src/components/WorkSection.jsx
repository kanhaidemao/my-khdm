import SectionHead from './SectionHead'
import LazyMount from './LazyMount'
import ChromaGrid from './react-bits/ChromaGrid'
import { projects } from '../data/portfolio'

const chromaItems = projects.map((p) => ({
  image: p.image.replace('/900/1200', '/640/480'),
  title: p.name,
  subtitle: p.tags,
  url: p.link && p.link !== '#' ? p.link : undefined,
  accent: p.accent,
  alt: `${p.name} — ${p.tags}`,
}))

export default function WorkSection() {
  return (
    <section id="work" className="work-section">
      <SectionHead num="03 — 作品" title="精选项目" />
      <LazyMount className="work-gallery reveal" minHeight={320} rootMargin="260px 0px">
        <ChromaGrid
          items={chromaItems}
          columns={4}
          minCardWidth={160}
          gap={12}
          radius={180}
          softness={0.5}
          damping={0.55}
          reveal="spotlight"
          theme="dark"
          aspectRatio="16 / 10"
          cardRadius={14}
          showInfo
        />
      </LazyMount>
    </section>
  )
}
