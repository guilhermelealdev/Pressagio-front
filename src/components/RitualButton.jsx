import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/RitualButton.module.css';
import { owlIcon } from '../assets';

export default function RitualButton() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const timerRef = useRef(null);

  const startMaterializing = () => {
    if (isReady) return;
    clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timerRef.current);
          setIsReady(true);
          return 100;
        }
        return prev + 1.5; 
      });
    }, 30);
  };

  const stopMaterializing = () => {
    if (isReady) return;
    clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 3; 
      });
    }, 30);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <motion.a
      href={isReady ? "#jogar" : undefined}
      className={`${styles.stampWrapper} ${isReady ? styles.ready : ''}`}
      onMouseEnter={startMaterializing}
      onMouseLeave={stopMaterializing}
      onMouseMove={startMaterializing}
      whileHover={isReady ? { scale: 1.05, rotate: -3 } : {}}
      whileTap={isReady ? { scale: 0.95 } : {}}
      style={{ cursor: isReady ? 'pointer' : 'none' }}
    >
      <div 
        className={styles.stampCircle}
        style={{
          background: `conic-gradient(var(--amarelo-dourado) ${progress}%, transparent ${progress}%)`
        }}
      >
        <div className={styles.innerCircle}>
          <img 
            src={owlIcon} 
            alt="Símbolo do Contrato" 
            className={styles.stampIcon}
            style={{
              /* A coruja começa meio apagada (opacity 0.3) e fica 100% visível no final */
              opacity: 0.3 + (progress / 100) * 0.7,
              /* O brilho dourado cresce junto com o progresso */
              filter: `drop-shadow(0 0 ${progress / 3}px rgba(252, 215, 96, 1))`
            }}
          />
        </div>
      </div>
      
      <span className={styles.stampText}>
        {isReady ? 'CONTRATO SELADO' : 'ILUMINE O CONTRATO'}
      </span>
    </motion.a>
  );
}