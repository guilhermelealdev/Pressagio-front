import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingImage from './FloatingImage';
import styles from '../styles/CharacterSection.module.css';
import { cactus, cross, lantern, bandeirinha } from '../assets';

const decor = [
  [cactus, lantern],
  [bandeirinha, lantern],
  [cross, bandeirinha]
];

export default function CharacterSection({
  title,
  subtitle,
  description,
  index,
  scene,
  onInView,
  backgroundImage
}) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      onInView(scene);
    }
  }, [inView, scene, onInView]);

  return (
    <section
      id={`personagem-${index + 1}`}
      ref={ref}
      className={styles.section}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay} aria-hidden="true" />
      
      <FloatingImage
        src={decor[index][0]}
        alt=""
        className={`${styles.decorA} xilogravura`}
        duration={9}
        delay={index * 0.4}
      />
      <FloatingImage
        src={decor[index][1]}
        alt=""
        className={`${styles.decorB} xilogravura`}
        duration={11}
        delay={0.8}
      />

      <div className={styles.inner}>
        <motion.div
          className={`${styles.text} cordel-frame`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className={styles.index}>Folheto 0{index + 1}</span>
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 className={styles.title}>{title}</h2>
          
          <div className="cordel-divider">❦</div>
          
          <p className={styles.description}>{description}</p>
        </motion.div>
        
        <div className={styles.characterSpace} aria-hidden="true" />
      </div>
    </section>
  );
}