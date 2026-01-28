import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { RoadmapNode } from '@/components/roadmap/RoadmapNode';
import { SimulationModal } from '@/components/roadmap/SimulationModal';
import { 
  Globe, 
  Wifi, 
  Smartphone, 
  Users,
  Server,
  Search,
  Activity,
  Bell,
  Shield,
  RefreshCw,
  ShieldCheck
} from 'lucide-react';

type DefenseCategory = 'web' | 'network' | 'mobile' | 'social';

const categories = [
  { id: 'web' as const, name: 'Web Defense', icon: Globe, description: 'Protect web applications' },
  { id: 'network' as const, name: 'Network Security', icon: Wifi, description: 'Secure network infrastructure' },
  { id: 'mobile' as const, name: 'Mobile Security', icon: Smartphone, description: 'Mobile app protection' },
  { id: 'social' as const, name: 'Social Defense', icon: Users, description: 'Counter social engineering' },
];

const roadmaps = {
  web: [
    { id: 1, icon: Server, title: 'Asset Identification', description: 'Map all web applications, APIs, and dependencies.' },
    { id: 2, icon: Search, title: 'Threat Detection', description: 'Deploy WAF and vulnerability scanning tools.' },
    { id: 3, icon: Activity, title: 'Log Monitoring', description: 'Configure centralized logging and analysis.' },
    { id: 4, icon: Bell, title: 'Alert Generation', description: 'Set up real-time security alerts and thresholds.' },
    { id: 5, icon: Shield, title: 'Incident Response', description: 'Execute containment and investigation procedures.' },
    { id: 6, icon: RefreshCw, title: 'Recovery & Prevention', description: 'Patch vulnerabilities and improve defenses.' },
  ],
  network: [
    { id: 1, icon: Server, title: 'Asset Identification', description: 'Discover all network devices and services.' },
    { id: 2, icon: Search, title: 'Threat Detection', description: 'Deploy IDS/IPS and network monitoring.' },
    { id: 3, icon: Activity, title: 'Log Monitoring', description: 'Collect and analyze network traffic logs.' },
    { id: 4, icon: Bell, title: 'Alert Generation', description: 'Configure alerts for anomalous traffic patterns.' },
    { id: 5, icon: Shield, title: 'Incident Response', description: 'Isolate threats and investigate breaches.' },
    { id: 6, icon: RefreshCw, title: 'Recovery & Prevention', description: 'Strengthen network segmentation and policies.' },
  ],
  mobile: [
    { id: 1, icon: Server, title: 'Asset Identification', description: 'Inventory all mobile apps and their APIs.' },
    { id: 2, icon: Search, title: 'Threat Detection', description: 'Implement mobile threat defense solutions.' },
    { id: 3, icon: Activity, title: 'Log Monitoring', description: 'Monitor app behavior and API calls.' },
    { id: 4, icon: Bell, title: 'Alert Generation', description: 'Alert on suspicious app activities.' },
    { id: 5, icon: Shield, title: 'Incident Response', description: 'Revoke access and investigate compromises.' },
    { id: 6, icon: RefreshCw, title: 'Recovery & Prevention', description: 'Update security controls and app policies.' },
  ],
  social: [
    { id: 1, icon: Server, title: 'Asset Identification', description: 'Identify high-value targets and sensitive roles.' },
    { id: 2, icon: Search, title: 'Threat Detection', description: 'Monitor for phishing attempts and impersonation.' },
    { id: 3, icon: Activity, title: 'Log Monitoring', description: 'Track email and communication anomalies.' },
    { id: 4, icon: Bell, title: 'Alert Generation', description: 'Alert on suspicious communication patterns.' },
    { id: 5, icon: Shield, title: 'Incident Response', description: 'Contain compromised accounts and educate users.' },
    { id: 6, icon: RefreshCw, title: 'Recovery & Prevention', description: 'Enhance awareness training and policies.' },
  ],
};

const simulations = {
  web: [
    {
      steps: [
        { command: 'nmap -sn 10.0.0.0/24', output: 'Discovering web assets...\n✓ web-server-01 (10.0.0.10)\n✓ api-gateway (10.0.0.11)\n✓ database-01 (10.0.0.12)\nAsset inventory updated', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'waf-status --check', output: 'WAF Status: ACTIVE\nRules loaded: 2,847\nBlocked requests (24h): 1,243\n\nVulnerability Scan: Running...', delay: 1800 },
      ]
    },
    {
      steps: [
        { command: 'tail -f /var/log/security.log', output: '[2024-01-15 10:23:45] INFO Request from 192.168.1.50\n[2024-01-15 10:23:46] WARN SQL pattern detected - blocked\n[2024-01-15 10:23:47] INFO Rate limit applied to 192.168.1.50', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'alert-manager --status', output: '🔔 Active Alerts: 3\n⚠️ [HIGH] Brute force attempt detected\n⚠️ [MEDIUM] Unusual API access pattern\nℹ️ [LOW] New IP accessing admin panel', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'incident-response --contain 192.168.1.50', output: '🛡️ Containment initiated:\n✓ IP blocked at firewall\n✓ Session tokens revoked\n✓ Forensic capture started\n✓ Investigation ticket created', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'security-update --apply', output: '🔄 Recovery & Prevention:\n✓ Vulnerability patched\n✓ WAF rules updated\n✓ Monitoring enhanced\n✓ Incident report generated', delay: 1500 },
      ]
    },
  ],
  network: [
    {
      steps: [
        { command: 'network-discovery --full', output: 'Scanning network assets...\n✓ Router-Core (10.0.0.1)\n✓ Switch-L2-01 (10.0.0.2)\n✓ Firewall-01 (10.0.0.3)\n✓ 156 endpoints discovered', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'ids-status --check', output: 'IDS/IPS Status: ACTIVE\nSignatures: 45,892 loaded\nAlerts (24h): 847\nBlocked threats: 23', delay: 1800 },
      ]
    },
    {
      steps: [
        { command: 'netflow-analyze --last 1h', output: 'Traffic Analysis:\n✓ Total flows: 1.2M\n⚠️ Anomaly: Port scan from 192.168.5.100\n⚠️ Unusual outbound: 10.0.0.50 → external', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'siem-alerts --critical', output: '🚨 Critical Alerts:\n[1] Lateral movement detected\n[2] C2 beacon pattern identified\n[3] Data exfiltration attempt', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'isolate-host 10.0.0.50', output: '🛡️ Host Isolation:\n✓ Network access revoked\n✓ Traffic captured for analysis\n✓ Backup initiated\n✓ IR team notified', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'network-harden --apply', output: '🔄 Network Hardening:\n✓ Segmentation rules updated\n✓ ACLs strengthened\n✓ Monitoring expanded\n✓ Playbook updated', delay: 1500 },
      ]
    },
  ],
  mobile: [
    {
      steps: [
        { command: 'mdm-inventory --list', output: 'Mobile Device Inventory:\n✓ iOS devices: 245\n✓ Android devices: 189\n✓ Managed apps: 34\nCompliance rate: 94%', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'mtd-status --check', output: 'Mobile Threat Defense:\nStatus: ACTIVE\nThreats blocked (24h): 12\nRisky apps detected: 3', delay: 1800 },
      ]
    },
    {
      steps: [
        { command: 'app-behavior --monitor', output: 'Behavioral Analysis:\n⚠️ App "FileManager" accessing contacts\n⚠️ Unusual API calls from device-0x4F2\n✓ Normal activity: 98.5%', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'mobile-alerts --active', output: '🔔 Mobile Alerts:\n⚠️ Jailbroken device detected\n⚠️ Suspicious app installed\nℹ️ Policy violation: camera access', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'mdm-wipe --device device-0x4F2', output: '🛡️ Device Response:\n✓ Corporate data wiped\n✓ Access tokens revoked\n✓ Device quarantined\n✓ User notified', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'mobile-policy --update', output: '🔄 Policy Update:\n✓ App whitelist updated\n✓ Security requirements raised\n✓ Training scheduled\n✓ Compliance scan initiated', delay: 1500 },
      ]
    },
  ],
  social: [
    {
      steps: [
        { command: 'identify-vips --list', output: 'High-Value Targets:\n✓ C-Suite executives: 12\n✓ Finance team: 34\n✓ IT administrators: 18\nRisk score: HIGH', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'phish-detect --status', output: 'Anti-Phishing Status:\nEmails scanned (24h): 45,892\nPhishing blocked: 234\nSuspicious links: 89', delay: 1800 },
      ]
    },
    {
      steps: [
        { command: 'email-anomaly --check', output: 'Email Analysis:\n⚠️ Executive impersonation attempt\n⚠️ Spoofed domain: examp1e.com\n✓ User reported suspicious email', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'social-alerts --active', output: '🔔 Social Engineering Alerts:\n🚨 BEC attempt targeting CFO\n⚠️ Credential harvesting link\nℹ️ Unusual login location', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'account-secure --user cfo@company.com', output: '🛡️ Account Security:\n✓ Password reset forced\n✓ MFA re-enrolled\n✓ Recent sessions reviewed\n✓ User counseled', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'awareness-train --launch', output: '🔄 Awareness Enhancement:\n✓ Phishing simulation scheduled\n✓ Training modules assigned\n✓ Reporting process improved\n✓ Metrics dashboard updated', delay: 1500 },
      ]
    },
  ],
};

export default function Defender() {
  const [selectedCategory, setSelectedCategory] = useState<DefenseCategory | null>(null);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategorySelect = (category: DefenseCategory) => {
    setSelectedCategory(category);
    setCurrentNodeIndex(0);
    setCompletedNodes([]);
  };

  const handleNodeClick = (nodeId: number) => {
    if (nodeId === currentNodeIndex + 1) {
      setIsModalOpen(true);
    }
  };

  const handleSimulationComplete = () => {
    setCompletedNodes(prev => [...prev, currentNodeIndex + 1]);
    if (selectedCategory && currentNodeIndex < roadmaps[selectedCategory].length - 1) {
      setCurrentNodeIndex(prev => prev + 1);
    }
  };

  const getNodeStatus = (nodeId: number): 'locked' | 'active' | 'completed' => {
    if (completedNodes.includes(nodeId)) return 'completed';
    if (nodeId === currentNodeIndex + 1) return 'active';
    return 'locked';
  };

  const currentRoadmap = selectedCategory ? roadmaps[selectedCategory] : null;
  const currentSimulation = selectedCategory ? simulations[selectedCategory][currentNodeIndex] : null;
  const currentNode = currentRoadmap ? currentRoadmap[currentNodeIndex] : null;

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Defense Training</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text-green">Defender</span> Roadmap
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master the art of detection, prevention, and incident response.
              Choose a defense category to begin.
            </p>
          </div>

          {!selectedCategory ? (
            /* Category Selection */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className="cyber-card text-left group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Roadmap View */
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => setSelectedCategory(null)}
                className="mb-8 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                ← Back to categories
              </button>

              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  {categories.find(c => c.id === selectedCategory)?.name} Roadmap
                </h2>
                <p className="text-muted-foreground mt-2">
                  Complete each stage to master defense techniques
                </p>
              </div>

              <div className="space-y-0">
                {currentRoadmap?.map((node, index) => (
                  <RoadmapNode
                    key={node.id}
                    icon={node.icon}
                    title={node.title}
                    description={node.description}
                    status={getNodeStatus(node.id)}
                    variant="defense"
                    onClick={() => handleNodeClick(node.id)}
                    isLast={index === currentRoadmap.length - 1}
                  />
                ))}
              </div>

              {completedNodes.length === currentRoadmap?.length && (
                <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/30 text-center animate-fade-in">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Training Complete!</h3>
                  <p className="text-muted-foreground">
                    You've mastered the {categories.find(c => c.id === selectedCategory)?.name} defense roadmap.
                    You're now better equipped to protect against cyber threats!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Simulation Modal */}
      {currentSimulation && currentNode && (
        <SimulationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onComplete={handleSimulationComplete}
          title={currentNode.title}
          description={currentNode.description}
          steps={currentSimulation.steps}
          variant="defense"
        />
      )}
    </Layout>
  );
}
