import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/CharacterLayer.module.css';
import { character1, character2, character3 } from '../assets';

const characters = [
  { src: character1, name: 'Rafael' },
  { src: character2, name: 'Maria Clara' },
  { src: character3, name: 'A Avó' }
];

const positions = [
  [
    { left: '25%', bottom: '0%', scale: 1, opacity: 1, blur: 0 },
    { left: '50%', bottom: '0%', scale: 1.1, opacity: 1, blur: 0 },
    { left: '75%', bottom: '0%', scale: 1, opacity: 1, blur: 0 }
  ],
  [
    { left: '10%', bottom: '10%', scale: 0.6, opacity: 0.2, blur: 8 },
    { left: '20%', bottom: '5%', scale: 0.5, opacity: 0.2, blur: 8 },
    { left: '30%', bottom: '0%', scale: 0.4, opacity: 0.1, blur: 10 }
  ],
  [
    { left: '75%', bottom: '0%', scale: 1.2, opacity: 1, blur: 0 }, // Foco
    { left: '88%', bottom: '5%', scale: 0.7, opacity: 0.3, blur: 6 },
    { left: '62%', bottom: '-5%', scale: 0.6, opacity: 0.2, blur: 8 }
  ],
  [
    { left: '88%', bottom: '-5%', scale: 0.6, opacity: 0.2, blur: 8 },
    { left: '75%', bottom: '0%', scale: 1.2, opacity: 1, blur: 0 }, // Foco
    { left: '62%', bottom: '5%', scale: 0.7, opacity: 0.3, blur: 6 }
  ],
  [
    { left: '88%', bottom: '0%', scale: 0.4, opacity: 0.2, blur: 8 },
    { left: '62%', bottom: '5%', scale: 0.6, opacity: 0.3, blur: 6 },
    { left: '75%', bottom: '0%', scale: 1.2, opacity: 1, blur: 0 } // Foco
  ],
  [
    { left: '5%', bottom: '0%', scale: 0.35, opacity: 0.1, blur: 12 },
    { left: '90%', bottom: '0%', scale: 0.35, opacity: 0.1, blur: 12 },
    { left: '50%', bottom: '-5%', scale: 0.3, opacity: 0.1, blur: 12 }
  ],
  [
    { left: '0%', bottom: '0%', scale: 0.3, opacity: 0.1, blur: 12 },
    { left: '92%', bottom: '0%', scale: 0.3, opacity: 0.1, blur: 12 },
    { left: '46%', bottom: '0%', scale: 0.3, opacity: 0.1, blur: 12 }
  ],
  [
    { left: '8%', bottom: '0%', scale: 0.7, opacity: 0.5, blur: 3 },
    { left: '85%', bottom: '0%', scale: 0.7, opacity: 0.5, blur: 3 },
    { left: '50%', bottom: '8%', scale: 0.8, opacity: 0.6, blur: 3 }
  ]
];

const mobilePositions = [
  [
    { left: '2%', bottom: '0%', scale: 0.9, opacity: 1, blur: 0 },
    { left: '33%', bottom: '0%', scale: 1, opacity: 1, blur: 0 },
    { left: '64%', bottom: '0%', scale: 0.9, opacity: 1, blur: 0 }
  ],
  [
    { left: '2%', bottom: '5%', scale: 0.5, opacity: 0.2, blur: 6 },
    { left: '15%', bottom: '0%', scale: 0.45, opacity: 0.2, blur: 8 },
    { left: '28%', bottom: '0%', scale: 0.4, opacity: 0.1, blur: 8 }
  ],
  [
    { left: '40%', bottom: '0%', scale: 1, opacity: 1, blur: 0 },
    { left: '0%', bottom: '0%', scale: 0.6, opacity: 0.3, blur: 5 },
    { left: '70%', bottom: '0%', scale: 0.5, opacity: 0.2, blur: 6 }
  ],
  [
    { left: '0%', bottom: '0%', scale: 0.6, opacity: 0.3, blur: 5 },
    { left: '40%', bottom: '0%', scale: 1, opacity: 1, blur: 0 },
    { left: '70%', bottom: '0%', scale: 0.5, opacity: 0.2, blur: 6 }
  ],
  [
    { left: '0%', bottom: '0%', scale: 0.5, opacity: 0.2, blur: 6 },
    { left: '70%', bottom: '0%', scale: 0.5, opacity: 0.3, blur: 5 },
    { left: '40%', bottom: '0%', scale: 1, opacity: 1, blur: 0 }
  ],
  [
    { left: '0%', bottom: '0%', scale: 0.35, opacity: 0.1, blur: 10 },
    { left: '80%', bottom: '0%', scale: 0.35, opacity: 0.1, blur: 10 },
    { left: '40%', bottom: '0%', scale: 0.3, opacity: 0.1, blur: 10 }
  ],
  [
    { left: '0%', bottom: '0%', scale: 0.28, opacity: 0.1, blur: 10 },
    { left: '82%', bottom: '0%', scale: 0.28, opacity: 0.1, blur: 10 },
    { left: '42%', bottom: '0%', scale: 0.28, opacity: 0.1, blur: 10 }
  ],
  [
    { left: '0%', bottom: '0%', scale: 0.65, opacity: 0.45, blur: 2 },
    { left: '70%', bottom: '0%', scale: 0.65, opacity: 0.45, blur: 2 },
    { left: '35%', bottom: '5%', scale: 0.75, opacity: 0.55, blur: 2 }
  ]
];

export default function CharacterLayer({ activeScene }) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  );
  const characterRefs = useRef([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      characterRefs.current.forEach((element, index) => {
        if (!element) return;
        const offsetX = (event.clientX / innerWidth - 0.5) * 20 * (index + 1);
        const offsetY = (event.clientY / innerHeight - 0.5) * 20 * (index + 1);
        element.style.setProperty('--mouse-x', `${offsetX}px`);
        element.style.setProperty('--mouse-y', `${offsetY}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const activePositions = isMobile ? mobilePositions : positions;
  const currentPositions = activePositions[activeScene] || activePositions[0];

  return (
    <div className={styles.layer} aria-hidden="true">
      {characters.map((char, index) => {
        const position = currentPositions[index];

        return (
          <motion.div
            key={index}
            ref={(element) => {
              characterRefs.current[index] = element;
            }}
            className={styles.character}
            initial={false}
            animate={{
              left: position.left,
              bottom: position.bottom,
              y: [0, -15, 0]
            }}
            transition={{
              left: { type: 'spring', stiffness: 80, damping: 20 },
              bottom: { type: 'spring', stiffness: 80, damping: 20 },
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
            }}
          >
            <motion.img
              src={char.src}
              alt=""
              draggable={false}
              animate={{ 
                scale: position.scale, 
                opacity: position.opacity,
                filter: `blur(${position.blur}px)`
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, filter: { duration: 0.5 } }}
            />
            <motion.span 
              className={styles.characterName}
              animate={{ opacity: position.blur === 0 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {char.name}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
}