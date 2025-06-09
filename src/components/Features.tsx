
import { Shield, Brain, Code, Zap, Lock, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'AI-powered threat detection and prevention systems that adapt to emerging cybersecurity challenges in real-time.',
      color: 'cyber-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning Integration',
      description: 'Sophisticated ML algorithms that learn from patterns and behaviors to predict and prevent security breaches.',
      color: 'cyber-400'
    },
    {
      icon: Code,
      title: 'Secure Development',
      description: 'Tools and frameworks that embed security into every stage of the software development lifecycle.',
      color: 'cyber-300'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance and instant response capabilities to neutralize threats before they can cause damage.',
      color: 'cyber-600'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive security models that verify every user and device, regardless of their location or credentials.',
      color: 'cyber-500'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Access to our team of cybersecurity experts who provide strategic guidance and implementation support.',
      color: 'cyber-400'
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions powered by artificial intelligence and machine learning, 
            designed to protect your digital assets and enable secure innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-cyber-400/50 bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`p-3 rounded-lg bg-${feature.color}/10 border border-${feature.color}/20 w-fit mb-4 group-hover:bg-${feature.color}/20 transition-colors`}>
                    <IconComponent className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-cyber-400 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
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
