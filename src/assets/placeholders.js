const enc = (svg) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}`;

const person = (label, color, accent) =>
  enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600">
    <ellipse cx="200" cy="140" rx="70" ry="80" fill="${color}"/>
    <path d="M130 230 Q200 280 270 230 L310 600 L90 600 Z" fill="${color}"/>
    <text x="200" y="540" text-anchor="middle" font-family="serif" font-size="30"
      fill="${accent}" font-weight="bold" letter-spacing="2">${label}</text>
  </svg>`);

export const character1 = person('RAFAEL', '#3A230A', '#FCD760');
export const character2 = person('MARIA CLARA', '#A4530C', '#EEE9C1');
export const character3 = person('AVÓ', '#618030', '#EEE9C1');

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

export const cactus = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300">
  <rect x="85" y="60" width="30" height="220" rx="15" fill="#618030"/>
  <rect x="40" y="120" width="55" height="20" rx="10" fill="#618030"/>
  <rect x="40" y="120" width="20" height="60" rx="10" fill="#618030"/>
  <rect x="115" y="150" width="55" height="20" rx="10" fill="#618030"/>
  <rect x="140" y="150" width="20" height="50" rx="10" fill="#618030"/>
</svg>`);

export const mandacaru = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 400">
  <rect x="85" y="40" width="30" height="360" rx="15" fill="#618030"/>
  <rect x="30" y="120" width="55" height="20" rx="10" fill="#618030"/>
  <rect x="30" y="120" width="20" height="80" rx="10" fill="#618030"/>
  <rect x="115" y="160" width="55" height="20" rx="10" fill="#618030"/>
  <rect x="150" y="160" width="20" height="70" rx="10" fill="#618030"/>
  <circle cx="100" cy="100" r="4" fill="#FCD760"/>
  <circle cx="100" cy="200" r="4" fill="#FCD760"/>
  <circle cx="100" cy="300" r="4" fill="#FCD760"/>
</svg>`);

export const cross = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200">
  <rect x="40" y="20" width="20" height="180" fill="#EEE9C1"/>
  <rect x="10" y="60" width="80" height="20" fill="#EEE9C1"/>
</svg>`);

export const lantern = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 160">
  <rect x="45" y="0" width="10" height="30" fill="#3A230A"/>
  <rect x="30" y="30" width="40" height="10" fill="#3A230A"/>
  <rect x="20" y="40" width="60" height="80" rx="10" fill="#E4AE1E"/>
  <ellipse cx="50" cy="80" rx="15" ry="20" fill="#FCD760"/>
  <rect x="30" y="120" width="40" height="10" fill="#3A230A"/>
  <rect x="45" y="130" width="10" height="30" fill="#3A230A"/>
</svg>`);

export const coruja = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <ellipse cx="100" cy="110" rx="70" ry="80" fill="#3A230A"/>
  <ellipse cx="70" cy="90" rx="20" ry="22" fill="#EEE9C1"/>
  <ellipse cx="130" cy="90" rx="20" ry="22" fill="#EEE9C1"/>
  <circle cx="70" cy="90" r="8" fill="#1a120b"/>
  <circle cx="130" cy="90" r="8" fill="#1a120b"/>
  <path d="M90 130 L100 152 L110 130 Z" fill="#FCD760"/>
  <path d="M60 60 L70 40 L80 60 Z" fill="#3A230A"/>
  <path d="M120 60 L130 40 L140 60 Z" fill="#3A230A"/>
</svg>`);

export const radio = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150">
  <rect x="10" y="20" width="180" height="120" rx="10" fill="#A4530C"/>
  <rect x="25" y="40" width="100" height="60" rx="5" fill="#3A230A"/>
  <circle cx="150" cy="55" r="15" fill="#3A230A"/>
  <circle cx="150" cy="90" r="10" fill="#3A230A"/>
  <circle cx="150" cy="110" r="5" fill="#FCD760"/>
  <rect x="25" y="110" width="100" height="10" rx="3" fill="#3A230A"/>
</svg>`);

export const fita = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
  <rect x="10" y="10" width="180" height="110" rx="8" fill="#3A230A"/>
  <rect x="25" y="25" width="150" height="50" rx="4" fill="#EEE9C1"/>
  <circle cx="65" cy="50" r="15" fill="#3A230A"/>
  <circle cx="135" cy="50" r="15" fill="#3A230A"/>
  <circle cx="65" cy="50" r="5" fill="#EEE9C1"/>
  <circle cx="135" cy="50" r="5" fill="#EEE9C1"/>
  <rect x="30" y="90" width="140" height="15" rx="3" fill="#A4530C"/>
</svg>`);

export const bandeirinha = enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
  <path d="M0 30 Q200 60 400 30" stroke="#EEE9C1" stroke-width="2" fill="none"/>
  <polygon points="40,35 60,75 20,75" fill="#D97E5C"/>
  <polygon points="100,42 120,82 80,82" fill="#FCD760"/>
  <polygon points="160,48 180,88 140,88" fill="#618030"/>
  <polygon points="220,48 240,88 200,88" fill="#337A9E"/>
  <polygon points="280,42 300,82 260,82" fill="#A4530C"/>
  <polygon points="340,35 360,75 320,75" fill="#E4AE1E"/>
</svg>`);