import { useState, type FormEvent } from 'react'
import { MessageCircle } from 'lucide-react'
import Modal from './Modal'
import { Button } from './ui'
import { courses, WHATSAPP_NUMBER } from '../data'

export default function EnrollModal({ courseId, onClose }: { courseId?: string; onClose: () => void }) {
  const [link, setLink] = useState<string | null>(null)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const g = (k: string) => String(f.get(k) ?? '').trim()
    const course = courses.find(c => c.id === g('course'))?.name ?? ''
    const lines = [
      '*New Enrollment: BlezeX Career Accelerator Program*', '',
      `Course: ${course}`, `Mode: ${g('mode')}`, `Name: ${g('name')}`, `Phone: ${g('phone')}`,
      `Email: ${g('email')}`, `College / Organization: ${g('college')}`, `Year / Qualification: ${g('qualification')}`,
    ]
    if (g('note')) lines.push(`Note: ${g('note')}`)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
    setLink(url)
    window.open(url, '_blank', 'noopener')
  }

  return (
    <Modal labelledBy="enroll-title" onClose={onClose}
      header={<><p className="font-hand text-2xl font-bold text-accent">Enrollment form</p><h2 id="enroll-title" className="text-2xl font-extrabold">Enroll in a BlezeX course</h2></>}>
      {link ? (
        <div className="text-center" role="status">
          <MessageCircle aria-hidden className="mx-auto mb-3 h-12 w-12 text-accent" />
          <h3 className="text-xl font-bold">Your details are ready on WhatsApp</h3>
          <p className="mx-auto mt-2 max-w-sm text-muted">Tap Send in the WhatsApp window to complete your enrollment request. If WhatsApp did not open, use the button below.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={link}>Open WhatsApp</Button>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="grid gap-4">
          <div><label className="label" htmlFor="course">Course *</label>
            <select id="course" name="course" required defaultValue={courseId ?? ''} className="field">
              <option value="" disabled>Select a course</option>
              {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select></div>
          <div><label className="label" htmlFor="name">Full name *</label><input id="name" name="name" required autoComplete="name" className="field" /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label className="label" htmlFor="phone">WhatsApp / phone *</label><input id="phone" name="phone" type="tel" required autoComplete="tel" pattern="[0-9+\s\-]{10,16}" title="Enter a valid phone number" placeholder="+91 90000 00000" className="field" /></div>
            <div><label className="label" htmlFor="email">Email *</label><input id="email" name="email" type="email" required autoComplete="email" className="field" /></div>
          </div>
          <div><label className="label" htmlFor="college">College / organization *</label><input id="college" name="college" required className="field" /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label className="label" htmlFor="qualification">Year / qualification *</label><input id="qualification" name="qualification" required placeholder="e.g. B.Tech 3rd year" className="field" /></div>
            <div><label className="label" htmlFor="mode">Preferred mode *</label>
              <select id="mode" name="mode" required defaultValue="Online" className="field"><option>Online</option><option>Hybrid</option></select></div>
          </div>
          <div><label className="label" htmlFor="note">Message (optional)</label><textarea id="note" name="note" rows={2} className="field" /></div>
          <Button type="submit"><MessageCircle aria-hidden className="h-5 w-5" />Submit on WhatsApp</Button>
          <p className="text-center text-sm text-muted">Submitting opens WhatsApp with your details filled in.</p>
        </form>
      )}
    </Modal>
  )
}
