import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface FloatingStarProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size?: number;
  colorClass?: string;
  delay?: number;
  duration?: number;
  opacityRange?: number[];
}

export default function FloatingStar({
  top, bottom, left, right,
  size = 40,
  colorClass = "text-campaign-red",
  delay = 0,
  duration = 4,
  opacityRange = [0.1, 0.4, 0.1]
}: FloatingStarProps) {
  return (
    <motion.div
      animate={{ opacity: opacityRange, scale: [0.9, 1.1, 0.9], rotate: [0, 5, -5, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute ${colorClass} pointer-events-none z-0`}
      style={{ top, bottom, left, right }}
    >
      <Star size={size} fill="currentColor" />
    </motion.div>
  );
}
