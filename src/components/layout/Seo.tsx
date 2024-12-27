import { Metadata } from 'next'

export const seoMetadata: Metadata = {
  title: {
    default: 'Jima Dube - Portfolio',
    template: '%s | Jima Dube'
  },
  description: 'Full-stack developer specializing in building exceptional digital experiences.',
  keywords: [
    'Web Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    // Add more relevant keywords
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Your Name - Portfolio',
    description: 'Full-stack developer specializing in building exceptional digital experiences.',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: '/og-image.png', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Portfolio',
    description: 'Full-stack developer specializing in building exceptional digital experiences.',
    creator: '@yourtwitter',
    images: ['/og-image.png'] // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
}