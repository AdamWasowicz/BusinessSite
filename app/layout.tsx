import Footer from '@/src/components/footer/footer'
import '../src/styles/globals.scss'
import type { Metadata } from 'next'
import Navigation from '@/src/components/navigation/navigation'
import PageLayout from '@/src/components/page-layout/pageLayout'

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