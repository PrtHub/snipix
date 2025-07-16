import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analysis/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const logoText = Quicksand({
  variable: "--font-logo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snipix – Turn Code into Beautiful, Shareable Images instantly",
  description:
    "Snipix is an elegant, in-browser code snippet image generator designed for developers, educators, and content creators. Transform your raw code into stunning, shareable images perfect for social media, presentations, and documentation. Built with a focus on a seamless user experience, Snipix performs all transformations client-side, ensuring speed, privacy, and cost-effectiveness",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning autoCapitalize="off">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${logoText.variable}
          antialiased dark
        `}
      >
        <Analytics/>
        {children}
      </body>
    </html>
  );
}
