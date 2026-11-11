import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Intro.module.css';
import { logo } from '../assets';

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState('counting');
  const [count, setCount] = useState(3);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    const timer1 = setTimeout(() => {
      clearInterval(countInterval);
      setPhase('rolling');
    }, 3000);

    const timer2 = setTimeout(() => setPhase('stopping'), 5000);
    const timer3 = setTimeout(() => setPhase('settled'), 5500);
    const timer4 = setTimeout(() => setPhase('fadeOut'), 7500);
    const timer5 = setTimeout(onComplete, 8500);

    return () => {
      clearInterval(countInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div 
          className={styles.introOverlay}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
          animate={{ y: phase === 'counting' && count > 0 ? [0, -2, 2, -1, 1, 0] : 0 }}
          transition={{ duration: 0.15, delay: 0 }}
          key={count}
        >
          {phase === 'counting' && count > 0 && (
            <motion.div 
              key={`flash-${count}`}
              className={styles.projectorFlash}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            />
          )}

          <div className={`${styles.filmStripLeft} ${phase === 'rolling' ? styles.rollingFast : ''}`} />
          <div className={`${styles.filmStripRight} ${phase === 'rolling' ? styles.rollingFast : ''}`} />

          <div className={styles.cinemaBarTop} />
          <div className={styles.cinemaBarBottom} />

          <motion.div 
            className={styles.scratch}
            animate={{ left: ['10%', '80%', '30%', '90%'], opacity: [0, 1, 0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.2, ease: 'linear' }}
          />
          <motion.div 
            className={styles.scratch}
            animate={{ left: ['70%', '20%', '60%', '10%'], opacity: [0, 1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.3, ease: 'linear', delay: 0.1 }}
          />

          <div className={styles.filmGrain} />

          <motion.div
            className={styles.rollingReel}
            initial={{ y: '0vh' }}
            animate={
              phase === 'rolling' || phase === 'counting'
                ? { y: ['0vh', '-100vh'], opacity: phase === 'counting' ? 0.2 : 1 } 
                : phase === 'stopping'
                ? { y: '-100vh', opacity: 1, filter: 'grayscale(100%) contrast(400%) brightness(1.5)' }
                : { y: '-100vh', opacity: 1, filter: 'grayscale(0%) sepia(100%) contrast(150%) brightness(1.2)' }
            }
            transition={
              phase === 'rolling' || phase === 'counting'
                ? { repeat: Infinity, duration: 0.3, ease: 'linear' }
                : { duration: 0.2, type: 'spring', stiffness: 300, damping: 20 }
            }
          >
            <div className={styles.reelItem}><img src={logo} alt="Presságio" className={styles.reelImage} /></div>
            <div className={styles.reelItem}><img src={logo} alt="Presságio" className={styles.reelImage} /></div>
            <div className={styles.reelItem}><img src={logo} alt="Presságio" className={styles.reelImage} /></div>
          </motion.div>

          <AnimatePresence>
            {phase === 'counting' && (
              <motion.div 
                className={styles.filmCounter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.5, transition: { duration: 0.5 } }}
              >
                <div className={styles.counterCircle}>
                  <div className={styles.counterCrossH} />
                  <div className={styles.counterCrossV} />
                  <motion.div 
                    className={styles.counterHand}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  />
                  <motion.span 
                    className={styles.counterNumber}
                    key={count}
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {count > 0 ? count : ''}
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p 
            className={styles.introSubtitle}
            initial={{ opacity: 0, letterSpacing: '1em' }}
            animate={{ 
              opacity: phase === 'settled' || phase === 'fadeOut' ? 1 : 0, 
              letterSpacing: phase === 'settled' ? '0.4em' : '1em'
            }}
            transition={{ duration: 1.5 }}
          >
            O silêncio tem voz.
          </motion.p>

          <motion.div 
            className={styles.flash}
            animate={{ opacity: phase === 'stopping' ? [0, 0.8, 0] : 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}