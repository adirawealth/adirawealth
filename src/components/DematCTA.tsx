import { ArrowRight, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DematCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-dhan-dark text-center">
      <div className={`container mx-auto max-w-2xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="w-16 h-16 rounded-2xl bg-dhan-teal/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-dhan-teal font-heading font-bold text-3xl">ध</span>
        </div>
        <h2 className="font-heading font-black text-3xl md:text-4xl text-primary-foreground mb-4">
          Open Your Free Demat Account Today
        </h2>
        <p className="text-primary-foreground/50 font-body font-light mb-8 max-w-lg mx-auto">
          Start your investment journey with Dhan — zero account opening charges, advanced tools, and dedicated support from Adira Wealth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://invite.dhan.co/?join=DIV111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dhan-teal hover:bg-dhan-teal/80 text-primary-foreground font-heading font-bold px-6 py-3 rounded-full transition-colors"
          >
            Open Free Demat Account
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 hover:border-dhan-teal text-primary-foreground font-heading font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <Phone size={16} />
            Talk to an Advisor
          </a>
        </div>
      </div>
    </section>
  );
};

export default DematCTA;
