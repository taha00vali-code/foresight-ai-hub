import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dashboard.jpg";
import { Shield, Globe, TrendingUp, Users } from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Monitoring",
      description: "24/7 surveillance of worldwide crisis indicators across all domains"
    },
    {
      icon: Shield,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms predict crisis emergence"
    },
    {
      icon: TrendingUp,
      title: "Early Warning System",
      description: "Get alerts before crises escalate into full-scale disasters"
    },
    {
      icon: Users,
      title: "Stakeholder Network",
      description: "Connect with NGOs, governments, and international organizations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Predicting Tomorrow's 
                <span className="block text-accent"> Crises Today</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                GCAI uses advanced AI to detect and analyze potential global crises before they escalate - 
                from armed conflicts to pandemics, climate disasters to economic collapse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </div>
            </div>
            <div className="fade-in">
              <img 
                src={heroImage} 
                alt="GCAI Crisis Dashboard Interface" 
                className="rounded-lg shadow-professional w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Next-Generation Crisis Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI system continuously monitors global data sources to provide early warnings 
              for potential crises across multiple domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-card-border hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-card">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Trusted by Global Leaders</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded"></div>
                <span className="font-medium">NATO Innovation Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded"></div>
                <span className="font-medium">Station F Fighters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded"></div>
                <span className="font-medium">Founder Institute</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;