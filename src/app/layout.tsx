// Lib Imports.
import { Bebas_Neue, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

// Assets.
import './globals.css';

// Components.
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toast } from '@/components/ReactHotToast';

// Types.
import type { Metadata } from 'next';

// Font Config.
const Font_Bebas = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
});

const Font_Manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

// Metada Definition.
export const metadata: Metadata = {
  title: {
    template: '%s | Zain Ul Abdin',
    default: 'Zain Ul Abdin - Full-Stack Developer',
  },
  description:
    'Full-Stack Web Developer based in Sukkur, Pakistan with 1.5+ years of professional experience building modern, scalable web applications using TypeScript, React, Next.js, Firebase, and Algolia.',
  keywords: [
    'Zain Ul Abdin',
    'Zain Khoso',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Firebase Developer',
    'Frontend Engineer',
    'JavaScript',
    'TypeScript',
    'Web Developer Pakistan',
  ],
  authors: [{ name: 'Zain Ul Abdin', url: 'https://linkedin.com/in/zain-khoso' }],
  creator: 'Zain Ul Abdin',
  publisher: 'Zain Ul Abdin',
  metadataBase: new URL('https://zain-khoso.vercel.app'),
  openGraph: {
    title: 'Zain Ul Abdin | Full-Stack Developer',
    description:
      'Experienced Full-Stack Developer specializing in TypeScript, Next.js, and Firebase. Passionate about building user-focused, high-performance web applications.',
    url: 'https://zain-khoso.vercel.app',
    siteName: 'Zain Ul Abdin Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zain Ul Abdin Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zain Ul Abdin | Full-Stack Developer',
    description:
      'Full-Stack Developer experienced with Next.js, TypeScript, Firebase, and Algolia.',
    creator: '@Zain_Khoso_Dev',
    images: ['/og-image.png'],
  },
};

// Root Layout that contains the entire app.
export default function RootLayout({ children }: Readonly<ChildrenProp>) {
  return (
    <html lang="en">
      <body className={`${Font_Bebas.variable} ${Font_Manrope.variable} antialiased`}>
        <Toast />
        <Analytics />

        <Navbar />

        <main className="mx-auto my-4 max-w-7xl space-y-8 px-4 md:px-8 lg:my-12 lg:space-y-10 xl:space-y-14">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
