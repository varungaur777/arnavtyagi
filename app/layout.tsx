import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThreeBackground } from "@/components/ThreeBackground";

const americana = localFont({
  src: "../public/fonts/Americana_Std_Roman.otf",
});

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
      <body className={`${americana.className} min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 relative`}>
        <ThreeBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

