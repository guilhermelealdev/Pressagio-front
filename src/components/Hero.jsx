import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingImage from './FloatingImage';
import styles from '../styles/Hero.module.css';
import { mandacaru, cross, lantern, cactus } from '../assets';

export default function Hero({ onInView }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) onInView(0);
  }, [inView, onInView]);

  return (
    <section id="inicio" ref={ref} className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      
      <FloatingImage src={mandacaru} alt="" className={`${styles.mandacaru}`} duration={9} />
      <FloatingImage src={cross} alt="" className={`${styles.cross}`} duration={11} delay={0.6} />
      <FloatingImage src={lantern} alt="" className={`${styles.lantern}`} duration={8} delay={1.2} />
      <FloatingImage src={cactus} alt="" className={`${styles.cactus}`} duration={12} delay={0.3} />
      
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h1 
          className={styles.title}
          animate={{ textShadow: ["0 0 20px rgba(252,215,96,0.4), 0 0 60px rgba(164,83,12,0.6)", "0 0 40px rgba(252,215,96,0.8), 0 0 100px rgba(164,83,12,0.9)", "0 0 20px rgba(252,215,96,0.4), 0 0 60px rgba(164,83,12,0.6)"] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          PRESSÁGIO
        </motion.h1>
        
        <div className={styles.divider}><span>❦</span></div>

        <p className={styles.subtitle}>O Nordeste nunca foi tão sombrio.</p>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ marginTop: '1rem' }}>
          <a href="#sobre" className={`${styles.cta} btn-gothic`}>
            Explorar o Folheto
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}