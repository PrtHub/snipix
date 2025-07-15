import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snipix",
  description: "Snipix is an elegant, in-browser code snippet image generator designed for developers, educators, and content creators. Transform your raw code into stunning, shareable images perfect for social media, presentations, and documentation. Built with a focus on a seamless user experience, Snipix performs all transformations client-side, ensuring speed, privacy, and cost-effectiveness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased dark
        `}
      >
        {children}
      </body>
    </html>
  );
}
