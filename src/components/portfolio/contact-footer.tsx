import { mailto, site } from '@/lib/site'
import { Arrow } from './arrow'
import { Eyebrow } from './eyebrow'
import { Wordmark } from './wordmark'

export function ContactFooter() {
  return (
    <footer className="footer" aria-labelledby="contact-title">
      <Eyebrow index={3}>Novas histórias, sempre</Eyebrow>

      <div className="footer-main">
        <h2 id="contact-title">Tem algo<br />em <em>mente?</em></h2>
        <a href={mailto()}>Vamos conversar <Arrow diagonal /></a>
      </div>

      <div className="footer-bottom">
        <Wordmark />
        <span>© {site.copyrightYear} {site.studio}</span>
        <span>{site.city} · {site.coordinates.lat}</span>
        <a href={site.instagram} target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a>
      </div>
    </footer>
  )
}
