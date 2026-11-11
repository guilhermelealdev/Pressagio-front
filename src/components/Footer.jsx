import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3 className={styles.title}>PRESSÁGIO</h3>
        <p className={styles.text}>
          Um projeto desenvolvido em conjunto com dedicação e foco na cultura nordestina e no terror gótico.
        </p>
        <div className={styles.credits}>
          <span>Design & Desenvolvimento</span>
          <span>Equipe Presságio</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}