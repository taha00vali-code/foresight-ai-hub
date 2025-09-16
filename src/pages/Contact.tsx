import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Building, Mail, Phone, MapPin, Users, Shield, Globe } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    organizationType: "",
    message: "",
    useCase: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });
    setFormData({
      name: "",
      email: "",
      organization: "",
      role: "",
      organizationType: "",
      message: "",
      useCase: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const partnerTypes = [
    {
      icon: Shield,
      title: "Government Agencies",
      description: "Defense departments, intelligence agencies, and emergency management organizations"
    },
    {
      icon: Globe,
      title: "International Organizations",
      description: "UN agencies, NATO, EU institutions, and regional security organizations"
    },
    {
      icon: Users,
      title: "NGOs & Humanitarian",
      description: "Relief organizations, humanitarian agencies, and crisis response NGOs"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Partner with GCAI</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our team to explore how GCAI can enhance your organization's 
            crisis preparedness and response capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Demo</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours to schedule 
                  a personalized demonstration of GCAI's capabilities.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Your Role</Label>
                      <Input
                        id="role"
                        type="text"
                        value={formData.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                        className="mt-1"
                        placeholder="e.g., Security Analyst, Policy Director"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="organizationType">Organization Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("organizationType", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="government">Government Agency</SelectItem>
                        <SelectItem value="international">International Organization</SelectItem>
                        <SelectItem value="ngo">NGO/Humanitarian</SelectItem>
                        <SelectItem value="private">Private Sector</SelectItem>
                        <SelectItem value="academic">Academic/Research</SelectItem>
                        <SelectItem value="investor">Investor/VC</SelectItem>
                        <SelectItem value="media">Media/Press</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="useCase">Primary Use Case</Label>
                    <Select onValueChange={(value) => handleInputChange("useCase", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="How would you use GCAI?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conflict">Conflict Prevention</SelectItem>
                        <SelectItem value="climate">Climate Crisis Monitoring</SelectItem>
                        <SelectItem value="pandemic">Pandemic Early Warning</SelectItem>
                        <SelectItem value="economic">Economic Stability Analysis</SelectItem>
                        <SelectItem value="humanitarian">Humanitarian Response</SelectItem>
                        <SelectItem value="intelligence">Intelligence Analysis</SelectItem>
                        <SelectItem value="investment">Investment Research</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-1"
                      rows={4}
                      placeholder="Tell us about your specific requirements or questions..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">partnerships@gcai.global</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-GCAI</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-sm text-muted-foreground">Paris, France</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partner Types */}
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle>Who We Work With</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {partnerTypes.map((partner, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <partner.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{partner.title}</h3>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Security Note */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-2">Secure Communications</h3>
                    <p className="text-sm text-muted-foreground">
                      All communications are encrypted and handled according to 
                      government-grade security protocols.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;