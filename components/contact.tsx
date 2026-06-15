import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function Contact() {
  const actions = [
    {
      label: 'Call Now',
      href: `tel:${site.phoneTel[0]}`,
      icon: Phone,
      color: 'bg-brand-blue',
      external: false,
    },
    {
      label: 'WhatsApp Us',
      href: `https://wa.me/${site.whatsapp}`,
      icon: MessageCircle,
      color: 'bg-brand-green',
      external: true,
    },
    {
      label: 'Google Maps',
      href: site.links.maps,
      icon: MapPin,
      color: 'bg-brand-orange',
      external: true,
    },
  ]

  return (
    <section id="contact" className="scroll-mt-24 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2.5rem] bg-brand-blue shadow-xl">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-14">
            <div className="text-white">
              <span className="inline-flex rounded-full bg-brand-yellow px-4 py-1.5 text-sm font-extrabold tracking-wide text-brand-navy">
                VISIT US
              </span>
              <h2 className="mt-5 font-heading text-4xl font-bold sm:text-5xl">
                Come say hello!
              </h2>
              <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-white/90">
                We&apos;d love to show you around our campus. {site.admissions}.
              </p>
              <div className="mt-7 space-y-4">
                <p className="flex items-start gap-3 text-white/95">
                  <MapPin className="mt-1 size-5 shrink-0" />
                  {site.address}
                </p>
                <p className="flex items-center gap-3 text-white/95">
                  <Phone className="size-5 shrink-0" />
                  {site.phones.join('  |  ')}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target={a.external ? '_blank' : undefined}
                  rel={a.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-2xl bg-card px-6 py-5 shadow-md transition-transform hover:scale-[1.02]"
                >
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-full ${a.color} text-white`}
                  >
                    <a.icon className="size-5" />
                  </span>
                  <span className="font-heading text-lg font-bold text-brand-navy">
                    {a.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
