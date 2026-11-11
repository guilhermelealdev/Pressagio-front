import styles from '../styles/Header.module.css';
import { logo } from '../assets';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#inicio" className={styles.logo} aria-label="Presságio — voltar ao início">
        <img src={logo} alt="Presságio" />
      </a>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#jogar">Jogar</a>
      </nav>
    </header>
  );
}