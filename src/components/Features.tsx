
import { CheckCircle, Users, Clock, Award, Lightbulb, Target, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our diverse team combines deep cybersecurity knowledge with cutting-edge AI and ML expertise.',
      features: [
        'Certified security professionals',
        'AI/ML specialists',
        'Full-stack developers',
        'Industry veterans'
      ],
      highlighted: false
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on delivering projects on schedule without compromising on quality.',
      features: [
        'Agile project management',
        'Regular progress updates',
        'Milestone-based delivery',
        'Transparent timelines'
      ],
      highlighted: true
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our track record speaks for itself - delivering successful projects across industries.',
      features: [
        'Client satisfaction guarantee',
        'Post-deployment support',
        'Performance optimization',
        'Scalable solutions'
      ],
      highlighted: false
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We continuously push the boundaries of what\'s possible in technology solutions.',
      features: [
        'Latest technology stack',
        'Cutting-edge methodologies',
        'Research-driven approach',
        'Future-ready solutions'
      ],
      highlighted: false
    },
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re committed to empowering businesses through secure and intelligent technology.',
      features: [
        'Client-focused approach',
        'Business value creation',
        'Long-term partnerships',
        'Strategic consulting'
      ],
      highlighted: false
    },
    {
      icon: Shield,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for your peace of mind.',
      features: [
        'Always-on monitoring',
        'Rapid response times',
        'Proactive maintenance',
        'Emergency support'
      ],
      highlighted: false
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            Why Choose DCS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining expertise in cybersecurity, AI/ML, and software development to deliver 
            comprehensive technology solutions that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className={`group transition-all duration-300 ${
                  feature.highlighted 
                    ? 'border-cyber-400/50 shadow-xl scale-105 bg-cyber-500/5' 
                    : 'border-border/50 hover:border-cyber-400/30 bg-card/50'
                } backdrop-blur-sm animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg ${feature.highlighted ? 'bg-cyber-500/20' : 'bg-cyber-500/10'}`}>
                      <IconComponent className={`h-8 w-8 ${feature.highlighted ? 'text-cyber-400' : 'text-cyber-500'}`} />
                    </div>
                  </div>
                  <CardTitle className={`text-xl font-semibold text-center ${feature.highlighted ? 'text-cyber-400' : ''}`}>
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base text-center">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${feature.highlighted ? 'text-cyber-400' : 'text-cyber-500'}`} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
