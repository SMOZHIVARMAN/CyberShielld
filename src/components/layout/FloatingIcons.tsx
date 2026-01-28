import { Link } from 'react-router-dom';
import { Skull, ShieldCheck } from 'lucide-react';

export function FloatingIcons() {
  return (
    <>
      {/* Hacker Icon - Left Side */}
      <Link
        to="/hacker"
        className="floating-icon-red left-4 top-1/2 -translate-y-1/2 group animate-blink"
        title="Attack Mode"
      >
        <Skull className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
        <span className="absolute left-14 bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-accent/30">
          🔴 Attack Mode
        </span>
      </Link>

      {/* Defender Icon - Right Side */}
      <Link
        to="/defender"
        className="floating-icon-blue right-4 top-1/2 -translate-y-1/2 group animate-blink"
        title="Defense Mode"
      >
        <ShieldCheck className="w-5 h-5 text-background transition-transform group-hover:scale-110" />
        <span className="absolute right-14 bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/30">
          🔵 Defense Mode
        </span>
      </Link>
    </>
  );
}
