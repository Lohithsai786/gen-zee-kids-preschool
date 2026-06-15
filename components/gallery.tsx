import Image from 'next/image'

const items = [
  {
    title: 'Play Area',
    img: '/images/play-area.png',
    tags: ['Classroom Activities', 'Group Activities'],
  },
  {
    title: 'Art & Craft',
    img: '/images/art-craft.png',
    tags: ['Play Area', 'Day Care'],
  },
  {
    title: 'Learning Sessions',
    img: '/images/learning.png',
    tags: ['Art & Craft', 'Student Engagement'],
  },
  {
    title: 'Day Care Activities',
    img: '/images/daycare.png',
    tags: ['Learning Sessions', 'Indoor Learning'],
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-brand-pink/15 px-4 py-1.5 text-sm font-extrabold tracking-wide text-brand-pink">
            GALLERY
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
            A peek inside our happy campus
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <div className="group relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
                <Image
                  src={item.img || '/placeholder.svg'}
                  alt={`${item.title} at Gen Zee Kids Pre School`}
                  width={500}
                  height={500}
                  className="aspect-square h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-heading text-lg font-bold text-white">
                  {item.title}
                </span>
              </div>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xl bg-brand-blue/8 py-2.5 text-center font-semibold text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
