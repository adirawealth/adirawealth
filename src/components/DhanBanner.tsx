import { useScrollReveal } from "@/hooks/useScrollReveal";

const DhanBanner = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-dhan-dark py-12">
      <div
        className={`container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-dhan-teal/20 flex items-center justify-center shrink-0">
            <span className="text-dhan-teal font-heading font-black text-5xl">ध</span>
          </div>
          <div>
            <h3 className="text-primary-foreground font-heading font-black text-xl sm:text-2xl">
              Super Authorized Partner of Dhan Broking
            </h3>
            <p className="text-primary-foreground/50 font-body text-sm mt-1">
              Raise Securities Pvt. Ltd. · NSE · BSE · MCX
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-6 md:justify-end">
          <div className="text-center">
            <p className="text-dhan-teal font-heading font-black text-2xl">₹0</p>
            <p className="text-primary-foreground/50 text-xs font-body">Opening Fee</p>
          </div>
          <div className="w-px h-10 bg-primary-foreground/10" />
          <div className="text-center">
            <p className="text-dhan-teal font-heading font-black text-2xl">NSE/BSE</p>
            <p className="text-primary-foreground/50 text-xs font-body">Exchanges</p>
          </div>
          <div className="w-px h-10 bg-primary-foreground/10" />
          <div className="text-center">
            <p className="text-dhan-teal font-heading font-black text-2xl">MCX</p>
            <p className="text-primary-foreground/50 text-xs font-body">Commodity</p>
          </div>
          <a
            href="https://tinyurl.com/2aezm7r2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dhan-teal hover:bg-dhan-teal/80 text-primary-foreground font-heading font-bold px-6 py-3 rounded-full transition-colors text-sm"
          >
            Open Free Demat Account
          </a>
        </div>
      </div>
    </section>
  );
};

export default DhanBanner;
