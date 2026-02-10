import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Target } from 'lucide-react';

export default function SecurityLab() {
  return (
    <Layout>
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text-blue animate-slide-up">
            DVWA Security Lab
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Learn real-world web attacks in a safe, ethical environment
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Overview Section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Overview: Your Ethical Hacking Playground</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The DVWA (Damn Vulnerable Web Application) Security Lab is designed to be an intentionally vulnerable web application.
              This platform provides a legal and safe environment for cybersecurity enthusiasts, students, and professionals
              to practice their ethical hacking skills, learn about common web vulnerabilities, and understand how to defend against them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It is strictly for educational and awareness purposes. By interacting with these vulnerabilities, you will gain
              a deeper understanding of the impact of insecure coding practices and the importance of robust security measures.
            </p>
          </div>

          {/* Why This Exists Section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '350ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">DVWA Security Lab – Why This Exists</h2>

            {/* Why This Lab Was Created */}
            <h3 className="text-2xl font-bold mb-4 text-primary">Why This Lab Was Created</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              This lab was born from a fundamental need: to bridge the gap between theoretical cybersecurity knowledge and practical application.
              It offers a unique opportunity for students and beginners to genuinely understand how real-world web attacks unfold.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              By providing hands-on exposure in a completely safe, controlled environment, we move beyond textbook definitions.
              Learning attack methodologies is not about causing harm, but about demonstrating that a deep understanding of vulnerabilities
              is absolutely essential for building robust and resilient defenses.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our aim is to promote ethical hacking and responsible security practices, empowering individuals
              with practical knowledge and fostering a community dedicated to cyber defense. This lab helps replace fear and misinformation
              with clear, actionable insights into web security.
            </p>

            {/* GitHub Repository Features */}
            <h3 className="text-2xl font-bold mb-4 text-primary mt-10">GitHub Repository Features</h3>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 pl-4">
              <li>Based on the renowned Damn Vulnerable Web Application (DVWA).</li>
              <li>An intentionally vulnerable setup, specifically designed for ethical learning.</li>
              <li>Covers common OWASP Top 10 vulnerabilities, offering diverse learning scenarios.</li>
              <li>Provides step-by-step guidance for exploring and understanding each vulnerability.</li>
              <li>Focuses on both exploitation techniques and crucial mitigation strategies.</li>
              <li>Features a well-documented structure to support self-paced learning.</li>
              <li>Encourages community learning, collaboration, and open-source contributions.</li>
              <li>Designed to run locally in an isolated environment, ensuring zero risk to live systems.</li>
              <li>Contains no real data, actual users, or connections to production systems.</li>
            </ul>

            {/* Who This Lab Is For */}
            <h3 className="text-2xl font-bold mb-4 text-primary mt-10">Who This Lab Is For</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              This hands-on lab is an invaluable resource for a diverse audience, including:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 pl-4">
              <li>Cybersecurity beginners eager to start their practical learning journey.</li>
              <li>Students and self-learners looking to apply theoretical knowledge.</li>
              <li>Developers seeking to understand security flaws from an attacker's perspective to write more secure code.</li>
              <li>Ethical hacking enthusiasts aiming to hone their skills responsibly.</li>
              <li>Anyone interested in enhancing their web application security awareness.</li>
            </ul>

            {/* Ethical & Legal Emphasis */}
            <Card className="border-accent/50 bg-accent/10 text-accent-foreground mt-10">
              <CardHeader>
                <CardTitle className="text-accent-foreground flex items-center gap-2">
                  Ethical & Legal Emphasis
                </CardTitle>
              </CardHeader>
              <CardContent className="text-accent-foreground/90">
                <p className="mb-2">
                  It is paramount that this lab is ONLY used within the provided vulnerable environment, strictly for educational purposes.
                </p>
                <p className="mb-2">
                  Any misuse outside this controlled lab environment is unethical, illegal, and strongly discouraged.
                </p>
                <p>
                  The sole purpose of this resource is education, awareness, and responsible skill-building.
                  Always practice within legal and ethical boundaries.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What You Will Learn Section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">What You Will Learn</h2>
            <p className="text-lg text-muted-foreground mb-4">
              The lab covers a wide array of web application security flaws, allowing hands-on experience with:
            </p>
            <ul className="list-disc list-inside text-lg text-foreground space-y-2 pl-4">
              <li className="text-muted-foreground">SQL Injection: Exploit databases through web input.</li>
              <li className="text-muted-foreground">Cross-Site Scripting (XSS): Inject malicious scripts into web pages.</li>
              <li className="text-muted-foreground">Cross-Site Request Forgery (CSRF): Forge requests on behalf of other users.</li>
              <li className="text-muted-foreground">File Upload Vulnerabilities: Bypass restrictions to upload malicious files.</li>
              <li className="text-muted-foreground">Authentication Weaknesses: Discover flaws in login mechanisms.</li>
              <li className="text-muted-foreground">And many more common web vulnerabilities...</li>
            </ul>
          </div>

          {/* How to Use the Lab Section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">How to Use the Lab</h2>
            <ol className="list-decimal list-inside text-lg text-muted-foreground space-y-3 pl-4">
              <li>
                <span className="text-foreground font-medium">Setup DVWA:</span> Follow the instructions on the official DVWA GitHub repository to set up your own local instance of the vulnerable web application.
              </li>
              <li>
                <span className="text-foreground font-medium">Explore Vulnerabilities:</span> Navigate through the different sections of DVWA, each dedicated to a specific vulnerability type.
              </li>
              <li>
                <span className="text-foreground font-medium">Practice Attacks:</span> Use various tools and techniques (e.g., Burp Suite, SQLmap) to identify and exploit the vulnerabilities.
              </li>
              <li>
                <span className="text-foreground font-medium">Understand Defenses:</span> After successfully exploiting a vulnerability, research and understand how to mitigate it.
              </li>
              <li>
                <span className="text-foreground font-medium">Never on Live Systems:</span> ONLY perform these exercises on your local, isolated DVWA instance. NEVER target live websites or systems without explicit permission.
              </li>
            </ol>
          </div>

          {/* Ethical & Legal Disclaimer Section */}
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Card className="border-destructive/50 bg-destructive/10 text-destructive-foreground">
              <CardHeader>
                <CardTitle className="text-destructive-foreground flex items-center gap-2">
                  <Lock className="w-6 h-6" /> Ethical & Legal Disclaimer
                </CardTitle>
                <CardDescription className="text-destructive-foreground/80">
                  Please read carefully before proceeding.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-destructive-foreground/90">
                <p className="mb-4">
                  This Security Lab is provided for educational purposes ONLY. Any actions taken using the knowledge
                  gained from this lab are your sole responsibility. The creators and maintainers of this platform
                  are not responsible for any misuse or illegal activities performed by users.
                </p>
                <p className="mb-4">
                  Unauthorized access to computer systems or networks is illegal and can lead to severe penalties.
                  Always obtain explicit written permission before conducting any security testing on systems you do not own or administer.
                </p>
                <p>
                  By using this lab, you agree to these terms and understand that you are solely accountable for your actions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16 animate-fade-in" style={{ animationDelay: '700ms' }}>
            <a
              href="https://github.com/SMOZHIVARMAN/dvwa-security-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button-red flex items-center justify-center gap-2"
            >
              <Target className="w-5 h-5" />
              Start Lab (GitHub)
            </a>
            <a
              href="https://www.linkedin.com/posts/mozhivarmanofficial_cybersecurity-ethicalhacking-dvwa-ugcPost-7423387594538819584-glsS"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button-green flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" />
              View Lab Info (LinkedIn)
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
