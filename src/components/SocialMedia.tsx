import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Users, Heart, MessageCircle } from "lucide-react";

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: "TikTok",
      handle: "@syrxty",
      followers: "10.5K",
      engagement: "43.2K",
      engagementLabel: "Total Likes",
      description: "Check out my latest TikTok content for a glimpse into my design process and recent projects.",
      color: "from-pink-500 to-purple-600",
      link: "https://tiktok.com/@syrxty",
      icon: Play,
      verified: true
    },
    {
      name: "YouTube",
      handle: "Syrxty",
      followers: "2.8K",
      engagement: "15.3K",
      engagementLabel: "Total Views",
      description: "Subscribe to my YouTube channel for tutorials, speedruns, and behind-the-scenes content.",
      color: "from-red-500 to-red-600",
      link: "#",
      icon: Play,
      verified: false
    },
    {
      name: "Discord",
      handle: "Syrxty's Server",
      followers: "850",
      engagement: "24/7",
      engagementLabel: "Active Community",
      description: "Join our Discord community for direct orders, support, and exclusive previews.",
      color: "from-indigo-500 to-purple-600",
      link: "https://discord.gg/f4G2MBdkRV",
      icon: MessageCircle,
      verified: true
    }
  ];

  const recentPosts = [
    {
      platform: "TikTok",
      title: "Fortnite Thumbnail Speed Design",
      views: "15.2K",
      likes: "2.1K",
      time: "2 days ago"
    },
    {
      platform: "YouTube",
      title: "How to Create Gaming PFPs",
      views: "8.7K",
      likes: "432",
      time: "1 week ago"
    },
    {
      platform: "TikTok",
      title: "Valorant Graphics Process",
      views: "22.8K",
      likes: "3.4K",
      time: "3 days ago"
    }
  ];

  return (
    <section id="social" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-card border-primary/30">
            Social Media
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Follow My <span className="bg-gradient-cyber bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with my latest work, tutorials, and gaming content across all platforms
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`bg-gradient-to-r ${platform.color} rounded-full p-3 shadow-lg`}>
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">{platform.name}</h3>
                        {platform.verified && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{platform.handle}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{platform.followers}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{platform.engagement}</div>
                    <div className="text-xs text-muted-foreground">{platform.engagementLabel}</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {platform.description}
                </p>

                <Button 
                  variant="neon" 
                  className="w-full group-hover:scale-105 transition-transform"
                  onClick={() => window.open(platform.link, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Follow on {platform.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Recent Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                      {post.platform}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.time}</span>
                  </div>
                  
                  <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="bg-gradient-card border border-primary/30 rounded-2xl p-8 backdrop-blur-sm shadow-glow inline-block max-w-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Join the Community</h3>
              <Users className="w-8 h-8 text-primary" />
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              Connect with me across all platforms for the latest updates, exclusive content, and direct communication for your GFX needs.
            </p>
            
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">14.3K</div>
                <div className="text-sm text-muted-foreground">Total Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">58.5K</div>
                <div className="text-sm text-muted-foreground">Total Engagement</div>
              </div>
            </div>
            
            <Button 
              variant="cyber" 
              size="lg"
              onClick={() => window.open("https://discord.gg/f4G2MBdkRV", "_blank")}
              className="px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;