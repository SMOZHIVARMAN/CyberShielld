import { TrendingUp } from 'lucide-react';

const attacks = [
  { name: 'Phishing', stat: '~36% of breaches', severity: 'critical' },
  { name: 'SQL Injection', stat: '~25% of web apps', severity: 'high' },
  { name: 'Cross-Site Scripting', stat: '~40% of tested apps', severity: 'high' },
  { name: 'Weak Passwords', stat: '~80% of account takeovers', severity: 'critical' },
  { name: 'Misconfigurations', stat: 'Common in cloud', severity: 'medium' },
  { name: 'Malware', stat: '450,000+ daily variants', severity: 'critical' },
  { name: 'Insider Threats', stat: '~20% of incidents', severity: 'high' },
  { name: 'DDoS Attacks', stat: 'Increasing yearly', severity: 'medium' },
  { name: 'API Abuse', stat: 'Rapidly growing', severity: 'high' },
  { name: 'Credential Stuffing', stat: 'Billions daily', severity: 'critical' },
];

const severityColors = {
  critical: 'text-accent bg-accent/10 border-accent/30',
  high: 'text-warning bg-warning/10 border-warning/30',
  medium: 'text-primary bg-primary/10 border-primary/30',
};

export function TopAttacks() {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8 text-accent" />
            Top 10 Attack Vectors
          </h2>
          <p className="section-subtitle mx-auto">
            The most prevalent cyber threats organizations face today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {attacks.map((attack, index) => (
            <div
              key={attack.name}
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-accent/30 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-2xl font-bold text-muted-foreground/50 w-8">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {attack.name}
                </h3>
                <p className="text-sm text-muted-foreground">{attack.stat}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-xs font-medium border ${
                  severityColors[attack.severity as keyof typeof severityColors]
                }`}
              >
                {attack.severity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
