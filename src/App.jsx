import { useCallback, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CharacterSection from './components/CharacterSection';
import LegendSection from './components/LegendSection';
import InvestigationSection from './components/InvestigationSection';
import FinalSection from './components/FinalSection';
import CharacterLayer from './components/CharacterLayer';
import Atmosphere from './components/Atmosphere';
import AmbientDecor from './components/AmbientDecor';
import { heroBg, aboutBg } from './assets';

const characters = [
  { title: 'Rafael', subtitle: 'O Irmão Mais Velho', description: 'No silêncio da estrada, um homem vem do Sul. Traz no peito uma mágoa, um luto e o breu. Rafael volta pra casa, mas não sabe o que espera. A rádio da cidade, a velha tapera, esconde um segredo que o tempo calou. E o assobio da noite, a verdade anunciou.' },
  { title: 'Maria Clara', subtitle: 'A Menina do Olhar', description: 'Ela tem onze anos, não sabe ler o papel. Mas conhece os rostos na foto no céu. Maria Clara é atenta, astuta e esperta. Enquanto o irmão lê o documento incerto, é nela que a pista se faz revelar. O rosto do pai, ela sabe encontrar.' },
  { title: 'A Avó', subtitle: 'A Reza e a Lenda', description: 'Nas contas do rosário, nas festas de São João. A avó conta a lenda, segura o sermão. A Matinta voa no telhado a piar. É o medo da noite que vem assombrar. Mas a velha conhece a história que a cidade escondeu. E cala o segredo que o vento não levou.' }
];

export default function App() {
  const [activeScene, setActiveScene] = useState(0);
  const handleScene = useCallback((scene) => setActiveScene(scene), []);

  return (
    <>
      <AmbientDecor />
      <Atmosphere />
      <Header />
      <CharacterLayer activeScene={activeScene} />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero onInView={handleScene} />
        <About onInView={handleScene} backgroundImage={aboutBg} />
        {characters.map((character, index) => (
          <CharacterSection
            key={character.title}
            title={character.title}
            subtitle={character.subtitle}
            description={character.description}
            index={index}
            scene={index + 2}
            onInView={handleScene}
            backgroundImage={heroBg}
          />
        ))}
        <LegendSection onInView={handleScene} />
        <InvestigationSection onInView={handleScene} />
        <FinalSection onInView={handleScene} />
      </main>
    </>
  );
}