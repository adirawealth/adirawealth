import { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-forest/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-bright-green/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-bright-green" />
          </div>
          <span className="font-heading font-black text-xl tracking-tight">
            <span className="text-primary-foreground">Adira</span>
            <span className="text-bright-green">Wealth</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/80 hover:text-bright-green transition-colors text-sm font-body font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Dhan Badge + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-dhan-teal/15 border border-dhan-teal/30 rounded-full px-3 py-1">
            <span className="text-dhan-teal font-heading font-bold text-lg leading-none">ध</span>
            <span className="text-primary-foreground/70 text-[10px] font-body leading-tight">
              Super Authorized<br />Partner of Dhan
            </span>
          </div>
          <a
            href="https://invite.dhan.co/?join=DIV111"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bright-green hover:bg-emerald text-primary-foreground font-heading font-bold text-sm px-5 py-2 rounded-full transition-colors"
          >
            Open Demat
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-forest/95 backdrop-blur-md px-4 pb-6 pt-2 animate-fade-up">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-bright-green transition-colors font-body"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://invite.dhan.co/?join=DIV111"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-bright-green text-primary-foreground font-heading font-bold text-sm px-5 py-3 rounded-full"
          >
            Open Free Demat Account
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
