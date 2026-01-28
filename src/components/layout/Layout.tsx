import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingIcons } from './FloatingIcons';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, hsl(220, 20%, 40%) 1px, transparent 1px), linear-gradient(to bottom, hsl(220, 20%, 40%) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <Navbar />
      <FloatingIcons />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
