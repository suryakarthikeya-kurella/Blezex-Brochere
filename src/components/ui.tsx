import { motion } from 'framer-motion'
import type { ReactNode, ElementType } from 'react'

export const TOTAL_PAGES = 9

export function BlueprintGrid({ fine = false, className = '' }: { fine?: boolean; className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute inset-0 ${fine ? 'blueprint-fine' : 'blueprint'} ${className}`} />
}

const ticks = ['-left-px -top-px border-l-2 border-t-2', '-right-px -top-px border-r-2 border-t-2', '-bottom-px -left-px border-b-2 border-l-2', '-bottom-px -right-px border-b-2 border-r-2']

interface SketchCardProps { children: ReactNode; className?: string; as?: ElementType; hover?: boolean; accent?: boolean; href?: string }
export function SketchCard({ children, className = '', as: Tag = 'div', hover = true, accent = false, href }: SketchCardProps) {
  return (
    <Tag href={href} className={`relative border border-line bg-white p-5 transition duration-200 ${hover ? 'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard' : ''} ${className}`}>
      {ticks.map(t => <span key={t} aria-hidden className={`absolute h-3 w-3 ${accent ? 'border-accent' : 'border-ink'} ${t}`} />)}
      {children}
    </Tag>
  )
}

interface ButtonProps { href?: string; children: ReactNode; variant?: 'primary' | 'ghost'; size?: 'md' | 'sm'; onClick?: () => void; className?: string; type?: 'button' | 'submit' }
export function Button({ href, children, variant = 'primary', size = 'md', onClick, className = '', type = 'button' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 border-2 border-ink font-heading font-bold transition duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none'
  const sz = size === 'sm' ? 'px-4 py-2.5 text-sm' : 'px-6 py-3 text-base'
  const st = variant === 'primary' ? 'bg-accent text-white shadow-hardSm hover:shadow-hard' : 'bg-white text-ink shadow-hardSm hover:shadow-hard'
  const cls = `${base} ${sz} ${st} ${className}`
  return href ? <a href={href} className={cls}>{children}</a> : <button type={type} onClick={onClick} className={cls}>{children}</button>
}

/** One printed brochure page: a framed sheet with a running footer and page number. */
export function Page({ n, label, children, grid = false, className = '' }: { n: number; label: string; children: ReactNode; grid?: boolean; className?: string }) {
  return (
    <section aria-label={label} className="brochure-page relative mx-auto mb-10 max-w-5xl overflow-hidden border-2 border-ink bg-white shadow-hard">
      {grid && <BlueprintGrid />}
      <div className={`relative px-6 py-10 sm:px-12 sm:py-14 ${className}`}>{children}</div>
      <footer className="relative flex items-center justify-between gap-3 border-t-2 border-ink bg-paper px-6 py-3 sm:px-12">
        <span className="flex items-center gap-2 font-heading text-sm font-bold text-ink">
          <img src="/logo.jpeg" alt="" className="h-6 w-6 rounded-sm border border-ink object-cover" />
          <span className="hidden sm:inline">BlezeX Career Accelerator Program</span>
        </span>
        <span className="font-hand text-xl font-bold text-accent">{label} &middot; Page {n} of {TOTAL_PAGES}</span>
      </footer>
    </section>
  )
}

export function PageTitle({ title, note, children }: { title: string; note?: string; children?: ReactNode }) {
  return (
    <div className="mb-10 max-w-3xl">
      {note && <p className="font-hand text-2xl font-bold text-accent">{note}</p>}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      <span aria-hidden className="mt-3 block h-1.5 w-20 bg-accent" />
      {children && <p className="mt-4 text-lg leading-relaxed text-muted">{children}</p>}
    </div>
  )
}

export function Fade({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4 }}>{children}</motion.div>
}
