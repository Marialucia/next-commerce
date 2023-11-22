import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import  Navbar from './componentes/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next E-commerce 13',
  description: 'Desenvolvimento de e-commerce com next 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='bg-slate-500 h-screen p-16'>
        {children}
        </main>
        </body>
    </html>
  )
}
