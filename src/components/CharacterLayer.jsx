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
  // 0 - Hero
  [ { left: '10%', bottom: '-10%', scale: 1, opacity: 0.1, blur: 5 }, { left: '50%', bottom: '-10%', scale: 1, opacity: 0.1, blur: 5 }, { left: '90%', bottom: '-10%', scale: 1, opacity: 0.1, blur: 5 } ],
  // 1 - About
  [ { left: '80%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '80%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '80%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 } ],
  // 2 - Rafael
  [ { left: '65%', bottom: '5%', scale: 1, opacity: 1, blur: 0 }, { left: '80%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '80%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 } ],
  // 3 - Maria Clara
  [ { left: '80%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '65%', bottom: '5%', scale: 1, opacity: 1, blur: 0 }, { left: '80%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 } ],
  // 4 - Avó
  [ { left: '80%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '80%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '65%', bottom: '5%', scale: 1, opacity: 1, blur: 0 } ],
  // 5 - Legend
  [ { left: '85%', bottom: '0%', scale: 0.4, opacity: 0, blur: 10 }, { left: '85%', bottom: '0%', scale: 0.4, opacity: 0, blur: 10 }, { left: '85%', bottom: '0%', scale: 0.4, opacity: 0, blur: 10 } ],
  // 6 - Evidence
  [ { left: '90%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 }, { left: '90%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 }, { left: '90%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 } ],
  // 7 - Timeline
  [ { left: '90%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 }, { left: '90%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 }, { left: '90%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 } ],
  // 8 - Final
  [ { left: '15%', bottom: '0%', scale: 0.8, opacity: 0.9, blur: 0 }, { left: '85%', bottom: '0%', scale: 0.8, opacity: 0.9, blur: 0 }, { left: '50%', bottom: '5%', scale: 0.9, opacity: 1, blur: 0 } ]
];

const mobilePositions = [
  [ { left: '15%', bottom: '-5%', scale: 0.8, opacity: 0.15, blur: 5 }, { left: '50%', bottom: '-5%', scale: 0.9, opacity: 0.15, blur: 5 }, { left: '85%', bottom: '-5%', scale: 0.8, opacity: 0.15, blur: 5 } ],
  [ { left: '50%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 } ],
  [ { left: '15%', bottom: '2%', scale: 0.9, opacity: 0.8, blur: 0 }, { left: '50%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 } ],
  [ { left: '50%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '15%', bottom: '2%', scale: 0.9, opacity: 0.8, blur: 0 }, { left: '50%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 } ],
  [ { left: '50%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.5, opacity: 0, blur: 10 }, { left: '15%', bottom: '2%', scale: 0.9, opacity: 0.8, blur: 0 } ],
  [ { left: '50%', bottom: '0%', scale: 0.4, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.4, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.4, opacity: 0, blur: 10 } ],
  [ { left: '50%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 } ],
  [ { left: '50%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 }, { left: '50%', bottom: '0%', scale: 0.3, opacity: 0, blur: 10 } ],
  [ { left: '15%', bottom: '0%', scale: 0.7, opacity: 0.8, blur: 0 }, { left: '85%', bottom: '0%', scale: 0.7, opacity: 0.8, blur: 0 }, { left: '50%', bottom: '2%', scale: 0.8, opacity: 1, blur: 0 } ]
];

export default function CharacterLayer({ activeScene }) {
  const characterRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isMobile) return;
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
  }, [isMobile]);

  const currentPositions = (isMobile ? mobilePositions : positions)[activeScene] || positions[0];

  return (
    <div className={styles.layer} aria-hidden="true">
      {characters.map((char, index) => {
        const position = currentPositions[index];
        
        return (
          <motion.div
            key={index}
            ref={(el) => { characterRefs.current[index] = el; }}
            className={styles.character}
            initial={false}
            animate={{ 
              left: position.left, 
              bottom: position.bottom, 
              y: position.opacity > 0 && !isMobile ? [0, -10, 0] : 0
            }}
            transition={{
              left: { type: 'spring', stiffness: 60, damping: 20 },
              bottom: { type: 'spring', stiffness: 60, damping: 20 },
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
              opacity: { duration: 0.8, ease: 'easeInOut' }
            }}
          >
            <motion.div 
              className={styles.characterGlow}
              animate={{ opacity: position.opacity === 1 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
            
            <motion.img
              src={char.src}
              alt=""
              draggable={false}
              animate={{ 
                scale: position.scale, 
                opacity: position.opacity, 
                filter: `blur(${position.blur}px)` 
              }}
              transition={{ 
                scale: { type: 'spring', stiffness: 60, damping: 20 },
                opacity: { duration: 0.8, ease: 'easeInOut' },
                filter: { duration: 0.8, ease: 'easeInOut' }
              }}
            />
            <motion.span 
              className={styles.characterName}
              animate={{ opacity: position.opacity === 1 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {char.name}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
}