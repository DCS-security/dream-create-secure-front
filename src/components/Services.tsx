
import { CheckCircle, ArrowRight, Shield, Brain, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Cyber Security Products',
      description: 'Enterprise-grade cybersecurity solutions for corporates',
      icon: Shield,
      features: [
        'Advanced threat protection',
        'Real-time monitoring systems',
        'Enterprise security suites',
        'Compliance management tools',
        'Security incident response',
        'Risk management platforms'
      ],
      price: 'Enterprise',
      highlighted: false
    },
    {
      title: 'AI/ML Security Assessment',
      description: 'Cybersecurity assessment using AI and ML intelligence',
      icon: Brain,
      features: [
        'AI-powered vulnerability scanning',
        'Machine learning threat detection',
        'Intelligent risk analysis',
        'Automated security reporting',
        'Predictive threat modeling',
        'Smart anomaly detection'
      ],
      price: 'Custom Quote',
      highlighted: true
    },
    {
      title: 'Custom Software Development',
      description: 'Customize software development for any cyber needs',
      icon: Code,
      features: [
        'Tailored security solutions',
        'Custom application development',
        'Security-first architecture',
        'Integration with existing systems',
        'Scalable cyber solutions',
        'Ongoing support & maintenance'
      ],
      price: 'Project-based',
      highlighted: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions combining AI, ML, and advanced security 
            for smarter software development and enterprise protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`group relative transition-all duration-300 ${
                  service.highlighted 
                    ? 'border-cyber-400/50 shadow-xl scale-105 bg-cyber-500/5' 
                    : 'border-border/50 hover:border-cyber-400/30 bg-card/50'
                } backdrop-blur-sm animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg ${service.highlighted ? 'bg-cyber-500/20' : 'bg-cyber-500/10'}`}>
                      <IconComponent className={`h-8 w-8 ${service.highlighted ? 'text-cyber-400' : 'text-cyber-500'}`} />
                    </div>
                  </div>
                  <CardTitle className={`text-2xl font-bold ${service.highlighted ? 'text-cyber-400' : ''}`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <div className="pt-4">
                    <span className={`text-3xl font-bold ${service.highlighted ? 'text-cyber-400' : 'text-foreground'}`}>
                      {service.price}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${service.highlighted ? 'text-cyber-400' : 'text-cyber-500'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full group ${
                      service.highlighted 
                        ? 'bg-cyber-500 hover:bg-cyber-600 text-white' 
                        : 'bg-muted hover:bg-cyber-500/10 text-foreground hover:text-cyber-400 border border-border hover:border-cyber-400/50'
                    }`}
                    variant={service.highlighted ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
