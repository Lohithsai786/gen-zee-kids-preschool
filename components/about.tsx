import { site } from '@/lib/site'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="inline-flex rounded-full bg-brand-green/20 px-4 py-1.5 text-sm font-extrabold tracking-wide text-brand-green">
          ABOUT US
        </span>
        <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
          Where learning begins with{' '}
          <span className="text-brand-blue">fun</span>,{' '}
          <span className="text-brand-orange">care</span> and{' '}
          <span className="text-brand-pink">creativity</span>.
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          Welcome to <strong className="text-brand-navy">{site.fullName}</strong>
          . Our mission is to provide a safe, nurturing, and engaging
          environment that helps children develop confidence, creativity,
          communication skills, and a love for learning. We focus on
          activity-based learning and overall child development.
        </p>
      </div>
    </section>
  )
}
