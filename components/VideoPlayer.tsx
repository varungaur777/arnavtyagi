"use client";

import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
  aspectRatio?: "video" | "square" | "vertical";
}

export function VideoPlayer({ src, poster, title, aspectRatio = "video" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    vertical: "aspect-[9/16]",
  }[aspectRatio];

  return (
    <div className={`relative w-full overflow-hidden rounded-xl bg-neutral-900 group ${aspectClass}`}>
      {/* Placeholder Fallback if no src */}
      {!src && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-neutral-600">
          <div className="text-center">
            <Play className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-medium">{title || "Video Placeholder"}</p>
          </div>
        </div>
      )}

      {src && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="object-cover w-full h-full"
          loop
          playsInline
        />
      )}

      {/* Custom Controls Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
        <div className="flex justify-end">
          <button onClick={toggleMute} className="p-2 text-white transition rounded-full hover:bg-white/20">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
        
        <div className="flex items-center justify-center h-full">
          <button 
            onClick={togglePlay} 
            className="flex items-center justify-center w-16 h-16 text-white transition rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110"
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="h-1 bg-white/30 rounded-full w-full overflow-hidden">
            <div className="h-full bg-primary w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
