
import { CheckCircle, Shield, Brain, Code, Smartphone, Globe, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets',
      icon: Shield,
      features: [
        'Penetration Testing & Vulnerability Assessments',
        'Security Audits & Compliance',
        'Incident Response & Forensics',
        'Security Architecture Design',
        'Email Security Solutions',
        'Zero-Trust Implementation'
      ],
      price: 'Enterprise',
      highlighted: false
    },
    {
      title: 'AI/ML Development',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence',
      icon: Brain,
      features: [
        'Custom AI Model Development',
        'Machine Learning Integration',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI-powered Automation'
      ],
      price: 'Custom Quote',
      highlighted: true
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions for your unique business needs',
      icon: Code,
      features: [
        'Full-Stack Web Development',
        'Enterprise Application Development',
        'API Development & Integration',
        'Legacy System Modernization',
        'Cloud-Native Applications',
        'DevOps & CI/CD Implementation'
      ],
      price: 'Project-based',
      highlighted: false
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      icon: Smartphone,
      features: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Mobile Security Integration',
        'Performance Optimization'
      ],
      price: 'Custom Quote',
      highlighted: false
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites',
      icon: Globe,
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'Progressive Web Apps (PWA)',
        'SEO Optimization',
        'Performance Optimization',
        'Content Management Systems'
      ],
      price: 'Project-based',
      highlighted: false
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable business insights',
      icon: Database,
      features: [
        'Data Visualization Dashboards',
        'Business Intelligence Solutions',
        'Data Pipeline Development',
        'Real-time Analytics',
        'Data Warehouse Design',
        'Reporting & KPI Tracking'
      ],
      price: 'Custom Quote',
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
            From cybersecurity to AI/ML development and custom software solutions - 
            we provide comprehensive technology services to accelerate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <CardTitle className={`text-xl font-bold ${service.highlighted ? 'text-cyber-400' : ''}`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <div className="pt-4">
                    <span className={`text-2xl font-bold ${service.highlighted ? 'text-cyber-400' : 'text-foreground'}`}>
                      {service.price}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 ${service.highlighted ? 'text-cyber-400' : 'text-cyber-500'} flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
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

export default Services;
