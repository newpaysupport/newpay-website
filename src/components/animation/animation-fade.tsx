'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'up-title';
  inView?: boolean;
  className?: string;
};

export default function AnimationFade({ children, direction, inView = true, className }: Props) {
  let offsetX = 0;
  let offsetY = 0;
  let ease: 'easeIn' | 'easeOut' | 'easeInOut' | 'easeLinear' | 'easeInitial' = 'easeInOut';
  let duration = 0.5
  switch (direction) {
    case 'left':
      offsetX = -50;
      break;
    case 'right':
      offsetX = 50;
      break;
    case 'down':
      offsetY = -50;
      ease = 'easeOut';
      break;
    case 'up':
      offsetY = 50;
      ease = 'easeOut'
      break;
    case 'up-title':
      offsetY = 100;
      ease = 'easeOut'
      duration = 0.8
      break;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offsetX, y: offsetY, scale: 1 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: offsetX, y: offsetY, scale: 1 }}
      transition={{ duration: duration, ease: ease }}
    >
      {children}
    </motion.div>
  );
}