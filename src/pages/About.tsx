import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Target, Globe, Zap } from "lucide-react";

const About = () => {
  const endorsements = [
    {
      organization: "NATO Innovation Hub",
      status: "Partner Interest",
      description: "Recognized for breakthrough crisis prediction technology"
    },
    {
      organization: "Station F Fighters",
      status: "Program Graduate",
      description: "Selected for defense & security innovation program"
    },
    {
      organization: "Founder Institute",
      status: "Accelerator Alumni", 
      description: "Global pre-seed accelerator program completion"
    }
  ];

  const teamValues = [
    {
      icon: Target,
      title: "Precision",
      description: "Our AI models achieve 94% accuracy in crisis prediction, validated against historical data"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Military-grade security protocols protect sensitive intelligence and analysis"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Monitoring 195+ countries and territories for comprehensive crisis coverage"
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Real-time analysis delivering alerts within minutes of detection"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About GCAI</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Global Crisis Anticipator Initiative represents the next evolution in crisis management, 
            combining artificial intelligence with global intelligence networks to predict and prevent disasters 
            before they unfold.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To revolutionize global crisis management through advanced AI-powered early warning systems, 
                enabling governments, NGOs, and international organizations to respond proactively rather than 
                reactively to emerging threats. We believe that with the right intelligence and sufficient warning, 
                most crises can be mitigated or prevented entirely.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Endorsements & Recognition */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Global Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {endorsements.map((endorsement, index) => (
              <Card key={index} className="text-center border-card-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{endorsement.organization}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{endorsement.status}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{endorsement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Trust GCAI</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className="text-center border-card-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Overview */}
        <div className="mb-16">
          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    AI & Machine Learning
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Deep learning neural networks for pattern recognition</li>
                    <li>• Natural language processing for sentiment analysis</li>
                    <li>• Computer vision for satellite imagery analysis</li>
                    <li>• Predictive modeling with 94% accuracy rate</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Data Sources
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Open source intelligence (OSINT)</li>
                    <li>• Satellite imagery and remote sensing</li>
                    <li>• Economic and financial indicators</li>
                    <li>• Social media and news sentiment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Crisis Management?</h2>
              <p className="text-lg mb-6 opacity-90">
                Join governments, NGOs, and international organizations already using GCAI 
                to stay ahead of global crises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Request Demo
                </button>
                <button className="border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;