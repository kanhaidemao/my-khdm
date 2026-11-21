import SectionHead from './SectionHead'
import LazyMount from './LazyMount'
import OrbitImages from './react-bits/OrbitImages'
import { skillOrbitImages } from '../data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <SectionHead num="02 — 技能" title="技术能力" />
      <LazyMount className="skills-orbit reveal" minHeight={360} rootMargin="280px 0px">
        <OrbitImages
          images={skillOrbitImages}
          shape="ellipse"
          direction="normal"
          easing="linear"
          duration={36}
          depth={0.45}
          showPath
          pathColor="rgba(255,255,255,0.18)"
          pathWidth={1.2}
          itemSize={64}
          itemRadius={14}
          radiusX={480}
          radiusY={140}
          rotation={-8}
          shadow={0.25}
          hoverScale={1.1}
          draggable
          clickToFront
          intro
          centerContent={<span className="skills-orbit-center">Stack</span>}
        />
      </LazyMount>
    </section>
  )
}
