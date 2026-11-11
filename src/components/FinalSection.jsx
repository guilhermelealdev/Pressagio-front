import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingImage from './FloatingImage';
import styles from '../styles/FinalSection.module.css';
import { coruja, mandacaru, lantern } from '../assets';

export default function FinalSection({ onInView }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      onInView(8);
    }
  }, [inView, onInView]);

  const blinkVariants = {
    open: { opacity: 1, scaleY: 1 },
    blink: {
      opacity: [1, 1, 0.2, 1, 1],
      scaleY: [1, 1, 0.1, 1, 1],
      transition: {
        repeat: Infinity,
        duration: 5,
        times: [0, 0.85, 0.9, 0.95, 1],
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="jogar" ref={ref} className={styles.final}>
      <div className={styles.fog} aria-hidden="true" />
      <FloatingImage src={mandacaru} alt="" className={`${styles.decorA} xilogravura`} duration={10} />
      <FloatingImage src={lantern} alt="" className={`${styles.decorC} xilogravura`} duration={9} delay={0.5} />

      <motion.div
        className={styles.contentWrapper}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
      >
        <div className={`${styles.content} cordel-frame`}>
          
          <div className={styles.owlContainer}>
            <motion.div 
              className={styles.floatingOwl}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <img
                src={coruja}
                alt="Coruja nas sombras"
                className={styles.owl}
              />
              
              <motion.div 
                className={`${styles.eye} ${styles.eyeLeft}`}
                variants={blinkVariants}
                initial="open"
                animate="blink"
              />
              <motion.div 
                className={`${styles.eye} ${styles.eyeRight}`}
                variants={blinkVariants}
                initial="open"
                animate="blink"
              />
            </motion.div>
          </div>

          <h2 className={styles.title}>Sua última aventura começa aqui.</h2>
          
          <div className="cordel-divider">❦</div>

          <p className={styles.subtitle}>
            O assobio já cortou a madrugada. Os presságios foram escritos no folheto da vida.
            Resta descobrir o que a cidade tentou enterrar — e quem sobreviverá para contar a história.
          </p>

          <motion.div 
            whileHover={{ scale: 1.08, rotate: -1 }} 
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: '2rem' }}
          >
            <a href="#jogar" className={`${styles.cta} btn-gothic`} aria-label="Jogar Presságio agora">
              Iniciar o Ritual
            </a>
          </motion.div>

          <p className={styles.small}>
            Rafael. Maria Clara. A avó. A rádio. O rio. <br />
            Nem todas as lendas são apenas histórias.
          </p>
        </div>
      </motion.div>
    </section>
  );
}