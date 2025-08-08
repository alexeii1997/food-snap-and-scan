import photoIcon from "@/assets/photo-icon.png";
import aiIcon from "@/assets/ai-icon.png";
import dashboardIcon from "@/assets/dashboard-icon.png";

const steps = [
  {
    icon: photoIcon,
    title: "Snap a Photo",
    description: "Take a picture of your meal directly in Telegram - no special app needed."
  },
  {
    icon: aiIcon,
    title: "AI Analysis",
    description: "Our AI instantly recognizes the food items and calculates accurate calorie counts."
  },
  {
    icon: dashboardIcon,
    title: "Track Progress",
    description: "View your nutrition data and share insights with your dietitian."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to revolutionize your nutrition tracking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-card">
                    <img src={step.icon} alt={step.title} className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <div className="w-full h-px bg-border relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-border border-y-[3px] border-y-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;