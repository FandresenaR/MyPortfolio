import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fandresena Portfolio",
  description: "Fandresena Portfolio as a Web Developer, AI Developer, Pentester and Web Designer",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png' },
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  msTileColor: '#da532c',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

