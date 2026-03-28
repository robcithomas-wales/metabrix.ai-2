import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Heart, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("consumers");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">metabrix.ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
            <a href="#pt-channel" className="text-sm text-muted-foreground hover:text-foreground transition">
              For PTs
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-muted to-white py-20 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-muted border border-primary/20">
                <span className="text-sm text-primary font-medium">Deterministic metabolic intelligence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Catch the problem before it becomes the diagnosis
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Metabrix turns metabolic signals into a clear weekly picture of where you stand, what's holding you back, and what to focus on next.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-foreground">13.6M</p>
                <p className="text-sm text-muted-foreground">UK at-risk population</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5-10 yrs</p>
                <p className="text-sm text-muted-foreground">The invisible window</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663445266744/UkVaNGgAXNZ4UUE68c993S/hero-metabolic-health-BdJas3SvZLokWUncyBMPWR.webp"
              alt="Metabolic Health Visualization"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why existing tools fail
            </h2>
            <p className="text-lg text-muted-foreground">
              Between your last blood test and your next one, a lot is happening. Fasting glucose creeps. Visceral fat accumulates. Sleep deteriorates. Energy declines. None of it crosses a diagnostic threshold—until it does.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Generic apps",
                description: "Step counters and calorie trackers generate no metabolic insight. They track noise, not signal."
              },
              {
                icon: Users,
                title: "Fragmented advice",
                description: "Your GP, nutritionist, and trainer all operate in silos. None see the full metabolic picture."
              },
              {
                icon: Zap,
                title: "No actionability",
                description: "Annual blood tests are snapshots. No trend. No interpretation. No plan."
              }
            ].map((item, i) => (
              <Card key={i} className="p-8 bg-muted border-0">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gradient-to-br from-muted to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Metabrix difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Deterministic scoring. Transparent logic. AI coaching built on your actual data.
            </p>
          </div>

          <div className="space-y-16">
            {/* Feature 1: Five Domains */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Five metabolic domains</h3>
                <p className="text-lg text-muted-foreground">
                  Every week, Metabrix scores you across the five domains that define metabolic health: blood sugar, body fat, cardiovascular, habits, and recovery.
                </p>
                <ul className="space-y-3">
                  {[
                    "Blood Sugar (Glycaemic) — 25%",
                    "Body Fat (Adiposity) — 25%",
                    "Cardiovascular — 20%",
                    "Habits (Behaviour) — 15%",
                    "Recovery — 15%"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663445266744/UkVaNGgAXNZ4UUE68c993S/metabolic-domains-visual-ccazJGN2QQEx9pjD7XWPjX.webp"
                  alt="Five Metabolic Domains"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Feature 2: Deterministic Scoring */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663445266744/UkVaNGgAXNZ4UUE68c993S/hero-pt-channel-9sKMNQkHkXM7ZLtey2GUkS.webp"
                  alt="Deterministic Scoring"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-foreground">Deterministic scoring</h3>
                <p className="text-lg text-muted-foreground">
                  Unlike black-box AI, Metabrix scoring is transparent and explainable. You see exactly why your score changed, what's holding you back, and what to focus on.
                </p>
                <div className="bg-muted p-6 rounded-xl border border-primary/10">
                  <p className="text-sm text-muted-foreground mb-2">Score Bands</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>0–29</span><span className="font-semibold text-foreground">Critical</span></div>
                    <div className="flex justify-between"><span>30–49</span><span className="font-semibold text-foreground">At risk</span></div>
                    <div className="flex justify-between"><span>50–69</span><span className="font-semibold text-foreground">Stabilising</span></div>
                    <div className="flex justify-between"><span>70–84</span><span className="font-semibold text-foreground">Improving</span></div>
                    <div className="flex justify-between"><span>85–100</span><span className="font-semibold text-foreground">Optimal</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: AI Coaching */}
            <div className="bg-muted rounded-2xl p-12 border border-primary/10">
              <h3 className="text-3xl font-bold text-foreground mb-6">AI coaching with context</h3>
              <p className="text-lg text-muted-foreground mb-8">
                The AI in Metabrix is different. It knows your scores, your trend, your primary constraint, and your actual data. The advice you get is not generic—it's built from your metabolic signals.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Weekly Nutrition Brief",
                    desc: "Specific to your primary constraint. Not 'eat less sugar' but actionable guidance tied to your actual glycaemic pattern."
                  },
                  {
                    title: "Weekly Exercise Brief",
                    desc: "Training load calibrated to your recovery score and adiposity trend. Push or back off—precisely why."
                  },
                  {
                    title: "Constraint-Specific Protocol",
                    desc: "When a domain is your blocker for 3+ weeks, a deeper guide: evidence base, 4-week protocol, what to watch for."
                  },
                  {
                    title: "Pattern Retrospective",
                    desc: "At 8 weeks, AI-identified correlations specific to you. Your personal metabolic sweet spot."
                  }
                ].map((item, i) => (
                  <Card key={i} className="p-6 bg-white border border-border">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Less than a single private GP appointment. Available every week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Core Tier */}
            <Card className="p-8 border-2 border-border bg-white hover:border-primary transition">
              <h3 className="text-2xl font-bold text-foreground mb-2">Core</h3>
              <p className="text-muted-foreground mb-6">Entry point to metabolic intelligence</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">£39.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-8">
                Start Free Trial
              </Button>
              <ul className="space-y-4">
                {[
                  "5-domain metabolic scoring",
                  "Weekly executive brief",
                  "AI-generated summary",
                  "Action plan with tracking",
                  "12-week forecast",
                  "Wearable sync (Phase 4)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Premium Tier */}
            <Card className="p-8 border-2 border-primary bg-gradient-to-br from-muted to-white relative">
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Premium</h3>
              <p className="text-muted-foreground mb-6">Full platform with AI coaching</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">£79.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-8">
                Start Free Trial
              </Button>
              <ul className="space-y-4">
                {[
                  "Everything in Core, plus:",
                  "Interactive AI coaching chat",
                  "Weekly nutrition brief",
                  "Weekly exercise brief",
                  "Constraint-specific protocol",
                  "Pattern retrospective (8+ weeks)",
                  "PT data sharing",
                  "GP export (PDF)",
                  "Priority support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-muted rounded-xl border border-primary/10 text-center">
            <p className="text-muted-foreground mb-2">Annual billing available</p>
            <p className="text-lg font-semibold text-foreground">
              Core: £399/year | Premium: £799/year
            </p>
          </div>
        </div>
      </section>

      {/* PT Channel Section */}
      <section id="pt-channel" className="py-20 md:py-32 bg-gradient-to-br from-muted to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              For Personal Trainers
            </h2>
            <p className="text-lg text-muted-foreground">
              See the 165 hours you can't see
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A personal trainer sees their client for 2–3 hours per week. The other 165 hours are invisible. You prescribe training, deliver sessions, and operate on client self-report. You're excellent at programming but have almost no visibility into the metabolic environment the training is happening inside.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Metabrix gives you a weekly metabolic snapshot of every client—recovery state, nutrition patterns, glucose trends, and body composition trajectory.
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-foreground">Metabrix does not compete with you. It makes you significantly better at your job.</p>
                <ul className="space-y-2">
                  {[
                    "See recovery state before each session",
                    "Adjust intensity based on metabolic data",
                    "Track client compliance objectively",
                    "Differentiate your service premium"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-white border-2 border-primary/20">
                <h4 className="font-bold text-foreground mb-4">PT Professional</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly subscription</p>
                    <p className="text-2xl font-bold text-foreground">£49/month</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Commission on referred clients</p>
                    <p className="text-2xl font-bold text-primary">15%</p>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Become a Partner
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Founding partners receive 30% commission
                </p>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-xl p-12 border-2 border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-6">PT Partner Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Multi-client dashboard",
                  desc: "View all your referred clients' metabolic snapshots in one place"
                },
                {
                  title: "Weekly digest",
                  desc: "Automated summary of key changes across your client roster"
                },
                {
                  title: "Branded reports",
                  desc: "Export client metabolic summaries with your branding"
                }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium features for the serious
            </h2>
            <p className="text-lg text-muted-foreground">
              Strategic additions that justify premium pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "Clinical Bridge",
                desc: "One-click PDF export designed for medical review. Share your 12-week metabolic trend with your GP or specialist."
              },
              {
                icon: TrendingUp,
                title: "Constraint Momentum",
                desc: "Predictive model showing the future impact of fixing your current primary constraint. See the ROI of your effort."
              },
              {
                icon: Zap,
                title: "Deep Lab Integration",
                desc: "Quarterly biomarker pulls (HbA1c, Insulin, ApoB) integrated directly into your Metabrix engine."
              },
              {
                icon: Users,
                title: "Executive Health Dashboard",
                desc: "Anonymised metabolic resilience view for HR/Benefits leads. Position Metabrix as a high-end executive benefit."
              }
            ].map((item, i) => (
              <Card key={i} className="p-8 bg-muted border-0">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Catch the problem before it becomes the diagnosis
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who are taking control of their metabolic health with deterministic intelligence and personalized AI coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-white/90 text-primary">
              Start Your Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">metabrix.ai</span>
              </div>
              <p className="text-sm text-white/70">Deterministic metabolic intelligence</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">For PTs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Metabrix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
