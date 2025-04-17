import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Ustami Rajib",
  },
  description: "Ustami Rajib Portfolio",
  keywords: [
    "Ustami Rajib",
    "Frontend Developer",
    "Portofolio Web",
    "Web Developer Indonesia",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "UI/UX Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Ustami Rajib" }],
  creator: "Ustami Rajib",
  openGraph: {
    title: "Ustami Rajib — Frontend Developer",
    description:
      "Portofolio Ustami Rajib, seorang Frontend Developer yang berfokus pada pembuatan antarmuka web yang modern, responsif, dan performatif.",
    url: "https://ustamirajib.vercel.app/",
    siteName: "Ustami Rajib Portfolio",
    images: [
      {
        url: "https://ustamirajib.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ustami Rajib — Frontend Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  metadataBase: new URL('https://ustamirajib.vercel.app/'),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-clrs-primary-950 leading-relaxed">
        {children}
      </body>
    </html>
  );
}
