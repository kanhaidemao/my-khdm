import SectionHead from './SectionHead'
import AccordionGallery from './react-bits/AccordionGallery'
import { projects } from '../data/portfolio'

const galleryItems = projects.map((p) => ({
  image: p.image,
  label: p.name,
  alt: `${p.name} — ${p.tags}`,
  link: p.link || '#'
}))

export default function WorkSection() {
  return (
    <section id="work" className="work-section">
      <SectionHead num="03 — Work" title="精选项目" />
      <div className="work-gallery reveal">
        <AccordionGallery
          items={galleryItems}
          defaultIndex={0}
          accentColor="#ff5722"
          overlayColor="#0a0a0a"
          textColor="#ffffff"
          height={480}
          gap={10}
          radius={16}
          expandRatio={0.52}
          orientation="horizontal"
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          trigger="hover"
          showLabels
          grayscale
        />
      </div>
    </section>
  )
}
