
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@devanshcybersec.in',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9082678303',
      description: '24/7 support hotline'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Borivali, Mumbai, Maharashtra, India',
      description: 'Visit our headquarters'
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to secure your digital future? Let's discuss how our technology 
              solutions can protect and empower your organization.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-cyber-400">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization Name</Label>
                      <Input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-background/50"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-cyber-500 hover:bg-cyber-600 text-white"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-cyber-400">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Whether you need cybersecurity solutions, AI/ML development, or custom software, 
                    we're here to help. Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card 
                        key={info.title} 
                        className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-cyber-400/30 bg-card/50 backdrop-blur-sm"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-lg bg-cyber-500/10 border border-cyber-500/20 group-hover:bg-cyber-500/20 transition-colors">
                              <IconComponent className="h-6 w-6 text-cyber-500" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold group-hover:text-cyber-400 transition-colors">
                                {info.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-1">
                                {info.description}
                              </p>
                              <p className="text-foreground font-medium">
                                {info.value}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
