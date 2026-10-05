import { useEffect, useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalProps { labelledBy: string; header: ReactNode; children: ReactNode; footer?: ReactNode; onClose: () => void; wide?: boolean }

export default function Modal({ labelledBy, header, children, footer, onClose, wide = false }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeRef.current()
      if (e.key === 'Tab' && ref.current) {
        const f = ref.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input,select,textarea')
        if (!f.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prevOverflow; prev?.focus() }
  }, [])

  return (
    <motion.div className="no-print fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 sm:items-center sm:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <motion.div ref={ref} role="dialog" aria-modal="true" aria-labelledby={labelledBy} tabIndex={-1}
        initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 28, opacity: 0 }} transition={{ duration: 0.25 }}
        className={`relative flex max-h-[92vh] w-full flex-col border-2 border-ink bg-white shadow-hardAccent outline-none ${wide ? 'max-w-3xl' : 'max-w-xl'}`}>
        <div className="flex items-start justify-between gap-4 border-b-2 border-ink bg-paper p-5 sm:p-6">
          <div>{header}</div>
          <button type="button" onClick={onClose} aria-label="Close" className="shrink-0 border-2 border-ink bg-white p-1.5 hover:bg-accent hover:text-white"><X aria-hidden className="h-5 w-5" /></button>
        </div>
        <div className="overflow-y-auto p-5 sm:p-7">{children}</div>
        {footer && <div className="border-t-2 border-ink bg-paper p-4 sm:px-7">{footer}</div>}
      </motion.div>
    </motion.div>
  )
}
