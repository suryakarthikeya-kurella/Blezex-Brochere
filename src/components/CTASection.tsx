import { BlueprintGrid, Button } from './ui'
import { useApp } from '../ctx'

export default function CTASection() {
  const { openEnroll } = useApp()
  return (
    <div className="relative overflow-hidden border-2 border-ink bg-accent px-6 py-14 text-center">
      <BlueprintGrid className="opacity-40 mix-blend-overlay" />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-3xl font-extrabold leading-tight !text-white sm:text-5xl">Ready to Accelerate Your Career?</h2>
        <p className="mt-4 text-lg text-white/95">Join the BlezeX Career Accelerator Program and gain practical skills, industry exposure, mentorship, internship experience, and certification.</p>
        <div className="mt-8 flex justify-center"><Button variant="ghost" onClick={() => openEnroll()}>Enroll Now</Button></div>
      </div>
    </div>
  )
}
