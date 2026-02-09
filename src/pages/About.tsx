import { Layout } from '@/components/layout/Layout';
import { 
  Shield, 
  Globe, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone,
  Heart,
  Target,
  BookOpen
} from 'lucide-react';

const links = [
  { icon: Globe, label: 'Portfolio', url: 'https://smozhivarman-portfolio.netlify.app/', color: 'text-primary' },
  { icon: Github, label: 'GitHub', url: 'https://www.github.com/SMOZHIVARMAN', color: 'text-foreground' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mozhivarmanofficial', color: 'text-blue-500' },
  { icon: Instagram, label: 'Instagram', url: '#', color: 'text-pink-500' },
  { icon: Mail, label: 'Email', url: 'mailto:mozhivarmanofficial@gmail.com.com', color: 'text-accent' },
  { icon: Phone, label: 'Phone', url: 'tel:+918124150569', color: 'text-primary' },
];

const values = [
  {
    icon: Shield,
    title: 'Defense First',
    description: 'Understanding attacks to build better defenses. Knowledge protects, ignorance exposes.',
  },
  {
    icon: BookOpen,
    title: 'Education Over Fear',
    description: 'Empowering users with knowledge rather than creating panic about cyber threats.',
  },
  {
    icon: Target,
    title: 'Practical Learning',
    description: 'Hands-on simulations that demonstrate real-world scenarios in a safe environment.',
  },
  {
    icon: Heart,
    title: 'Ethical Approach',
    description: 'All content is designed purely for educational purposes with no malicious intent.',
  },
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">About the Creator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building a <span className="gradient-text-green">Safer</span> Digital World
            </h1>
          </div>

          {/* Profile Section */}
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
<div className="relative">
  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1">
    <div className="w-full h-full rounded-full bg-card overflow-hidden">
      <img
        src="https://res.cloudinary.com/dn3e0hr3y/image/upload/v1770562664/Suite_wkeeg9.jpg"
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>

  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
    <Target className="w-6 h-6 text-primary-foreground" />
  </div>
</div>


                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Cybersecurity Enthusiast</h2>
                  <p className="text-primary font-medium mb-4">Security Awareness Advocate</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate about making cybersecurity accessible to everyone. With years of experience 
                    in security concepts and awareness training, I believe that understanding how attacks 
                    work is the first step to building effective defenses.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={value.title}
                    className="cyber-card animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mission Statement */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Defense Through Awareness"
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My mission is to democratize cybersecurity knowledge. By showing people how attacks 
                happen in a safe, educational environment, we can build a more security-conscious 
                digital society together.
              </p>
            </div>

            {/* Contact Links */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
                    >
                      <Icon className={`w-5 h-5 ${link.color}`} />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="inline-block">
                <a 
                  href="mailto:contact@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button-green inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Let's Build a Safer Digital World Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
