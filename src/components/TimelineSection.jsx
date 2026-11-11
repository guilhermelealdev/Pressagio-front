import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/TimelineSection.module.css';

const days = [
  { day: 'I', title: 'O Retorno', text: 'Rafael volta a Pernambuco. Reencontra a família e a rádio.' },
  { day: 'II', title: 'O Rosto', text: 'Maria Clara encontra a fotografia do pai no arquivo morto.' },
  { day: 'III', title: 'O Arquivo', text: 'Documentos, roteiros e fitas revelam segredos sobre o rio.' },
  { day: 'IV', title: 'O Rio', text: 'Relatórios da água. Animais mortos. Reclamações ignoradas.' },
  { day: 'V', title: 'O Silêncio', text: 'A rádio orientava o que não devia ser divulgado à população.' },
  { day: 'VI', title: 'O Crime', text: 'Gravações ligam empresários, prefeitura e rádio. O pai reuniu provas.' },
  { day: 'VII', title: 'O Presságio', text: 'A verdade vem à tona. Mas o assobio da coruja ainda corta a madrugada.' }
];

function TimelineItem({ item, index, total, scrollYProgress }) {
  const start = index / total;
  const end = start + 0.15;
  const itemProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

  const dotScale = useTransform(itemProgress, [0, 0.5, 1], [0, 1.3, 1]);
  const dotY = useTransform(itemProgress, [0, 0.5, 1], [-30, 5, 0]);
  const cardOpacity = useTransform(itemProgress, [0, 1], [0, 1]);
  const cardY = useTransform(itemProgress, [0, 1], [40, 0]);

  return (
    <div className={styles.node}>
      <motion.div
        className={styles.nodeDot}
        style={{ scale: dotScale, y: dotY }}
      />
      <motion.div
        className={styles.nodeContent}
        style={{ opacity: cardOpacity, y: cardY }}
      >
        <span className={styles.day}>Dia {item.day}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </motion.div>
    </div>
  );
}

export default function TimelineSection({ onInView }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const timelineRef = useRef(null);

  useEffect(() => {
    if (inView) onInView(7);
  }, [inView, onInView]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const particles = Array.from({ length: 35 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 20}%`, 
    size: Math.random() * 4 + 1, 
    duration: Math.random() * 5 + 4, 
    delay: Math.random() * 5, 
  }));

  return (
    <section id="linha-do-tempo" ref={ref} className={styles.timelineSection}>
      <div className={styles.bottomGlow} />
      <div className={styles.topGlow} />

      <div className={styles.particlesContainer}>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: p.left,
              bottom: p.bottom,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.inner}>
        <h2 className={styles.title}>Sete Dias de Mistério</h2>

        <div className={styles.timeline} ref={timelineRef}>
          <motion.div
            className={styles.animatedLine}
            style={{ scaleY: scrollYProgress }}
          />

          {days.map((item, index) => (
            <TimelineItem
              key={item.day}
              item={item}
              index={index}
              total={days.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}