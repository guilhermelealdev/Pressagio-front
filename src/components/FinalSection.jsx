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
      onInView(7);
    }
  }, [inView, onInView]);

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
          <motion.img
            src={coruja}
            alt=""
            className={styles.owl}
            animate={{ 
              y: [0, -10, 0], 
              opacity: [0.6, 1, 0.6],
              filter: [
                'drop-shadow(0 0 10px rgba(252, 215, 96, 0.2))',
                'drop-shadow(0 0 30px rgba(252, 215, 96, 0.8))',
                'drop-shadow(0 0 10px rgba(252, 215, 96, 0.2))'
              ]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />

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