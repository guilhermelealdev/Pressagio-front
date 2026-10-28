import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingImage from './FloatingImage';
import styles from '../styles/InvestigationSection.module.css';
import { radio, fita, coruja } from '../assets';

const days = [
  { day: 'I', title: 'O Retorno', text: 'Rafael volta a Pernambuco. Reencontra a família e a rádio.' },
  { day: 'II', title: 'O Rosto', text: 'Maria Clara encontra a fotografia do pai no arquivo morto.' },
  { day: 'III', title: 'O Arquivo', text: 'Documentos, roteiros e fitas revelam segredos sobre o rio.' },
  { day: 'IV', title: 'O Rio', text: 'Relatórios da água. Animais mortos. Reclamações ignoradas.' },
  { day: 'V', title: 'O Silêncio', text: 'A rádio orientava o que não devia ser divulgado à população.' },
  { day: 'VI', title: 'O Crime', text: 'Gravações ligam empresários, prefeitura e rádio. O pai reuniu provas.' },
  { day: 'VII', title: 'O Presságio', text: 'A verdade vem à tona. Mas o assobio da coruja ainda corta a madrugada.' }
];

export default function InvestigationSection({ onInView }) {
  const { ref, inView } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      onInView(6);
    }
  }, [inView, onInView]);

  return (
    <section id="investigacao" ref={ref} className={styles.investigation}>
      <div className={styles.overlay} aria-hidden="true" />
      <FloatingImage src={radio} alt="" className={`${styles.decorRadio} xilogravura`} duration={10} />
      <FloatingImage src={fita} alt="" className={`${styles.decorFita} xilogravura`} duration={8} delay={1} />
      <FloatingImage src={coruja} alt="" className={`${styles.decorCoruja} xilogravura`} duration={12} delay={0.5} />

      <div className={styles.inner}>
        <motion.span className={styles.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          O Resgate da Memória
        </motion.span>

        <motion.h2 className={styles.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          O silêncio da rádio
        </motion.h2>

        <motion.p className={styles.lead} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          Não era boato. Era <span className={styles.highlight}>método</span>. Enquanto o rio adoecia a vizinhança, o microfone repetia que nada estava acontecendo.
        </motion.p>

        <div className={styles.timeline}>
          {days.map((item, index) => (
            <motion.div
              key={item.day}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.dayNumber}>Dia {item.day}</span>
                <span className={styles.dayTitle}>{item.title}</span>
              </div>
              <p className={styles.dayText}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="cordel-frame" style={{ marginTop: '3rem', width: '100%', maxWidth: '800px' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.closing}>
            A Matinta não matou aquelas pessoas. <span className={styles.highlight}>Pessoas fizeram isso.</span> Mas, quando tudo parece explicado, o assobio volta a cortar a madrugada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}