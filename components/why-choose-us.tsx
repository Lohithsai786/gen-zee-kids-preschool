import {
  BookOpen,
  Brain,
  Heart,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'

const features = [
  { label: 'Loving & Caring Environment', icon: Heart, color: 'bg-brand-pink' },
  { label: 'Experienced & Qualified Teachers', icon: Brain, color: 'bg-brand-green' },
  { label: 'Activity Based Learning', icon: Palette, color: 'bg-brand-yellow' },
  { label: 'Focus on Overall Development', icon: Brain, color: 'bg-brand-blue' },
  { label: 'Safe, Secure & Hygienic Campus', icon: ShieldCheck, color: 'bg-brand-orange' },
  { label: 'Individual Attention for Every Child', icon: Star, color: 'bg-brand-blue' },
  { label: 'Fun Learning Activities', icon: BookOpen, color: 'bg-brand-pink' },
  { label: 'Parent Partnership', icon: Users, color: 'bg-brand-green' },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-brand-orange/15 px-4 py-1.5 text-sm font-extrabold tracking-wide text-brand-orange">
            WHY CHOOSE US
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
            Everything your child needs to flourish
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center rounded-3xl bg-card p-6 text-center shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`grid size-16 place-items-center rounded-full ${f.color} text-white`}
              >
                <f.icon className="size-8" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-brand-navy">
                {f.label}
              </h3>
            </div>
          ))}
        </div>

        <Highlights />
      </div>
    </section>
  )
}

const highlights = [
  'Safe Campus',
  'Hygienic Environment',
  'Activity-Based Learning',
  'Qualified Teachers',
  'Child-Friendly Classrooms',
  'Creative Development',
  'Emotional Development',
  'Social Development',
]

function Highlights() {
  return (
    <div className="mt-16 overflow-hidden rounded-[2.5rem] bg-brand-blue px-6 py-12 text-white sm:px-10 lg:px-14">
      <div className="text-center">
        <h3 className="font-heading text-3xl font-bold sm:text-4xl">
          School Highlights
        </h3>
        <p className="mt-2 text-white/85">
          What makes Gen Zee a wonderful place to begin.
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h) => (
          <div
            key={h}
            className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3.5 font-bold ring-1 ring-white/15"
          >
            <Sparkles className="size-5 shrink-0 text-brand-yellow" />
            {h}
          </div>
        ))}
      </div>
    </div>
  )
}
