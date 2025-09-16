import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AlertBadge from "@/components/AlertBadge";
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  TrendingUp, 
  Radio, 
  Newspaper, 
  Satellite,
  AlertTriangle,
  Eye,
  Download,
  Share2
} from "lucide-react";

const EnhancedCaseReport = () => {
  const { id } = useParams();
  
  // Enhanced alert data with full case report details
  const alertDatabase = {
    "101": {
      id: 101,
      region: "Southeast Asia",
      level: "critical" as const,
      confidence: 92,
      timeline: "2-3 weeks",
      title: "Category 5 Super Typhoon Formation - Philippines Sea",
      description: "Category 5 typhoon formation detected with unprecedented wind speeds approaching 200 mph",
      source: "NOAA Satellite Network",
      sourceType: "satellite" as const,
      timestamp: "2 hours ago",
      location: "Philippines Sea, 15.2°N 125.8°E",
      category: "Climate Change & Disasters",
      fullReport: {
        executiveSummary: "A rapidly intensifying tropical cyclone has reached Category 5 strength in the Philippines Sea, showing unprecedented development patterns that pose extreme threat to coastal populations across multiple nations.",
        keyFindings: [
          "Wind speeds reached 195 mph (315 km/h) - highest recorded in this region",
          "Rapid intensification rate of 45 mph in 24 hours exceeds historical norms",
          "Storm surge projections indicate 15-20 foot waves for coastal areas",
          "Satellite thermal imaging shows unusually compact eye formation"
        ],
        impactAssessment: {
          immediate: "Approximately 12 million people in direct path across Philippines, Taiwan, and southern Japan",
          economic: "Estimated $8-15 billion in potential damages to infrastructure and agriculture",
          humanitarian: "Mass evacuation required for coastal zones; hospital and emergency services at risk"
        },
        dataPoints: [
          { metric: "Central Pressure", value: "895 mb", significance: "Indicates extreme intensity" },
          { metric: "Forward Speed", value: "12 mph NW", significance: "Slow movement increases damage potential" },
          { metric: "Eye Diameter", value: "8 miles", significance: "Compact structure suggests intense winds" },
          { metric: "Sea Surface Temperature", value: "31°C", significance: "Optimal conditions for strengthening" }
        ]
      }
    },
    "301": {
      id: 301,
      region: "Eastern Europe",
      level: "critical" as const,
      confidence: 94,
      timeline: "1-2 weeks",
      title: "Military Buildup Analysis - Eastern European Border",
      description: "Massive military buildup detected near disputed territories with armored divisions",
      source: "Satellite Intelligence Network",
      sourceType: "satellite" as const,
      timestamp: "1 hour ago",
      location: "Border Region - Classified Coordinates",
      category: "Armed Conflict",
      fullReport: {
        executiveSummary: "Intelligence analysis confirms unprecedented military concentration along contested border regions, with deployment patterns indicating potential for large-scale conventional operations within 1-2 weeks.",
        keyFindings: [
          "Over 40,000 troops identified through satellite imagery",
          "120+ main battle tanks and armored vehicles positioned",
          "Field hospitals and supply depots established",
          "Communication jamming equipment detected"
        ],
        impactAssessment: {
          immediate: "Civilian population of 2.3 million in potential conflict zone",
          economic: "Regional trade routes and energy infrastructure at severe risk",
          humanitarian: "Mass displacement scenarios being prepared by international agencies"
        },
        dataPoints: [
          { metric: "Troop Concentration", value: "40,000+", significance: "Largest buildup in 10 years" },
          { metric: "Armored Units", value: "120+ vehicles", significance: "Indicates offensive capability" },
          { metric: "Logistics Score", value: "85/100", significance: "High operational readiness" },
          { metric: "Communication Activity", value: "300% increase", significance: "Active coordination detected" }
        ]
      }
    },
    "201": {
      id: 201,
      region: "Central Africa",
      level: "warning" as const,
      confidence: 85,
      timeline: "3-5 weeks",
      title: "Viral Hemorrhagic Fever Outbreak - Central Africa",
      description: "Unusual disease outbreak patterns showing rapid spread potential",
      source: "WHO Alert System",
      sourceType: "news" as const,
      timestamp: "4 hours ago",
      location: "Democratic Republic of Congo - Kinshasa Province",
      category: "Pandemics & Health",
      fullReport: {
        executiveSummary: "A viral hemorrhagic fever outbreak in Central Africa shows concerning transmission patterns, with WHO deploying emergency response teams to contain potential regional spread.",
        keyFindings: [
          "47 confirmed cases with 62% mortality rate",
          "Human-to-human transmission confirmed in healthcare settings",
          "Genetic sequencing shows novel viral strain characteristics",
          "Healthcare infrastructure severely strained in affected areas"
        ],
        impactAssessment: {
          immediate: "Population of 850,000 in immediate risk zone",
          economic: "Regional trade and travel restrictions likely",
          humanitarian: "Medical supply shortages and healthcare worker infections reported"
        },
        dataPoints: [
          { metric: "Case Fatality Rate", value: "62%", significance: "Extremely high mortality" },
          { metric: "Reproduction Rate", value: "R₀ = 2.3", significance: "High transmission potential" },
          { metric: "Incubation Period", value: "5-8 days", significance: "Rapid symptom onset" },
          { metric: "Healthcare Capacity", value: "23% available", significance: "System near collapse" }
        ]
      }
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

  const alert = alertDatabase[id as keyof typeof alertDatabase];
  
  if (!alert) {
    return (
      <div className="min-h-screen bg-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Report Not Found</h1>
          <Button asChild>
            <Link to="/dashboard">Return to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  const SourceIcon = getSourceIcon(alert.sourceType);

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertBadge level={alert.level}>{alert.level.toUpperCase()}</AlertBadge>
              <span className="text-sm text-muted-foreground">Case Report #{alert.id}</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{alert.title}</h1>
            <p className="text-muted-foreground mb-4">{alert.category}</p>
            
            {/* Metadata Bar */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Updated {alert.timestamp}</span>
              </div>
              <div className="flex items-center gap-1">
                <SourceIcon className="w-4 h-4" />
                <span>{alert.source}</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>{alert.confidence}% confidence</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{alert.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Report
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View on Map
              </Button>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{alert.fullReport?.executiveSummary}</p>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Key Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {alert.fullReport?.keyFindings.map((finding, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{finding}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Impact Assessment */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Impact Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-critical">Immediate Impact</h4>
                <p className="text-sm text-muted-foreground">{alert.fullReport?.impactAssessment.immediate}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-warning">Economic Impact</h4>
                <p className="text-sm text-muted-foreground">{alert.fullReport?.impactAssessment.economic}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Humanitarian Impact</h4>
                <p className="text-sm text-muted-foreground">{alert.fullReport?.impactAssessment.humanitarian}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Analysis */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Critical Data Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {alert.fullReport?.dataPoints.map((dataPoint, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{dataPoint.metric}</span>
                    <span className="text-lg font-bold text-primary">{dataPoint.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{dataPoint.significance}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline & Projections */}
        <Card>
          <CardHeader>
            <CardTitle>Timeline & Projections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <Clock className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Expected Development Timeline</h4>
                <p className="text-muted-foreground">{alert.timeline}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Continuous monitoring and assessment updates provided every 6 hours or as conditions change.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedCaseReport;