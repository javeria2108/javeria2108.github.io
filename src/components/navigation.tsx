'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/content/home';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <>
    <button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="archive-navigation" onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={19} />}<span>Index</span></button>
    <nav id="archive-navigation" className={`side-navigation ${open ? 'is-open' : ''}`} aria-label="Main navigation">
      {navigation.map((item, i) => {
        const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
        return <Link key={item.href} href={item.href} className={`nav-item${active ? ' active' : ''}`} aria-current={active ? 'page' : undefined} onClick={() => setOpen(false)}><span>0{i + 1}.</span>{item.label}</Link>;
      })}
    </nav>
  </>;
}
