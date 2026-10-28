import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingImage from './FloatingImage';
import styles from '../styles/LegendSection.module.css';
import { coruja, bandeirinha, cross } from '../assets';

export default function LegendSection({ onInView }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      onInView(5);
    }
  }, [inView, onInView]);

  return (
    <section id="lenda" ref={ref} className={styles.legend}>
      <div className={styles.overlay} aria-hidden="true" />
      <FloatingImage src={bandeirinha} alt="" className={`${styles.decorBandeira} xilogravura`} duration={11} />
      <FloatingImage src={cross} alt="" className={`${styles.decorCross} xilogravura`} duration={9} delay={1} />

      <div className={styles.inner}>
        <motion.div
          className={`${styles.frame} cordel-frame`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.label}>Na Toada da Noite</span>
          <h2 className={styles.title}>Matinta Pereira</h2>

          <div className={styles.owlWrap}>
            <motion.img
              src={coruja}
              alt="Coruja rasga-mortalha"
              className={`${styles.owl} xilogravura`}
              loading="lazy"
              animate={{ y: [0, -18, 0], rotate: [0, -3, 3, 0], opacity: [0.85, 1, 0.85] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            />
            <motion.div
              className={styles.owlGlow}
              aria-hidden="true"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            />
          </div>

          <div className="cordel-divider">❦</div>

          <p className={styles.lead}>
            Durante o dia, uma <span className={styles.highlight}>mulher idosa de aparência misteriosa</span>.
            À noite, uma ave agourenta que corta o céu sobre os telhados.
          </p>

          <p className={styles.body}>
            Dizem que, quando a coruja passa sobre uma casa e assobia, alguém daquela família vai
            morrer — ou desaparecer. Durante anos, a cidade usou essa história para explicar mortes,
            doenças e sumiços. Mas, no fundo, o assobio pode estar anunciando outra coisa: a{' '}
            <span className={styles.highlight}>verdade</span> tentando voltar à superfície.
          </p>

          <blockquote className={styles.quote}>
            “Talvez algumas histórias tenham sido inventadas para esconder a verdade.
            Mas talvez nem todas as lendas sejam apenas histórias.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}