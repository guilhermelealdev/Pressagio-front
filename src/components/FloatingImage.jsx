import { motion } from 'framer-motion';
import styles from '../styles/FloatingImage.module.css';

export default function FloatingImage({
  src,
  alt = '',
  className,
  duration = 8,
  delay = 0,
  size
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${styles.floating} ${className || ''}`}
      style={size ? { width: size } : undefined}
      animate={{
        x: [0, 15, -15, 0],
        y: [0, -20, 20, 0],
        rotate: [0, 3, -3, 0]
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'easeInOut',
        delay
      }}
      loading="lazy"
      draggable={false}
    />
  );
}