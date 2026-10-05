import { PenTool, Target } from 'lucide-react'
import Modal from './Modal'
import Timeline from './Timeline'
import { Button } from './ui'
import { useApp } from '../ctx'
import type { Course } from '../data'

export default function CurriculumModal({ course, index, onClose }: { course: Course; index: number; onClose: () => void }) {
  const { openEnroll } = useApp()
  return (
    <Modal wide labelledBy="curr-title" onClose={onClose}
      header={<><p className="font-hand text-2xl font-bold text-accent">Course {index + 1} &middot; 8-Week Curriculum</p><h2 id="curr-title" className="text-2xl font-extrabold leading-tight sm:text-3xl">{course.name}</h2></>}
      footer={<div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-muted">This course is enrolled separately.</p><Button onClick={() => openEnroll(course.id)}>Enroll in this course</Button></div>}>
      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        <div className="border-2 border-ink bg-accent/10 p-3 text-sm"><Target aria-hidden className="mb-1 h-5 w-5 text-accent" /><span className="font-bold text-ink">Outcome: </span>{course.outcome}</div>
        <div className="border border-dashed border-ink/40 bg-paper p-3 text-sm"><PenTool aria-hidden className="mb-1 h-5 w-5 text-accent" /><span className="font-bold text-ink">Practical activities: </span>{course.activities.join(', ')}</div>
      </div>
      <Timeline weeks={course.weeks} />
    </Modal>
  )
}
