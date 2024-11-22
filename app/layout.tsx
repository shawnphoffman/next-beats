import type { Metadata } from 'next'
import { VercelToolbar } from '@vercel/toolbar/next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Next Beats | Your Ultimate Music Experience',
  description:
    'Next Beats - A modern music player built with Next.js. Discover, play, and enjoy your favorite tracks with a beautiful interface.',
  keywords: ['music', 'player', 'next.js', 'streaming', 'audio', 'beats'],
  authors: [{ name: 'Next Beats Team' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const shouldInjectToolbar = process.env.NODE_ENV === 'development'
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  )
}
