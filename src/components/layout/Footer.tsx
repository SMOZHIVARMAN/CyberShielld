import { Shield, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="font-bold text-lg">
                <span className="text-primary">Cyber</span>
                <span className="text-foreground">Shield</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              An educational platform designed to create cybersecurity awareness through 
              interactive simulations and visual demonstrations.
            </p>
            <div className="flex gap-4">
  <a
    href="https://www.github.com/SMOZHIVARMAN"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Github className="w-5 h-5" />
  </a>

  <a
    href="https://www.linkedin.com/in/mozhivarmanofficial"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Linkedin className="w-5 h-5" />
  </a>

  <a
    href="mailto:mozhivarmanofficial@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Mail className="w-5 h-5" />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/owasp" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  OWASP Top 10
                </Link>
              </li>
              <li>
                <Link to="/hacker" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Hacker Roadmap
                </Link>
              </li>
              <li>
                <Link to="/defender" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Defender Roadmap
                </Link>
              </li>
              <li>
                <Link to="/phishing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Phishing Awareness
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethical Notice */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground text-center">
              ⚠️ <strong className="text-foreground">Ethical & Legal Notice:</strong> This platform is created strictly for educational and awareness purposes.
              All demonstrations are simulated. No real systems, data, or credentials are involved.
            </p>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CyberShield. Defense through awareness.
          </p>
        </div>
      </div>
    </footer>
  );
}
