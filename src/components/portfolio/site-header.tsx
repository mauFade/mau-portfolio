import { mailto, site } from '@/lib/site'
import { Arrow } from './arrow'
import { Wordmark } from './wordmark'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Wordmark />
      <span className="header-note">
        {site.role}<br />
        {site.city} · {site.availability}
      </span>
      <nav aria-label="Navegação principal">
        <a href="#trabalho">Trabalho</a>
        <a href="#sobre">Sobre</a>
        <a className="contact-link" href={mailto()}>Vamos conversar <Arrow diagonal /></a>
      </nav>
    </header>
  )
}
