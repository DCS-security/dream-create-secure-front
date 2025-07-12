
import { Shield, Brain, Code, Smartphone, Globe, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets from modern threats.',
      icon: Shield,
    },
    {
      title: 'AI/ML Development',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence.',
      icon: Brain,
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions for your unique business needs.',
      icon: Code,
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: Smartphone,
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites.',
      icon: Globe,
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable business insights.',
      icon: Database,
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
            From cybersecurity to AI/ML development and custom software solutions - 
            we provide comprehensive technology services to accelerate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group transition-all duration-300 border-border/50 hover:border-cyber-400/30 bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-cyber-500/10">
                      <IconComponent className="h-8 w-8 text-cyber-500" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/services')}
            className="bg-cyber-500 hover:bg-cyber-600 text-white px-8 py-3"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
