import { CheckCircle2, ChevronRight, PenTool, Target } from 'lucide-react'
import { Button, SketchCard } from './ui'
import { useApp } from '../ctx'
import type { Course } from '../data'

export default function CurriculumCard({ course, index }: { course: Course; index: number }) {
  const { openCurriculum, openEnroll } = useApp()
  return (
    <SketchCard as="article" hover={false} className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <p className="font-hand text-2xl font-bold text-accent">Course {index + 1}</p>
        <course.icon aria-hidden className="h-8 w-8 text-ink" strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-bold leading-snug">{course.name}</h3>
      <p className="mb-4 mt-1 text-sm font-medium text-muted">8 weeks &middot; Online / Hybrid &middot; Enrolled separately</p>

      <h4 className="mb-2 text-sm font-bold text-ink">Topics Covered</h4>
      <ul className="mb-4 space-y-1.5">
        {course.topics.map(t => <li key={t} className="flex items-start gap-2 text-[15px]"><CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{t}</li>)}
      </ul>

      <h4 className="mb-2 text-sm font-bold text-ink">Practical Activities</h4>
      <ul className="mb-4 flex flex-wrap gap-2">
        {course.activities.map(a => <li key={a} className="flex items-center gap-1.5 border border-dashed border-ink/40 bg-paper px-2.5 py-1 text-sm font-medium text-ink"><PenTool aria-hidden className="h-3.5 w-3.5 text-accent" />{a}</li>)}
      </ul>

      <div className="mb-5 flex flex-1 items-start gap-3 border-2 border-ink bg-accent/10 p-3">
        <Target aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <p className="text-sm"><span className="font-bold text-ink">Outcome: </span>{course.outcome}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button variant="ghost" size="sm" onClick={() => openCurriculum(course.id)}>View 8-week curriculum <ChevronRight aria-hidden className="h-4 w-4" /></Button>
        <Button size="sm" onClick={() => openEnroll(course.id)}>Enroll in this course</Button>
      </div>
    </SketchCard>
  )
}
