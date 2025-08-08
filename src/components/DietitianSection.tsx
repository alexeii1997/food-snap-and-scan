import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, UserCheck, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Client Monitoring",
    description: "Track multiple clients' nutrition data in one centralized dashboard."
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Visualize client progress with detailed charts and nutrition trends."
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Get instant notifications when clients log their meals."
  }
];

const DietitianSection = () => {
  return (
    <section id="dietitians" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                For Nutrition Professionals
              </h2>
              <p className="text-xl text-muted-foreground">
                Empower your practice with comprehensive client monitoring and data-driven insights.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Request Dietitian Access
              </Button>
              <Button variant="outline" size="lg">
                View Demo Dashboard
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Client Overview</h3>
                    <span className="text-xs bg-accent px-2 py-1 rounded-full">Live Dashboard</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Active Clients</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Photos Today</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Compliance</span>
                      <span className="font-medium text-green-600">92%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Sarah M.", action: "logged breakfast", time: "2m ago" },
                      { name: "John D.", action: "completed daily goal", time: "15m ago" },
                      { name: "Emma L.", action: "logged lunch", time: "1h ago" }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <div className="flex-1 text-sm">
                          <span className="font-medium">{activity.name}</span>
                          <span className="text-muted-foreground"> {activity.action}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DietitianSection;