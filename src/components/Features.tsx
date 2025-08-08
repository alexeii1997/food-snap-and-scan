import { Card, CardContent } from "@/components/ui/card";
import { Camera, Brain, Users, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Photo-Based Tracking",
    description: "Simply snap photos of your meals through Telegram for instant logging."
  },
  {
    icon: Brain,
    title: "AI Food Recognition",
    description: "Advanced AI identifies food items and nutritional content with high accuracy."
  },
  {
    icon: BarChart3,
    title: "Calorie Counting",
    description: "Automatic calorie calculation based on portion sizes and food types."
  },
  {
    icon: Users,
    title: "Dietitian Portal",
    description: "Professional dashboard for dietitians to monitor client progress."
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description: "Get immediate feedback on your nutritional intake without delays."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and secure, with full control over sharing."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for comprehensive nutrition tracking and professional dietary guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;