import { ArrowRight } from 'lucide-react'

const steps = [
  { title: 'Play Group', sub: 'EXPLORE', color: 'bg-brand-pink' },
  { title: 'LKG', sub: 'LEARN', color: 'bg-brand-green' },
  { title: 'UKG', sub: 'GROW', color: 'bg-brand-blue' },
  { title: 'Beyond', sub: 'SHINE', color: 'bg-brand-orange' },
]

export function LearningJourney() {
  return (
    <section className="bg-brand-blue/5 py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="inline-flex rounded-full bg-brand-blue/15 px-4 py-1.5 text-sm font-extrabold tracking-wide text-brand-blue">
          LEARNING JOURNEY
        </span>
        <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
          A smooth journey from Play Group to UKG
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-3 sm:gap-4">
              <div
                className={`flex w-28 flex-col items-center rounded-3xl ${step.color} px-4 py-5 text-white shadow-md sm:w-32`}
              >
                <span className="font-heading text-lg font-bold">
                  {step.title}
                </span>
                <span className="text-xs font-bold tracking-wider text-white/85">
                  {step.sub}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="size-6 shrink-0 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
