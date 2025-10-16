'use client';

import { motion } from 'framer-motion';
import { FaTooth } from 'react-icons/fa';
import { colors } from '@/constants/colors';
import { useMemo } from 'react';

interface FloatingDentalIconsProps {
  count?: number;
  opacity?: number;
  className?: string;
}

export default function FloatingDentalIcons({
  count = 12,
  opacity = 3,
  className = 'absolute inset-0',
}: FloatingDentalIconsProps) {
  // Generujemy pozycje tylko raz przy pierwszym renderze
  const iconPositions = useMemo(() => {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 4,
      animationDuration: 4 + Math.random() * 4,
    }));
  }, [count]);

  return (
    <div className={className} style={{ opacity: opacity / 100 }}>
      {iconPositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${position.left}%`,
            top: `${position.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: position.animationDuration,
            repeat: Infinity,
            delay: position.animationDelay,
          }}
        >
          <FaTooth
            className="text-6xl"
            style={{ color: colors.brand.primary }}
          />
        </motion.div>
      ))}
    </div>
  );
}
