import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@portfolio/components/theme-provider"
import { Inter as FontSans } from 'next/font/google';
import { ScrollToTop } from "@portfolio/components/scroll-to-top";
import { seoMetadata } from "@portfolio/components/layout/Seo";

const fontSans = FontSans({
  subsets:['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});


export const metadata = seoMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}