<script setup>
import CharacterHeader from "./components/CharacterHeader.vue";
import CharacterList from "./components/CharacterList.vue";

const characters = [
  {
    id: 1,
    nombre: "Daenerys Targaryen",
    descripcion: "Madre de dragones, buscadora del Trono de Hierro.",
    ocupacion: "Reina",
    familia: "Casa Targaryen",
    reino: "Essos / Westeros",
    foto: "https://cdn-3.expansion.mx/dims4/default/fa3475a/2147483647/strip/true/crop/800x450+0+0/resize/1200x675!/format/webp/quality/60/?url=https://cdn-3.expansion.mx/da/56/c13e29224e5881ff8aea11d82030/daenerys-targaryen-game-of-thrones.jpg",
  },
  {
    id: 2,
    nombre: "Jon Snow",
    descripcion: "Hijo bastardo de Ned Stark, honorable y valiente.",
    ocupacion: "Comandante de la Guardia de la Noche",
    familia: "Casa Stark / Targaryen",
    reino: "El Norte",
    foto: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15329653/Jon_snow.0.1536999998.jpg?quality=90&strip=all&crop=0,3.4613147178592,100,93.077370564282",
  },
  {
    id: 3,
    nombre: "Tyrion Lannister",
    descripcion: "Ingenioso, sarcástico, siempre con una copa de vino.",
    ocupacion: "Consejero de la Reina",
    familia: "Casa Lannister",
    reino: "Westeros",
    foto: "https://applauss.com/wp-content/uploads/2017/09/tyrion-lannister-frases.jpg",
  },
  {
    id: 4,
    nombre: "Cersei Lannister",
    descripcion:
      "Astuta y despiadada, busca mantener a su familia en el poder.",
    ocupacion: "Reina de los Siete Reinos",
    familia: "Casa Lannister",
    reino: "Desembarco del Rey",
    foto: "https://www.hollywoodreporter.com/wp-content/uploads/2018/11/lena_headey_on_game_of_thrones_-_publicity_-_h_2018.jpg?w=2000&h=1126&crop=1",
  },
  {
    id: 5,
    nombre: "Jaime Lannister",
    descripcion:
      "El Matarreyes, guerrero habilidoso dividido entre el honor y su amor prohibido.",
    ocupacion: "Caballero de la Guardia Real",
    familia: "Casa Lannister",
    reino: "Westeros",
    foto: "https://static01.nyt.com/images/2017/08/07/watching/07thrones07/07thrones-slide-7XQ6-videoSixteenByNineJumbo1600.jpg",
  },
  {
    id: 6,
    nombre: "Arya Stark",
    descripcion: "Valiente, independiente, entrenada como asesina sin rostro.",
    ocupacion: "Asesina de la Casa de Blanco y Negro",
    familia: "Casa Stark",
    reino: "El Norte / Braavos",
    foto: "https://www.publimetro.cl/resizer/v2/SFF2MIJ5ZBHC7ETYPMWYJYXU54.jpg?auth=23c72e1f6f98c46bbdac01bcc652acf0816958f5705f13626f9756d9cb30353d&width=1200&height=675&smart=true",
  },
  {
    id: 7,
    nombre: "Sansa Stark",
    descripcion:
      "Sobreviviente y estratega, aprende a manejar el poder con astucia.",
    ocupacion: "Reina en el Norte",
    familia: "Casa Stark",
    reino: "Invernalia",
    foto: "https://cdn-3.expansion.mx/dims4/default/8f5f313/2147483647/strip/true/crop/800x450+0+0/resize/1200x675!/format/webp/quality/60/?url=https://cdn-3.expansion.mx/ae/65/82d780f940c4924d47f661f852ba/sansa-stark-1.jpg",
  },
  {
    id: 8,
    nombre: "Bran Stark",
    descripcion: "El Cuervo de Tres Ojos, guardián de la memoria del mundo.",
    ocupacion: "Rey de los Seis Reinos",
    familia: "Casa Stark",
    reino: "Westeros",
    foto: "https://e01-xlk-ue-marca.uecdn.es/uploads/2025/03/21/16649896569487.jpeg",
  },
  {
    id: 9,
    nombre: "Eddard Stark",
    descripcion: "Honorable y justo, Señor de Invernalia.",
    ocupacion: "Mano del Rey",
    familia: "Casa Stark",
    reino: "El Norte",
    foto: "https://s1.abcstatics.com/media/play/2021/05/31/eddard-stark-post-k2qB--1248x698@abc.jpg",
  },
  {
    id: 10,
    nombre: "Khal Drogo",
    descripcion: "Líder dothraki, temido guerrero y esposo de Daenerys.",
    ocupacion: "Khal de los Dothraki",
    familia: "Ninguna",
    reino: "Mar Dothraki",
    foto: "https://addons-media.operacdn.com/media/CACHE/images/themes/35/35735/1.0-rev1/images/8bbb6594-a413-49f1-9505-d04889330c50/987591d2729c256f0f521306af28ce74.jpg",
  },
  {
    id: 11,
    nombre: "Jorah Mormont",
    descripcion: "Leal caballero al servicio de Daenerys, busca redención.",
    ocupacion: "Consejero y guerrero",
    familia: "Casa Mormont",
    reino: "Isla del Oso",
    foto: "https://assets3.thrillist.com/v1/image/2693586/1200x600/scale;;webp=auto;jpeg_quality=85.jpg",
  },
  {
    id: 12,
    nombre: "Petyr Baelish",
    descripcion: "Astuto manipulador, conocido como Meñique.",
    ocupacion: "Consejero y Señor de Harrenhal",
    familia: "Casa Baelish",
    reino: "Valle de Arryn",
    foto: "https://media.biobiochile.cl/wp-content/uploads/2017/06/game-of-thrones-littlefinger-petyr-baelish-e1498754987899-730x350.jpeg",
  },
  {
    id: 13,
    nombre: "Varys",
    descripcion: "El eunuco, maestro de los susurros y secretos.",
    ocupacion: "Consejero del Rey",
    familia: "Ninguna",
    reino: "Westeros",
    foto: "https://images.ecestaticos.com/6LFKyrCw6gnau6K8cLSR7HIV8Tk=/0x43:646x383/600x315/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F682%2F7d7%2Fda2%2F6827d7da29668ad68cb63f7aa075529b.jpg",
  },
  {
    id: 14,
    nombre: "Brienne de Tarth",
    descripcion:
      "Leal, honorable y una de las mejores espadachinas de Westeros.",
    ocupacion: "Caballera de los Siete Reinos",
    familia: "Casa Tarth",
    reino: "Isla de Tarth",
    foto: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/07/brienne-de-tarth-game-of-thrones-gwendoline-christie-emmy-1.jpg?resize=640,360&ssl=1",
  },
  {
    id: 15,
    nombre: "Sandor Clegane",
    descripcion: "El Perro, brutal pero con un código de honor propio.",
    ocupacion: "Guerrero y protector",
    familia: "Casa Clegane",
    reino: "Westeros",
    foto: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/05/Game-of-Thrones-GOT-Sandor-Hound.jpg?q=70&fit=contain&w=750&h=422&dpr=1",
  },
];
</script>

<template>
  <div id="app">
    <CharacterHeader :total="characters.length" />
    <CharacterList :personajes="characters" class="container" />
  </div>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Game of Thrones Character Gallery</p>
    </div>
  </footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --steel-blue: #3088ae;
  --sky-blue: #72d2eb;
  --diamond: #bff7ff;
  --blue-sapphire: #166a8e;
  --police-blue: #2a4e6c;
  --maastricht-blue: #002c3a;

  --cream: #faf8f5;
  --warm-white: #ffffff;
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-muted: #6b6b6b;
  --border-color: #e5e5e5;

  --font-serif: "Playfair Display", serif;
  --font-sans: "Inter", sans-serif;

  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;

  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;

  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
}

body {
  font-family: var(--font-sans);
  background-color: var(--cream);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-md);
}

.main {
  padding: var(--spacing-2xl) 0;
  min-height: 60vh;
}

.footer {
  background-color: var(--maastricht-blue);
  color: var(--diamond);
  text-align: center;
  padding: var(--spacing-lg) 0;
  margin-top: var(--spacing-2xl);
}

.footer p {
  font-size: 0.875rem;
}

/* ===== Loading State ===== */
.loading {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--text-muted);
  font-size: 1.125rem;
}

/* ===== Responsive Design ===== */
@media (max-width: 768px) {
  .character-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .header {
    padding: var(--spacing-xl) 0;
  }

  .main {
    padding: var(--spacing-xl) 0;
  }

  .container {
    padding: 0 var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .character-content {
    padding: var(--spacing-sm);
  }

  .character-name {
    font-size: 1.25rem;
  }

  .counter {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .counter-number {
    font-size: 2rem;
  }
}

/* ===== Accessibility ===== */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Focus visible for keyboard navigation */
a:focus-visible,
button:focus-visible {
  outline: 3px solid var(--steel-blue);
  outline-offset: 2px;
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
