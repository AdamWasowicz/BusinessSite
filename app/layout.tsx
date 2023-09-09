import Footer from '@/components/footer/footer'
import './globals.scss'
import type { Metadata } from 'next'
import Navigation from '@/components/navigation/navigation'
import PageLayout from '@/components/page-layout/pageLayout'

export const metadata: Metadata = {
  title: 'Business Site',
  description: 'N/A',
}

interface IRootLayout {
  children: React.ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({children}) => {
  return (
    <html lang="pl">
      <body>
          <Navigation/>

          <PageLayout>{children}</PageLayout>
          
          <Footer/>
      </body>
    </html>
  )
}

export default RootLayout;