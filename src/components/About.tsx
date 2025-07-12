
import { Target, Eye, BookOpen } from 'lucide-react';

const About = () => {
  const sections = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize cybersecurity and software development through innovative AI-powered solutions that protect and empower organizations worldwide, enabling them to thrive in the digital age.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To create a secure digital world where businesses can innovate fearlessly, protected by intelligent technology systems that anticipate threats and deliver seamless user experiences.'
    },
    {
      icon: BookOpen,
      title: 'Our Story',
      description: 'Founded by visionary technologists, DCS began as a cybersecurity company and evolved into a comprehensive technology solutions provider. Today, we combine deep security expertise with cutting-edge AI/ML capabilities and full-stack development skills to deliver transformative solutions that drive business success.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            About DCS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At DCS, we believe in the power of combining human expertise with artificial intelligence 
            to create technology solutions that are not just functional, but transformative.
          </p>
        </div>

        {/* Mission, Vision, Story */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div 
                key={section.title} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 rounded-full bg-cyber-500/10 border border-cyber-500/20 w-fit mx-auto mb-6 group-hover:bg-cyber-500/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-cyber-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyber-400 transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
