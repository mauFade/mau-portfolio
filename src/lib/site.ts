export const site = {
  name: 'Maurício Cardoso',
  initials: 'MC',
  studio: 'Maurício Cardoso Studio',
  role: 'Fotografia & direção de arte',
  intro: 'Fotógrafo brasileiro',
  tagline: 'Imagens que guardam a luz antes que ela parta.',
  availability: 'disponível globalmente',
  email: 'mauricio.cds00@gmail.com',
  instagram: 'https://instagram.com/clicksbymau',
  city: 'Curitiba, PR, Brasil',
  locale: 'pt-BR',
  coordinates: { lat: '25°27\'S', lng: '49°14\'W' },
  copyrightYear: new Date().getFullYear(),
}

/** "Maurício Cardoso" → { first: "Maurício", last: "Cardoso" } */
export function splitName(name = site.name) {
  const [first, ...rest] = name.split(' ')
  return { first, last: rest.join(' ') }
}

export function mailto(subject?: string) {
  return subject ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}` : `mailto:${site.email}`
}

export function unsplash(id: string) {
  return `https://images.unsplash.com/${id}`
}

export type WorkShape = 'wide' | 'tall' | 'square'

export type Work = {
  title: string
  kind: string
  place: string
  image: string
  shape: WorkShape
}

export const works: Work[] = [
  { title: 'A maré por dentro', kind: 'Editorial · 2025', place: 'Comporta, Portugal', image: 'photo-1470252649378-9c29740c9fa8', shape: 'wide' },
  { title: 'Corpos de água', kind: 'Retrato · 2024', place: 'Costa Vicentina', image: 'photo-1530789253388-582c481c54b0', shape: 'tall' },
  { title: 'O silêncio das horas', kind: 'Campanha · 2025', place: 'Lisboa, Portugal', image: 'photo-1515886657613-9f3515b0c78f', shape: 'square' },
  { title: 'Entre a pele e o sol', kind: 'Editorial · 2023', place: 'Alentejo, Portugal', image: 'photo-1518837695005-2083093ee35b', shape: 'tall' },
]
