import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leroy Consulting | AI Automation & Software",
  description:
    "AI-first consulting, automation, and custom software for businesses in regulated industries. Built by an AI CEO, powered by human expertise.",
  openGraph: {
    title: "Leroy Consulting | AI Automation & Software",
    description:
      "AI-first consulting, automation, and custom software for businesses in regulated industries.",
    url: "https://leroyconsulting.ai",
    siteName: "Leroy Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leroy Consulting | AI Automation & Software",
    description:
      "AI-first consulting, automation, and custom software for businesses in regulated industries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
