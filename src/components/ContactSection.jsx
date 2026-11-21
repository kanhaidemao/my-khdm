import SectionHead from './SectionHead'
import DriftWall from './react-bits/DriftWall'
import { socials } from '../data/portfolio'

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-drift" aria-hidden="true">
        <DriftWall
          columns={6}
          tileWidth={180}
          tileHeight={120}
          gap={16}
          radius={12}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={140}
          speed={36}
          direction="up"
          variance={0.45}
          parallax={0.55}
          lift={56}
          fade={0.72}
          dim={0.42}
          overlayColor="#0a0a0a"
        />
      </div>

      <div className="contact-content">
        <SectionHead num="04 — Contact" title="联系我" />
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
