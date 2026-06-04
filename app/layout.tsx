import type { Metadata } from "next";
import { DM_Mono, DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Sakib Imam - Marketer for Crypto & Tech Products | Organic Growth",
  description:
    "Marketer specializing in organic growth for crypto and tech products. Social growth, community building, launch copy. Drove $120K in volume and onboarded 26,000+ users with zero ad spend.",
  keywords: [
    "crypto marketer",
    "web3 marketing",
    "product marketing",
    "launch copy",
    "growth content",
    "crypto copywriter",
    "defi marketing",
    "web3 growth",
    "blockchain marketing",
    "crypto content writer",
    "sakib imam",
  ],
  authors: [{ name: "Sakib Imam" }],
  creator: "Sakib Imam",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sakibimam.com",
    title: "Sakib Imam - Marketer for Crypto & Tech Products",
    description:
      "I grow products organically. Social growth, community building, launch copy. $120K in volume, 26K users, zero ad spend.",
    siteName: "Sakib Imam Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sakib Imam - Crypto Product Marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakib Imam - Marketer for Crypto & Tech",
    description:
      "I grow products organically. $120K in volume, 26K users, zero ad spend.",
    creator: "@hisakibimam",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
