export function Eyebrow({ index, children }: { index: number; children: React.ReactNode }) {
  return <span className="eyebrow">{String(index).padStart(2, '0')} / {children}</span>
}
