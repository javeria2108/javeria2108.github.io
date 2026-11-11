'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export function Entrance({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return <motion.div className="archive-window" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 0.45 }}>{children}</motion.div>;
}
