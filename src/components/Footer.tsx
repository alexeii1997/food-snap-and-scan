import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/b9e6bba1-c2dc-4d3c-903f-08aeb5b3db0b.png" alt="Yizh" className="h-6 w-6" />
              <span className="text-lg font-semibold">Yizh</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered nutrition tracking through Telegram. Making healthy eating simple and accurate.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Product</h3>
            <div className="space-y-2 text-sm">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors block">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors block">
                How it works
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                Pricing
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">For Professionals</h3>
            <div className="space-y-2 text-sm">
              <a href="#dietitians" className="text-muted-foreground hover:text-foreground transition-colors block">
                Dietitian Portal
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                API Access
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                Enterprise
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Support</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                Help Center
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                Contact Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Yizh. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;