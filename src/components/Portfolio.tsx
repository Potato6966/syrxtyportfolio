import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Heart } from "lucide-react";
import portfolioImage from "@/assets/portfolio-showcase.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Fortnite Action Thumbnail",
      category: "Thumbnail",
      game: "Fortnite",
      likes: "2.3K",
      views: "45K"
    },
    {
      title: "Valorant Agent PFP",
      category: "Profile Picture",
      game: "Valorant",
      likes: "1.8K",
      views: "32K"
    },
    {
      title: "Rainbow Six Banner",
      category: "Banner",
      game: "Rainbow Six",
      likes: "1.5K",
      views: "28K"
    },
    {
      title: "Gaming Setup Showcase",
      category: "Product GFX",
      game: "Custom",
      likes: "3.1K",
      views: "52K"
    }
  ];

  const handleOrderClick = () => {
    window.open("https://discord.gg/f4G2MBdkRV", "_blank");
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-card border-primary/30">
            Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-cyber bg-clip-text text-transparent">Latest Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent gaming graphics that have helped creators stand out
          </p>
        </div>

        {/* Featured Showcase */}
        <div className="mb-16">
          <Card className="bg-gradient-card border-primary/20 overflow-hidden shadow-glow">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={portfolioImage} 
                  alt="Portfolio Showcase" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="bg-gradient-cyber text-background">
                      Featured Work
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Gaming Collection
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Professional Gaming Graphics Collection</h3>
                  <p className="text-muted-foreground mb-4">A showcase of custom thumbnails, PFPs, and banners for various gaming content creators</p>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-primary" />
                      <span>125K+ Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-primary" />
                      <span>8.7K Likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                      <span>Recently Updated</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:scale-105 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    {item.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-muted/50 text-xs">
                    {item.game}
                  </Badge>
                </div>
                
                <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-card border border-primary/30 rounded-2xl p-8 backdrop-blur-sm shadow-glow inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Your Custom GFX?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join hundreds of satisfied creators who've elevated their content with professional gaming graphics
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cyber" 
                size="lg"
                onClick={handleOrderClick}
                className="px-8"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Your Order
              </Button>
              
              <Button 
                variant="neon" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8"
              >
                View Pricing
              </Button>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Remember to use code <span className="font-semibold text-primary">SYRXTY</span> for discounts!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;