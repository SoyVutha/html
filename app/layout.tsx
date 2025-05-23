import { ThemeProvider } from '@/Shadcn-component/darktheme/theme-provider'
import FooterLayout from './LayoutComponent/FooterLayout'
import NavbarLayout from './LayoutComponent/NavbarLayout'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <NavbarLayout></NavbarLayout>
            {children}
          </ThemeProvider>
        <FooterLayout></FooterLayout>        
      </body>
    </html>
  )
}
