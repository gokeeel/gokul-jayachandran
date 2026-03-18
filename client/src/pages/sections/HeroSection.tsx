import { useEffect, useRef, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HERO_FRAMES, FRAME_DURATION_MS } from "./heroFrames";

export const HeroSection = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const images: HTMLImageElement[] = HERO_FRAMES.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    imagesRef.current = images;

    images[0].onload = () => setReady(true);
    if (images[0].complete) setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;

    const drawFrame = () => {
      const img = imagesRef.current[frame];
      if (!img?.complete || !img.naturalWidth) return;

      const displayW = canvas.offsetWidth;
      const displayH = canvas.offsetHeight;
      const canvasAR = displayW / displayH;
      const imgAR = img.naturalWidth / img.naturalHeight;

      let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
      if (canvasAR > imgAR) {
        sh = img.naturalWidth / canvasAR;
        sy = (img.naturalHeight - sh) / 2;
      } else {
        sw = img.naturalHeight * canvasAR;
        sx = (img.naturalWidth - sw) / 2;
      }

      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, displayW, displayH);
      frame = (frame + 1) % HERO_FRAMES.length;
    };

    drawFrame();
    const interval = setInterval(drawFrame, FRAME_DURATION_MS);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [ready]);

  return (
    <section
      data-testid="section-hero"
      className="relative min-h-screen flex items-end md:items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black">
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

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
