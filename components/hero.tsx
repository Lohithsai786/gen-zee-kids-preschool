import Image from 'next/image'
import { Heart, MapPin, Phone, Sparkles, Star } from 'lucide-react'
import { InstagramIcon } from '@/components/brand-icons'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 size-72 rounded-full bg-brand-pink/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-pink/15 px-4 py-2 text-sm font-extrabold tracking-wide text-brand-pink">
            <Sparkles className="size-4" />
            {site.admissions.toUpperCase()}
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.05] text-brand-navy sm:text-5xl lg:text-6xl">
            A Joyful Space Where Children{' '}
            <span className="text-brand-blue">Discover,</span>{' '}
            <span className="text-brand-orange">Learn,</span>{' '}
            <span className="text-brand-pink">Create</span> and{' '}
            <span className="rounded-xl bg-brand-green/30 px-2 text-brand-navy">
              Thrive
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {site.fullName} — Tirupati&apos;s playful, nurturing home for early
            learners. {site.tagline}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${site.phoneTel[0]}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 font-bold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:scale-105"
            >
              <Phone className="size-5" /> Call Now
            </a>
            <a
              href={site.links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 font-bold text-white shadow-lg shadow-brand-orange/30 transition-transform hover:scale-105"
            >
              <MapPin className="size-5" /> Get Directions
            </a>
            <a
              href={site.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-pink px-6 py-3.5 font-bold text-brand-pink transition-colors hover:bg-brand-pink hover:text-white"
            >
              <InstagramIcon className="size-5" /> Follow Us
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                'bg-brand-blue',
                'bg-brand-orange',
                'bg-brand-pink',
                'bg-brand-green',
              ].map((c) => (
                <span
                  key={c}
                  className={`size-7 rounded-full ${c} ring-2 ring-background`}
                />
              ))}
            </div>
            <p className="font-semibold text-muted-foreground">
              Loved by 100+ happy families in Tirupati
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/hero-kids.png"
              alt="Children playing and learning together at Gen Zee Kids Pre School"
              width={900}
              height={760}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-2xl bg-card px-4 py-3 shadow-lg ring-1 ring-black/5 sm:right-4">
            <span className="grid size-9 place-items-center rounded-full bg-brand-orange text-white">
              <Star className="size-5 fill-current" />
            </span>
            <span className="leading-tight">
              <span className="block font-bold text-brand-navy">
                Activity-Based
              </span>
              <span className="block text-sm text-muted-foreground">
                Learning
              </span>
            </span>
          </div>

            <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3">
            <span className="grid size-9 place-items-center rounded-full bg-brand-green text-white">
              <Heart className="size-5 fill-current" />
            </span>
            <span className="leading-tight">
              <span className="block font-bold text-brand-navy">
                Safe &amp; Caring
              </span>
              <span className="block text-sm text-muted-foreground">
                Hygienic Campus
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
