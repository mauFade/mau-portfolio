import { About } from './about'
import { ContactFooter } from './contact-footer'
import { Hero } from './hero'
import { SiteHeader } from './site-header'
import { WorkGallery } from './work-gallery'

export function Portfolio() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <WorkGallery />
      <About />
      <ContactFooter />
    </main>
  )
}
