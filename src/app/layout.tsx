import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { PageLoader } from "@/components/layout/PageLoader";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "react-logo-loader — Playground",
  description:
    "Interactive playground for react-logo-loader. Preview 20+ animated React loaders with your own SVG logo.",
  keywords: [
    "react",
    "loader",
    "spinner",
    "logo",
    "svg",
    "website",
    "app",
    "javascript",
    "frontend",
    "developer",
    "animation",
    "nextjs",
    "typescript",
  ],
  authors: [{ name: "Ogili Kingsley Kingerjay" }],
  openGraph: {
    title: "react-logo-loader Playground",
    description: "Preview 20 animated React loaders with your own SVG logo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col`}>
        <ThemeProvider>
          <PageLoader />
          <Navbar />
          <main className="flex-1 flex flex-col min-h-0 w-full">
            <Suspense fallback={<div className="min-h-screen" />}>
              {children}
            </Suspense>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}