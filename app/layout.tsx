import '../src/styles/globals.scss'
import Footer from '@/src/components/footer/footer'
import type { Metadata } from 'next'
import Navigation from '@/src/components/navigation/navigation'
import PageLayout from '@/src/components/page-layout/pageLayout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
import loadFonts from './fonts';

export const metadata: Metadata = {
  title: 'Business Site',
  description: 'N/A',
}

interface IRootLayout {
  children: React.ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({children}) => {
  return (
    <html lang="pl" className={loadFonts()}>
      <body>
          <Navigation/>

          <PageLayout>{children}</PageLayout>
          
          <Footer/>
      </body>
    </html>
  )
}

export default RootLayout;