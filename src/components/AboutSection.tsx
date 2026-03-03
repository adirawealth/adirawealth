import { Eye, Target, Heart, Handshake, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  { icon: Eye, title: "Vision", desc: "To be the most trusted wealth management partner for every Indian family." },
  { icon: Target, title: "Mission", desc: "Simplify investing through expert guidance, technology, and personalized solutions." },
  { icon: Heart, title: "Values", desc: "Transparency, integrity, and client-first approach in every interaction." },
  { icon: Handshake, title: "Promise", desc: "Your financial goals are our commitment — we grow when you grow." },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-padding bg-background">
      <div className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Visual Card */}
          <div className="relative">
            <div className="bg-forest rounded-2xl p-12 flex items-center justify-center min-h-[380px]">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-bright-green/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-bright-green" />
                </div>
                <span className="font-heading font-black text-3xl">
                  <span className="text-primary-foreground">Adira</span>
                  <span className="text-bright-green">Wealth</span>
                </span>
                <p className="text-primary-foreground/50 font-body text-sm mt-2">Smart Growth · Secure Future</p>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute top-4 right-4 bg-dhan-dark border border-dhan-teal/30 rounded-xl px-4 py-2 animate-float">
              <p className="text-primary-foreground text-xs font-heading font-bold">Super Authorized Partner</p>
              <p className="text-dhan-teal text-xs font-body">Dhan Broking</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-emerald rounded-xl px-4 py-2 animate-float animation-delay-300">
              <p className="text-primary-foreground text-xs font-heading font-bold">5+ Years of Trust</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
              Building Wealth,<br />One Goal at a Time
            </h2>
            <p className="text-muted-foreground font-body font-light leading-relaxed">
              Founded in Rajkot, Gujarat, Adira Wealth has been helping individuals and families achieve their financial aspirations for over 5 years. We combine deep market knowledge with a client-first approach to deliver comprehensive wealth management solutions tailored to your unique goals.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed">
              As the Super Authorized Partner of Dhan Broking, we bring you India's most advanced trading technology along with personalized financial advisory — from equity and derivatives to mutual funds, insurance, and portfolio management services.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-xl p-5 hover-lift card-border-animate"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center mb-3">
                    <p.icon className="w-5 h-5 text-emerald" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground text-sm">{p.title}</h4>
                  <p className="text-muted-foreground font-body text-xs mt-1 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
