import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Ronish Dua",
  icons: {
    icon: "/tabLogo.png",
    shortcut: "/tabLogo.png",
    apple: "/tabLogo.png",
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
