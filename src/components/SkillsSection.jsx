import SectionHead from './SectionHead'
import OrbitImages from './react-bits/OrbitImages'
import { skillOrbitImages } from '../data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <SectionHead num="02 — Skills" title="技术能力" />
      <div className="skills-orbit reveal">
        <OrbitImages
          images={skillOrbitImages}
          shape="ellipse"
          direction="normal"
          easing="linear"
          duration={30}
          depth={0.6}
          showPath
          pathColor="rgba(255,255,255,0.22)"
          pathWidth={1.5}
          itemSize={72}
          itemRadius={16}
          radiusX={520}
          radiusY={160}
          rotation={-8}
          shadow={0.35}
          hoverScale={1.12}
          draggable
          clickToFront
          intro
          centerContent={<span className="skills-orbit-center">Stack</span>}
        />
      </div>
    </section>
  )
}
