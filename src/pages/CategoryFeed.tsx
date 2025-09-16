import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AlertBadge from "@/components/AlertBadge";
import { 
  ArrowLeft, 
  Thermometer, 
  Heart, 
  Swords, 
  TrendingDown,
  Clock,
  MapPin,
  TrendingUp,
  Radio,
  Newspaper,
  Satellite
} from "lucide-react";

const CategoryFeed = () => {
  const { categoryId } = useParams();
  
  const categoryData = {
    climate: {
      title: "Climate Change & Disasters",
      icon: Thermometer,
      color: "text-orange-600",
      alerts: [
        {
          id: 101,
          region: "Southeast Asia",
          level: "critical" as const,
          confidence: 92,
          timeline: "2-3 weeks",
          description: "Category 5 typhoon formation detected with unprecedented wind speeds approaching 200 mph",
          source: "NOAA Satellite",
          sourceType: "satellite" as const,
          timestamp: "2 hours ago",
          location: "Philippines Sea, 15.2°N 125.8°E",
          details: "Advanced satellite imagery shows rapid intensification. Emergency preparations recommended for coastal Philippines and Taiwan."
        },
        {
          id: 102,
          region: "Amazon Basin",
          level: "warning" as const,
          confidence: 78,
          timeline: "4-6 weeks",
          description: "Severe drought conditions expanding rapidly across multiple river systems",
          source: "NASA Earth Data",
          sourceType: "satellite" as const,
          timestamp: "6 hours ago",
          location: "Brazil, Peru - Multiple Tributaries",
          details: "River levels 40% below seasonal average. Potential for massive ecological and humanitarian impact."
        },
        {
          id: 103,
          region: "European Alps",
          level: "warning" as const,
          confidence: 84,
          timeline: "1-2 weeks",
          description: "Unprecedented glacial melt rate detected",
          source: "ESA Sentinel",
          sourceType: "satellite" as const,
          timestamp: "8 hours ago",
          location: "Switzerland, Austria, Italy",
          details: "Glacial retreat rate 300% above historical average. Flood risk for downstream communities."
        },
        {
          id: 104,
          region: "Australian Outback",
          level: "stable" as const,
          confidence: 65,
          timeline: "Monitoring",
          description: "Wildfire risk assessment within normal parameters",
          source: "Australian Bureau",
          sourceType: "news" as const,
          timestamp: "1 day ago",
          location: "New South Wales, Victoria",
          details: "Current conditions favorable. Continued monitoring of temperature and humidity trends."
        }
      ]
    },
    health: {
      title: "Pandemics & Health",
      icon: Heart,
      color: "text-red-600",
      alerts: [
        {
          id: 201,
          region: "Central Africa",
          level: "warning" as const,
          confidence: 85,
          timeline: "3-5 weeks",
          description: "Unusual disease outbreak patterns showing rapid spread potential",
          source: "WHO Alert System",
          sourceType: "news" as const,
          timestamp: "4 hours ago",
          location: "Democratic Republic of Congo - Kinshasa Province",
          details: "Viral hemorrhagic fever-like symptoms. WHO deploying emergency response team."
        },
        {
          id: 202,
          region: "Southeast Europe",
          level: "stable" as const,
          confidence: 65,
          timeline: "Monitoring",
          description: "Respiratory illness trends within seasonal normal range",
          source: "ECDC Surveillance",
          sourceType: "news" as const,
          timestamp: "12 hours ago",
          location: "Balkans Region - Multiple Countries",
          details: "Hospital admission rates stable. Vaccination campaigns showing positive results."
        },
        {
          id: 203,
          region: "South Asia",
          level: "critical" as const,
          confidence: 89,
          timeline: "2-4 weeks",
          description: "Antibiotic-resistant strain spreading between major cities",
          source: "Regional Health Network",
          sourceType: "radio" as const,
          timestamp: "1 hour ago",
          location: "India - Delhi, Mumbai, Kolkata",
          details: "Multi-drug resistant tuberculosis variant. International health emergency protocols activated."
        }
      ]
    },
    conflict: {
      title: "Armed Conflict",
      icon: Swords,
      color: "text-red-700",
      alerts: [
        {
          id: 301,
          region: "Eastern Europe",
          level: "critical" as const,
          confidence: 94,
          timeline: "1-2 weeks",
          description: "Massive military buildup detected near disputed territories with armored divisions",
          source: "Satellite Intelligence",
          sourceType: "satellite" as const,
          timestamp: "1 hour ago",
          location: "Border Region - Classified Coordinates",
          details: "Over 40,000 troops and heavy equipment positioned. Diplomatic channels report breakdown in negotiations."
        },
        {
          id: 302,
          region: "Middle East",
          level: "warning" as const,
          confidence: 82,
          timeline: "2-4 weeks",
          description: "Increased militant activity and weapons trafficking detected",
          source: "OSINT Analysis",
          sourceType: "radio" as const,
          timestamp: "8 hours ago",
          location: "Syria-Iraq Border - Multiple Crossing Points",
          details: "Social media chatter indicates coordinated operations. Cross-border movement increasing."
        },
        {
          id: 303,
          region: "West Africa",
          level: "warning" as const,
          confidence: 76,
          timeline: "3-6 weeks",
          description: "Ethnic tensions escalating in multiple provinces",
          source: "Local News Networks",
          sourceType: "news" as const,
          timestamp: "5 hours ago",
          location: "Mali - Northern Provinces",
          details: "Reports of village evacuations. UN peacekeeping forces on high alert."
        }
      ]
    },
    economic: {
      title: "Economic Collapse",
      icon: TrendingDown,
      color: "text-blue-600",
      alerts: [
        {
          id: 401,
          region: "South America",
          level: "warning" as const,
          confidence: 76,
          timeline: "6-8 weeks",
          description: "Currency instability indicators rising with hyperinflation risk",
          source: "Financial Markets",
          sourceType: "news" as const,
          timestamp: "3 hours ago",
          location: "Argentina, Venezuela - National Currencies",
          details: "Daily devaluation exceeding 2%. Central bank reserves critically low."
        },
        {
          id: 402,
          region: "Global Markets",
          level: "stable" as const,
          confidence: 72,
          timeline: "Monitoring",
          description: "Commodity prices and global indices within normal volatility range",
          source: "Market Analysis",
          sourceType: "news" as const,
          timestamp: "1 day ago",
          location: "Worldwide - Major Exchanges",
          details: "Oil, gold, and agricultural commodities showing typical seasonal patterns."
        },
        {
          id: 403,
          region: "Southeast Asia",
          level: "warning" as const,
          confidence: 81,
          timeline: "4-8 weeks",
          description: "Banking sector stress tests showing vulnerability",
          source: "Central Bank Reports",
          sourceType: "news" as const,
          timestamp: "6 hours ago",
          location: "Thailand, Malaysia - Banking Sectors",
          details: "Non-performing loans increasing. Credit tightening across multiple institutions."
        }
      ]
    }
  };

  const getSourceIcon = (sourceType: string) => {
    switch (sourceType) {
      case 'satellite': return Satellite;
      case 'radio': return Radio;
      case 'news': return Newspaper;
      default: return Newspaper;
    }
  };

  const currentCategory = categoryData[categoryId as keyof typeof categoryData];
  
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Button asChild>
            <Link to="/dashboard">Return to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = currentCategory.icon;
  const criticalCount = currentCategory.alerts.filter(alert => alert.level === 'critical').length;
  const warningCount = currentCategory.alerts.filter(alert => alert.level === 'warning').length;

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <IconComponent className={`w-8 h-8 ${currentCategory.color}`} />
            <div>
              <h1 className="text-3xl font-bold">{currentCategory.title}</h1>
              <p className="text-muted-foreground">
                {currentCategory.alerts.length} alerts • {criticalCount} critical • {warningCount} warnings
              </p>
            </div>
          </div>
        </div>

        {/* Alerts Feed */}
        <div className="space-y-4">
          {currentCategory.alerts.map((alert) => {
            const SourceIcon = getSourceIcon(alert.sourceType);
            
            return (
              <Card key={alert.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <AlertBadge level={alert.level}>{alert.level.toUpperCase()}</AlertBadge>
                      <div>
                        <CardTitle className="text-xl">{alert.region}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{alert.timestamp}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <SourceIcon className="w-3 h-3" />
                            <span>{alert.source}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>{alert.confidence}% confidence</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/case-report/${alert.id}`}>
                        View Full Report
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Alert Description</h3>
                    <p className="text-muted-foreground">{alert.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Detailed Analysis</h3>
                    <p className="text-muted-foreground">{alert.details}</p>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span><strong>Location:</strong> {alert.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span><strong>Timeline:</strong> {alert.timeline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFeed;