import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, Star } from "lucide-react";
import heroImage from "@/assets/hero-fortnite.jpg";

const Hero = () => {
  const handleOrderClick = () => {
    window.open("https://discord.gg/f4G2MBdkRV", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold bg-gradient-card border-primary/30">
              <Star className="w-4 h-4 mr-2" />
              Top-Tier GFX Designer
            </Badge>
            
            <p className="text-lg text-muted-foreground">Hi, I'm</p>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-gradient animate-scale-in">
              Syrxty
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/90 max-w-lg">
              Professional GFX services for <span className="text-primary font-semibold">Fortnite PFP & Thumbnails</span> to elevate your profile.
            </p>
          </div>

          {/* Promo Code Banner */}
          <div className="bg-gradient-card border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-glow">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-lg font-semibold">Have no money? NO worries!</span>
              <Zap className="w-5 h-5 text-primary animate-pulse" />
            </div>
            <p className="text-lg font-bold text-primary mb-2">Join discord for my free gfx giveaway</p>
            <p className="text-sm text-muted-foreground">Get a chance to win it for free!!</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="cyber" 
              size="lg" 
              onClick={handleOrderClick}
              className="text-lg px-8 py-3"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Order Now!
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-3"
            >
              View Portfolio
            </Button>
          </div>

          {/* Social Stats */}
          <div className="flex justify-center lg:justify-start gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10.5K</div>
              <div className="text-sm text-muted-foreground">TikTok Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">43.2K</div>
              <div className="text-sm text-muted-foreground">Total Likes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Designs Created</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img 
              src="/lovable-uploads/0886d7e0-755c-4aaf-b4b5-2ccb87a5b2fb.png" 
              alt="Syrxty Avatar" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-gradient-cyber rounded-full p-4 shadow-cyber animate-float">
            <Zap className="w-8 h-8 text-background" />
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-gradient-card backdrop-blur-sm border border-primary/30 rounded-xl p-4 shadow-glow animate-slide-up">
            <div className="text-sm font-semibold text-primary">Professional GFX</div>
            <div className="text-xs text-muted-foreground">Gaming Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;