import { BookOpen, GraduationCap, Heart, ShieldCheck, Sparkles } from 'lucide-react'

type Program = {
  title: string
  age: string
  blurb: string
  icon: React.ElementType
  color: string
  points: string[]
}

const programs: Program[] = [
  {
    title: 'Play Group',
    age: '1.5+ Years',
    blurb: 'Learning through play and exploration.',
    icon: Heart,
    color: 'bg-brand-pink',
    points: [
      'Interactive play',
      'Sensory activities',
      'Music & movement',
      'Social interaction',
      'Early development',
    ],
  },
  {
    title: 'LKG',
    age: '3+ Years',
    blurb: 'Building strong foundations through fun.',
    icon: BookOpen,
    color: 'bg-brand-green',
    points: [
      'Alphabets',
      'Numbers',
      'Basic writing',
      'Communication',
      'Creative activities',
    ],
  },
  {
    title: 'UKG',
    age: '4+ Years',
    blurb: 'Preparing for future academic success.',
    icon: GraduationCap,
    color: 'bg-brand-blue',
    points: [
      'Reading readiness',
      'Writing skills',
      'Maths concepts',
      'Problem solving',
      'Confidence',
    ],
  },
  {
    title: 'Day Care',
    age: 'All Ages',
    blurb: 'Safe and caring supervision.',
    icon: ShieldCheck,
    color: 'bg-brand-orange',
    points: [
      'Safe environment',
      'Caring staff',
      'Activity time',
      'Rest time',
      'Peace of mind',
    ],
  },
]

export function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 bg-brand-blue/5 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-brand-blue/15 px-4 py-1.5 text-sm font-extrabold tracking-wide text-brand-blue">
            OUR PROGRAMS
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
            Programs designed for every little learner
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-3xl bg-card p-6 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`grid size-14 place-items-center rounded-full ${p.color} text-white`}
              >
                <p.icon className="size-7" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-brand-navy">
                {p.title}
              </h3>
              <span className="mt-2 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-foreground">
                {p.age}
              </span>
              <p className="mt-4 font-semibold text-muted-foreground">{p.blurb}</p>
              <ul className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
                {p.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <Sparkles className="size-4 shrink-0 text-brand-orange" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
