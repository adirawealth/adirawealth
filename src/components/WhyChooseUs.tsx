import { ShieldCheck, UserCheck, Cpu, HeadphonesIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: ShieldCheck, title: "SEBI Registered", desc: "Fully registered and compliant with Securities and Exchange Board of India regulations." },
  { icon: UserCheck, title: "Personalised Planning", desc: "Tailored financial plans designed around your unique goals, risk profile, and timeline." },
  { icon: Cpu, title: "Powered by Dhan Technology", desc: "Access India's fastest trading platform with cutting-edge charts and execution speed." },
  { icon: HeadphonesIcon, title: "Dedicated Relationship Manager", desc: "A single point of contact for all your financial needs — always just a call away." },
];

const metrics = [
  { value: "5+", label: "Years of Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "₹50Cr+", label: "Assets Under Advisory" },
  { value: "Super Partner", label: "of Dhan Broking" },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" ref={ref} className="section-padding bg-forest grid-pattern relative overflow-hidden">
      <div className="absolute inset-0 radial-glow" />
      <div className={`container mx-auto relative ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <p className="text-bright-green font-heading font-bold text-sm uppercase tracking-widest mb-2">Why Adira Wealth</p>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-primary-foreground">
                Why Choose Us?
              </h2>
              <p className="text-primary-foreground/50 font-body font-light mt-4 leading-relaxed max-w-lg">
                We combine deep financial expertise with India's best trading technology to deliver a wealth management experience that is transparent, personalized, and results-driven.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4 hover:bg-primary-foreground/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-bright-green/20 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-bright-green" />
                  </div>
                  <div>
                    <h4 className="text-primary-foreground font-heading font-bold text-sm">{f.title}</h4>
                    <p className="text-primary-foreground/50 font-body text-xs mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Metrics */}
          <div className="grid grid-cols-2 gap-4 content-center">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 text-center hover:translate-x-2 transition-transform duration-300"
              >
                <p className="text-bright-green font-heading font-black text-3xl">{m.value}</p>
                <p className="text-primary-foreground/50 font-body text-xs mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
