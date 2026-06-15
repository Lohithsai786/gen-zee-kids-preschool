import { MessageCircle, Sparkles } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/brand-icons'
import { SiteLogo } from '@/components/site-logo'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <SiteLogo variant="dark" />
            <p className="mt-3 text-card/70">{site.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-sm font-bold text-white">
              <Sparkles className="size-4" />
              {site.admissions}
            </span>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Contact</h3>
            <p className="mt-4 text-card/80">{site.address}</p>
            <p className="mt-2 text-card/80">{site.phones.join(' · ')}</p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              <a
                href={site.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <FacebookIcon className="size-5" />
              </a>
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-card/60">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
