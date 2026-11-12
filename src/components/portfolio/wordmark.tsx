import { site } from '@/lib/site'

export function Wordmark() {
  return (
    <a className="wordmark" href="#inicio" aria-label={`${site.name}, início`}>
      {site.initials}<span aria-hidden="true">.</span>
    </a>
  )
}
