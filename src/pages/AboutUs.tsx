
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  const founders = [
    {
      name: 'Deep Gada',
      role: 'Co-Founder & CEO',
      description: 'Visionary leader with extensive experience in cybersecurity and strategic business development.',
      expertise: ['Cybersecurity Strategy', 'Business Development', 'AI Integration', 'Team Leadership']
    },
    {
      name: 'Hitansh Shah', 
      role: 'Co-Founder & CTO',
      description: 'Technical expert specializing in AI, machine learning, and advanced security architecture.',
      expertise: ['AI/ML Development', 'Security Architecture', 'Software Engineering', 'Innovation']
    }
  ];

  const companyValues = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize cybersecurity through innovative AI-powered solutions that protect and empower organizations worldwide.'
    },
    {
      icon: Globe,
      title: 'Our Vision',
      description: 'To create a secure digital world where businesses can innovate fearlessly, protected by intelligent cybersecurity systems.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Excellence, Innovation, Integrity, and Customer-centricity drive everything we do at DCS.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of cybersecurity experts, AI researchers, and software engineers united by a common goal.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-cyber-gradient">
          <div className="absolute inset-0 bg-cyber-glow"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
              About DCS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded on the principles of innovation and security, DCS is transforming the cybersecurity landscape 
              through cutting-edge AI and machine learning technologies.
            </p>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
                Our Foundation
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={value.title}
                    className="group transition-all duration-300 border-border/50 hover:border-cyber-400/30 bg-card/50 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-lg bg-cyber-500/10">
                          <IconComponent className="h-8 w-8 text-cyber-500" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-center">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
                Meet Our Founders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The visionary leaders behind DCS, combining decades of experience in cybersecurity, 
                technology, and business innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <Card 
                  key={founder.name}
                  className="group transition-all duration-300 border-border/50 hover:border-cyber-400/30 bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-cyber-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-cyber-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-cyber-400">
                      {founder.name}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-muted-foreground">
                      {founder.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {founder.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3 text-center">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {founder.expertise.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-cyber-500/10 text-cyber-400 rounded-full text-sm border border-cyber-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
                  Our Story
                </h2>
              </div>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      DCS was born from a shared vision between Deep Gada and Hitansh Shah - two passionate 
                      technologists who recognized the urgent need for more intelligent, proactive cybersecurity solutions.
                    </p>
                    <p>
                      With backgrounds spanning cybersecurity, artificial intelligence, and software engineering, 
                      our founders combined their expertise to create a company that doesn't just respond to threats, 
                      but anticipates and prevents them.
                    </p>
                    <p>
                      Today, DCS stands at the forefront of cybersecurity innovation, developing AI-powered solutions 
                      that protect organizations while enabling them to innovate fearlessly in an increasingly 
                      connected world.
                    </p>
                    <p className="text-cyber-400 font-semibold text-center">
                      Dream. Create. Secure. - This isn't just our tagline, it's our commitment to you.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
