import Image from 'next/image'
import { site, splitName, unsplash } from '@/lib/site'
import { Arrow } from './arrow'

/**
 * Approximate width of the widest name line, in em (Georgia, with the h1's tight letter-spacing).
 * The second line is indented by .68em. CSS divides the available width by this so any name fits.
 */
function nameWidthEm(first: string, last: string) {
  return Math.max(first.length * 0.52, last.length * 0.54 + 0.68).toFixed(2)
}

export function Hero() {
  const { first, last } = splitName()

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src={unsplash('photo-1470252649378-9c29740c9fa8')}
        alt="Paisagem dourada ao entardecer, com uma figura solitária entre a neblina"
        width={2400}
        height={1600}
        sizes="(max-width: 760px) 100vw, 72vw"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero-shade" />

      <div className="hero-kicker"><span className="small-dot" />Fotografia com lugar para sentir</div>
      <h1 id="hero-title" style={{ '--name-em': nameWidthEm(first, last) } as React.CSSProperties}>{first}<br /><em>{last}</em></h1>
      <p className="hero-caption">{site.tagline}</p>

      <div className="hero-bottom">
        <span>{site.intro}<br />a trabalhar entre o real e o íntimo</span>
        <a href="#trabalho">Descer para descobrir <Arrow /></a>
        <span className="hero-index">{site.coordinates.lat}&nbsp; {site.coordinates.lng}</span>
      </div>
    </section>
  )
}
