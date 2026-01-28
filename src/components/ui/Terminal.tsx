import { ReactNode } from 'react';

interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Terminal({ title = 'terminal', children, className = '' }: TerminalProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot bg-accent" />
        <div className="terminal-dot bg-warning" />
        <div className="terminal-dot bg-primary" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm text-primary">
        {children}
      </div>
    </div>
  );
}
