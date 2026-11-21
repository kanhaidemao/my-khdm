import ElasticMesh from './react-bits/ElasticMesh'
import GridScan from './react-bits/GridScan'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-gridscan" aria-hidden="true">
        <GridScan
          cells={8}
          depth={3}
          depthFade={0.6}
          parallax={1}
          lineThickness={1}
          lineStyle="solid"
          points
          reflection={0.35}
          shading={0.7}
          scanDirection="forward"
          scanDuration={2.4}
          scanDelay={1.6}
          scanWidth={1}
          trail={0.5}
          glow={0.6}
          autoScan
          interactive
          clickEffect="ping"
          intro
          linesColor="#4d4757"
          scanColor="#7dd3fc"
        />
      </div>

      <div className="hero-content">
        <div className="hero-label">Frontend Developer</div>
        <div className="hero-elastic">
          <ElasticMesh
            text="创造数字体验"
            material="balloon"
            color="#3b5bff"
            theme="dark"
            fontFamily="'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', system-ui, sans-serif"
            fontWeight={900}
            inflate={1}
            stiffness={0.5}
            wobble={0.6}
            grabRadius={70}
            stretch={0.5}
            press={0.5}
            shadow={0.5}
            intro
          />
        </div>
        <p className="hero-elastic-hint">按压、戳弄、拉扯</p>
        <p>专注于现代 Web 前端开发，将设计美学与工程技术完美融合，打造极致的用户交互体验。</p>
        <a href="#work" className="hero-btn">
          <span>查看作品</span>
          <span className="arrow">→</span>
        </a>
      </div>
      <div className="scroll-indicator">Scroll</div>
    </section>
  )
}
