import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import frame00 from "@assets/frame_00_delay-0.066s_1773853766220.webp";
import frame01 from "@assets/frame_01_delay-0.066s_1773853766220.webp";
import frame02 from "@assets/frame_02_delay-0.066s_1773853766220.webp";
import frame03 from "@assets/frame_03_delay-0.066s_1773853766220.webp";
import frame04 from "@assets/frame_04_delay-0.066s_1773853766211.webp";
import frame05 from "@assets/frame_05_delay-0.066s_1773853766213.webp";
import frame06 from "@assets/frame_06_delay-0.066s_1773853766214.webp";
import frame07 from "@assets/frame_07_delay-0.066s_1773853766214.webp";
import frame08 from "@assets/frame_08_delay-0.066s_1773853766216.webp";
import frame09 from "@assets/frame_09_delay-0.066s_1773853766216.webp";
import frame10 from "@assets/frame_10_delay-0.066s_1773853766217.webp";
import frame11 from "@assets/frame_11_delay-0.066s_1773853766217.webp";
import frame12 from "@assets/frame_12_delay-0.066s_1773853766218.webp";
import frame13 from "@assets/frame_13_delay-0.066s_1773853766218.webp";
import frame14 from "@assets/frame_14_delay-0.066s_1773853766218.webp";
import frame15 from "@assets/frame_15_delay-0.066s_1773853766218.webp";
import frame16 from "@assets/frame_16_delay-0.066s_1773853766219.webp";
import frame17 from "@assets/frame_17_delay-0.066s_1773853766219.webp";
import frame18 from "@assets/frame_18_delay-0.066s_1773853766219.webp";
import frame19 from "@assets/frame_19_delay-0.066s_1773853766219.webp";

export const HERO_FRAMES: string[] = [
  frame00, frame01, frame02, frame03, frame04, frame05,
  frame06, frame07, frame08, frame09, frame10, frame11,
  frame12, frame13, frame14, frame15, frame16, frame17,
  frame18, frame19,
];

const FRAME_DURATION_MS = 66;

export const HeroSection = (): JSX.Element => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % HERO_FRAMES.length);
    }, FRAME_DURATION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      data-testid="section-hero"
      className="relative min-h-screen flex items-end md:items-center overflow-hidden"
    >
      {/* Animated frame background */}
      <div className="absolute inset-0">
        {HERO_FRAMES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-75"
            style={{ opacity: i === currentFrame ? 1 : 0 }}
          />
        ))}
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-0 pt-28">
        <div className="max-w-xl flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[#a9a9a9] text-sm">
            <MapPin size={13} />
            <span>Chennai, India</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight">
              Gokul<br />Jayachandran
            </h1>
            <p className="text-lg md:text-xl text-[#a78bfa] font-light">
              Aspiring Techno-Functional Business Analyst
            </p>
          </div>

          <p className="text-[#c0c0c0] text-base md:text-lg font-light leading-relaxed max-w-md">
            Building structured, scalable systems at the intersection of
            technology and strategy — BA · SAP · Blockchain · SQL · Python
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="mailto:gokuljai2006@gmail.com"
              data-testid="link-email-hero"
              className="px-6 py-3 bg-[#a78bfa] text-white text-sm font-medium rounded-full hover:bg-[#9171e8] transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              data-testid="link-view-work"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/gokeeel"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
              aria-label="GitHub profile"
              className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/gokeeel"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              aria-label="LinkedIn profile"
              className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
            >
              <SiLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        data-testid="link-scroll-down"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
};
