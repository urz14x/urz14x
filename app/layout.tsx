import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Ustami Razib",
  },
  description: "Ustami Razib Portfolio",
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
