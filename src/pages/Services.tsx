
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Shield, Brain, Code, Smartphone, Globe, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

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
        'Zero-Trust Implementation',
        'Network Security Monitoring',
        'Cloud Security Assessment'
      ],
      price: 'Enterprise Pricing',
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
        'AI-powered Automation',
        'Deep Learning Applications',
        'MLOps Implementation'
      ],
      price: 'Custom Quotes',
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
        'DevOps & CI/CD Implementation',
        'Microservices Architecture',
        'Database Design & Optimization'
      ],
      price: 'Project-based',
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
        'Performance Optimization',
        'Push Notification Systems',
        'Mobile Analytics Integration'
      ],
      price: 'Custom Quotes',
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
        'Content Management Systems',
        'Frontend Framework Development',
        'Backend API Development'
      ],
      price: 'Project-based',
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
        'Reporting & KPI Tracking',
        'ETL Process Implementation',
        'Big Data Processing'
      ],
      price: 'Custom Quotes',
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From cybersecurity to AI/ML development and custom software solutions - 
              we provide comprehensive technology services to accelerate your business.
            </p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.title}
                    className="group transition-all duration-300 border-border/50 hover:border-cyber-400/30 bg-card/50 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 rounded-lg bg-cyber-500/10">
                          <IconComponent className="h-8 w-8 text-cyber-500" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-2">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-semibold text-cyber-400">
                          {service.price}
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-cyber-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-cyber-500 hover:bg-cyber-600 text-white px-8 py-3"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
