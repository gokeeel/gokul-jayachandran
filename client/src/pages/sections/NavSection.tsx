import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const NavSection = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-[#1a1714]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a
          href="#"
          data-testid="link-home"
          className="font-medium text-white text-lg tracking-tight"
        >
          Gokul<span className="text-[#c07836]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
              className="text-[#a9a9a9] hover:text-white text-sm font-light transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:gokuljai2006@gmail.com"
            data-testid="button-hire-me"
            className="px-5 py-2 bg-[#c07836] text-white text-sm font-medium rounded-full hover:bg-[#a8662c] transition-colors"
          >
            Hire Me
          </a>
        </div>

        <button
          data-testid="button-mobile-menu"
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#1a1714] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`link-mobile-${link.label.toLowerCase()}`}
              className="text-[#a9a9a9] hover:text-white text-base font-light transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:gokuljai2006@gmail.com"
            data-testid="button-mobile-hire-me"
            className="px-5 py-2 bg-[#c07836] text-white text-sm font-medium rounded-full hover:bg-[#a8662c] transition-colors text-center mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};
