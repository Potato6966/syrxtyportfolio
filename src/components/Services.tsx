import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Image, Layout, Package, ExternalLink, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Profile Picture (PFP)",
      price: "€1.99",
      description: "Get a unique, eye-catching profile picture tailored to your personality or brand. Perfect for social media, streaming platforms, or personal branding.",
      features: [
        "Custom designs that stand out",
        "High-resolution output",
        "Multiple format options",
        "Quick 24-48h delivery"
      ],
      popular: false
    },
    {
      icon: Image,
      title: "Thumbnail",
      price: "€1.99",
      description: "Engaging and professional thumbnails designed to attract viewers to your videos or streams. Optimized for all platforms with vibrant visuals.",
      features: [
        "Click-worthy designs",
        "Platform optimized",
        "Clear messaging",
        "Unlimited revisions"
      ],
      popular: true
    },
    {
      icon: Layout,
      title: "Banner",
      price: "€2.99",
      description: "Create stunning banners for your channel, website, or social media pages that reflect your style and theme.",
      features: [
        "All screen sizes supported",
        "Brand consistency",
        "Professional quality",
        "Social media ready"
      ],
      popular: false
    },
    {
      icon: Package,
      title: "Product GFX",
      price: "€3.99",
      description: "Custom graphics tailored to showcase your products professionally and attractively. Ideal for online shops and promotional materials.",
      features: [
        "Professional showcase",
        "Brand enhancement",
        "Marketing focused",
        "Commercial license"
      ],
      popular: false
    }
  ];

  const handleOrderClick = () => {
    window.open("https://discord.gg/f4G2MBdkRV", "_blank");
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-card border-primary/30">
            Services & Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-cyber bg-clip-text text-transparent">GFX Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            High-quality gaming graphics designed to make your content stand out from the competition
          </p>
        </div>

        {/* Promo Code Banner */}
        <div className="bg-gradient-card border border-primary/30 rounded-2xl p-6 mb-12 text-center backdrop-blur-sm shadow-glow max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-primary">Limited Time Offer</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-primary mb-2">Use Code: SYRXTY</div>
          <p className="text-muted-foreground">Get special discounts on all services when you order!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:scale-105 ${
                service.popular ? 'ring-2 ring-primary/50' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="bg-gradient-cyber text-background font-semibold px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-cyber rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-cyber">
                  <service.icon className="w-8 h-8 text-background" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={service.popular ? "cyber" : "hero"} 
                  className="w-full mt-6"
                  onClick={handleOrderClick}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How It Works</h3>
            <p className="text-muted-foreground">Simple process to get your custom GFX</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Order & Brief", desc: "Contact me via Discord with your requirements and preferred style" },
              { step: "2", title: "Design & Review", desc: "I'll create your custom design and send it for your feedback" },
              { step: "3", title: "Deliver & Support", desc: "Receive your final files with ongoing support for any adjustments" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-cyber rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-cyber">
                  <span className="text-2xl font-bold text-background">{process.step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-primary">{process.title}</h4>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;