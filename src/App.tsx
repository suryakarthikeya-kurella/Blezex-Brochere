import { useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { Check, Download, Globe, Mail, MessageCircle, Phone, ShieldCheck, Award } from 'lucide-react'
import { Button, Fade, Page, PageTitle, SketchCard } from './components/ui'
import CurriculumCard from './components/CurriculumCard'
import CurriculumModal from './components/CurriculumModal'
import EnrollModal from './components/EnrollModal'
import PricingCard from './components/PricingCard'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import { AppCtx, useApp as useApp2 } from './ctx'
import { CONTACT, certificates, courses, faqs, features, heroPills, includes, internshipBenefits, outcomes, partners, projectSteps, why } from './data'

function Partners({ big = false }: { big?: boolean }) {
  return (
    <div className="border-2 border-ink bg-white p-4 sm:p-5">
      <p className="mb-3 flex items-center gap-2 font-heading font-bold text-ink"><ShieldCheck aria-hidden className="h-5 w-5 text-accent" />These courses are certified by</p>
      <ul className="flex flex-wrap gap-2.5">
        {partners.map(p => <li key={p} className={`border-2 border-ink bg-paper font-heading font-extrabold text-ink ${big ? 'px-5 py-3 text-xl' : 'px-3 py-1.5 text-base'}`}>{p}</li>)}
      </ul>
    </div>
  )
}

function Cover() {
  const { openEnroll } = useApp2()
  return (
    <Page n={1} label="Cover" grid>
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="font-hand text-3xl font-bold text-accent">Four courses. Enroll in the one you need.</p>
          <h1 className="mt-2 text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">BlezeX Career Accelerator Program</h1>
          <p className="mt-5 font-heading text-xl font-bold text-ink sm:text-2xl">Learn. Build. Experience. Accelerate Your Career.</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">Structured Industry Training, Internship, and Certification Program designed to help students gain practical skills, industry exposure, mentorship, and career readiness.</p>
          <ul className="mt-6 flex flex-wrap gap-2">{heroPills.map(p => <li key={p} className="border-2 border-ink bg-white px-3 py-1.5 text-sm font-bold text-ink">{p}</li>)}</ul>
          <div className="no-print mt-8 flex flex-wrap gap-4">
            <Button onClick={() => openEnroll()}>Enroll Now</Button>
            <Button variant="ghost" onClick={() => window.print()}><Download aria-hidden className="h-5 w-5" />Download Brochure</Button>
          </div>
        </motion.div>
        <motion.aside initial={{ opacity: 0, rotate: -3 }} animate={{ opacity: 1, rotate: -2 }} transition={{ duration: 0.5, delay: 0.15 }} className="mx-auto w-full max-w-xs">
          <SketchCard hover={false} accent className="border-2 border-ink p-7 text-center shadow-hardAccent">
            <img src="/logo.jpeg" alt="BlezeX" className="mx-auto mb-5 h-32 w-32 rounded-lg border-2 border-ink object-cover" />
            <ul className="space-y-1 font-heading font-bold text-ink">
              <li className="text-xl">4 Courses</li><li className="text-xl">8 Weeks Each</li><li className="text-xl">Online / Hybrid</li>
            </ul>
            <p className="mt-3 font-hand text-2xl font-bold text-accent">Enroll separately</p>
          </SketchCard>
        </motion.aside>
      </div>
      <div className="mt-12"><Partners /></div>
    </Page>
  )
}
function About() {
  return (
    <Page n={2} label="About">
      <PageTitle title="About the program" note="Classroom meets industry" />
      <div className="mb-10 border-l-4 border-accent bg-paper p-5 sm:p-6">
        <p className="text-lg leading-relaxed">The BlezeX Career Accelerator Program bridges the gap between academic learning and industry requirements through practical learning, projects, mentorship, and real-world experience.</p>
      </div>
      <h3 className="mb-4 text-2xl font-bold">Why join BlezeX</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {why.map(w => (
          <SketchCard key={w.title} className="flex items-start gap-4">
            <w.icon aria-hidden className="mt-1 h-8 w-8 shrink-0 text-accent" strokeWidth={1.75} />
            <div><h4 className="font-heading text-lg font-bold leading-snug text-ink">{w.title}</h4><p className="mt-1 text-[15px] text-muted">{w.text}</p></div>
          </SketchCard>
        ))}
      </div>
    </Page>
  )
}

function WhatYouGet() {
  return (
    <Page n={3} label="What you get" grid>
      <PageTitle title="What every student gets" note="Included with every course" />
      <div className="grid gap-5 md:grid-cols-3">
        {features.map(f => (
          <SketchCard key={f.title} accent hover={false} className="border-2 border-ink p-6">
            <f.icon aria-hidden className="mb-4 h-11 w-11 text-accent" strokeWidth={1.5} />
            <h3 className="mb-2 text-xl font-bold leading-snug">{f.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{f.text}</p>
          </SketchCard>
        ))}
      </div>
      <h3 className="mb-4 mt-12 text-2xl font-bold">Program structure</h3>
      <div className="grid gap-5 lg:grid-cols-[1fr_2fr]">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          <SketchCard hover={false}><p className="font-hand text-xl font-bold text-accent">Duration</p><p className="font-heading text-2xl font-extrabold text-ink">8 Weeks per course</p></SketchCard>
          <SketchCard hover={false}><p className="font-hand text-xl font-bold text-accent">Mode</p><p className="font-heading text-2xl font-extrabold text-ink">Online / Hybrid</p></SketchCard>
        </div>
        <SketchCard hover={false} className="bg-paper">
          <p className="mb-3 font-heading font-bold text-ink">Each course includes</p>
          <ul className="grid gap-2 sm:grid-cols-2">{includes.map(x => <li key={x} className="flex items-center gap-2 border border-line bg-white p-2.5 font-medium"><Check aria-hidden className="h-4 w-4 shrink-0 text-accent" strokeWidth={3} />{x}</li>)}</ul>
        </SketchCard>
      </div>
    </Page>
  )
}

function Courses() {
  return (
    <Page n={4} label="Courses">
      <PageTitle title="Choose your course" note="Each course has its own 8-week curriculum">Select View 8-week curriculum on any course to see exactly what you learn, week by week. Each course is enrolled separately.</PageTitle>
      <div className="grid gap-6 lg:grid-cols-2">
        {courses.map((c, i) => <Fade key={c.id} className="h-full"><CurriculumCard course={c} index={i} /></Fade>)}
      </div>
    </Page>
  )
}

function Projects() {
  return (
    <Page n={5} label="Projects & internship" grid>
      <PageTitle title="Industry-level projects" note="Practice, not theory">Every course includes a project that follows the same steps a professional team uses, from first brief to final handover.</PageTitle>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectSteps.map((s, i) => (
          <SketchCard as="li" key={s.t}><span className="font-hand text-2xl font-bold text-accent">Step {i + 1}</span><h3 className="text-lg font-bold">{s.t}</h3><p className="mt-1 text-[15px] text-muted">{s.d}</p></SketchCard>
        ))}
      </ol>
      <h3 className="mb-4 mt-12 text-2xl font-bold">Internship benefits</h3>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {internshipBenefits.map(b => <li key={b} className="flex items-center gap-2 border-2 border-ink bg-white p-3 font-heading font-bold text-ink"><Check aria-hidden className="h-5 w-5 shrink-0 text-accent" strokeWidth={3} />{b}</li>)}
      </ul>
    </Page>
  )
}

function Certification() {
  return (
    <Page n={6} label="Certification">
      <PageTitle title="Certification & recognition" note="Proof of your work" />
      <Partners big />
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map(c => (
          <li key={c} className="border-2 border-ink bg-white p-2">
            <div className="flex min-h-[170px] flex-col items-center justify-center border border-dashed border-accent p-5 text-center">
              <Award aria-hidden className="mb-3 h-10 w-10 text-accent" strokeWidth={1.5} />
              <h3 className="text-lg font-bold leading-snug">{c}</h3>
              <p className="mt-2 font-hand text-xl font-bold text-muted">BlezeX Technologies</p>
            </div>
          </li>
        ))}
      </ul>
    </Page>
  )
}

function OutcomesPricing() {
  return (
    <Page n={7} label="Outcomes & pricing" grid>
      <PageTitle title="Program outcomes" note="Students will leave with" />
      <ul className="mb-14 flex flex-wrap gap-3">
        {outcomes.map(o => <li key={o} className="flex items-center gap-2 border-2 border-ink bg-white px-4 py-2 font-heading font-bold text-ink shadow-hardSm"><Check aria-hidden className="h-4 w-4 text-accent" strokeWidth={3} />{o}</li>)}
      </ul>
      <PageTitle title="Pricing" note="Simple. Per course." />
      <PricingCard />
    </Page>
  )
}

function Faqs() {
  return (
    <Page n={8} label="FAQ">
      <PageTitle title="Frequently asked questions" note="Before you enroll" />
      <FAQ items={faqs} />
    </Page>
  )
}

function Contact() {
  const rows = [
    { icon: Globe, label: 'Website', value: CONTACT.website, href: `https://${CONTACT.website}` },
    { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
  ]
  return (
    <Page n={9} label="Contact" grid>
      <CTASection />
      <div className="mb-8 mt-12 flex items-center gap-4"><img src="/logo.jpeg" alt="BlezeX logo" className="h-14 w-14 rounded-md border-2 border-ink object-cover" /><h2 className="text-3xl font-extrabold">{CONTACT.company}</h2></div>
      <div className="grid gap-4 md:grid-cols-3">
        {rows.map(r => (
          <SketchCard key={r.label} as="a" href={r.href} className="block">
            <r.icon aria-hidden className="mb-2 h-6 w-6 text-accent" />
            <p className="font-hand text-xl font-bold text-accent">{r.label}</p>
            <p className="break-words font-heading text-lg font-bold text-ink">{r.value}</p>
          </SketchCard>
        ))}
      </div>
      <p className="mt-10 border-t border-line pt-5 text-muted">Empowering Future Professionals Through Practical Learning &amp; Industry Exposure.</p>
    </Page>
  )
}

export default function App() {
  const [enroll, setEnroll] = useState<{ open: boolean; course?: string }>({ open: false })
  const [curr, setCurr] = useState<string | null>(null)
  const ctx = {
    openEnroll: (course?: string) => { setCurr(null); setEnroll({ open: true, course }) },
    openCurriculum: (id: string) => setCurr(id),
  }
  const currIndex = courses.findIndex(c => c.id === curr)

  return (
    <MotionConfig reducedMotion="user">
      <AppCtx.Provider value={ctx}>
        <div className="blueprint min-h-screen bg-paper px-3 py-8 sm:px-6">
          <main>
            <Cover /><About /><WhatYouGet /><Courses /><Projects /><Certification /><OutcomesPricing /><Faqs /><Contact />
          </main>
        </div>
        <button type="button" onClick={() => ctx.openEnroll()} className="no-print fixed bottom-4 right-4 z-40 flex items-center gap-2 border-2 border-ink bg-accent px-4 py-3 font-heading font-bold text-white shadow-hardSm transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard">
          <MessageCircle aria-hidden className="h-5 w-5" />Enroll Now
        </button>
        <AnimatePresence>
          {curr && currIndex >= 0 && <CurriculumModal key="curr" course={courses[currIndex]} index={currIndex} onClose={() => setCurr(null)} />}
          {enroll.open && <EnrollModal key={`enroll-${enroll.course ?? 'any'}`} courseId={enroll.course} onClose={() => setEnroll({ open: false })} />}
        </AnimatePresence>
      </AppCtx.Provider>
    </MotionConfig>
  )
}
