import Image from 'next/image'
import { mailto, unsplash } from '@/lib/site'
import { Arrow } from './arrow'
import { Eyebrow } from './eyebrow'

export function About() {
  return (
    <section className="about" id="sobre" aria-labelledby="about-title">
      <div className="about-image">
        <Image
          src={unsplash('photo-1500530855697-b586d89ba3ee')}
          alt="Luz do fim de tarde atravessando uma paisagem costeira"
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <span>ESTUDO DE LUZ Nº 08 — ALGARVE</span>
      </div>

      <div className="about-copy">
        <Eyebrow index={2}>Um olhar, sem pressa</Eyebrow>
        <h2 id="about-title">O mundo não<br />precisa de mais<br /><em>imagens.</em></h2>
        <p>
          Precisa de imagens que nos façam parar. Trabalho com pessoas, marcas e lugares que têm algo
          verdadeiro para dizer — procurando sempre a beleza que aparece quando ninguém está a representar.
        </p>
        <a href={mailto()}>Um pouco mais sobre mim <Arrow diagonal /></a>
      </div>
    </section>
  )
}
