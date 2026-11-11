import { useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Fireflies.module.css';

export default function Fireflies() {
  // Gera uma lista de vagalumes com posições, tamanhos e durações únicas
  const fireflies = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Posição X inicial na tela (%)
      top: Math.random() * 100,  // Posição Y inicial na tela (%)
      size: Math.random() * 4 + 2, // Tamanho entre 2px e 6px
      duration: Math.random() * 10 + 8, // Tempo de voo (8s a 18s)
      delay: Math.random() * -20, // Atraso inicial para não começarem todos juntos
      // Movimento do voo (X e Y)
      x: [0, Math.random() * 100 - 50, Math.random() * 150 - 75, 0],
      y: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
    }));
  }, []);

  return (
    <div className={styles.container} aria-hidden="true">
      {fireflies.map((fly) => (
        <motion.div
          key={fly.id}
          className={styles.firefly}
          style={{
            left: `${fly.left}%`,
            top: `${fly.top}%`,
            width: `${fly.size}px`,
            height: `${fly.size}px`,
          }}
          animate={{
            x: fly.x,
            y: fly.y,
            opacity: [0, 1, 0.2, 1, 0], // Efeito de piscar
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: fly.duration,
            delay: fly.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1], // Controla o momento das piscadas
          }}
        />
      ))}
    </div>
  );
}