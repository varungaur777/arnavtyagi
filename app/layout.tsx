import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThreeBackground } from "@/components/ThreeBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Tyagi | Cinematic Portfolio",
  description: "AI Content Creator & Creative Ads Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 relative`}>
        <ThreeBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
