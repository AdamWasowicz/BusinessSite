import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { 
    Montserrat,
    Rubik,
    Inter,
    Open_Sans,    
    Source_Code_Pro
} from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-title',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700']
})

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-header',
    display: 'swap',
    weight: ['300', '400', '500', '600']
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-subHeader',
    display: 'swap',
    weight: ['100', '200', '300', '400']
})

const open_sans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-text',
    display: 'swap',
    weight: ['300', '400', '500']
})

const source_code_pro = Open_Sans({
    subsets: ['latin'],
    variable: '--font-monoSpace',
    display: 'swap',
    weight: ['300', '400', '500']
})

const loadFonts = (): string => {
    const fonts: NextFontWithVariable[] = [
        montserrat, 
        rubik, 
        inter, 
        open_sans, 
        source_code_pro
    ]

    let output = "";
    fonts.forEach((f) => {
        output += f.variable + " "
    })

    return output;
}

export default loadFonts;
