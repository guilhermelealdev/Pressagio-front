import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingImage from './FloatingImage';
import styles from '../styles/About.module.css';
import { sobreImg, cross, lantern } from '../assets';

export default function About({ onInView, backgroundImage }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) onInView(1);
  }, [inView, onInView]);

  return (
    <section id="sobre" ref={ref} className={styles.about} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay} aria-hidden="true" />
      
      <FloatingImage src={cross} alt="" className={styles.decorCross} duration={10} />
      <FloatingImage src={lantern} alt="" className={styles.decorLantern} duration={8} delay={1} />
      
      <div className={styles.inner}>
        <motion.div
          className={`${styles.text} cordel-frame`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className={styles.title}>Sobre o Jogo</h2>
          <p className={`${styles.lead} drop-cap`}>
            Rafael retorna a <span className={styles.highlight}>Pernambuco</span> após a morte
            da mãe. Ao lado da irmã de 11 anos, <span className={styles.highlight}>Maria Clara</span>,
            ele precisa encarar o passado da família e o silêncio que envolve a morte do pai.
          </p>
          <p className={styles.body}>
            Enquanto a cidade atribui o crime à lenda da <span className={styles.highlight}>Matinta Pereira</span>, 
            fotografias antigas, fitas cassete e documentos da rádio local revelam uma rede de contaminação, encobrimento e medo.
          </p>
        </motion.div>

        <motion.div
          className={styles.cardWrap}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className={styles.card}>
            <motion.img
              className={styles.cardImage}
              src={sobreImg}
              alt="Rafael e Maria Clara"
              loading="lazy"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}