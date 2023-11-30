import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import  Navbar from './componentes/Navbar'
import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import Hydrate from './componentes/Hydrate'

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
    <ClerkProvider localization={ptBR}>
 <html lang="en">
      <body className={clsx(inter.className,'bg-slate-700') }>
        <Hydrate>
            <Navbar/>
            <main className=' h-screen p-16'>
            {children}
            </main>
        </Hydrate>
        </body>
    </html>
    </ClerkProvider>
   
  )
}
