import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name - Personal Website",
  description: "Computer Science Student and Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
