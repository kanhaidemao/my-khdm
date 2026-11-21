import SectionHead from './SectionHead'
import LazyMount from './LazyMount'
import Lanyard from './react-bits/Lanyard'
import { stats } from '../data/portfolio'

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <SectionHead num="01 — 关于" title="关于我" />
      <div className="about-grid">
        <div className="portrait-wrap reveal">
          <LazyMount className="portrait-lanyard" minHeight={520} rootMargin="320px 0px">
            <Lanyard
              frontImage="./lanyard-front.svg"
              backImage="./lanyard-back.svg"
              imageFit="cover"
              orientation="portrait"
              finish="glossy"
              cardColor="#ffffff"
              strapColor="#111111"
              metal="silver"
              size={0.65}
              strapLength={0.5}
              strapWidth={0.65}
              gravity={1}
              damping={0.55}
              elasticity={0.5}
              breeze={0}
              interactive
              intro
            />
          </LazyMount>
        </div>
        <div className="about-text reveal">
          <h3>一名热爱设计与技术的前端工程师</h3>
          <p>
            我是一名拥有多年经验的前端开发工程师，专注于构建高性能、可维护的现代 Web
            应用。对用户体验有着近乎偏执的追求，相信细节决定品质。
          </p>
          <p>
            擅长 Vue、React 等主流框架生态，精通 CSS
            动画与交互设计。具备良好的产品思维与审美能力，能够独立完成从需求到上线的完整开发流程。
          </p>
          <p>热爱开源与技术分享，持续关注前端前沿技术，不断探索更好的开发方式。</p>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat-item reveal" key={s.label}>
                <h4 data-count={s.count}>0</h4>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
