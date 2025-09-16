import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AlertBadge from "@/components/AlertBadge";
import { 
  Globe, 
  Thermometer, 
  Heart, 
  Swords, 
  TrendingDown,
  ArrowRight,
  AlertTriangle,
  Clock,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const CategorizedDashboard = () => {
  const categories = [
    {
      id: "climate",
      title: "Climate Change & Disasters",
      icon: Thermometer,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      alerts: [
        {
          id: 101,
          region: "Southeast Asia",
          level: "critical" as const,
          confidence: 92,
          timeline: "2-3 weeks",
          description: "Category 5 typhoon formation detected",
          source: "NOAA Satellite",
          timestamp: "2 hours ago",
          location: "Philippines Sea"
        },
        {
          id: 102,
          region: "Amazon Basin",
          level: "warning" as const,
          confidence: 78,
          timeline: "4-6 weeks",
          description: "Severe drought conditions expanding",
          source: "NASA Earth Data",
          timestamp: "6 hours ago",
          location: "Brazil, Peru"
        }
      ]
    },
    {
      id: "health",
      title: "Pandemics & Health",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      alerts: [
        {
          id: 201,
          region: "Central Africa",
          level: "warning" as const,
          confidence: 85,
          timeline: "3-5 weeks",
          description: "Unusual disease outbreak patterns",
          source: "WHO Alert System",
          timestamp: "4 hours ago",
          location: "Democratic Republic of Congo"
        },
        {
          id: 202,
          region: "Southeast Europe",
          level: "stable" as const,
          confidence: 65,
          timeline: "Monitoring",
          description: "Respiratory illness trends normal",
          source: "ECDC Surveillance",
          timestamp: "12 hours ago",
          location: "Balkans Region"
        }
      ]
    },
    {
      id: "conflict",
      title: "Armed Conflict",
      icon: Swords,
      color: "text-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      alerts: [
        {
          id: 301,
          region: "Eastern Europe",
          level: "critical" as const,
          confidence: 94,
          timeline: "1-2 weeks",
          description: "Military buildup near disputed territories",
          source: "Satellite Intelligence",
          timestamp: "1 hour ago",
          location: "Border Region"
        },
        {
          id: 302,
          region: "Middle East",
          level: "warning" as const,
          confidence: 82,
          timeline: "2-4 weeks",
          description: "Increased militant activity detected",
          source: "OSINT Analysis",
          timestamp: "8 hours ago",
          location: "Syria-Iraq Border"
        }
      ]
    },
    {
      id: "economic",
      title: "Economic Collapse",
      icon: TrendingDown,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      alerts: [
        {
          id: 401,
          region: "South America",
          level: "warning" as const,
          confidence: 76,
          timeline: "6-8 weeks",
          description: "Currency instability indicators rising",
          source: "Financial Markets",
          timestamp: "3 hours ago",
          location: "Argentina, Venezuela"
        },
        {
          id: 402,
          region: "Global Markets",
          level: "stable" as const,
          confidence: 72,
          timeline: "Monitoring",
          description: "Commodity prices within normal range",
          source: "Market Analysis",
          timestamp: "1 day ago",
          location: "Worldwide"
        }
      ]
    }
  ];

  const getTotalAlerts = () => {
    return categories.reduce((total, category) => total + category.alerts.length, 0);
  };

  const getCriticalAlerts = () => {
    return categories.reduce((total, category) => 
      total + category.alerts.filter(alert => alert.level === 'critical').length, 0
    );
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">GCAI Crisis Monitor</h1>
              <p className="text-muted-foreground">Global Crisis Artificial Intelligence - Real-time threat categorization</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
              <AlertTriangle className="w-4 h-4 text-critical" />
              <span className="text-sm font-medium">{getCriticalAlerts()} Critical Alerts</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{getTotalAlerts()} Total Active</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Last updated: 2 min ago</span>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const criticalCount = category.alerts.filter(alert => alert.level === 'critical').length;
            const warningCount = category.alerts.filter(alert => alert.level === 'warning').length;
            const stableCount = category.alerts.filter(alert => alert.level === 'stable').length;
            
            return (
              <Card key={category.id} className={`${category.borderColor} border-2 hover:shadow-lg transition-shadow`}>
                <CardHeader className={category.bgColor}>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                      <span>{category.title}</span>
                    </div>
                    <div className="flex gap-2">
                      {criticalCount > 0 && (
                        <span className="px-2 py-1 bg-critical text-critical-foreground rounded-full text-xs font-medium">
                          {criticalCount}
                        </span>
                      )}
                      {warningCount > 0 && (
                        <span className="px-2 py-1 bg-warning text-warning-foreground rounded-full text-xs font-medium">
                          {warningCount}
                        </span>
                      )}
                      {stableCount > 0 && (
                        <span className="px-2 py-1 bg-stable text-stable-foreground rounded-full text-xs font-medium">
                          {stableCount}
                        </span>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3 mb-4">
                    {category.alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className="border border-border rounded-lg p-3 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <AlertBadge level={alert.level}>{alert.level.toUpperCase()}</AlertBadge>
                            <span className="font-medium text-sm">{alert.region}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{alert.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{alert.location}</span>
                          </div>
                          <span>• {alert.confidence}% confidence</span>
                          <span>• {alert.source}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full"
                  >
                    <Link to={`/category/${category.id}`}>
                      View All {category.title} Alerts
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorizedDashboard;