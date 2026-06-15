import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Programs } from '@/components/programs'
import { WhyChooseUs } from '@/components/why-choose-us'
import { LearningJourney } from '@/components/learning-journey'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { Social } from '@/components/social'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div
  className="min-h-screen"
  style={{ backgroundColor: "#FFF8EE" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <LearningJourney />
        <Gallery />
        <Testimonials />
        <Social />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
