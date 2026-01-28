import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { 
  ShieldAlert, 
  Lock, 
  Database, 
  Settings, 
  Package, 
  KeyRound,
  FileWarning,
  Eye,
  Server,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const owaspItems = [
  {
    id: 1,
    title: 'Broken Access Control',
    icon: ShieldAlert,
    color: 'accent',
    description: 'Attackers access admin/user data without proper authorization.',
    howItWorks: 'Exploitation occurs when restrictions on authenticated users are not properly enforced. Attackers can manipulate URLs, internal application state, or HTML pages to access unauthorized functionality.',
    realWorld: 'A user modifies the URL from /user/123 to /user/456 and gains access to another user\'s account data without any authentication check.',
    impact: ['Personal data exposure', 'Unauthorized transactions', 'Administrative takeover', 'Complete system compromise'],
    prevention: ['Implement proper access control lists (ACLs)', 'Deny by default except for public resources', 'Log access control failures and alert admins', 'Rate limit API access'],
    detection: ['Monitor for unusual access patterns', 'Audit logs for privilege escalation attempts', 'Implement automated access control testing'],
  },
  {
    id: 2,
    title: 'Cryptographic Failures',
    icon: Lock,
    color: 'warning',
    description: 'Sensitive data exposed due to weak or missing encryption.',
    howItWorks: 'Data in transit or at rest is not properly protected. This includes using weak cryptographic algorithms, poor key management, or transmitting sensitive data in clear text.',
    realWorld: 'A database stores passwords using MD5 hashing without salt. When breached, attackers use rainbow tables to crack 90% of passwords within hours.',
    impact: ['Password theft', 'Financial data exposure', 'Personal information leaks', 'Regulatory compliance violations'],
    prevention: ['Use strong, up-to-date encryption algorithms', 'Implement proper key management', 'Encrypt all sensitive data at rest and in transit', 'Use salted hashing for passwords'],
    detection: ['Regular security audits', 'Automated scanning for weak cryptography', 'Monitor for unusual data access patterns'],
  },
  {
    id: 3,
    title: 'Injection',
    icon: Database,
    color: 'accent',
    description: 'Attacker manipulates backend queries through malicious input.',
    howItWorks: 'User-supplied data is not validated, filtered, or sanitized. Hostile data is used directly in dynamic queries, commands, or stored procedures.',
    realWorld: 'An attacker enters \' OR \'1\'=\'1 in a login form, bypassing authentication and gaining access to all user accounts in the database.',
    impact: ['Complete database compromise', 'Data theft or destruction', 'Remote code execution', 'System takeover'],
    prevention: ['Use parameterized queries and prepared statements', 'Implement input validation and sanitization', 'Apply principle of least privilege for database accounts', 'Use ORMs and safe APIs'],
    detection: ['Web application firewalls (WAF)', 'Database activity monitoring', 'Anomaly detection in query patterns'],
  },
  {
    id: 4,
    title: 'Insecure Design',
    icon: FileWarning,
    color: 'warning',
    description: 'Application logic itself is fundamentally flawed from conception.',
    howItWorks: 'Security vulnerabilities exist due to missing or ineffective control design. This is different from insecure implementation — it\'s a flaw in the original design.',
    realWorld: 'A password reset feature has no rate limiting, allowing attackers to brute-force reset codes by making millions of requests.',
    impact: ['Business logic bypass', 'Fraud and abuse', 'Data manipulation', 'Service disruption'],
    prevention: ['Integrate security from the design phase', 'Use threat modeling', 'Implement secure design patterns', 'Establish security requirements'],
    detection: ['Design reviews and threat modeling', 'Security architecture assessments', 'Business logic testing'],
  },
  {
    id: 5,
    title: 'Security Misconfiguration',
    icon: Settings,
    color: 'accent',
    description: 'Default settings and improper configurations expose vulnerabilities.',
    howItWorks: 'Applications are deployed with insecure default configurations, unnecessary features enabled, or incomplete setups that leave security gaps.',
    realWorld: 'An admin panel is deployed with default credentials (admin/admin) and no IP restrictions, allowing anyone to access administrative functions.',
    impact: ['Unauthorized system access', 'Data exposure through error messages', 'Service compromise', 'Complete infrastructure takeover'],
    prevention: ['Implement a hardening process', 'Remove unnecessary features and frameworks', 'Review and update configurations regularly', 'Automate security configuration checks'],
    detection: ['Regular security scans', 'Configuration audits', 'Automated compliance checking'],
  },
  {
    id: 6,
    title: 'Vulnerable Components',
    icon: Package,
    color: 'warning',
    description: 'Outdated libraries and frameworks with known security flaws.',
    howItWorks: 'Applications use components with known vulnerabilities. Attackers exploit these CVEs to compromise applications using affected libraries.',
    realWorld: 'The Log4j vulnerability (Log4Shell) allowed remote code execution in millions of applications using the affected logging library.',
    impact: ['Remote code execution', 'Data breaches', 'Service compromise', 'Supply chain attacks'],
    prevention: ['Maintain inventory of all components', 'Remove unused dependencies', 'Monitor for CVEs continuously', 'Use software composition analysis tools'],
    detection: ['Dependency scanning', 'Vulnerability databases monitoring', 'Automated security testing'],
  },
  {
    id: 7,
    title: 'Authentication Failures',
    icon: KeyRound,
    color: 'accent',
    description: 'Weak authentication mechanisms allow unauthorized access.',
    howItWorks: 'Applications have weak password policies, lack multi-factor authentication, or improperly manage sessions allowing attackers to compromise accounts.',
    realWorld: 'An application allows unlimited login attempts with no lockout, enabling brute-force attacks that crack weak passwords within minutes.',
    impact: ['Account takeover', 'Identity theft', 'Unauthorized transactions', 'Data breaches'],
    prevention: ['Implement multi-factor authentication', 'Use strong password policies', 'Implement account lockout mechanisms', 'Use secure session management'],
    detection: ['Monitor for brute-force attempts', 'Detect credential stuffing', 'Alert on suspicious login patterns'],
  },
  {
    id: 8,
    title: 'Software & Data Integrity Failures',
    icon: FileWarning,
    color: 'warning',
    description: 'Untrusted updates or compromised CI/CD pipelines.',
    howItWorks: 'Applications rely on plugins, libraries, or modules from untrusted sources. CI/CD pipelines without integrity verification can be compromised.',
    realWorld: 'The SolarWinds supply chain attack injected malicious code into software updates, compromising thousands of organizations.',
    impact: ['Malicious code execution', 'Supply chain compromise', 'Backdoor installation', 'Data exfiltration'],
    prevention: ['Verify digital signatures', 'Ensure CI/CD pipeline integrity', 'Review code and configuration changes', 'Use trusted repositories only'],
    detection: ['Code signing verification', 'Integrity monitoring', 'Behavioral analysis of updates'],
  },
  {
    id: 9,
    title: 'Logging & Monitoring Failures',
    icon: Eye,
    color: 'accent',
    description: 'Attacks go undetected due to insufficient logging and monitoring.',
    howItWorks: 'Without adequate logging and monitoring, breaches can occur and persist undetected for extended periods, allowing attackers to achieve their objectives.',
    realWorld: 'A data breach goes unnoticed for 6 months because security events weren\'t logged or monitored, allowing attackers to exfiltrate millions of records.',
    impact: ['Delayed incident response', 'Extended dwell time', 'Increased damage from breaches', 'Regulatory penalties'],
    prevention: ['Log all security-relevant events', 'Ensure logs are monitored', 'Implement alerting for suspicious activities', 'Establish incident response plans'],
    detection: ['SIEM implementation', 'Automated log analysis', '24/7 security monitoring'],
  },
  {
    id: 10,
    title: 'Server-Side Request Forgery (SSRF)',
    icon: Server,
    color: 'warning',
    description: 'Server makes unauthorized requests to internal resources.',
    howItWorks: 'Attackers exploit web functionality to make the server send crafted requests to unintended destinations, accessing internal services or cloud metadata.',
    realWorld: 'An attacker exploits an image URL feature to access AWS metadata endpoint (169.254.169.254), obtaining IAM credentials and cloud access.',
    impact: ['Internal network scanning', 'Cloud credential theft', 'Firewall bypass', 'Remote code execution'],
    prevention: ['Validate and sanitize all user input', 'Implement allowlists for remote resources', 'Disable unnecessary URL schemas', 'Segment network access'],
    detection: ['Monitor outbound connections', 'Detect unusual internal access', 'Analyze server-side request patterns'],
  },
];

function OwaspCard({ item, index }: { item: typeof owaspItems[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = item.icon;
  
  const colorClasses = {
    accent: {
      bg: 'bg-accent/10',
      border: 'border-accent/30 hover:border-accent/60',
      text: 'text-accent',
      badge: 'bg-accent/20 text-accent',
    },
    warning: {
      bg: 'bg-warning/10',
      border: 'border-warning/30 hover:border-warning/60',
      text: 'text-warning',
      badge: 'bg-warning/20 text-warning',
    },
  };

  const colors = colorClasses[item.color as keyof typeof colorClasses];

  return (
    <div 
      className={cn(
        'rounded-xl border transition-all duration-500 bg-card/50 overflow-hidden animate-fade-in',
        colors.border
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-start gap-4 text-left"
      >
        <div className={cn('p-3 rounded-lg', colors.bg)}>
          <Icon className={cn('w-6 h-6', colors.text)} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className={cn('px-2 py-0.5 rounded text-xs font-mono', colors.badge)}>
              A{String(item.id).padStart(2, '0')}
            </span>
            <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
        <div className="flex-shrink-0">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-6 animate-fade-in border-t border-border pt-6">
          {/* How it works */}
          <div>
            <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-accent" />
              How Attackers Exploit It
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.howItWorks}
            </p>
          </div>

          {/* Real World */}
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <h4 className="font-semibold text-foreground mb-2">📌 Real-World Scenario</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.realWorld}
            </p>
          </div>

          {/* Impact */}
          <div>
            <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
              <XCircle className="w-4 h-4 text-accent" />
              Impact
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.impact.map((impact) => (
                <span 
                  key={impact}
                  className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent border border-accent/20"
                >
                  {impact}
                </span>
              ))}
            </div>
          </div>

          {/* Prevention & Detection */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                Prevention
              </h4>
              <ul className="space-y-2">
                {item.prevention.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <Eye className="w-4 h-4 text-primary" />
                Detection
              </h4>
              <ul className="space-y-2">
                {item.detection.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">→</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Owasp() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <ShieldAlert className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">OWASP Foundation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OWASP <span className="gradient-text-red">Top 10</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most critical security risks to web applications. Understanding these 
              vulnerabilities is essential for both attackers and defenders.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {owaspItems.map((item, index) => (
              <OwaspCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
