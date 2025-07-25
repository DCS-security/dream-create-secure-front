
import { ArrowRight, Shield, Brain, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-gradient">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-glow"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-500/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Company Logo and Name */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/lovable-uploads/9b69c3c2-8f00-47ff-92a2-f35ea746a04c.png" 
              alt="DCS Logo" 
              className="h-16 w-auto md:h-20"
            />
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyber-400 via-cyber-300 to-cyber-500 bg-clip-text text-transparent">
              DCS
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="text-2xl md:text-4xl font-light mb-8 text-foreground/90">
            <span className="text-cyber-400">Dream.</span>{' '}
            <span className="text-cyber-300">Create.</span>{' '}
            <span className="text-cyber-500">Secure.</span>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Leading provider of 
            <span className="text-cyber-400 font-semibold"> AI-powered cybersecurity solutions</span>, 
            <span className="text-cyber-300 font-semibold"> machine learning development</span>, and 
            <span className="text-cyber-500 font-semibold"> enterprise software engineering</span>.
            Transforming businesses with intelligent threat detection and custom AI applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-cyber-500 hover:bg-cyber-600 text-white px-8 py-3 text-lg group cyber-glow"
              onClick={() => navigate('/services')}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyber-400 text-cyber-400 hover:bg-cyber-400/10 px-8 py-3 text-lg"
              onClick={() => navigate('/contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-cyber-500/10 border border-cyber-500/20 mb-4 group-hover:bg-cyber-500/20 transition-colors">
                <Shield className="h-8 w-8 text-cyber-500" />
              </div>
              <h3 className="text-lg font-semibold text-cyber-400">Cybersecurity</h3>
              <p className="text-sm text-muted-foreground">Advanced security solutions</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-cyber-400/10 border border-cyber-400/20 mb-4 group-hover:bg-cyber-400/20 transition-colors">
                <Brain className="h-8 w-8 text-cyber-400" />
              </div>
              <h3 className="text-lg font-semibold text-cyber-300">AI/ML Solutions</h3>
              <p className="text-sm text-muted-foreground">Intelligent automation</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-cyber-300/10 border border-cyber-300/20 mb-4 group-hover:bg-cyber-300/20 transition-colors">
                <Code className="h-8 w-8 text-cyber-300" />
              </div>
              <h3 className="text-lg font-semibold text-cyber-500">Custom Development</h3>
              <p className="text-sm text-muted-foreground">Tailored software solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
