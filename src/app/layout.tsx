// Lib Imports.
import { Bebas_Neue, Manrope } from 'next/font/google';

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
  title: 'Next App',
};

// Root Layout that contains the entire app.
export default function RootLayout({ children }: Readonly<ChildrenProp>) {
  return (
    <html lang="en">
      <body className={`${Font_Bebas.variable} ${Font_Manrope.variable} antialiased`}>
        <Toast />

        <Navbar />

        <main className="my-4 space-y-8 px-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
