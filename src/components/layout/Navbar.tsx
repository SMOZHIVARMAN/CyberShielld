import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Dashboard', path: '/' },
  { name: 'OWASP Top 10', path: '/owasp' },
  { name: 'Hacker Mode', path: '/hacker' },
  { name: 'Defender Mode', path: '/defender' },
  { name: 'Phishing', path: '/phishing' },
  { name: 'About', path: '/about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-primary/80" />
              <Terminal className="w-4 h-4 text-accent absolute -bottom-1 -right-1" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-primary">Cyber</span>
              <span className="text-foreground">Shield</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Blurred backdrop */}
            <div 
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Navigation menu */}
            <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 md:hidden py-4 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-4 py-3 mx-4 rounded-lg text-sm font-medium transition-all duration-300',
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
