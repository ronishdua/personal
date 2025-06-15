import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Ronish Dua",
  description: "Software engineer based in Washington, D.C.",
  icons: {
    icon: "/tabsLogo.png",
    shortcut: "/tabsLogo.png",
    apple: "/tabsLogo.png",
  },
  openGraph: {
    title: "Ronish Dua",
    images: [
      {
        url: "/tabsLogo.png",
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
    images: ["/tabsLogo.png"],
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
