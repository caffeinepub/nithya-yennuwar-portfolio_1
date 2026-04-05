import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import type { backendInterface } from "../backend";
import { createActorWithConfig } from "../config";

const contactDetails = [
  {
    label: "Email",
    value: "nithyayennuwar3112@gmail.com",
    href: "mailto:nithyayennuwar3112@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 73965 84172",
    href: "tel:+917396584172",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nithya-yennuwar3112",
    href: "https://linkedin.com/in/nithya-yennuwar3112",
  },
  {
    label: "Location",
    value: "Hyderabad — open to remote",
    href: null,
  },
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const actorRef = useRef<backendInterface | null>(null);

  useEffect(() => {
    createActorWithConfig().then((a) => {
      actorRef.current = a;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!actorRef.current) {
      toast.error("Connection not ready. Please try again.");
      return;
    }
    setIsSubmitting(true);
    try {
      await actorRef.current.submit(name, email, phone.trim() || null, message);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast.success("Message sent! I'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1.5px solid rgba(255,255,255,0.2)",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "var(--sea-breeze)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(134,197,255,0.15)";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      className="stripe-warm relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--amalfi-blue)" }}
    >
      {/* Med stripe bar at top of contact section */}
      <div
        className="med-stripe-bar absolute top-0 left-0 right-0"
        style={{ zIndex: 1 }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(134,197,255,0.15) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(255,166,43,0.1) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <span
            className="section-label"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Contact
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.12)",
            }}
          />
        </div>

        <h2
          className="mb-3 reveal delay-100"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)",
            color: "#fff",
            fontWeight: 400,
            maxWidth: "560px",
            lineHeight: 1.15,
          }}
        >
          Let&apos;s Build Something Worth Following
        </h2>

        <p
          className="mb-14 reveal delay-200"
          style={{
            fontFamily: "'Parisienne', cursive",
            fontSize: "1.2rem",
            color: "var(--sea-breeze)",
            opacity: 0.9,
          }}
        >
          Every great brand starts with a conversation.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact details */}
          <div className="reveal-left flex flex-col gap-8">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              I&apos;m available for freelance projects, brand collaborations,
              and full-time opportunities. Let&apos;s talk about how I can help
              grow your brand.
            </p>

            <div className="flex flex-col gap-5">
              {contactDetails.map((contact) => (
                <div key={contact.label} className="flex items-start gap-4">
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.68rem",
                        color: "rgba(255,255,255,0.45)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        marginBottom: "3px",
                      }}
                    >
                      {contact.label}
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={
                          contact.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.95rem",
                          color: "var(--sea-breeze)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            "#fff";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            "var(--sea-breeze)";
                        }}
                        data-ocid="contact.link"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.95rem",
                          color: "rgba(255,255,255,0.8)",
                        }}
                      >
                        {contact.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            {isSuccess ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                }}
                data-ocid="contact.success_state"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    backgroundColor: "rgba(134,197,255,0.15)",
                    fontSize: "2rem",
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.6rem",
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "'Inter', sans-serif",
                    cursor: "pointer",
                  }}
                  data-ocid="contact.secondary_button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(16px)",
                }}
                data-ocid="contact.modal"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    autoComplete="name"
                    data-ocid="contact.input"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    autoComplete="email"
                    data-ocid="contact.input"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-phone"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Phone{" "}
                    <span
                      style={{
                        opacity: 0.5,
                        textTransform: "none",
                        letterSpacing: 0,
                      }}
                    >
                      (optional)
                    </span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoComplete="tel"
                    data-ocid="contact.input"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project or brand..."
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={
                      handleFocus as React.FocusEventHandler<HTMLTextAreaElement>
                    }
                    onBlur={
                      handleBlur as React.FocusEventHandler<HTMLTextAreaElement>
                    }
                    required
                    data-ocid="contact.textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 cta-btn mt-1"
                  style={{
                    backgroundColor: "var(--citrus-zest)",
                    color: "#1a1a2e",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.03em",
                    opacity: isSubmitting ? 0.8 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    border: "none",
                    fontWeight: 600,
                  }}
                  data-ocid="contact.submit_button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message ✉️"
                  )}
                </button>

                {isSubmitting && (
                  <div
                    data-ocid="contact.loading_state"
                    className="text-center"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.8rem",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Sending your message...
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
