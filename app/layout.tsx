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
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="h-full overflow-x-hidden flex flex-col justify-between selection:bg-[var(--color-brand-tan)]/40 selection:text-current">
        {children}
      </body>
    </html>
  );
}
