import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from 'framer-motion';
import styles from '../styles/LanternCursor.module.css';
import { lantern } from '../assets';

export default function LanternCursor({ introFinished }) {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Física de movimento (Mola para seguir o mouse)
  const springConfig = { damping: 20, stiffness: 300, mass: 1 };
  const lanternX = useSpring(mouseX, springConfig);
  const lanternY = useSpring(mouseY, springConfig);

  // A luz (difusão um pouco maior, segue mais devagar)
  const lightX = useSpring(mouseX, { damping: 25, stiffness: 150, mass: 1.5 });
  const lightY = useSpring(mouseY, { damping: 25, stiffness: 150, mass: 1.5 });

  // FÍSICA AGRESSIVA (Pêndulo)
  const velocityX = useVelocity(lanternX);
  
  // Transforma a velocidade em rotação
  const rotateTransform = useTransform(velocityX, [-2000, 2000], [75, -75]);
  
  // Mola da rotação (elástica e solta)
  const springRotate = useSpring(rotateTransform, { damping: 12, stiffness: 100, mass: 0.5 });

  useEffect(() => {
    // Só ativa se for um dispositivo com mouse
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // SÓ APARECE SE A INTRO TIVER TERMINADO
  if (!isVisible || !introFinished) return null;

  return (
    <>
      {/* Facho de Luz */}
      <motion.div
        className={styles.lightBeam}
        style={{ x: lightX, y: lightY }}
      >
        <div className={styles.lightFlicker} />
      </motion.div>

      {/* Lanterna Física */}
      <motion.div
        className={styles.lanternWrapper}
        style={{
          x: lanternX,
          y: lanternY,
          rotate: springRotate,
        }}
      >
        <img
          src={lantern}
          alt="Cursor Lanterna de Gás"
          className={styles.lanternImage}
        />
      </motion.div>
    </>
  );
}