import { MapPin, Phone, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      service: formData.service,
      message: formData.message.trim() || null,
    });

    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Thank you! We'll get back to you shortly.");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", service: "", message: "" });
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-background">
      <div className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <p className="text-emerald font-heading font-bold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Visit Us</h4>
                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                  GF 05/06, Viral Heights,<br />
                  Behind Croma Store, Near Ayodhya Chowk,<br />
                  150 Feet Ring Road, Rajkot,<br />
                  Gujarat – 360006
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Call Us</h4>
                <a href="tel:+918141491915" className="text-muted-foreground font-body font-light text-sm hover:text-emerald transition-colors">
                  +91 – 8 14 14 91 91 5
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Email Us</h4>
                <a href="mailto:adirawealth@gmail.com" className="text-muted-foreground font-body font-light text-sm hover:text-emerald transition-colors">
                  adirawealth@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-secondary font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald/50"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-secondary font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald/50"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-secondary font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald/50"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-secondary font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald/50"
              />
            </div>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-secondary font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-emerald/50"
            >
              <option value="">Select a Service</option>
              <option value="Demat & Trading Account">Demat & Trading Account</option>
              <option value="Insurance">Insurance</option>
              <option value="Mutual Fund">Mutual Fund</option>
              <option value="PMS & AIF">PMS & AIF</option>
              <option value="Algo Products">Algo Products</option>
            </select>
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-secondary font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald/50 resize-none"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-emerald hover:bg-bright-green text-primary-foreground font-heading font-bold py-3 rounded-xl transition-colors disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
