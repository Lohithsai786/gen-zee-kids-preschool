import { FacebookIcon, InstagramIcon } from '@/components/brand-icons'
import { site } from '@/lib/site'

export function Social() {
  return (
    <section className="bg-brand-orange/5 py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-lg font-semibold text-foreground/80">
          See our daily adventures, events and happy moments on social media.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#1877f2] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#1877f2]/30 transition-transform hover:scale-105"
          >
            <FacebookIcon className="size-5" />
            Facebook
          </a>
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-orange via-brand-pink to-brand-blue px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-pink/30 transition-transform hover:scale-105"
          >
            <InstagramIcon className="size-5" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
