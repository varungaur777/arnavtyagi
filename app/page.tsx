"use client";

import { motion } from "framer-motion";
import { VideoPlayer } from "@/components/VideoPlayer";
import { MixedMediaCard } from "@/components/MixedMediaCard";
import { ToolMarquee } from "@/components/ToolMarquee";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 overflow-hidden">
        {/* Background Gradient Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-gradient glow-effect glitch-text">
            ARNAV TYAGI
          </h1>
          <h2 className="text-xl md:text-3xl text-muted-foreground font-light tracking-wide mb-8">
            AI Content Creator <span className="text-primary mx-2">|</span> Creative Ads Designer
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <a href="mailto:arnavtyagi919@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group">
              <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
              arnavtyagi919@gmail.com
            </a>
            <a href="tel:+918586818817" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group">
              <Phone className="w-5 h-5 group-hover:text-primary transition-colors" />
              +91 8586818817
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. Creative Showreel (The Hook) */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 text-center md:text-left">
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">The Hook</h3>
            <h2 className="text-3xl md:text-4xl font-bold">60-Second Creative Showreel</h2>
            <p className="text-muted-foreground mt-2">AI Video, CapCut Edits, & Ad Campaigns</p>
          </div>
          
          <div className="shadow-[0_0_50px_-12px_rgba(123,44,191,0.5)] rounded-xl">
            <VideoPlayer aspectRatio="video" title="Showreel" src="/videos/Mount Breezead_1781883304758174.mp4" />
          </div>
        </motion.div>
      </section>

      {/* 4. AI & Creative Arsenal (Moved up for flow) */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">AI & Creative Arsenal</h2>
        </div>
        <ToolMarquee />
      </section>

      {/* 3. Featured Campaigns & Projects */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Campaigns & Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated selection of high-converting ads, cinematic edits, and brand identities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project cards will be added here one by one */}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great.</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Are you looking to scale your brand's visual content or run high-converting ad campaigns?
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:arnavtyagi919@gmail.com"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(123,44,191,0.4)]"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
