import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  IndianRupee,
  TrendingUp,
  Shield,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/hero-gov.jpg";

const Home = () => {
  const features = [
    {
      icon: IndianRupee,
      title: "Transparent Fund Flow",
      description: "Track funds from Centre to State, District, and Implementing Agencies in real-time",
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Aadhar-based authentication ensuring secure access for all authorized officials",
    },
    {
      icon: FileText,
      title: "Digital Documentation",
      description: "Seamless upload, review, and e-signing of project plans and reports",
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Built-in communication tools for meetings and coordination across all levels",
    },
  ];

  const stats = [
    { value: "₹5,000+ Cr", label: "Funds Allocated" },
    { value: "28", label: "States Connected" },
    { value: "600+", label: "Districts Active" },
    { value: "10,000+", label: "Projects Managed" },
  ];

  const benefits = [
    "Real-time fund flow tracking and utilization monitoring",
    "Automated approval workflows reducing processing time",
    "Comprehensive analytics and reporting dashboards",
    "Role-based access ensuring data security",
    "Mobile-responsive design for on-the-go access",
    "Bilingual support (English/Hindi) for accessibility",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="gradient-hero absolute inset-0 opacity-90" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-12 h-12" />
              <div>
                <h1 className="text-5xl font-bold mb-2">PM-AJAY Portal</h1>
                <p className="text-xl opacity-90">Pradhan Mantri Awas Yojana</p>
              </div>
            </div>
            <p className="text-xl mb-8 opacity-95 leading-relaxed">
              A unified digital platform for transparent fund management, monitoring, and collaboration
              across Central, State, District, and Implementing Agency levels.
            </p>
            <div className="flex gap-4">
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="shadow-strong">
                  Access Portal
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-y border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed for efficient fund management and seamless coordination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="shadow-card hover:shadow-elevated transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why PM-AJAY Portal?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Built following Government of India's GIGW 3.0 and UX4G guidelines, ensuring
                accessibility, security, and ease of use for all government officials.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle>Latest Announcements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold mb-2">New Fund Allocation Guidelines</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Updated guidelines for FY 2024-25 fund allocation and utilization monitoring.
                  </p>
                  <p className="text-xs text-muted-foreground">Posted: January 15, 2025</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                  <h4 className="font-semibold mb-2">Quarterly Review Schedule</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    All state coordinators are requested to attend the Q4 review meeting on Feb 5, 2025.
                  </p>
                  <p className="text-xs text-muted-foreground">Posted: January 12, 2025</p>
                </div>
                <div className="p-4 bg-success/5 rounded-lg border-l-4 border-success">
                  <h4 className="font-semibold mb-2">System Enhancement Update</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    New features added: Enhanced analytics dashboard and automated report generation.
                  </p>
                  <p className="text-xs text-muted-foreground">Posted: January 10, 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Access the PM-AJAY Portal now and experience transparent, efficient fund management
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="shadow-strong">
              Login to Portal
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © 2025 Government of India | Ministry of Housing and Urban Affairs
          </p>
          <p>
            Designed following GIGW 3.0 & UX4G Guidelines | WCAG 2.1 AA Compliant
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
