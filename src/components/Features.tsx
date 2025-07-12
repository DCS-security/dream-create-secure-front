
import { CheckCircle, Shield, Brain, Code, Zap, Users, Cog, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection and real-time monitoring.',
      features: [
        'AI-powered threat detection',
        'Real-time security monitoring',
        'Compliance management',
        'Incident response automation'
      ],
      highlighted: false
    },
    {
      icon: Brain,
      title: 'AI/ML Integration',
      description: 'Cutting-edge artificial intelligence and machine learning solutions for intelligent automation.',
      features: [
        'Custom AI model development',
        'Predictive analytics',
        'Natural language processing',
        'Computer vision solutions'
      ],
      highlighted: true
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end software development from concept to deployment with modern technologies.',
      features: [
        'Web & mobile applications',
        'Cloud-native architecture',
        'API development',
        'Legacy system modernization'
      ],
      highlighted: false
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'High-performance solutions optimized for speed, scalability, and user experience.',
      features: [
        'Application performance tuning',
        'Database optimization',
        'CDN implementation',
        'Load balancing strategies'
      ],
      highlighted: false
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated team of specialists in cybersecurity, AI/ML, and software development.',
      features: [
        'Certified security professionals',
        'AI/ML specialists',
        'Full-stack developers',
        '24/7 technical support'
      ],
      highlighted: false
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Future-ready solutions designed to grow with your business and adapt to changing needs.',
      features: [
        'Microservices architecture',
        'Auto-scaling infrastructure',
        'Cloud deployment',
        'Continuous integration'
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
                {feature.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
                
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
