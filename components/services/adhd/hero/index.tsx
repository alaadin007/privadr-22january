import { HeroBackground } from "./hero-background"
import { HeroContent } from "./hero-content"
import { HeroDoctor } from "./hero-doctor"

export function ADHDHero() {
  return (
    <section className="relative py-20">
      <HeroBackground />
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <HeroContent />
          <HeroDoctor />
        </div>
      </div>
    </section>
  )
}