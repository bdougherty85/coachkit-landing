import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoachKit - Youth Sports Team Management Made Easy",
  description: "Track playing time, manage substitutions, and keep parents engaged. The all-in-one app for youth sports coaches. $20/year.",
  keywords: ["youth sports", "team management", "soccer", "coaching", "playing time tracker"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
