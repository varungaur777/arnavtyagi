"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ToolMarquee } from "@/components/ToolMarquee";
import { Mail, Phone, Download, X } from "lucide-react";

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth cinematic transition: fade preloader out after a slow flow delay
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 2000); // Slower delay for a cinematic feel
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <main className="min-h-screen pt-20">

      {/* Floating Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/20 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center shadow-[0_0_15px_rgba(123,44,191,0.2)]">
            <span className="text-sm font-black tracking-widest text-primary text-gradient">AT</span>
          </div>
          <span className="text-sm font-bold tracking-wider text-white uppercase hidden sm:inline-block">Arnav Tyagi</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:arnavtyagi919@gmail.com" className="px-5 py-2 bg-primary/10 hover:bg-primary/20 text-primary hover:text-white font-semibold text-sm rounded-full border border-primary/20 hover:scale-105 transition-all duration-300">
            Get In Touch
          </a>
        </div>
      </header>
      
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

      {/* 2. Featured Video Campaigns */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16 text-center">
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">Portfolio</h3>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Video Campaigns</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              High-converting vertical video ads optimized for social media platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col group">
              <div className="shadow-[0_0_50px_-12px_rgba(123,44,191,0.3)] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_-6px_rgba(123,44,191,0.5)]">
                <VideoPlayer 
                  aspectRatio="vertical" 
                  title="Mount Breeze Campaign" 
                  src="/videos/Mount Breezead_1781883304758174.mp4" 
                />
              </div>
              <div className="mt-6 px-2 text-center md:text-left">
                <h4 className="font-bold text-xl group-hover:text-primary transition-colors">Mount Breeze</h4>
                <p className="text-sm text-muted-foreground mt-2">Cinematic 3D & Product Video Ad</p>
              </div>
            </div>

            <div className="flex flex-col group">
              <div className="shadow-[0_0_50px_-12px_rgba(123,44,191,0.3)] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_-6px_rgba(123,44,191,0.5)]">
                <VideoPlayer 
                  aspectRatio="vertical" 
                  title="Pizzaiolo Campaign" 
                  src="/videos/pizzaiolo.mp4" 
                />
              </div>
              <div className="mt-6 px-2 text-center md:text-left">
                <h4 className="font-bold text-xl group-hover:text-primary transition-colors">Pizzaiolo</h4>
                <p className="text-sm text-muted-foreground mt-2">Premium Food & E-commerce Promo Ad</p>
              </div>
            </div>

            <div className="flex flex-col group">
              <div className="shadow-[0_0_50px_-12px_rgba(123,44,191,0.3)] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_-6px_rgba(123,44,191,0.5)]">
                <VideoPlayer 
                  aspectRatio="vertical" 
                  title="Mop Spinner Bucket Campaign" 
                  src="/videos/MopSpinnerbucketad__115442_789.mp4" 
                />
              </div>
              <div className="mt-6 px-2 text-center md:text-left">
                <h4 className="font-bold text-xl group-hover:text-primary transition-colors">Mop Spinner Bucket</h4>
                <p className="text-sm text-muted-foreground mt-2">Creative High-Conversion E-commerce Ad</p>
              </div>
            </div>
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

      {/* Commercial & Creative Campaigns Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">Graphic Design</h3>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Commercial & Creative Campaigns</h2>
            <div className="flex justify-center mt-4">
              <span className="px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                Creative Ads Specialist & Brand Designer
              </span>
            </div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              A curated collection of premium promotional posters and visual brand advertisements designed for maximum marketing impact.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Portrait Poster 1 */}
            <div 
              onClick={() => setActiveImage("/images/creative1.png")}
              className="group relative shadow-[0_0_50px_-12px_rgba(123,44,191,0.2)] rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-500 hover:shadow-[0_0_50px_-6px_rgba(123,44,191,0.4)] border border-white/10 bg-neutral-900 aspect-[3/4] cursor-pointer"
            >
              <img 
                src="/images/creative1.png" 
                alt="Creative Poster 1" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Product Ad</span>
                <h5 className="text-lg font-bold text-white mt-1">Creative Ad Poster 1</h5>
              </div>
            </div>

            {/* Landscape Poster 2 */}
            <div 
              onClick={() => setActiveImage("/images/creative2.png")}
              className="group relative shadow-[0_0_50px_-12px_rgba(123,44,191,0.2)] rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-500 hover:shadow-[0_0_50px_-6px_rgba(123,44,191,0.4)] border border-white/10 bg-neutral-900 aspect-video cursor-pointer"
            >
              <img 
                src="/images/creative2.png" 
                alt="Creative Poster 2" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Social Ad Campaign</span>
                <h5 className="text-lg font-bold text-white mt-1">Creative Ad Poster 2</h5>
              </div>
            </div>

            {/* Portrait Poster 3 */}
            <div 
              onClick={() => setActiveImage("/images/creative5.png")}
              className="group relative shadow-[0_0_50px_-12px_rgba(123,44,191,0.2)] rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-500 hover:shadow-[0_0_50px_-6px_rgba(123,44,191,0.4)] border border-white/10 bg-neutral-900 aspect-[3/4] cursor-pointer"
            >
              <img 
                src="/images/creative5.png" 
                alt="Creative Poster 3" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Brand Campaign</span>
                <h5 className="text-lg font-bold text-white mt-1">Creative Ad Poster 3</h5>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. ISN Report Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">Editorial Design</h3>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">ISN Report</h2>
            <div className="flex justify-center mt-4">
              <span className="px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                Lead Logo & Poster Designer / Social Media Manager
              </span>
            </div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Independent News & Media brand identity. Created the signature logo and produce recurring AI-assisted poster templates for rapid daily editorial releases.
            </p>
          </div>

          {/* Media Layout */}
          <div className="space-y-16">
            {/* Portrait Posters (Featured) */}
            <div>
              <div className="text-center mb-8">
                <h4 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground">Featured Editorial Posters</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[10, 11, 12].map((num) => (
                  <div 
                    key={num} 
                    onClick={() => setActiveImage(`/images/isn${num}.png`)}
                    className="group relative shadow-[0_0_50px_-12px_rgba(123,44,191,0.3)] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_-6px_rgba(123,44,191,0.5)] border border-white/10 bg-neutral-900 aspect-[3/4] cursor-pointer"
                  >
                    <img 
                      src={`/images/isn${num}.png`} 
                      alt={`ISN Report Portrait Poster ${num}`} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">Portrait Release</span>
                      <h5 className="text-lg font-bold text-white mt-1">Campaign Poster {num - 9}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Landscape Posters Grid */}
            <div>
              <div className="text-center mb-8">
                <h4 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground">News & Media Templates</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 13].map((num) => {
                  const ext = num === 13 ? 'jpg' : 'png';
                  return (
                    <div 
                      key={num} 
                      onClick={() => setActiveImage(`/images/isn${num}.${ext}`)}
                      className="group relative shadow-md rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-500 border border-white/5 bg-neutral-950 aspect-video cursor-pointer"
                    >
                      <img 
                        src={`/images/isn${num}.${ext}`} 
                        alt={`ISN Report Landscape Poster ${num}`} 
                        className="object-contain w-full h-full p-2 group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none" />
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">Landscape Release</span>
                        <h5 className="font-bold text-white text-sm mt-0.5">Editorial Template {num === 13 ? 10 : num}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. RK Divine Creation Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">E-commerce Branding</h3>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">RK Divine Creation</h2>
            <div className="flex justify-center mt-4">
              <span className="px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                Creative Ads Designer & Growth Manager
              </span>
            </div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Instagram E-commerce campaign for a spiritual products brand. Managed full-funnel lead generation and designed premium AI-generated marketing posters.
            </p>
          </div>

          {/* 3-Column Portrait Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                onClick={() => setActiveImage(`/images/rk${num}.png`)}
                className="group relative shadow-[0_0_50px_-12px_rgba(123,44,191,0.2)] rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-500 hover:shadow-[0_0_50px_-6px_rgba(123,44,191,0.4)] border border-white/10 bg-neutral-900 aspect-[3/4] cursor-pointer"
              >
                <img 
                  src={`/images/rk${num}.png`} 
                  alt={`RK Divine Poster ${num}`} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Product Ad Campaign</span>
                  <h5 className="text-lg font-bold text-white mt-1">Creative Ad Poster {num}</h5>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. NGO Work Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">Social Impact</h3>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">NGO Campaigns</h2>
            <div className="flex justify-center mt-4">
              <span className="px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                Social Media Manager & Marketing Executive
              </span>
            </div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              End-to-end content strategy and community marketing. Designed custom outreach graphics and promotional campaign posters to scale public engagement.
            </p>
          </div>

          {/* 2-Column Portrait Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {[1, 2].map((num) => {
              const ext = num === 1 ? 'jpg' : 'png';
              return (
                <div 
                  key={num} 
                  onClick={() => setActiveImage(`/images/ngo${num}.${ext}`)}
                  className="group relative shadow-[0_0_50px_-12px_rgba(123,44,191,0.2)] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_-6px_rgba(123,44,191,0.4)] border border-white/10 bg-neutral-900 aspect-[2/3] cursor-pointer"
                >
                  <img 
                    src={`/images/ngo${num}.${ext}`} 
                    alt={`NGO Campaign Poster ${num}`} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Outreach Campaign</span>
                    <h5 className="text-lg font-bold text-white mt-1">Outreach Poster {num}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl max-h-[75vh] w-full h-full flex items-center justify-center"
            >
              <img 
                src={activeImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>

            {/* Action Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-8 flex gap-4"
            >
              <a 
                href={activeImage} 
                download={activeImage.split('/').pop()}
                className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(123,44,191,0.4)] cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download Image
              </a>
              <button 
                onClick={() => setActiveImage(null)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preloader Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }} // Slower exit transition
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          >
            <div className="text-center">
              {/* Stylized AT Logo Mark */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-20 h-20 mx-auto mb-6 rounded-full border border-primary/40 bg-primary/5 flex items-center justify-center shadow-[0_0_35px_rgba(123,44,191,0.2)]"
              >
                <span className="text-2xl font-black tracking-widest text-primary text-gradient glow-effect">AT</span>
              </motion.div>

              <motion.h1
                initial={{ scale: 0.95, opacity: 0.5 }}
                animate={{ 
                  scale: [0.95, 1.02, 0.95],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2.5, // Slower pulse
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gradient glow-effect mb-4 uppercase"
              >
                ARNAV TYAGI
              </motion.h1>
              <div className="h-[2px] w-28 bg-primary/20 mx-auto rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ 
                    duration: 2.0, // Slower scanning line
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                />
              </div>
              <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mt-4 opacity-50 font-medium">
                Loading Cinematic Experience
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
