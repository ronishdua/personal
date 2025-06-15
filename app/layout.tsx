import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Ronish Dua",
  description: "Software engineer based in Washington, D.C.",
  icons: {
    icon: "/tabLogo.png",
    shortcut: "/tabLogo.png",
    apple: "/tabLogo.png",
  },
  openGraph: {
    title: "Ronish Dua",
    images: [
      {
        url: "/tabLogo.png",
        width: 1200,
        height: 630,
        alt: "Ronish Dua Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronish Dua",
    images: ["/tabLogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
