const enc = (svg) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}`;

export const heroBg = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
  <defs>
    <radialGradient id="g" cx="50%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#3A230A"/>
      <stop offset="55%" stop-color="#1a120b"/>
      <stop offset="100%" stop-color="#0d0805"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#g)"/>
  <circle cx="1400" cy="220" r="90" fill="#EEE9C1" opacity="0.12"/>
  <circle cx="1400" cy="220" r="45" fill="#FCD760" opacity="0.28"/>
  <path d="M0 900 L300 780 L500 860 L800 720 L1100 880 L1400 800 L1920 900 L1920 1080 L0 1080 Z"
    fill="#0d0805" opacity="0.85"/>
</svg>`);

export const aboutBg = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a120b"/>
      <stop offset="55%" stop-color="#3A230A"/>
      <stop offset="100%" stop-color="#A4530C" stop-opacity="0.6"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#g)"/>
  <circle cx="1500" cy="300" r="60" fill="#FCD760" opacity="0.18"/>
</svg>`);

export const cactus = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 400">
  <defs>
    <linearGradient id="cGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3a4f1c"/>
      <stop offset="50%" stop-color="#618030"/>
      <stop offset="100%" stop-color="#2a3c14"/>
    </linearGradient>
  </defs>
  <path d="M 80 400 C 70 300 70 150 85 80 C 95 40 105 40 115 80 C 130 150 130 300 120 400 Z" fill="url(#cGrad)" />
  <path d="M 85 220 C 50 220 30 200 30 150 C 30 130 45 130 50 150 C 55 170 70 180 85 180 Z" fill="url(#cGrad)" />
  <path d="M 115 280 C 150 280 170 260 170 200 C 170 180 155 180 150 200 C 145 220 130 230 115 230 Z" fill="url(#cGrad)" />
  <path d="M 100 80 Q 95 240 100 400" stroke="#1c260d" stroke-width="2" fill="none" opacity="0.6"/>
  <path d="M 90 100 Q 85 250 85 400" stroke="#1c260d" stroke-width="2" fill="none" opacity="0.4"/>
  <path d="M 110 100 Q 115 250 115 400" stroke="#1c260d" stroke-width="2" fill="none" opacity="0.4"/>
  <circle cx="85" cy="150" r="1.5" fill="#FCD760"/>
  <circle cx="115" cy="180" r="1.5" fill="#FCD760"/>
  <circle cx="100" cy="250" r="1.5" fill="#FCD760"/>
  <circle cx="100" cy="320" r="1.5" fill="#FCD760"/>
  <circle cx="50" cy="160" r="1" fill="#FCD760"/>
  <circle cx="160" cy="210" r="1" fill="#FCD760"/>
  <circle cx="95" cy="100" r="1" fill="#FCD760"/>
  <circle cx="105" cy="130" r="1" fill="#FCD760"/>
</svg>`);

export const mandacaru = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 400">
  <defs>
    <linearGradient id="mGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#293a11"/>
      <stop offset="50%" stop-color="#4d6625"/>
      <stop offset="100%" stop-color="#1e2a0c"/>
    </linearGradient>
  </defs>
  <path d="M 75 400 C 65 300 65 120 85 50 C 95 10 105 10 115 50 C 135 120 135 300 125 400 Z" fill="url(#mGrad)" />
  <path d="M 80 180 C 40 180 20 160 20 100 C 20 80 35 80 40 100 C 45 120 60 140 80 140 Z" fill="url(#mGrad)" />
  <path d="M 120 250 C 160 250 180 230 180 160 C 180 140 165 140 160 160 C 155 180 140 200 120 200 Z" fill="url(#mGrad)" />
  <path d="M 100 50 Q 95 220 100 400" stroke="#111a06" stroke-width="2.5" fill="none" opacity="0.7"/>
  <path d="M 85 70 Q 80 230 80 400" stroke="#111a06" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M 115 70 Q 120 230 120 400" stroke="#111a06" stroke-width="2" fill="none" opacity="0.5"/>
  <circle cx="80" cy="120" r="1.5" fill="#E4AE1E"/>
  <circle cx="120" cy="150" r="1.5" fill="#E4AE1E"/>
  <circle cx="100" cy="220" r="1.5" fill="#E4AE1E"/>
  <circle cx="100" cy="300" r="1.5" fill="#E4AE1E"/>
  <circle cx="40" cy="120" r="1" fill="#E4AE1E"/>
  <circle cx="160" cy="180" r="1" fill="#E4AE1E"/>
  <circle cx="90" cy="80" r="1" fill="#E4AE1E"/>
</svg>`);

export const cross = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200"><rect x="40" y="20" width="20" height="180" fill="#EEE9C1"/><rect x="10" y="60" width="80" height="20" fill="#EEE9C1"/></svg>`);

export const lantern = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200">
  <!-- Alça de Metal -->
  <path d="M 35 40 C 35 10, 65 10, 65 40" fill="none" stroke="#222" stroke-width="5" stroke-linecap="round" />
  
  <!-- Topo de Metal (Chaminé) -->
  <path d="M 25 40 L 75 40 L 65 60 L 35 60 Z" fill="#333" />
  <path d="M 30 35 L 70 35 L 75 40 L 25 40 Z" fill="#444" />
  <rect x="45" y="25" width="10" height="10" fill="#333" />
  
  <!-- Vidro (Brilho e Transparência) -->
  <path d="M 35 60 Q 50 65 65 60 L 72 110 Q 50 120 28 110 Z" fill="rgba(252, 215, 96, 0.15)" />
  <path d="M 38 65 Q 50 70 62 65 L 68 105 Q 50 110 32 105 Z" fill="rgba(252, 215, 96, 0.4)" />
  
  <!-- A Chama (Brilhando muito) -->
  <path d="M 50 105 Q 42 85 50 75 Q 58 85 50 105" fill="#FFF" filter="drop-shadow(0 0 10px #FCD760)" />
  <circle cx="50" cy="90" r="10" fill="#FCD760" opacity="0.6" filter="blur(3px)" />
  
  <!-- Grades de Proteção do Vidro -->
  <path d="M 35 60 L 28 110 M 45 60 L 45 115 M 55 60 L 55 115 M 65 60 L 72 110" stroke="#222" stroke-width="2" opacity="0.8" />
  
  <!-- Base de Metal (Reservatório) -->
  <path d="M 28 110 L 72 110 L 80 150 L 20 150 Z" fill="#333" />
  <path d="M 15 150 L 85 150 L 85 160 L 15 160 Z" fill="#222" />
  <rect x="40" y="130" width="20" height="5" fill="#555" />
</svg>`);

export const radio = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"><rect x="10" y="20" width="180" height="120" rx="10" fill="#A4530C"/><rect x="25" y="40" width="100" height="60" rx="5" fill="#3A230A"/><circle cx="150" cy="55" r="15" fill="#3A230A"/><circle cx="150" cy="90" r="10" fill="#3A230A"/><circle cx="150" cy="110" r="5" fill="#FCD760"/><rect x="25" y="110" width="100" height="10" rx="3" fill="#3A230A"/></svg>`);

export const bandeirinha = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100"><path d="M0 30 Q200 60 400 30" stroke="#EEE9C1" stroke-width="2" fill="none"/><polygon points="40,35 60,75 20,75" fill="#D97E5C"/><polygon points="100,42 120,82 80,82" fill="#FCD760"/><polygon points="160,48 180,88 140,88" fill="#618030"/><polygon points="220,48 240,88 200,88" fill="#337A9E"/><polygon points="280,42 300,82 260,82" fill="#A4530C"/><polygon points="340,35 360,75 320,75" fill="#E4AE1E"/></svg>`);

export const foto1 = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#dcd3c0"/><rect x="20" y="20" width="260" height="300" fill="#3A230A"/><path d="M150 180 Q100 250 200 250 Q150 180 150 180 Z" fill="#A4530C"/><text x="150" y="360" font-family="serif" font-size="20" fill="#3A230A" text-anchor="middle" opacity="0.5">FOTOGRAFIA 1984</text></svg>`);

export const doc1 = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#f4ebd8"/><line x1="40" y1="80" x2="260" y2="80" stroke="#A4530C" stroke-width="2"/><line x1="40" y1="120" x2="240" y2="120" stroke="#3A230A" stroke-width="1"/><line x1="40" y1="150" x2="260" y2="150" stroke="#3A230A" stroke-width="1"/><line x1="40" y1="180" x2="200" y2="180" stroke="#3A230A" stroke-width="1"/><circle cx="220" cy="320" r="40" fill="none" stroke="#A4530C" stroke-width="3" opacity="0.3"/><text x="220" y="325" font-family="serif" font-size="12" fill="#A4530C" text-anchor="middle" opacity="0.5">CONFIDENCIAL</text></svg>`);

export const owlIcon = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" stroke="#FCD760" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
  <!-- Corpo arredondado -->
  <path d="M 40 150 C 30 100 40 40 100 40 C 160 40 170 100 160 150 C 150 180 50 180 40 150 Z" />
  <!-- Olhos grandes -->
  <circle cx="70" cy="90" r="25" />
  <circle cx="130" cy="90" r="25" />
  <!-- Pupilas preenchidas de dourado -->
  <circle cx="70" cy="90" r="10" fill="#FCD760" />
  <circle cx="130" cy="90" r="10" fill="#FCD760" />
  <!-- Bico -->
  <path d="M 100 110 L 85 130 L 115 130 Z" fill="#FCD760" />
  <!-- Orelhas -->
  <path d="M 50 60 L 70 40 L 80 60" />
  <path d="M 120 60 L 130 40 L 150 60" />
</svg>`);