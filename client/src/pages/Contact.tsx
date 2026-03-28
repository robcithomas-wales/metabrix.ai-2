import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
    type: "general"
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        message: "",
        type: "general"
      });
      
      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </button>
          <span className="text-lg font-bold text-foreground">metabrix.ai</span>
          <div className="w-20" />
        </div>
      </nav>

      <section className="py-20 md:py-32">
        <div className="container max-w-4xl">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Whether you're interested in metabrix.ai for yourself, your team, or as a PT partner, we'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-muted border-0">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">hello@metabrix.ai</p>
            </Card>
            <Card className="p-8 bg-muted border-0">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+44 (0) 20 XXXX XXXX</p>
            </Card>
            <Card className="p-8 bg-muted border-0">
              <div className="w-8 h-8 text-primary mb-4">🌍</div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">London, UK</p>
            </Card>
          </div>

          <Card className="p-12 bg-white border-2 border-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Thank you!</h2>
                <p className="text-muted-foreground mb-6">We've received your message and will get back to you within 24 hours.</p>
                <Button onClick={() => setLocation("/")} className="bg-primary hover:bg-primary/90 text-white">
                  Return to home
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    I'm interested in metabrix.ai as a...
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="general">Individual user</option>
                    <option value="pt">Personal trainer</option>
                    <option value="corporate">Corporate wellness partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 (0) 20 XXXX XXXX"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Role
                  </label>
                  <Input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Your role"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your interest in metabrix.ai..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-4 h-4 rounded border-border"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-semibold"
                >
                  {loading ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-20">
        <div className="container text-center text-sm text-white/70">
          <p>&copy; 2026 metabrix.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
