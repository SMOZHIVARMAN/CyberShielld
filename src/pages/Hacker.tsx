import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { RoadmapNode } from '@/components/roadmap/RoadmapNode';
import { SimulationModal } from '@/components/roadmap/SimulationModal';
import { 
  Globe, 
  Wifi, 
  Smartphone, 
  Users,
  Search,
  FormInput,
  Bug,
  Zap,
  Database,
  Network,
  Radio,
  Server,
  FileSearch,
  HardDrive,
  Send,
  MessageSquare,
  UserCheck,
  KeyRound,
  Skull
} from 'lucide-react';
import { cn } from '@/lib/utils';

type AttackCategory = 'web' | 'network' | 'mobile' | 'social';

const categories = [
  { id: 'web' as const, name: 'Web Application', icon: Globe, description: 'Exploit web vulnerabilities' },
  { id: 'network' as const, name: 'Network Attacks', icon: Wifi, description: 'Network penetration' },
  { id: 'mobile' as const, name: 'Mobile Attacks', icon: Smartphone, description: 'Mobile app exploitation' },
  { id: 'social' as const, name: 'Social Engineering', icon: Users, description: 'Human manipulation' },
];

const roadmaps = {
  web: [
    { id: 1, icon: Search, title: 'Reconnaissance', description: 'Identify target pages, endpoints, and technologies used.' },
    { id: 2, icon: FormInput, title: 'Input Discovery', description: 'Find all user input fields: forms, URL parameters, headers.' },
    { id: 3, icon: Bug, title: 'Vulnerability Detection', description: 'Test for weak input validation and security misconfigurations.' },
    { id: 4, icon: Zap, title: 'Exploitation', description: 'Execute simulated payload against identified vulnerabilities.' },
    { id: 5, icon: Database, title: 'Data Access', description: 'View simulated leaked data from the compromised system.' },
  ],
  network: [
    { id: 1, icon: Network, title: 'Network Discovery', description: 'Identify active hosts and network topology.' },
    { id: 2, icon: Radio, title: 'Port Scanning', description: 'Discover open ports and running services.' },
    { id: 3, icon: Server, title: 'Service Enumeration', description: 'Identify service versions and potential vulnerabilities.' },
    { id: 4, icon: Bug, title: 'Weak Service Exploitation', description: 'Exploit misconfigured or vulnerable services.' },
    { id: 5, icon: Wifi, title: 'Data Interception', description: 'Visualize intercepted network traffic.' },
  ],
  mobile: [
    { id: 1, icon: FileSearch, title: 'App Analysis', description: 'Reverse engineer app components and libraries.' },
    { id: 2, icon: HardDrive, title: 'Insecure Storage Detection', description: 'Find sensitive data stored insecurely on device.' },
    { id: 3, icon: Send, title: 'Weak API Calls', description: 'Identify insecure API communications.' },
    { id: 4, icon: Database, title: 'Data Extraction', description: 'Simulate extraction of sensitive app data.' },
  ],
  social: [
    { id: 1, icon: UserCheck, title: 'Target Selection', description: 'Research and identify potential targets.' },
    { id: 2, icon: MessageSquare, title: 'Trust Building', description: 'Establish rapport and build credibility.' },
    { id: 3, icon: Users, title: 'Scenario Creation', description: 'Craft believable pretexts and scenarios.' },
    { id: 4, icon: KeyRound, title: 'Credential Capture', description: 'Visualize how credentials are captured.' },
  ],
};

const simulations = {
  web: [
    {
      steps: [
        { command: 'nmap -sV target.example.com', output: 'Scanning...\n80/tcp   open  http    Apache/2.4.41\n443/tcp  open  https   nginx/1.18.0\n3306/tcp open  mysql   MySQL 5.7.32', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'dirb http://target.example.com/', output: 'Scanning directories...\n+ /admin (Status: 302)\n+ /login (Status: 200)\n+ /api/users (Status: 401)', delay: 1200 },
      ]
    },
    {
      steps: [
        { command: 'sqlmap -u "http://target.example.com/search?q=test"', output: 'Testing for SQL injection...\n[!] Parameter "q" is vulnerable\n[!] Type: UNION query\n[!] Backend: MySQL', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: "' OR '1'='1' --", output: '[SIMULATED] Payload injected successfully\n[SIMULATED] Authentication bypassed\n[!] This is an educational demonstration', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'SELECT * FROM users LIMIT 5 [SIMULATED]', output: '┌────────────────────────────────────────┐\n│ SIMULATED DATA - NOT REAL              │\n├──────┬─────────────┬───────────────────┤\n│ ID   │ Username    │ Email             │\n├──────┼─────────────┼───────────────────┤\n│ 1    │ admin       │ admin@fake.com    │\n│ 2    │ user1       │ user1@fake.com    │\n│ 3    │ test        │ test@fake.com     │\n└──────┴─────────────┴───────────────────┘\n\n⚠️ This is simulated data for educational purposes only', delay: 2000 },
      ]
    },
  ],
  network: [
    {
      steps: [
        { command: 'arp-scan --localnet', output: 'Scanning local network...\n192.168.1.1    00:11:22:33:44:55  Router\n192.168.1.100  AA:BB:CC:DD:EE:FF  Target-PC\n192.168.1.105  11:22:33:44:55:66  Server', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'nmap -p 1-1000 192.168.1.100', output: 'PORT     STATE  SERVICE\n22/tcp   open   ssh\n80/tcp   open   http\n443/tcp  open   https\n3389/tcp open   rdp', delay: 1800 },
      ]
    },
    {
      steps: [
        { command: 'nmap -sV -p 22 192.168.1.100', output: 'PORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.2p2\n\n[!] Outdated version - potential vulnerabilities', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'ssh-exploit --target 192.168.1.100 [SIMULATED]', output: '[SIMULATED] Attempting exploitation...\n[SIMULATED] Vulnerability CVE-2016-0777 detected\n[!] Educational demonstration only', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'tcpdump -i eth0 [SIMULATED]', output: '[SIMULATED TRAFFIC CAPTURE]\n192.168.1.100 > 192.168.1.1: HTTP GET /api/data\n192.168.1.1 > 192.168.1.100: HTTP 200 OK\n\n⚠️ This is simulated network traffic', delay: 1500 },
      ]
    },
  ],
  mobile: [
    {
      steps: [
        { command: 'apktool d target-app.apk', output: 'Decompiling APK...\n✓ Resources extracted\n✓ Manifest decoded\n✓ Smali code extracted\nAnalyzing app structure...', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'grep -r "password" ./shared_prefs/', output: '[SIMULATED] Found insecure storage:\nconfig.xml: api_key="sk_test_xxxx"\nauth.xml: password_hash="md5:abc123"\n\n⚠️ Educational demonstration', delay: 1800 },
      ]
    },
    {
      steps: [
        { command: 'mitmproxy --mode regular', output: '[SIMULATED] Intercepting API calls...\nPOST /api/login\nBody: {"user":"test","pass":"plain123"}\n\n[!] Credentials sent without encryption', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'adb pull /data/data/com.target.app/databases/', output: '[SIMULATED] Extracting app database...\n✓ users.db copied\n✓ preferences.db copied\n\n⚠️ This is simulated data extraction', delay: 1500 },
      ]
    },
  ],
  social: [
    {
      steps: [
        { command: 'osint-gather --target "John Doe"', output: '[SIMULATED] Gathering OSINT...\nLinkedIn: Software Engineer at TechCorp\nTwitter: @johndoe_dev\nEmail pattern: j.doe@techcorp.com', delay: 1500 },
      ]
    },
    {
      steps: [
        { command: 'craft-email --template "IT Support"', output: '[SIMULATED] Email Template:\nFrom: IT Support <support@tech-corp.com>\nSubject: Urgent: Password Reset Required\n\n[Building trust through authority]', delay: 1800 },
      ]
    },
    {
      steps: [
        { command: 'create-phishing-page --clone "login.techcorp.com"', output: '[SIMULATED] Creating clone...\n✓ Visual clone complete\n✓ Form action redirected\n\n⚠️ Educational demonstration only', delay: 2000 },
      ]
    },
    {
      steps: [
        { command: 'monitor-captures', output: '[SIMULATED] Credential Capture:\n┌──────────────────────────────────┐\n│ Username: j.doe                 │\n│ Password: ********              │\n│ Captured: [SIMULATED]           │\n└──────────────────────────────────┘\n\n⚠️ NO REAL DATA - Educational only', delay: 1500 },
      ]
    },
  ],
};

export default function Hacker() {
  const [selectedCategory, setSelectedCategory] = useState<AttackCategory | null>(null);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategorySelect = (category: AttackCategory) => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Skull className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Attack Simulation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text-red">Hacker</span> Roadmap
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how attackers think and operate. Choose an attack category 
              to begin your educational simulation.
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
                    className="hacker-card text-left group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-accent transition-colors">
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
                className="mb-8 text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                ← Back to categories
              </button>

              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  {categories.find(c => c.id === selectedCategory)?.name} Attack Roadmap
                </h2>
                <p className="text-muted-foreground mt-2">
                  Complete each stage to progress through the simulation
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
                    variant="attack"
                    onClick={() => handleNodeClick(node.id)}
                    isLast={index === currentRoadmap.length - 1}
                  />
                ))}
              </div>

              {completedNodes.length === currentRoadmap?.length && (
                <div className="mt-8 p-6 rounded-xl bg-accent/10 border border-accent/30 text-center animate-fade-in">
                  <Skull className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Simulation Complete!</h3>
                  <p className="text-muted-foreground">
                    You've completed the {categories.find(c => c.id === selectedCategory)?.name} attack roadmap.
                    Remember: This knowledge is for defense, not offense!
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
          variant="attack"
        />
      )}
    </Layout>
  );
}
