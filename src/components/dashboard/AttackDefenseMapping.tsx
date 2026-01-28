import { ArrowRight, Shield, Skull } from 'lucide-react';

const mappings = [
  {
    attack: 'SQL Injection',
    defenses: ['Input Validation', 'Prepared Statements', 'DB Monitoring'],
  },
  {
    attack: 'Cross-Site Scripting (XSS)',
    defenses: ['Output Encoding', 'CSP', 'Browser Security Logs'],
  },
  {
    attack: 'Broken Access Control',
    defenses: ['RBAC', 'Authorization Checks', 'Audit Logs'],
  },
  {
    attack: 'Phishing',
    defenses: ['User Awareness', 'Email Filtering', 'MFA'],
  },
  {
    attack: 'Malware',
    defenses: ['Antivirus', 'Sandboxing', 'Behavior Analysis'],
  },
];

export function AttackDefenseMapping() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Every <span className="gradient-text-red">Attack</span> Has a{' '}
            <span className="gradient-text-green">Defense</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Understanding the relationship between attack vectors and their countermeasures
          </p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {mappings.map((item, index) => (
            <div
              key={item.attack}
              className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Attack */}
              <div className="flex items-center gap-3 flex-1 w-full md:w-auto">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Skull className="w-5 h-5 text-accent" />
                </div>
                <span className="font-semibold text-accent">{item.attack}</span>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />

              {/* Defenses */}
              <div className="flex flex-wrap items-center gap-2 flex-1 w-full md:w-auto justify-start md:justify-end">
                <Shield className="w-5 h-5 text-primary hidden md:block" />
                {item.defenses.map((defense) => (
                  <span
                    key={defense}
                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                  >
                    {defense}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
