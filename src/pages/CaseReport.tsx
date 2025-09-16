import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AlertBadge from "@/components/AlertBadge";
import { 
  ArrowLeft, 
  TrendingUp, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  FileText,
  Calendar
} from "lucide-react";

const CaseReport = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from an API
  const caseData = {
    id: id || "1",
    region: "Eastern Europe",
    type: "Conflict",
    level: "critical" as const,
    confidence: 94,
    title: "Military Buildup and Border Tensions",
    description: "Advanced AI analysis has detected significant military mobilization patterns near disputed border regions in Eastern Europe. Satellite imagery, communications intercepts, and economic indicators all point to escalating tensions.",
    timeline: "2-4 weeks",
    lastUpdated: "2024-01-15 14:30 UTC",
    coordinates: "50.4501° N, 30.5234° E",
    escalationStages: [
      { stage: "Initial Detection", date: "2024-01-10", status: "completed", description: "Unusual military movements detected" },
      { stage: "Pattern Analysis", date: "2024-01-12", status: "completed", description: "Confirmed mobilization patterns" },
      { stage: "Risk Assessment", date: "2024-01-14", status: "completed", description: "High probability conflict scenario" },
      { stage: "Alert Generation", date: "2024-01-15", status: "current", description: "Critical alert issued to stakeholders" },
      { stage: "Mitigation Phase", date: "Projected: 2024-01-20", status: "pending", description: "Diplomatic intervention window" }
    ],
    mitigationSteps: [
      "Immediate diplomatic engagement through established channels",
      "Economic pressure through coordinated sanctions",
      "Military deterrence through allied force positioning",
      "Humanitarian corridor establishment for civilian populations",
      "International observer deployment to contested areas"
    ],
    dataSourcesCount: 247,
    keyIndicators: [
      { name: "Military Movement Index", value: 94, trend: "increasing" },
      { name: "Economic Strain Indicators", value: 78, trend: "stable" },
      { name: "Diplomatic Activity Level", value: 89, trend: "increasing" },
      { name: "Media Sentiment Analysis", value: 71, trend: "decreasing" }
    ]
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/dashboard" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
          </Button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{caseData.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{caseData.region}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Updated: {caseData.lastUpdated}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AlertBadge level={caseData.level}>{caseData.type}</AlertBadge>
                <Badge variant="secondary">Case #{caseData.id}</Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">{caseData.confidence}%</span>
              </div>
              <p className="text-sm text-muted-foreground">AI Confidence</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Threat Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Threat Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {caseData.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Location</h4>
                    <p className="text-sm text-muted-foreground">{caseData.coordinates}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Data Sources</h4>
                    <p className="text-sm text-muted-foreground">{caseData.dataSourcesCount} active sources</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Escalation Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Escalation Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {caseData.escalationStages.map((stage, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {stage.status === "completed" && <CheckCircle className="w-5 h-5 text-stable" />}
                        {stage.status === "current" && <AlertTriangle className="w-5 h-5 text-warning" />}
                        {stage.status === "pending" && <div className="w-5 h-5 border-2 border-muted rounded-full" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{stage.stage}</h4>
                          <Badge variant={stage.status === "current" ? "default" : "secondary"} className="text-xs">
                            {stage.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{stage.description}</p>
                        <p className="text-xs text-muted-foreground">{stage.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mitigation Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Mitigation Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {caseData.mitigationSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Indicators */}
            <Card>
              <CardHeader>
                <CardTitle>Key Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {caseData.keyIndicators.map((indicator, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{indicator.name}</span>
                      <span className="text-sm font-bold">{indicator.value}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${indicator.value}%` }}
                      ></div>
                    </div>
                    <p className={`text-xs mt-1 ${
                      indicator.trend === "increasing" ? "text-warning" : 
                      indicator.trend === "decreasing" ? "text-stable" : 
                      "text-muted-foreground"
                    }`}>
                      Trend: {indicator.trend}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="sm">Export Report</Button>
                <Button variant="outline" className="w-full" size="sm">Share with Team</Button>
                <Button variant="outline" className="w-full" size="sm">Set Alert Notifications</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseReport;