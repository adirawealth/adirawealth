import { BarChart3, Shield, PieChart, Briefcase, Bot, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    num: "01",
    icon: BarChart3,
    title: "Demat & Trading Account",
    desc: "Open your free Demat account with Dhan — India's fastest trading platform. Trade in Stocks, F&O, Commodities with advanced charting tools and zero opening charges.",
    isDhan: true,
    link: "https://tinyurl.com/2aezm7r2",
  },
  {
    num: "02",
    icon: Shield,
    title: "Insurance",
    desc: "Comprehensive life and general insurance solutions to protect you and your family. We help you choose the right coverage for every stage of life.",
    isDhan: false,
    link: "#contact",
  },
  {
    num: "03",
    icon: PieChart,
    title: "Mutual Fund",
    desc: "Expert-curated mutual fund portfolios aligned with your risk appetite and financial goals. SIP and lumpsum investment options across equity, debt, and hybrid funds.",
    isDhan: false,
    link: "#contact",
  },
  {
    num: "04",
    icon: Briefcase,
    title: "PMS & AIF",
    desc: "Premium Portfolio Management Services and Alternative Investment Funds for high-net-worth investors seeking alpha-generating strategies.",
    isDhan: false,
    link: "#contact",
  },
  {
    num: "05",
    icon: Bot,
    title: "Algo Products",
    desc: "Algorithmic trading solutions powered by advanced technology. Automate your trading strategies with systematic, emotion-free execution.",
    isDhan: false,
    link: "#contact",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" ref={ref} className="section-padding bg-mint">
      <div className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <p className="text-emerald font-heading font-bold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 hover-lift card-border-animate transition-all ${
                s.isDhan
                  ? "bg-dhan-dark col-span-1 sm:col-span-2 lg:col-span-1"
                  : "bg-card"
              }`}
            >
              <span
                className={`font-heading font-black text-3xl ${
                  s.isDhan ? "text-dhan-teal/30" : "text-emerald/20"
                }`}
              >
                {s.num}
              </span>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mt-3 mb-4 ${
                  s.isDhan ? "bg-dhan-teal/20" : "bg-emerald/10"
                }`}
              >
                <s.icon className={`w-6 h-6 ${s.isDhan ? "text-dhan-teal" : "text-emerald"}`} />
              </div>
              <h3
                className={`font-heading font-bold text-lg mb-2 ${
                  s.isDhan ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`font-body font-light text-sm leading-relaxed mb-4 ${
                  s.isDhan ? "text-primary-foreground/60" : "text-muted-foreground"
                }`}
              >
                {s.desc}
              </p>
              <a
                href={s.link}
                target={s.isDhan ? "_blank" : undefined}
                rel={s.isDhan ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center gap-1 font-heading font-bold text-sm transition-colors ${
                  s.isDhan
                    ? "text-dhan-teal hover:text-dhan-teal/80"
                    : "text-emerald hover:text-bright-green"
                }`}
              >
                {s.isDhan ? "Open Free Demat Account" : "Learn More"}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
