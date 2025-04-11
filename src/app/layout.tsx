// Lib Imports.
import { Rasa, Finger_Paint } from "next/font/google";

// Styles.
import "./globals.css";

// Components.
import TransitionProvider from "@/components/TransitionProvider";

// Types.
import { Metadata } from "next";

// Metadara.
export const metadata: Metadata = {
  title: "Zain Khoso - Fullstack JavaScript Developer",
  description: "",
  keywords: [
    "fullstack developer",
    "javascript developer",
    "react developer",
    "nextjs developer",
    "firebase developer",
    "mongodb developer",
    "prisma developer",
    "nodejs developer",
    "expressjs developer",
    "algolia developer",
    "portfolio",
    "web development",
    "frontend developer",
    "backend developer",
    "typescript",
    "html",
    "css",
    "Zain Khoso",
    "web applications",
    "software developer",
  ],
  authors: [{ name: "Zain Khoso", url: "zain-khoso.vercel.app" }],
  openGraph: {
    title: "Zain Khoso - Fullstack JavaScript Developer",
    description: "",
    url: "zain-khoso.vercel.app",
    siteName: "Zain Khoso Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zain Khoso - Fullstack JavaScript Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Khoso - Fullstack JavaScript Developer",
    description: "",
    images: ["/og-image.jpg"],
    creator: "@ZainKhoso",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code", // Replace with your Google verification code
  //   yandex: "your-yandex-verification-code", // Replace with your Yandex verification code
  //   other: {
  //     "msvalidate.01": "your-msvalidate-code", // Replace with your Microsoft validation code
  //   },
  // },
};

// Portfolio Fonts.
const FontRasa = Rasa({
  subsets: ["latin"],
  variable: "--font-rasa",
});
const FontFingerPaint = Finger_Paint({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-finger-paint",
});

// Portfolio's Root Layout.
export default function RootLayout({ children }: { children: children }) {
  return (
    <html lang="en">
      <body
        className={`${FontRasa.variable} ${FontFingerPaint.variable} antialiased`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
