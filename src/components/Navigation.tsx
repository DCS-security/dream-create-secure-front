
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { label: 'Services', href: '/services', type: 'route' },
    { label: 'About Us', href: '/about-us', type: 'route' },
    { label: 'Contact', href: '/contact', type: 'route' },
    { label: 'Blog', href: '/blog', type: 'route' },
  ];

  const handleNavClick = (item: any) => {
    setIsMenuOpen(false);
    navigate(item.href);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border/20 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 flex-shrink-0"
          >
            <img
              src="/lovable-uploads/9b69c3c2-8f00-47ff-92a2-f35ea746a04c.png"
              alt="DCS Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
              DCS
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-muted-foreground hover:text-cyber-400 transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden md:flex"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left text-muted-foreground hover:text-cyber-400 transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="w-full flex items-center justify-center space-x-2"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
