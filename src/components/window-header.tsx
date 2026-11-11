import { Minus, Square } from 'lucide-react';

export function WindowHeader({ active = 'home', title }: { active?: 'home' | 'projects'; title?: string }) {
  return (
    <header className="titlebar">
      <div className="window-identity">
        <span className="window-controls" aria-hidden="true"><i /><i /><i /></span>
        <span>JAVERIA.ZAHEER.EXE</span>
      </div>
      <span className="window-location">{title ?? (active === 'home' ? 'Personal archive' : 'Project archive')}</span>
      <div className="window-tools" aria-hidden="true"><Minus size={13} /><Square size={10} /><span>×</span></div>
    </header>
  );
}
