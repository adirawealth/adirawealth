import { TrendingUp, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Demat & Trading Account",
  "Insurance",
  "Mutual Fund",
  "PMS & AIF",
  "Algo Products",
];

const Footer = () => (
  <footer className="bg-forest pt-16 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-primary-foreground/10">
        {/* Col 1 - Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-bright-green/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-bright-green" />
            </div>
            <span className="font-heading font-black text-lg">
              <span className="text-primary-foreground">Adira</span>
              <span className="text-bright-green">Wealth</span>
            </span>
          </div>
          <p className="text-primary-foreground/50 font-body font-light text-sm leading-relaxed">
            Your trusted wealth management partner in Rajkot. Smart Growth · Secure Future.
          </p>
          <div className="inline-flex items-center gap-1.5 bg-dhan-teal/15 border border-dhan-teal/30 rounded-full px-3 py-1">
            <span className="text-dhan-teal font-heading font-bold text-sm">ध</span>
            <span className="text-primary-foreground/60 text-[9px] font-body">Super Authorized Partner of Dhan</span>
          </div>
        </div>

        {/* Col 2 - Quick Links */}
        <div>
          <h4 className="text-primary-foreground font-heading font-bold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-primary-foreground/50 hover:text-bright-green font-body text-sm transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Services */}
        <div>
          <h4 className="text-primary-foreground font-heading font-bold text-sm mb-4">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#services" className="text-primary-foreground/50 hover:text-bright-green font-body text-sm transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 - Contact */}
        <div>
          <h4 className="text-primary-foreground font-heading font-bold text-sm mb-4">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-bright-green shrink-0 mt-0.5" />
              <p className="text-primary-foreground/50 font-body text-xs leading-relaxed">
                GF 05/06, Viral Heights, Behind Croma Store, Near Ayodhya Chowk, 150 Feet Ring Road, Rajkot – 360006
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-bright-green shrink-0" />
              <a href="tel:+918141491915" className="text-primary-foreground/50 font-body text-xs hover:text-bright-green transition-colors">
                +91 – 8141491915
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-bright-green shrink-0" />
              <a href="mailto:adirawealth@gmail.com" className="text-primary-foreground/50 font-body text-xs hover:text-bright-green transition-colors">
                adirawealth@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 space-y-3">
        <p className="text-primary-foreground/40 font-body text-xs text-center">
          © 2026 Adira Wealth. All rights reserved.
        </p>
        <p className="text-primary-foreground/30 font-body text-[10px] text-center max-w-3xl mx-auto leading-relaxed">
          Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are exemplary and are not recommendatory.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
