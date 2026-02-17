import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Leroy Consulting | AI-Native ERP + QMS for Manufacturers",
  description:
    "AI-native ERP and QMS solutions built for regulated manufacturers. Affordable, compliant, and ready to deploy.",
  openGraph: {
    title: "Leroy Consulting | AI-Native ERP + QMS for Manufacturers",
    description:
      "AI-native ERP and QMS solutions built for regulated manufacturers.",
    url: "https://leroyconsulting.ai",
    siteName: "Leroy Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leroy Consulting | AI-Native ERP + QMS for Manufacturers",
    description:
      "AI-native ERP and QMS solutions built for regulated manufacturers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
