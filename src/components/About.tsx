
import { Target, Users, Lightbulb, Award, ShieldCheck, Server, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Elite Expertise' },
    { icon: ShieldCheck, label: 'Proactive Defense' },
    { icon: Server, label: 'Reliable Service' },
    { icon: Clock, label: 'Always-On Support' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re committed to making the digital world safer through innovative cybersecurity solutions.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our diverse team combines deep cybersecurity knowledge with cutting-edge AI and ML expertise.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We continuously push the boundaries of what\'s possible in cybersecurity technology.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our track record speaks for itself - protecting organizations from the most sophisticated threats.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            About DCS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At DCS, we believe in the power of combining human expertise with artificial intelligence 
            to create cybersecurity solutions that are not just reactive, but predictive and proactive.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className="h-10 w-10 md:h-12 md:w-12 text-cyber-400 mx-auto mb-4" />
                <div className="text-md md:text-lg font-semibold text-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={value.title} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 rounded-full bg-cyber-500/10 border border-cyber-500/20 w-fit mx-auto mb-6 group-hover:bg-cyber-500/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-cyber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-cyber-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Company Story */}
        <div className="mt-20 bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-cyber-400">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded by a team of cybersecurity veterans and AI researchers, DCS was born from the 
              recognition that traditional security approaches were no longer sufficient in today's 
              rapidly evolving threat landscape.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We set out to create a new paradigm where security systems don't just respond to threats, 
              but anticipate them. By combining the latest advances in artificial intelligence and machine 
              learning with deep cybersecurity expertise, we're building the future of digital protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
