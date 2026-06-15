'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo'
import { navItems, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a href="#top" aria-label={`${site.fullName} home`}>
          <SiteLogo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-bold text-foreground/80 transition-colors hover:text-brand-blue"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel[0]}`}
            className="hidden items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 font-bold text-white shadow-md shadow-brand-orange/30 transition-transform hover:scale-105 sm:inline-flex"
          >
            <Phone className="size-4" />
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full bg-card text-foreground shadow-sm ring-1 ring-black/5 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-bold text-foreground/80 hover:bg-accent hover:text-brand-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`tel:${site.phoneTel[0]}`}
                className="mt-1 mb-2 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 font-bold text-white"
              >
                <Phone className="size-4" /> Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
