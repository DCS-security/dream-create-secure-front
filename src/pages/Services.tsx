
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Shield, Brain, Code, Smartphone, Globe, Database, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      details: {
        overview: 'Transform your raw data into actionable business insights with our comprehensive analytics and business intelligence solutions.',
        technologies: ['Python', 'R', 'Power BI', 'Tableau', 'Apache Spark', 'SQL', 'MongoDB', 'Azure Analytics'],
        deliverables: ['Custom Dashboards', 'Automated Reports', 'Data Pipeline Setup', 'BI Training'],
        timeline: '6-12 weeks',
        benefits: ['Improved Decision Making', 'Cost Optimization', 'Performance Tracking', 'Predictive Insights']
      }
    }
  ];

  // Add details to other services
  services[0].details = {
    overview: 'Protect your organization with our comprehensive cybersecurity services designed to safeguard against modern threats.',
    technologies: ['SIEM Tools', 'Penetration Testing Tools', 'Firewalls', 'IDS/IPS', 'Security Frameworks', 'Compliance Tools'],
    deliverables: ['Security Assessment Report', 'Implementation Plan', 'Security Policies', 'Training Materials'],
    timeline: '4-8 weeks',
    benefits: ['Risk Reduction', 'Compliance Adherence', 'Threat Prevention', '24/7 Monitoring']
  };

  services[1].details = {
    overview: 'Leverage the power of artificial intelligence and machine learning to automate processes and gain competitive advantages.',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'AWS ML', 'Azure AI', 'Google Cloud AI'],
    deliverables: ['AI Model', 'Integration Code', 'Documentation', 'Training & Support'],
    timeline: '8-16 weeks',
    benefits: ['Process Automation', 'Predictive Capabilities', 'Enhanced Efficiency', 'Data-Driven Insights']
  };

  services[2].details = {
    overview: 'Build robust, scalable software solutions tailored to your specific business requirements and objectives.',
    technologies: ['React', 'Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
    deliverables: ['Source Code', 'Documentation', 'Deployment Guide', 'Maintenance Plan'],
    timeline: '12-24 weeks',
    benefits: ['Custom Functionality', 'Scalable Architecture', 'Competitive Advantage', 'Long-term Support']
  };

  services[3].details = {
    overview: 'Create engaging mobile applications that deliver exceptional user experiences across all devices and platforms.',
    technologies: ['React Native', 'Flutter', 'iOS SDK', 'Android SDK', 'Firebase', 'REST APIs'],
    deliverables: ['Mobile App', 'App Store Submission', 'User Manual', 'Maintenance Support'],
    timeline: '10-18 weeks',
    benefits: ['Mobile Presence', 'User Engagement', 'Revenue Generation', 'Brand Visibility']
  };

  services[4].details = {
    overview: 'Build modern, responsive web applications that provide seamless user experiences and drive business growth.',
    technologies: ['React', 'Vue.js', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'AWS', 'CDN'],
    deliverables: ['Website/Web App', 'CMS Setup', 'SEO Optimization', 'Analytics Integration'],
    timeline: '6-14 weeks',
    benefits: ['Online Presence', 'Lead Generation', 'Brand Building', 'Customer Engagement']
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

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
                    className="group transition-all duration-300 border-border/50 hover:border-cyber-400/30 bg-card/50 backdrop-blur-sm animate-fade-in cursor-pointer hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleServiceClick(service)}
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

        {/* Service Detail Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-bold flex items-center space-x-3">
                  {selectedService && (
                    <>
                      <div className="p-2 rounded-lg bg-cyber-500/10">
                        <selectedService.icon className="h-6 w-6 text-cyber-500" />
                      </div>
                      <span>{selectedService.title}</span>
                    </>
                  )}
                </DialogTitle>
              </div>
            </DialogHeader>
            
            {selectedService && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground">{selectedService.details.overview}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-cyber-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.details.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-cyber-500/10 text-cyber-400 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-card/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyber-400 mb-2">Timeline</h4>
                    <p className="text-sm">{selectedService.details.timeline}</p>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyber-400 mb-2">Pricing</h4>
                    <p className="text-sm">{selectedService.price}</p>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyber-400 mb-2">Deliverables</h4>
                    <p className="text-sm">{selectedService.details.deliverables.join(', ')}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.details.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    onClick={() => navigate('/contact')}
                    className="bg-cyber-500 hover:bg-cyber-600 text-white px-6 py-2"
                  >
                    Get Started with This Service
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
