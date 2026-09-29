import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KodeToMates — Premium Creative Technology Studio",
  description: "Build together. Learn together. Grow as mates.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "KodeToMates",
    description: "Build together. Learn together. Grow as mates.",
    url: "https://kodetomates.com",
    siteName: "KodeToMates",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className="min-h-screen overflow-x-hidden flex flex-col bg-[#F8F7F4] text-[#17202A] selection:bg-[var(--color-brand-primary)]/20 selection:text-[var(--color-brand-primary)]">
        {children}
      </body>
    </html>
  );
}
