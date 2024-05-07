import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import { AppProvider } from '@/context/AppContext'

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
      <AppProvider>
        <body>
          <Navbar />
          <main className="pb-20">{children}</main>
        </body>
      </AppProvider>
    </html>
  )
}
