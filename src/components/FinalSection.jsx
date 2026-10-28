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
        className={`${styles.content} cordel-frame`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <motion.img
          src={coruja}
          alt=""
          className={`${styles.owl} xilogravura`}
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />

        <h2 className={styles.title}>Sua última aventura começa aqui.</h2>
        
        <div className="cordel-divider">❦</div>

        <p className={styles.subtitle}>
          O assobio já cortou a madrugada. Os presságios foram escritos no folheto da vida.
          Resta descobrir o que a cidade tentou enterrar — e quem sobreviverá para contar a história.
        </p>

        <motion.a
          href="#jogar"
          className={styles.cta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Jogar Presságio agora"
        >
          Ler o Cordel / Jogar
        </motion.a>

        <p className={styles.small}>
          Rafael. Maria Clara. A avó. A rádio. O rio. <br />
          Nem todas as lendas são apenas histórias.
        </p>
      </motion.div>
    </section>
  );
}