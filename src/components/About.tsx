import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Target, Users, Zap } from "lucide-react";
import avatarImage from "@/assets/syrxty-avatar.jpg";

const About = () => {
  const skills = [
    { name: "Fortnite", level: "Expert" },
    { name: "Valorant", level: "Advanced" },
    { name: "Rainbow Six", level: "Advanced" },
    { name: "Custom Design", level: "Expert" }
  ];

  const achievements = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Zap, label: "Projects Done", value: "1000+" },
    { icon: Target, label: "Client Satisfaction", value: "99%" },
    { icon: Gamepad2, label: "Games Covered", value: "10+" }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-card border-primary/30">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Your <span className="bg-gradient-cyber bg-clip-text text-transparent">GFX Designer</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar and Info */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-glow animate-float">
                <img 
                  src={avatarImage} 
                  alt="Syrxty Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-cyber rounded-full p-3 shadow-cyber animate-pulse">
                <Gamepad2 className="w-6 h-6 text-background" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Passionate Graphic Designer</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a GFX designer, I create custom thumbnails for titles like <span className="text-primary font-semibold">Valorant</span>, <span className="text-primary font-semibold">Rainbow Six Siege</span>, and <span className="text-primary font-semibold">Fortnite</span>—making sure each design stands out and captures the excitement of the game.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's a bold action shot or a clean, eye-catching layout, I focus on making thumbnails that grab attention and reflect the creator's unique style. For me, it's not just about making something that looks cool—it's about helping streamers and players connect with their audience at first glance.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-primary">Specializations</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all"
                  >
                    {skill.name} - {skill.level}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-gradient-cyber rounded-full p-3 shadow-cyber">
                    <achievement.icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                    <div className="text-muted-foreground">{achievement.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Experience Timeline */}
            <Card className="bg-gradient-card border-primary/20 mt-8">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">Experience</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Professional GFX Designer</div>
                      <div className="text-sm text-muted-foreground">2022 - Present</div>
                      <div className="text-sm text-muted-foreground mt-1">Creating custom gaming graphics for content creators</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-primary/50 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Gaming Content Creator</div>
                      <div className="text-sm text-muted-foreground">2021 - Present</div>
                      <div className="text-sm text-muted-foreground mt-1">Building community on TikTok and YouTube</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;