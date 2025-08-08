import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Track your nutrition with
                <span className="block">AI-powered precision</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Simply snap a photo of your meal in Telegram. Our AI instantly recognizes food and counts calories, making nutrition tracking effortless.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Tracking
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No manual input required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Works with Telegram</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroIllustration} 
              alt="AI Food Recognition Illustration" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;