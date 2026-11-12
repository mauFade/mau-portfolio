import Image from 'next/image'
import { mailto, unsplash, type Work } from '@/lib/site'
import { Arrow } from './arrow'

export function WorkCard({ work, number }: { work: Work; number: number }) {
  return (
    <article className={`work work-${work.shape}`}>
      <a href={mailto(work.title)} className="work-image-link" aria-label={`Conversar sobre ${work.title}`}>
        <Image
          src={unsplash(work.image)}
          alt={`${work.title}, fotografia em ${work.place}`}
          fill
          sizes="(max-width: 760px) 45vw, 42vw"
        />
        <span className="work-number">{String(number).padStart(2, '0')}</span>
        <span className="work-open"><Arrow diagonal /></span>
      </a>
      <div className="work-meta">
        <div>
          <h3>{work.title}</h3>
          <span>{work.kind}</span>
        </div>
        <span>{work.place}</span>
      </div>
    </article>
  )
}
