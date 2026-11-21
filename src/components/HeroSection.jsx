import ShatterType from './react-bits/ShatterType'
import GridScan from './react-bits/GridScan'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-gridscan" aria-hidden="true">
        <GridScan
          cells={6}
          depth={2}
          depthFade={0.55}
          parallax={0.35}
          lineThickness={1}
          lineStyle="solid"
          points={false}
          reflection={0.15}
          shading={0.5}
          scanDirection="forward"
          scanDuration={4}
          scanDelay={4.5}
          scanWidth={0.7}
          trail={0.15}
          glow={0.2}
          autoScan={false}
          interactive={false}
          intro={false}
          linesColor="#4d4757"
          scanColor="#5a6570"
          dpr={1.25}
        />
      </div>

      <div className="hero-content">
        <div className="hero-label">前端开发者</div>
        <div className="hero-shatter">
          <ShatterType
            text={'创造 优雅 且\n富有生命力的\n数字体验'}
            colors={['#F5F5F5', '#F5F5F5']}
            accentColor="#7B5CFF"
            align="left"
            verticalAlign="top"
            fontFamily="'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', system-ui, sans-serif"
            fontWeight={700}
            fontSize={0}
            letterSpacing={-0.02}
            lineHeight={1.02}
            shardSize={0.14}
            irregularity={0.45}
            crack={0.45}
            quality={0.75}
            glint={0.55}
            shatter
            intro="assemble"
            introDuration={1.2}
            interactive
          />
        </div>
        <div className="hero-copy">
          <p>专注于现代 Web 前端开发，将设计美学与工程技术完美融合，打造极致的用户交互体验。</p>
          <a href="#work" className="hero-btn">
            <span>查看作品</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">向下滚动</div>
    </section>
  )
}
