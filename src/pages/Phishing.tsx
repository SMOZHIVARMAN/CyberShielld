import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { 
  Fish, 
  Instagram, 
  Mail, 
  MessageSquare, 
  Briefcase, 
  Headphones,
  QrCode,
  Building2,
  Gift,
  AlertTriangle,
  Eye,
  EyeOff,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const facts = [
  { icon: Fish, text: 'Phishing causes most credential thefts worldwide' },
  { icon: AlertTriangle, text: 'One click can compromise an entire system' },
  { icon: MessageSquare, text: 'Social engineering targets emotions, not systems' },
];

const simulations = [
  {
    id: 'instagram',
    name: 'Fake Instagram Login',
    icon: Instagram,
    color: 'pink',
    loginPage: {
      title: 'Instagram',
      subtitle: 'Log in to see photos and videos from friends.',
      fields: ['Username or email', 'Password'],
    },
    stolenData: ['Username/Email', 'Password', 'Device Info', 'IP Address', 'Browser Fingerprint'],
    awareness: 'Always check the URL before entering credentials. Real Instagram URLs start with instagram.com',
  },
  {
    id: 'email',
    name: 'Email Phishing',
    icon: Mail,
    color: 'blue',
    loginPage: {
      title: 'Account Verification Required',
      subtitle: 'Your Microsoft account needs immediate verification.',
      fields: ['Email Address', 'Password'],
    },
    stolenData: ['Email Credentials', 'Account Access', 'Contact Lists', 'Sensitive Emails'],
    awareness: 'Microsoft never asks for passwords via email. Check sender addresses carefully.',
  },
  {
    id: 'sms',
    name: 'SMS Smishing',
    icon: MessageSquare,
    color: 'green',
    loginPage: {
      title: 'Package Delivery',
      subtitle: 'Your package is waiting. Confirm your details.',
      fields: ['Full Name', 'Address', 'Card Number'],
    },
    stolenData: ['Personal Information', 'Home Address', 'Credit Card Details', 'Phone Number'],
    awareness: 'Legitimate delivery services don\'t ask for payment info via SMS.',
  },
  {
    id: 'job',
    name: 'Fake Job Offer',
    icon: Briefcase,
    color: 'purple',
    loginPage: {
      title: 'Dream Job Application',
      subtitle: 'Complete your application for $150k/year remote position.',
      fields: ['Full Name', 'SSN', 'Bank Account'],
    },
    stolenData: ['Social Security Number', 'Bank Details', 'Personal Documents', 'Identity Information'],
    awareness: 'Real employers never ask for SSN or bank info before hiring.',
  },
  {
    id: 'tech',
    name: 'Tech Support Scam',
    icon: Headphones,
    color: 'orange',
    loginPage: {
      title: 'VIRUS DETECTED!',
      subtitle: 'Call Microsoft Support Now: 1-800-XXX-XXXX',
      fields: ['Computer Access Code', 'Credit Card'],
    },
    stolenData: ['Remote Computer Access', 'Payment Information', 'Personal Files', 'Saved Passwords'],
    awareness: 'Microsoft never shows pop-ups asking you to call. These are always scams.',
  },
  {
    id: 'qr',
    name: 'QR Code Phishing',
    icon: QrCode,
    color: 'cyan',
    loginPage: {
      title: 'Scan for Free WiFi',
      subtitle: 'Connect and enter your credentials for premium access.',
      fields: ['Email', 'Password'],
    },
    stolenData: ['Login Credentials', 'Network Traffic', 'Browsing Activity', 'Session Cookies'],
    awareness: 'Never scan QR codes from untrusted sources. They can lead to malicious sites.',
  },
  {
    id: 'bank',
    name: 'Fake Banking Website',
    icon: Building2,
    color: 'emerald',
    loginPage: {
      title: 'Secure Banking Login',
      subtitle: 'Access your account. Session expires in 5 minutes.',
      fields: ['Account Number', 'PIN', 'OTP'],
    },
    stolenData: ['Bank Credentials', 'Account Numbers', 'Transaction Access', 'Personal Funds'],
    awareness: 'Type your bank URL directly. Never click links in emails claiming urgency.',
  },
  {
    id: 'giveaway',
    name: 'Giveaway Scam',
    icon: Gift,
    color: 'red',
    loginPage: {
      title: '🎉 YOU WON $1,000,000!',
      subtitle: 'Claim your prize by verifying your identity.',
      fields: ['Full Name', 'SSN', 'Bank Account'],
    },
    stolenData: ['Identity Information', 'Bank Details', 'SSN', 'Address'],
    awareness: 'You can\'t win a contest you didn\'t enter. All "free prize" requests are scams.',
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-500' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-500' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-500' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-500' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-500' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-500' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-500' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-500' },
};

function SimulationCard({ simulation, index }: { simulation: typeof simulations[0]; index: number }) {
  const [showData, setShowData] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const Icon = simulation.icon;
  const colors = colorClasses[simulation.color];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setShowData(true), 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setShowData(false);
  };

  return (
    <div 
      className="rounded-xl border border-border bg-card/50 overflow-hidden animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className={cn('px-4 py-3 border-b border-border flex items-center gap-3', colors.bg)}>
        <Icon className={cn('w-5 h-5', colors.text)} />
        <span className="font-medium text-foreground">{simulation.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Left: Fake Login Page */}
        <div className="p-6 border-r border-border">
          <div className="text-center mb-4">
            <h3 className="font-bold text-lg text-foreground">{simulation.loginPage.title}</h3>
            <p className="text-sm text-muted-foreground">{simulation.loginPage.subtitle}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            {simulation.loginPage.fields.map((field) => (
              <input
                key={field}
                type={field.toLowerCase().includes('password') ? 'password' : 'text'}
                placeholder={field}
                className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:border-primary"
                disabled={submitted}
              />
            ))}
            <button
              type="submit"
              disabled={submitted}
              className={cn(
                'w-full py-2 rounded-lg font-medium transition-all',
                submitted 
                  ? 'bg-accent text-white cursor-not-allowed'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              )}
            >
              {submitted ? '⚠️ Data Captured!' : 'Submit'}
            </button>
          </form>
          
          <p className="text-xs text-muted-foreground text-center mt-3">
            ⚠️ This is a simulation. No data is stored.
          </p>
        </div>

        {/* Right: Stolen Data Visualization */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              {showData ? <Eye className="w-4 h-4 text-accent" /> : <EyeOff className="w-4 h-4 text-muted-foreground" />}
              Data Captured
            </h4>
            {submitted && (
              <button 
                onClick={handleReset}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Reset
              </button>
            )}
          </div>

          <div className="space-y-2 mb-4">
            {simulation.stolenData.map((data, i) => (
              <div 
                key={data}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all duration-500',
                  showData 
                    ? 'bg-accent/10 border border-accent/30 text-accent'
                    : 'bg-muted/30 border border-transparent text-muted-foreground'
                )}
                style={{ transitionDelay: showData ? `${i * 100}ms` : '0ms' }}
              >
                {showData ? '✓' : '○'} {data}
              </div>
            ))}
          </div>

          {showData && (
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 animate-fade-in">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-medium text-foreground mb-1">Awareness Tip</h5>
                  <p className="text-sm text-muted-foreground">{simulation.awareness}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Phishing() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Fish className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Social Engineering Awareness</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text-red">Phishing</span> & Social Engineering
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how attackers use deception to steal your data through 
              interactive simulations.
            </p>
          </div>

          {/* Top Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div 
                  key={fact.text}
                  className="stat-card flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">{fact.text}</p>
                </div>
              );
            })}
          </div>

          {/* Simulations */}
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Interactive <span className="text-accent">Phishing</span> Simulations
            </h2>
            
            {simulations.map((sim, index) => (
              <SimulationCard key={sim.id} simulation={sim} index={index} />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Educational Purpose Only</h3>
              <p className="text-muted-foreground">
                No credentials are stored or transmitted. All simulations are purely visual 
                demonstrations designed to increase awareness about phishing attacks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
