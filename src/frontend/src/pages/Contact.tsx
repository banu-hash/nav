import { Button } from "@/components/AppButton";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "Old Nagore Road, Thethi Village, Nagapattinam - 611002, Tamil Nadu, India.",
  },
  { icon: Mail, label: "Email", value: "principal@egspec.org" },
  { icon: Phone, label: "Phone", value: "99768 88999" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <section className="bg-card border-b border-border py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-label text-accent">Get in Touch</p>
          <h1 className="text-h2 font-display text-foreground">Contact Us</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Have a question about the Campus Navigation System? Found a missing
            building or incorrect path? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="flex-1 bg-background py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-h3 font-display text-foreground">
              Campus Info
            </h2>
            <div className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm text-foreground mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 surface-elevated p-6">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                data-ocid="contact.success_state"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thank you for reaching out. We'll get back to you within 1–2
                  business days.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  data-ocid="contact.send_another_button"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
                data-ocid="contact.form"
              >
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-foreground font-display"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full bg-card border border-input rounded-lg px-4 py-2.5 text-sm text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary placeholder:text-muted-foreground"
                    data-ocid="contact.name_input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.name_field_error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-foreground font-display"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@university.edu"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full bg-card border border-input rounded-lg px-4 py-2.5 text-sm text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary placeholder:text-muted-foreground"
                    data-ocid="contact.email_input"
                  />
                  {errors.email && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.email_field_error"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-foreground font-display"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your query or feedback..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full bg-card border border-input rounded-lg px-4 py-2.5 text-sm text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary placeholder:text-muted-foreground resize-none"
                    data-ocid="contact.message_textarea"
                  />
                  {errors.message && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.message_field_error"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full"
                  data-ocid="contact.submit_button"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map accent section */}
      <section className="bg-muted/40 border-t border-border py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
          This project was developed as part of the Final Year Computer Science
          curriculum at{" "}
          <span className="font-semibold text-foreground">
            University Campus
          </span>
          . All routing data is for demonstration purposes.
        </div>
      </section>
    </div>
  );
}
