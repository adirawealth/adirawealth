import { ArrowRight, Phone, BarChart3, LineChart, Users, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "5+", label: "Years" },
  { value: "500+", label: "Clients" },
  { value: "5", label: "Services" },
  { value: "₹50Cr+", label: "Assets" },
  { value: "360°", label: "Solutions" },
];

const dhanPerks = [
  { icon: Shield, text: "Zero account opening charges" },
  { icon: BarChart3, text: "Stocks, F&O, Commodity trading" },
  { icon: LineChart, text: "Advanced charting & tools" },
  { icon: Users, text: "Dedicated relationship manager" },
];

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen bg-forest grid-pattern overflow-hidden"
    >
      <div className="absolute inset-0 radial-glow" />

      <div className="relative container mx-auto px-4 pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-dhan-teal/15 border border-dhan-teal/30 rounded-full px-4 py-1.5">
              <span className="text-dhan-teal font-heading font-bold text-xl leading-none">ध</span>
              <span className="text-primary-foreground/70 text-xs font-body">
                Super Authorized Partner of Dhan Broking
              </span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
              <span className="text-primary-foreground">Adira</span>
              <span className="text-bright-green">Wealth</span>
              <br />
              <span className="text-primary-foreground/90 text-3xl sm:text-4xl lg:text-5xl">
                Financial Freedom
              </span>
            </h1>

            <p className="text-primary-foreground/60 font-body font-light text-lg max-w-lg leading-relaxed">
              Smart Growth · Secure Future — Your trusted wealth management partner in Rajkot, empowering you with expert financial planning and India's leading trading technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-bright-green hover:bg-emerald text-primary-foreground font-heading font-bold px-6 py-3 rounded-full transition-colors"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 hover:border-bright-green text-primary-foreground font-heading font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <Phone size={16} />
                Talk to Advisor
              </a>
            </div>
          </div>

          {/* Right — Dhan Card */}
          <div className={`${isVisible ? "animate-fade-up animation-delay-300" : "opacity-0"}`}>
            <div className="bg-dhan-dark border border-dhan-teal/20 rounded-2xl p-8 max-w-md mx-auto lg:ml-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-dhan-teal/20 flex items-center justify-center">
                  <span className="text-dhan-teal font-heading font-bold text-2xl">ध</span>
                </div>
                <div>
                  <p className="text-primary-foreground font-heading font-bold text-sm">Super Authorized</p>
                  <p className="text-dhan-teal font-heading font-bold text-base">Dhan Partner</p>
                </div>
              </div>

              <div className="space-y-3">
                {dhanPerks.map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-dhan-teal/10 flex items-center justify-center shrink-0">
                      <p.icon className="w-4 h-4 text-dhan-teal" />
                    </div>
                    <span className="text-primary-foreground/80 text-sm font-body">{p.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://tinyurl.com/2aezm7r2"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-dhan-teal hover:bg-dhan-teal/80 text-primary-foreground font-heading font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Open Free Demat Account →
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`mt-16 grid grid-cols-2 sm:grid-cols-5 gap-4 ${isVisible ? "animate-fade-up animation-delay-500" : "opacity-0"}`}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl py-4 px-2"
            >
              <p className="text-bright-green font-heading font-black text-2xl">{s.value}</p>
              <p className="text-primary-foreground/60 font-body text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
