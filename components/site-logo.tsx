import { cn } from '@/lib/utils'

export function SiteLogo({
  className,
  variant = 'light',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="relative grid size-11 shrink-0 place-items-center rounded-full bg-card shadow-sm ring-1 ring-black/5">
        <SunMark className="size-7" />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            'block font-heading text-lg font-bold',
            variant === 'dark' ? 'text-card' : 'text-brand-blue',
          )}
        >
          Gen Zee Kids
        </span>
        <span
          className={cn(
            'block text-[0.62rem] font-bold tracking-[0.18em]',
            variant === 'dark' ? 'text-card/70' : 'text-muted-foreground',
          )}
        >
          PRE SCHOOL
        </span>
      </span>
    </div>
  )
}

function SunMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g>
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8
          return (
            <rect
              key={i}
              x="22.5"
              y="2"
              width="3"
              height="8"
              rx="1.5"
              fill="var(--brand-orange)"
              transform={`rotate(${angle} 24 24)`}
            />
          )
        })}
        <circle cx="24" cy="24" r="11" fill="var(--brand-yellow)" />
        <circle cx="20" cy="22" r="1.6" fill="var(--brand-navy)" />
        <circle cx="28" cy="22" r="1.6" fill="var(--brand-navy)" />
        <path
          d="M19 27 Q24 31 29 27"
          stroke="var(--brand-navy)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  )
}
