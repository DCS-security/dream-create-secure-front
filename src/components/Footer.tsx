
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Solutions: [
      'Cybersecurity Services',
      'AI/ML Development',
      'Custom Software',
      'Mobile Applications',
      'Web Development',
      'Data Analytics'
    ],
    Company: [
      'Our Team'
    ],
    Support: [
      'Contact Us'
    ]
  };

  return (
    <footer className="bg-muted/40 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/9b69c3c2-8f00-47ff-92a2-f35ea746a04c.png" 
                alt="DCS Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
                DCS
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Pioneering the future of technology through cybersecurity, AI/ML, and innovative software solutions. 
              Dream. Create. Secure.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-cyber-500" />
                <span>info@devanshcybersec.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-cyber-500" />
                <span>+91 9082678303</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-cyber-500" />
                <span>Borivali, Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-cyber-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Additional Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-cyber-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Devansh Cyber Sec. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-cyber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-cyber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-cyber-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
