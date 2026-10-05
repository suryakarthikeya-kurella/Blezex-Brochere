import { CheckCircle2 } from 'lucide-react'
import type { Week } from '../data'

/** Vertical 8-week curriculum: one clear row per week with topics and a deliverable. */
export default function Timeline({ weeks }: { weeks: Week[] }) {
  return (
    <ol>
      {weeks.map((w, i) => (
        <li key={w.t} className="grid grid-cols-[3.25rem_1fr] gap-4">
          <div className="flex flex-col items-center">
            <span className="flex h-[3.25rem] w-[3.25rem] flex-col items-center justify-center border-2 border-ink bg-accent leading-none text-white shadow-hardSm">
              <span className="text-[10px] font-bold">WEEK</span>
              <span className="font-heading text-xl font-extrabold">{i + 1}</span>
            </span>
            {i < weeks.length - 1 && <span aria-hidden className="my-1 w-0 flex-1 border-l-2 border-dashed border-ink/40" />}
          </div>
          <div className="mb-5 border border-line bg-white p-4">
            <h3 className="text-lg font-bold leading-snug">{w.t}</h3>
            <ul className="mt-2 grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
              {w.topics.map(t => <li key={t} className="flex items-start gap-2 text-[15px]"><CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{t}</li>)}
            </ul>
            <p className="mt-3 border-t border-dashed border-ink/30 pt-2 text-sm"><span className="font-bold text-ink">You complete: </span>{w.out}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
