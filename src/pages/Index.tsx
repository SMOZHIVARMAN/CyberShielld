import { Layout } from '@/components/layout/Layout';
import { StatCard } from '@/components/dashboard/StatCard';
import { AttackDefenseMapping } from '@/components/dashboard/AttackDefenseMapping';
import { TopAttacks } from '@/components/dashboard/TopAttacks';
import { Terminal } from '@/components/ui/Terminal';
import { 
  Users, 
  Shield, 
  Fish, 
  Globe, 
  Target, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  {
    icon: Users,
    value: '95%',
    label: 'of cyber breaches are caused by human error',
    variant: 'accent' as const,
  },
  {
    icon: Shield,
    value: '80%',
    label: 'of web application risks are covered by OWASP Top 10',
    variant: 'default' as const,
  },
  {
    icon: Fish,
    value: '#1',
    label: 'Phishing is the leading cause of credential theft worldwide',
    variant: 'warning' as const,
  },
  {
    icon: Globe,
    value: '30,000+',
    label: 'websites are hacked every single day globally',
    variant: 'accent' as const,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Cybersecurity Awareness Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              Learn to <span className="gradient-text-red">Attack</span>
              <br />
              Master to <span className="gradient-text-green">Defend</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Experience cybersecurity from both perspectives through interactive simulations 
              and guided learning paths. No real hacking — just real knowledge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Link to="/hacker" className="cyber-button-red flex items-center justify-center gap-2">
                <Target className="w-5 h-5" />
                Start Attack Simulation
              </Link>
              <Link to="/defender" className="cyber-button-green flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                Learn Defense Tactics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                variant={stat.variant}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Terminal title="mission.md" className="animate-fade-in">
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <span className="text-accent">$</span> cat mission.txt
                </p>
                <div className="pl-4 border-l-2 border-primary/30">
                  <p className="text-foreground leading-relaxed">
                    This platform is built to create <span className="text-primary">cybersecurity awareness</span> by 
                    visually demonstrating how cyber attacks happen, how data is stolen, and how 
                    organizations defend against them.
                  </p>
                  <br />
                  <p className="text-foreground leading-relaxed">
                    Instead of theory alone, this website uses <span className="text-accent">simulations</span> and 
                    <span className="text-primary"> guided interactions</span> to help users understand cybersecurity 
                    from both attacker and defender perspectives.
                  </p>
                </div>
                <p className="text-muted-foreground animate-pulse">_</p>
              </div>
            </Terminal>
          </div>
        </div>
      </section>

      {/* Attack-Defense Mapping */}
      <AttackDefenseMapping />

      {/* Top 10 Attacks */}
      <TopAttacks />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Choose your path and begin exploring the world of cybersecurity through 
              interactive simulations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Link 
                to="/hacker" 
                className="hacker-card group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <Target className="w-8 h-8 text-accent" />
                  <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Hacker Roadmap</h3>
                <p className="text-muted-foreground text-sm">
                  Learn how attackers think and operate to better understand threats.
                </p>
              </Link>

              <Link 
                to="/defender" 
                className="cyber-card group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Defender Roadmap</h3>
                <p className="text-muted-foreground text-sm">
                  Master the art of detection, prevention, and incident response.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
