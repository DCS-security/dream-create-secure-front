
import { CheckCircle, Shield, Brain, Code, Zap, Lock, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'AI-powered threat detection and prevention systems that adapt to emerging cybersecurity challenges in real-time.',
      features: [
        'Real-time threat monitoring',
        'Advanced malware detection',
        'Automated incident response',
        'Security analytics dashboard'
      ],
      highlighted: false
    },
    {
      icon: Brain,
      title: 'Machine Learning Integration',
      description: 'Sophisticated ML algorithms that learn from patterns and behaviors to predict and prevent security breaches.',
      features: [
        'Behavioral pattern analysis',
        'Predictive threat modeling',
        'Intelligent anomaly detection',
        'Automated learning systems'
      ],
      highlighted: true
    },
    {
      icon: Code,
      title: 'Secure Development',
      description: 'Tools and frameworks that embed security into every stage of the software development lifecycle.',
      features: [
        'Security code analysis',
        'Vulnerability scanning',
        'Secure coding guidelines',
        'DevSecOps integration'
      ],
      highlighted: false
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance and instant response capabilities to neutralize threats before they can cause damage.',
      features: [
        '24/7 system monitoring',
        'Instant alert systems',
        'Performance optimization',
        'Threat intelligence feeds'
      ],
      highlighted: false
    },
    {
      icon: Lock,
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive security models that verify every user and device, regardless of their location or credentials.',
      features: [
        'Identity verification',
        'Device authentication',
        'Network segmentation',
        'Access control policies'
      ],
      highlighted: false
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Access to our team of cybersecurity experts who provide strategic guidance and implementation support.',
      features: [
        'Security strategy consulting',
        'Implementation guidance',
        'Training and support',
        'Ongoing maintenance'
      ],
      highlighted: false
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
