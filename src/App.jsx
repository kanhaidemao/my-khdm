import { usePageEffects } from './hooks/usePageEffects'
import AppHeader from './components/AppHeader'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'
import AppFooter from './components/AppFooter'

export default function App() {
  usePageEffects()

  return (
    <>
      <div className="scroll-progress" />

      <AppHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <AppFooter />
    </>
  )
}
