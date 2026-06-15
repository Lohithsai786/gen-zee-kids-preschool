import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const nunito = Nunito({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Gen Zee Kids Pre School | Tirupati — Play • Learn • Grow • Shine',
  description:
    'Gen Zee Kids Pre School in Tirupati is a playful, nurturing home for early learners. Programs from Play Group to UKG plus Day Care. Admissions Open 2026-27.',
  generator: 'v0.app',
  keywords: [
    'Gen Zee Kids',
    'preschool Tirupati',
    'play group',
    'LKG',
    'UKG',
    'day care Tirupati',
    'kindergarten',
  ],
  openGraph: {
    title: 'Gen Zee Kids Pre School | Tirupati',
    description:
      'A joyful space where children discover, learn, create and thrive. Admissions Open 2026-27.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e9fe6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
