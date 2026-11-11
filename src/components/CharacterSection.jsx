import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingImage from './FloatingImage';
import styles from '../styles/CharacterSection.module.css';
import { cactus, cross, lantern, bandeirinha } from '../assets';

const decor = [ [cactus, lantern], [bandeirinha, lantern], [cross, bandeirinha] ];

export default function CharacterSection({ title, subtitle, description, index, scene, onInView, backgroundImage }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) onInView(scene);
  }, [inView, scene, onInView]);

  return (
    <section id={`personagem-${index + 1}`} ref={ref} className={styles.section}>
      <div className={styles.bg} style={{ backgroundImage: `url(${backgroundImage})` }} />
      
      <FloatingImage src={decor[index][0]} alt="" className={styles.decorA} duration={9} delay={index * 0.4} />
      <FloatingImage src={decor[index][1]} alt="" className={styles.decorB} duration={11} delay={0.8} />

      {/* FADES DE TRANSIÇÃO */}
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />

      <div className={styles.inner}>
        <motion.div
          className={`${styles.text} cordel-frame`}
          initial={{ opacity: 0, x: -60, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        >
          <span className={styles.index}>Folheto 0{index + 1}</span>
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 className={styles.title}>{title}</h2>
          <div className="cordel-divider">❦</div>
          <p className={`${styles.description} drop-cap`}>{description}</p>
        </motion.div>
        
        <div className={styles.characterSpace} aria-hidden="true" />
      </div>
    </section>
  );
}