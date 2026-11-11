import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/EvidenceSection.module.css';
import { foto1, doc1, fita } from '../assets';

export default function EvidenceSection({ onInView }) {
  const { ref, inView } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) onInView(6);
  }, [inView, onInView]);

  const items = [
    { src: foto1, label: 'Foto do Pai', desc: 'Arquivo Morto - Rádio' },
    { src: doc1, label: 'Relatório da Água', desc: 'Setor de Contaminação' },
    { src: fita, label: 'Fita Cassete 03', desc: 'Gravação Não Autorizada' }
  ];

  return (
    <section id="arquivo" ref={ref} className={styles.evidence}>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O Arquivo Morto
        </motion.h2>
        <p className={styles.subtitle}>Passe o mouse sobre as pistas para revelá-las.</p>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              className={styles.card}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotateZ: i % 2 === 0 ? 2 : -2 }}
            >
              <div className={styles.imageWrapper}>
                <img src={item.src} alt={item.label} />
              </div>
              <div className={styles.cardInfo}>
                <h3>{item.label}</h3>
                <span>{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}