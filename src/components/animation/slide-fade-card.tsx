'use client'
import { motion } from 'framer-motion';
import { Variants } from 'motion/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  direction?: 'left' | 'right';
}

export default function SlideFadeCard({ children, direction = 'right' }: Props) {
    const variants = {
        hidden: {
          opacity: 0,
          x: direction === 'right' ? 50 : -50,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.45, 0, 0.55, 1], 
          },
        },
        exit: {
          opacity: 0,
          x: direction === 'right' ? -50 : 50,
          scale: 0.95,
          transition: {
            duration: 0.8,
            ease: [0.45, 0, 0.55, 1],
          },
        },
      } as const satisfies Variants;
      


  return (
    <motion.div
      key={direction}      
      variants ={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
}
