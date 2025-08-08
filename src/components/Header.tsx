import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/b9e6bba1-c2dc-4d3c-903f-08aeb5b3db0b.png" alt="Yizh" className="h-8 w-8" />
          <span className="text-xl font-semibold">Yizh</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#dietitians" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            For Dietitians
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Dietitian Login
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;