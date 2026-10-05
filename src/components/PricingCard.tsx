import { Check } from 'lucide-react'
import { Button, SketchCard } from './ui'
import { useApp } from '../ctx'

const perks = ['8-week structured course', 'LMS portal access', 'Industry mentor allocation', 'Industry-level project', 'Internship and certification']

export default function PricingCard() {
  const { openEnroll } = useApp()
  return (
    <SketchCard hover={false} accent className="border-2 border-ink p-6 shadow-hardAccent sm:p-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-hand text-3xl font-bold text-accent">Early Bird Offer</p>
          <p className="text-sm font-medium text-muted">Price per course</p>
          <p className="font-heading text-7xl font-extrabold leading-none text-ink sm:text-8xl">₹1,499</p>
          <p className="mt-2 text-lg text-muted">Original Price <s className="decoration-accent decoration-2">₹1,999</s></p>
          <p className="mt-4 inline-block border-2 border-ink bg-accent px-3 py-1 font-heading font-bold text-white">Save ₹500</p>
        </div>
        <div>
          <ul className="mb-6 space-y-3">
            {perks.map(p => <li key={p} className="flex items-center gap-3"><Check aria-hidden className="h-5 w-5 shrink-0 text-accent" strokeWidth={3} />{p}</li>)}
          </ul>
          <Button onClick={() => openEnroll()} className="w-full sm:w-auto">Enroll Now</Button>
        </div>
      </div>
    </SketchCard>
  )
}
