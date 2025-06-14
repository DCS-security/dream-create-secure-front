
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
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
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your digital future? Let's discuss how our AI-powered 
            cybersecurity solutions can protect and empower your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card 
                key={info.title} 
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-cyber-400/30 bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-cyber-500/10 border border-cyber-500/20 group-hover:bg-cyber-500/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-cyber-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-cyber-400 transition-colors">
                        {info.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground font-medium">
                    {info.value}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
