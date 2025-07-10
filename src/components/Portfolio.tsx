import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Heart } from "lucide-react";
import portfolioImage from "@/assets/portfolio-showcase.jpg";

const Portfolio = () => {
  // Your actual GFX work portfolio
  const portfolioItems = [
    {
      title: "HWID Spoofer Tutorial",
      category: "Gaming Thumbnail",
      game: "Educational",
      likes: "3.2K",
      views: "67K",
      image: "/lovable-uploads/88a2cc74-5a91-4056-9ddb-fff9363f4f03.png",
      description: "Gaming tutorial thumbnail with Fortnite character and tech elements"
    },
    {
      title: "Fortnite Software Showcase",
      category: "Product Design", 
      game: "Marketing",
      likes: "2.8K",
      views: "52K",
      image: "/lovable-uploads/e4cebde5-d3e7-45b9-989a-e0036b5d173a.png",
      description: "Professional software showcase with mobile interface design"
    },
    {
      title: "Unreal Rank Gaming",
      category: "Gaming Thumbnail",
      game: "Fortnite",
      likes: "4.1K",
      views: "89K",
      image: "/lovable-uploads/6affd6f9-0ae2-4fa4-84e3-76cfd1e94aae.png",
      description: "High-energy gaming thumbnail with rank progression theme"
    },
    {
      title: "Perm Spoofer Design",
      category: "Software Marketing",
      game: "Tech",
      likes: "2.5K",
      views: "45K",
      image: "/lovable-uploads/c24f44bd-cb7e-45f2-bd3d-1c3d6bea3de9.png",
      description: "Professional software interface showcase design"
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


        {/* Portfolio Grid - Your Actual GFX Work */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="portfolio-item bg-gradient-card border-primary/20 hover:border-primary/40 group cursor-pointer overflow-hidden hover:shadow-glow transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                {/* Actual GFX Work Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="border-primary/50 text-primary text-xs bg-background/80 backdrop-blur-sm">
                        {item.category}
                      </Badge>
                      <Badge variant="secondary" className="bg-muted/80 backdrop-blur-sm text-xs">
                        {item.game}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  {item.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
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