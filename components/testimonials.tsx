import { Star } from 'lucide-react'

const reviews = [
  {
    quote:
      'The teachers are so caring and patient. My son loves going to school every day — he has grown in confidence and creativity!',
    name: 'Lakshmi P.',
    role: 'Mother of Aarav (LKG)',
  },
  {
    quote:
      'Safe, hygienic and full of joyful activities. We can see real development in our daughter\u2019s communication and social skills.',
    name: 'Ravi Kumar',
    role: 'Father of Anika (Play Group)',
  },
  {
    quote:
      'Wonderful learning environment with the perfect mix of fun and academics. Highly recommend Gen Zee Kids to every parent in Tirupati.',
    name: 'Sireesha M.',
    role: 'Mother of Vihaan (UKG)',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-brand-green/20 px-4 py-1.5 text-sm font-extrabold tracking-wide text-brand-green">
            PARENT TESTIMONIALS
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
            Loved by parents across Tirupati
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl bg-card p-7 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex gap-1 text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty italic leading-relaxed text-foreground/80">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="size-11 rounded-full bg-gradient-to-br from-brand-blue to-brand-pink" />
                <span className="leading-tight">
                  <span className="block font-bold text-brand-navy">
                    {r.name}
                  </span>
                  <span className="block text-sm text-brand-green">
                    {r.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
