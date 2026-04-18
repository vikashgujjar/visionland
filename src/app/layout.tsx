import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RevealOnScroll from '@/components/common/RevealOnScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Visionland',
  description: 'Intelligence is Not Artificial',
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.webp" />
      </head>
      <body className={inter.className}>
        <RevealOnScroll />
        {children}
      </body>
    </html>
  )
}
