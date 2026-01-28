import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  variant?: 'default' | 'accent' | 'warning';
  delay?: number;
}

export function StatCard({ icon: Icon, value, label, variant = 'default', delay = 0 }: StatCardProps) {
  const variantStyles = {
    default: 'border-primary/30 hover:border-primary/60',
    accent: 'border-accent/30 hover:border-accent/60',
    warning: 'border-warning/30 hover:border-warning/60',
  };

  const iconStyles = {
    default: 'text-primary',
    accent: 'text-accent',
    warning: 'text-warning',
  };

  return (
    <div 
      className={cn(
        'stat-card transition-all duration-500 hover:scale-105 animate-fade-in border',
        variantStyles[variant]
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={cn('p-3 rounded-lg bg-muted/50', iconStyles[variant])}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{label}</p>
        </div>
      </div>
    </div>
  );
}
