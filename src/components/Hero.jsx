import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingImage from './FloatingImage';
import styles from '../styles/Hero.module.css';
	import { mandacaru, cross, lantern, cactus } from '../assets';

export default function Hero({ onInView }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      onInView(0);
    }
  }, [inView, onInView]);

  return (
    <section id="inicio" ref={ref} className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <FloatingImage src={mandacaru} alt="" className={styles.mandacaru} duration={9} />
      <FloatingImage src={cross} alt="" className={styles.cross} duration={11} delay={0.6} />
      <FloatingImage src={lantern} alt="" className={styles.lantern} duration={8} delay={1.2} />
      <FloatingImage src={cactus} alt="" className={styles.cactus} duration={12} delay={0.3} />
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          PRESSÁGIO
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        >
          O Nordeste nunca foi tão sombrio.
        </motion.p>
        <motion.a
          href="#sobre"
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Explorar a história de Presságio"
        >
          Explorar
        </motion.a>
      </div>
    </section>
  );
}