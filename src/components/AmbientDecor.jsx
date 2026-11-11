import { motion } from 'framer-motion';
import styles from '../styles/AmbientDecor.module.css';
import { bandeirinha, lantern, cross } from '../assets';

export default function AmbientDecor() {
  return (
    <div className={styles.ambient} aria-hidden="true">
      <motion.img 
        src={bandeirinha} 
        className={styles.topBanner} 
        alt=""
        animate={{ rotate: [-1, 1, -1] }} 
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} 
      />
      
      <motion.img 
        src={lantern} 
        className={styles.leftLantern} 
        alt=""
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }} 
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} 
      />
      
      <img src={cross} className={styles.rightCross} alt="" />
      
      <div className={styles.vignette} />
    </div>
  );
}