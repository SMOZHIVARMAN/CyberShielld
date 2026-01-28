import { useState, useEffect } from 'react';
import { X, Terminal as TerminalIcon, CheckCircle, AlertTriangle } from 'lucide-react';
import { Terminal } from '@/components/ui/Terminal';
import { cn } from '@/lib/utils';

interface SimulationStep {
  command: string;
  output: string;
  delay: number;
}

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
  title: string;
  description: string;
  steps: SimulationStep[];
  variant: 'attack' | 'defense';
}

export function SimulationModal({
  isOpen,
  onClose,
  onComplete,
  title,
  description,
  steps,
  variant
}: SimulationModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<{ command: string; output: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const isAttack = variant === 'attack';

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setDisplayedLines([]);
      setIsTyping(false);
      setIsComplete(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && currentStep < steps.length && !isTyping) {
      const step = steps[currentStep];
      setIsTyping(true);

      // Show command
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, { command: step.command, output: '' }]);
        
        // Show output after delay
        setTimeout(() => {
          setDisplayedLines(prev => {
            const updated = [...prev];
            updated[updated.length - 1].output = step.output;
            return updated;
          });
          setIsTyping(false);
          setCurrentStep(prev => prev + 1);
        }, step.delay);
      }, 500);
    } else if (currentStep >= steps.length && !isComplete) {
      setTimeout(() => {
        setIsComplete(true);
      }, 1000);
    }
  }, [isOpen, currentStep, steps, isTyping, isComplete]);

  const handleComplete = () => {
    onComplete();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-3xl bg-card border border-border rounded-xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className={cn(
          'px-6 py-4 border-b border-border flex items-center justify-between',
          isAttack ? 'bg-accent/10' : 'bg-primary/10'
        )}>
          <div className="flex items-center gap-3">
            <TerminalIcon className={cn('w-5 h-5', isAttack ? 'text-accent' : 'text-primary')} />
            <div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Terminal */}
        <div className="p-6">
          <Terminal title={isAttack ? 'attack-simulation' : 'defense-console'}>
            <div className="space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto">
              {displayedLines.map((line, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={isAttack ? 'text-accent' : 'text-primary'}>$</span>
                    <span className="text-foreground">{line.command}</span>
                  </div>
                  {line.output && (
                    <div className="pl-4 text-muted-foreground whitespace-pre-wrap">
                      {line.output}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <span className={isAttack ? 'text-accent' : 'text-primary'}>$</span>
                  <span className="animate-pulse">_</span>
                </div>
              )}
            </div>
          </Terminal>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isComplete ? (
              <>
                <CheckCircle className={cn('w-5 h-5', isAttack ? 'text-accent' : 'text-primary')} />
                <span className="text-sm text-muted-foreground">Simulation complete</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-5 h-5 text-warning animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}
                </span>
              </>
            )}
          </div>
          {isComplete && (
            <button
              onClick={handleComplete}
              className={cn(
                'px-4 py-2 rounded-lg font-medium transition-all',
                isAttack ? 'cyber-button-red' : 'cyber-button-green'
              )}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
