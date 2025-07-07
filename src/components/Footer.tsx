import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Play, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "TikTok", icon: Play, url: "https://tiktok.com/@syrxty" },
    { name: "Discord", icon: MessageCircle, url: "https://discord.gg/f4G2MBdkRV" },
    { name: "YouTube", icon: Play, url: "#" }
  ];

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Social Media", href: "#social" }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className="bg-gradient-card border-t border-primary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Syrxty's GFX
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional gaming graphics that help content creators stand out and connect with their audience.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold">Use code SYRXTY for discounts!</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>Profile Pictures - €1.99</div>
              <div>Thumbnails - €1.99</div>
              <div>Banners - €2.99</div>
              <div>Product GFX - €3.99</div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Connect</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Follow me on social media and join the community for updates and exclusive content.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="hero"
                  size="icon"
                  onClick={() => handleLinkClick(social.url)}
                  className="hover:scale-110 transition-transform"
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
            
            <Button 
              variant="neon" 
              onClick={() => handleLinkClick("https://discord.gg/f4G2MBdkRV")}
              className="w-full mt-4"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Order on Discord
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Designs Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">14.3K</div>
              <div className="text-sm text-muted-foreground">Social Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Syrxty's GFX Services. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Professional gaming graphics for content creators worldwide.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-muted-foreground">Made with passion for gaming</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;