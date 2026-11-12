import { mailto, works } from '@/lib/site'
import { Arrow } from './arrow'
import { Eyebrow } from './eyebrow'
import { WorkCard } from './work-card'

export function WorkGallery() {
  return (
    <section className="works section-wrap" id="trabalho" aria-labelledby="works-title">
      <div className="section-heading">
        <div>
          <Eyebrow index={1}>Seleção de trabalhos</Eyebrow>
          <h2 id="works-title">Lugares que<br /><em>ficam connosco.</em></h2>
        </div>
        <p>Uma coleção de encontros, paisagens<br />e pequenas coisas impossíveis de ensaiar.</p>
      </div>

      <div className="works-grid">
        {works.map((work, index) => (
          <WorkCard key={work.title} work={work} number={index + 1} />
        ))}
      </div>

      <a className="all-work" href={mailto('Portfólio completo')}>Pedir portfólio completo <Arrow diagonal /></a>
    </section>
  )
}
