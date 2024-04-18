import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/navbar/Navbar'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Verticul',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  )
}
