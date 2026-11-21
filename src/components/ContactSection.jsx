import SectionHead from './SectionHead'
import DriftWall from './react-bits/DriftWall'
import { socials } from '../data/portfolio'

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-drift" aria-hidden="true">
        <DriftWall
          columns={5}
          tileWidth={160}
          tileHeight={108}
          gap={14}
          radius={10}
          tilt={12}
          turn={-12}
          perspective={1100}
          depth={110}
          speed={28}
          direction="up"
          variance={0.4}
          parallax={0.3}
          lift={40}
          fade={0.7}
          dim={0.45}
          overlayColor="#0a0a0a"
        />
      </div>

      <div className="contact-content">
        <SectionHead num="04 — 联系" title="联系我" />
        <p className="contact-big reveal">
          有合作意向？
          <br />
          <a href="mailto:hello@example.com">发邮件给我 →</a>
        </p>
        <div className="social-links reveal">
          {socials.map((so) => (
            <a key={so.name} href={so.href}>
              {so.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
