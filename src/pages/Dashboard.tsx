import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AlertBadge from "@/components/AlertBadge";
import { Filter, Map, AlertTriangle, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const alerts = [
    {
      id: 1,
      region: "Eastern Europe",
      type: "Conflict",
      level: "critical" as const,
      confidence: 94,
      timeline: "2-4 weeks",
      description: "Military buildup detected near disputed border regions"
    },
    {
      id: 2,
      region: "Southeast Asia",
      type: "Climate",
      level: "warning" as const,
      confidence: 87,
      timeline: "4-8 weeks",
      description: "Unusual weather patterns suggesting potential severe flooding"
    },
    {
      id: 3,
      region: "Sub-Saharan Africa",
      type: "Pandemic",
      level: "warning" as const,
      confidence: 78,
      timeline: "6-12 weeks",
      description: "Disease outbreak patterns detected in remote regions"
    },
    {
      id: 4,
      region: "Western Europe",
      type: "Economy",
      level: "stable" as const,
      confidence: 65,
      timeline: "Monitoring",
      description: "Economic indicators within normal ranges"
    }
  ];

  const filterOptions = ["All Types", "Conflict", "Climate", "Pandemic", "Economy"];

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Global Crisis Dashboard</h1>
          <p className="text-muted-foreground">Real-time monitoring of potential global crisis indicators</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Crisis Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {filterOptions.map((option) => (
                  <Button
                    key={option}
                    variant={option === "All Types" ? "default" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    {option}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Active Alerts</span>
                  <span className="font-medium">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">High Priority</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Regions Monitored</span>
                  <span className="font-medium">195</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* World Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="w-5 h-5" />
                  Global Crisis Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="crisis-map h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive world map with crisis indicators</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="inline-block w-3 h-3 bg-critical rounded-full mr-2"></span>Critical
                      <span className="inline-block w-3 h-3 bg-warning rounded-full mr-2 ml-4"></span>Warning
                      <span className="inline-block w-3 h-3 bg-stable rounded-full mr-2 ml-4"></span>Stable
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Active Crisis Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="border border-border rounded-lg p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold">{alert.region}</h3>
                            <AlertBadge level={alert.level}>{alert.type}</AlertBadge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/case-report/${alert.id}`}>View Details</Link>
                        </Button>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{alert.confidence}% confidence</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{alert.timeline}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;