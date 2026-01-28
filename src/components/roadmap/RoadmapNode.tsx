import { LucideIcon, Check, Lock, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapNodeProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: 'locked' | 'active' | 'completed';
  variant: 'attack' | 'defense';
  onClick?: () => void;
  isLast?: boolean;
}

export function RoadmapNode({ 
  icon: Icon, 
  title, 
  description, 
  status, 
  variant,
  onClick,
  isLast = false
}: RoadmapNodeProps) {
  const isAttack = variant === 'attack';
  
  const statusClasses = {
    locked: 'border-muted bg-muted/10 opacity-50 cursor-not-allowed',
    active: isAttack 
      ? 'border-accent bg-accent/10 cursor-pointer hover:bg-accent/20' 
      : 'border-primary bg-primary/10 cursor-pointer hover:bg-primary/20',
    completed: isAttack
      ? 'border-accent/50 bg-accent/5'
      : 'border-primary/50 bg-primary/5',
  };

  const iconClasses = {
    locked: 'text-muted-foreground',
    active: isAttack ? 'text-accent' : 'text-primary',
    completed: isAttack ? 'text-accent/70' : 'text-primary/70',
  };

  return (
    <div className="flex items-start gap-4">
      {/* Connector Line */}
      <div className="flex flex-col items-center">
        <div 
          className={cn(
            'w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300',
            statusClasses[status]
          )}
          onClick={status === 'active' ? onClick : undefined}
        >
          {status === 'completed' ? (
            <Check className={cn('w-6 h-6', iconClasses[status])} />
          ) : status === 'locked' ? (
            <Lock className={cn('w-5 h-5', iconClasses[status])} />
          ) : (
            <Icon className={cn('w-6 h-6', iconClasses[status])} />
          )}
        </div>
        {!isLast && (
          <div 
            className={cn(
              'w-0.5 h-16 transition-colors duration-300',
              status === 'completed' 
                ? (isAttack ? 'bg-accent/50' : 'bg-primary/50')
                : 'bg-muted'
            )}
          />
        )}
      </div>

      {/* Content */}
      <div 
        className={cn(
          'flex-1 p-4 rounded-lg border transition-all duration-300 mb-4',
          statusClasses[status]
        )}
        onClick={status === 'active' ? onClick : undefined}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className={cn(
            'font-semibold',
            status === 'locked' ? 'text-muted-foreground' : 'text-foreground'
          )}>
            {title}
          </h3>
          {status === 'active' && (
            <ChevronRight className={cn('w-5 h-5', isAttack ? 'text-accent' : 'text-primary')} />
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
