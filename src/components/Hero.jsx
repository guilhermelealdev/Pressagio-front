import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingImage from './FloatingImage';
import styles from '../styles/Hero.module.css';
import { mandacaru, cross, lantern, cactus, logo } from '../assets';

export default function Hero({ onInView }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) onInView(0);
  }, [inView, onInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id="inicio" ref={ref} className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      
      <FloatingImage src={mandacaru} alt="" className={styles.mandacaru} duration={9} />
      <FloatingImage src={cross} alt="" className={styles.cross} duration={11} delay={0.6} />
      <FloatingImage src={lantern} alt="" className={styles.lantern} duration={8} delay={1.2} />
      <FloatingImage src={cactus} alt="" className={styles.cactus} duration={12} delay={0.3} />
      
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img 
          src={logo} 
          alt="Presságio" 
          className={styles.title} 
          variants={itemVariants} 
        />
        
        <motion.div className={styles.divider} variants={itemVariants}>
          <span>❦</span>
        </motion.div>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          O Nordeste nunca foi tão sombrio.
        </motion.p>
        
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#sobre" className="btn-gothic">
            Explorar o Folheto
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}