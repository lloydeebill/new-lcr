import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'LCR Website',
  description: 'Online Civil Registry Service of Buenavista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
