/**
 * The Career Exploration quiz: interest types and activities.
 *
 * The quiz follows the idea behind the U.S. Department of Labor's O*NET
 * Interest Profiler: people differ in six broad kinds of interest (the
 * "RIASEC" or Holland types), and jobs fit people whose mix of interests
 * matches the work. The six types and the idea of rating activities are
 * public; the activities below are our own, written for students and chosen
 * so they tell STEM jobs apart (fixing, researching, designing, caring,
 * leading, organising).
 *
 * This file is imported by the browser and by the tests, so it must stay
 * free of Astro and data-file imports.
 */

export type TypeId = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export const TYPE_ORDER: TypeId[] = ['R', 'I', 'A', 'S', 'E', 'C'];

export interface Localized {
  en: string;
  es: string;
}

export interface InterestType {
  id: TypeId;
  emoji: string;
  color: string;
  name: Localized;
  blurb: Localized;
}

export const TYPES: Record<TypeId, InterestType> = {
  R: {
    id: 'R',
    emoji: '🔧',
    color: '#d97706',
    name: { en: 'Hands-on Maker', es: 'Creador práctico' },
    blurb: {
      en: 'You like tools, machines and being outdoors, and you like to see something real come out of your work.',
      es: 'Te gustan las herramientas, las máquinas y el aire libre, y te gusta ver algo real como resultado de tu trabajo.',
    },
  },
  I: {
    id: 'I',
    emoji: '🔬',
    color: '#2f7df6',
    name: { en: 'Curious Scientist', es: 'Científico curioso' },
    blurb: {
      en: 'You like to ask why, run experiments, work with data and solve problems that have no easy answer.',
      es: 'Te gusta preguntar por qué, hacer experimentos, trabajar con datos y resolver problemas que no tienen una respuesta fácil.',
    },
  },
  A: {
    id: 'A',
    emoji: '🎨',
    color: '#7c5cff',
    name: { en: 'Creative Designer', es: 'Diseñador creativo' },
    blurb: {
      en: 'You like original ideas, and you care how things look, sound and feel.',
      es: 'Te gustan las ideas originales y te importa cómo se ven, suenan y se sienten las cosas.',
    },
  },
  S: {
    id: 'S',
    emoji: '🩺',
    color: '#e04f7f',
    name: { en: 'Caring Helper', es: 'Ayudante solidario' },
    blurb: {
      en: 'You like helping, teaching and caring for people (and animals) and making their day better.',
      es: 'Te gusta ayudar, enseñar y cuidar a las personas (y a los animales) y mejorarles el día.',
    },
  },
  E: {
    id: 'E',
    emoji: '🚀',
    color: '#0f9bb4',
    name: { en: 'Bold Leader', es: 'Líder audaz' },
    blurb: {
      en: 'You like to take charge, make decisions, persuade people and turn ideas into results.',
      es: 'Te gusta tomar el mando, tomar decisiones, convencer a la gente y convertir las ideas en resultados.',
    },
  },
  C: {
    id: 'C',
    emoji: '🗂️',
    color: '#10a37f',
    name: { en: 'Careful Organizer', es: 'Organizador cuidadoso' },
    blurb: {
      en: 'You like clear steps, accurate details and keeping things in order, so that everything works the way it should.',
      es: 'Te gustan los pasos claros, los detalles exactos y mantener todo en orden para que funcione como debe.',
    },
  },
};

export interface Activity {
  id: string;
  type: TypeId;
  emoji: string;
  text: Localized;
}

type Row = [emoji: string, en: string, es: string];

/** Ten activities per type. */
const BY_TYPE: Record<TypeId, Row[]> = {
  R: [
    ['🔧', 'Fix a broken machine or gadget', 'Arreglar una máquina o un aparato descompuesto'],
    ['🏗️', 'Build something with tools, like a shed or a robot frame', 'Construir algo con herramientas, como un cobertizo o el armazón de un robot'],
    ['⚙️', 'Take an engine apart to see how it works', 'Desarmar un motor para ver cómo funciona'],
    ['⚡', 'Wire a circuit or install electrical equipment', 'Conectar un circuito o instalar equipo eléctrico'],
    ['🌲', 'Work outdoors, whatever the weather', 'Trabajar al aire libre con cualquier clima'],
    ['🔥', 'Weld or cut metal parts', 'Soldar o cortar piezas de metal'],
    ['🖨️', 'Set up and run a 3D printer or a machine that makes parts', 'Preparar y operar una impresora 3D o una máquina que fabrica piezas'],
    ['🚜', 'Operate heavy equipment', 'Operar equipo pesado'],
    ['🏭', 'Keep a power plant or water system running', 'Mantener en marcha una planta de energía o un sistema de agua'],
    ['📡', 'Climb a tower or ladder to install equipment', 'Subir a una torre o escalera para instalar equipo'],
  ],
  I: [
    ['🔬', 'Run an experiment and record what happens', 'Hacer un experimento y anotar lo que pasa'],
    ['🧬', 'Study cells, germs or DNA under a microscope', 'Estudiar células, gérmenes o ADN con un microscopio'],
    ['🌌', 'Figure out how planets, stars or the weather work', 'Descubrir cómo funcionan los planetas, las estrellas o el clima'],
    ['🧮', 'Solve a tough math puzzle', 'Resolver un rompecabezas matemático difícil'],
    ['🕵️', 'Study evidence to solve a mystery', 'Estudiar pruebas para resolver un misterio'],
    ['📈', 'Dig through data to find a pattern nobody has noticed', 'Explorar datos para encontrar un patrón que nadie ha notado'],
    ['🧪', 'Mix chemicals to see how they react', 'Mezclar sustancias químicas para ver cómo reaccionan'],
    ['💻', 'Write code to solve a problem', 'Escribir código para resolver un problema'],
    ['🦠', 'Research how a disease spreads and how to stop it', 'Investigar cómo se propaga una enfermedad y cómo detenerla'],
    ['📚', 'Read about a new scientific discovery', 'Leer sobre un nuevo descubrimiento científico'],
  ],
  A: [
    ['🎨', 'Design a logo, poster or app screen', 'Diseñar un logotipo, un cartel o la pantalla de una app'],
    ['🏠', 'Draw plans for a house, park or neighborhood', 'Dibujar los planos de una casa, un parque o un barrio'],
    ['🎮', 'Design how a video game or website looks', 'Diseñar el aspecto de un videojuego o un sitio web'],
    ['📷', 'Take photos or make videos, then edit them', 'Tomar fotos o hacer videos y luego editarlos'],
    ['✍️', 'Write a story, song or script', 'Escribir un cuento, una canción o un guion'],
    ['🗺️', 'Turn a pile of numbers into a beautiful map or chart', 'Convertir un montón de números en un mapa o gráfico hermoso'],
    ['👟', 'Invent a new product, like a shoe or a gadget, and sketch it', 'Inventar un producto nuevo, como un zapato o un aparato, y dibujarlo'],
    ['🧊', 'Make 3D models or animations on a computer', 'Hacer modelos 3D o animaciones en la computadora'],
    ['💡', 'Come up with an idea nobody has tried before', 'Tener una idea que nadie ha probado antes'],
    ['🌳', 'Plan how a garden or outdoor space should look', 'Planear cómo debe verse un jardín o un espacio al aire libre'],
  ],
  S: [
    ['🩺', 'Care for someone who is sick or hurt', 'Cuidar a alguien que está enfermo o herido'],
    ['🧑‍🏫', 'Teach a younger kid how to do something', 'Enseñar a un niño más pequeño a hacer algo'],
    ['👂', 'Listen to a friend with a problem and help them sort it out', 'Escuchar a un amigo con un problema y ayudarle a resolverlo'],
    ['🚑', 'Be the first person on the scene in an emergency', 'Ser la primera persona en llegar a una emergencia'],
    ['🐶', 'Nurse a sick or hurt animal back to health', 'Cuidar a un animal enfermo o herido hasta que se recupere'],
    ['💪', 'Help someone get strong again after an injury', 'Ayudar a alguien a recuperar sus fuerzas después de una lesión'],
    ['🥗', 'Help people eat in a way that makes them feel better', 'Ayudar a las personas a comer de una forma que las haga sentir mejor'],
    ['🗣️', 'Help someone who has trouble hearing, seeing or speaking', 'Ayudar a alguien que tiene dificultad para oír, ver o hablar'],
    ['🤲', 'Volunteer to make your community better', 'Ser voluntario para mejorar tu comunidad'],
    ['💬', 'Explain a hard idea until everyone understands it', 'Explicar una idea difícil hasta que todos la entiendan'],
  ],
  E: [
    ['🚀', 'Start your own business or club', 'Iniciar tu propio negocio o club'],
    ['🧑‍💼', 'Lead a team to finish a big project', 'Liderar un equipo para terminar un proyecto grande'],
    ['🛍️', 'Convince people to try a new idea or product', 'Convencer a la gente de probar una idea o un producto nuevo'],
    ['💰', 'Decide how to spend a budget', 'Decidir cómo gastar un presupuesto'],
    ['🎤', 'Pitch an idea in front of a crowd', 'Presentar una idea frente a un público'],
    ['🏆', 'Compete to win, in sports or in a contest', 'Competir para ganar, en deportes o en un concurso'],
    ['🚨', 'Take charge when something goes wrong', 'Tomar el mando cuando algo sale mal'],
    ['⏱️', 'Find a way to make a process faster and cheaper', 'Encontrar la manera de hacer un proceso más rápido y barato'],
    ['🤝', 'Negotiate a deal', 'Negociar un trato'],
    ['🧭', 'Make a big decision and take responsibility for it', 'Tomar una gran decisión y hacerte responsable de ella'],
  ],
  C: [
    ['🗂️', 'Keep files, records or a spreadsheet neat and organized', 'Mantener archivos, registros o una hoja de cálculo ordenados'],
    ['🔢', 'Check numbers to make sure they are exactly right', 'Revisar números para asegurarte de que son exactos'],
    ['📅', 'Make a schedule and stick to it', 'Hacer un horario y cumplirlo'],
    ['📋', 'Follow a safety checklist step by step', 'Seguir una lista de seguridad paso a paso'],
    ['📦', 'Keep track of supplies and inventory', 'Llevar el control de materiales e inventario'],
    ['💊', 'Measure and label things exactly', 'Medir y etiquetar cosas con exactitud'],
    ['🗄️', 'Set up and manage a database', 'Crear y administrar una base de datos'],
    ['📊', 'Turn survey answers into clean tables', 'Convertir respuestas de una encuesta en tablas claras'],
    ['🔐', 'Keep private information safe', 'Mantener segura la información privada'],
    ['🐞', 'Test software or a product and write down every bug', 'Probar un programa o un producto y anotar cada error'],
  ],
};

/** Activities per type in the quick version of the quiz. */
export const QUICK_PER_TYPE = 5;

/**
 * The deck, in the order students see it. Each round holds one activity of
 * every type, and the type order shifts by one every round, so the same type
 * never comes up twice in a row. The first {@link QUICK_PER_TYPE} rounds
 * hold every type equally often, so they work as the quick quiz on their own.
 */
export const ACTIVITIES: Activity[] = (() => {
  const deck: Activity[] = [];
  const rounds = BY_TYPE.R.length;
  for (let round = 0; round < rounds; round++) {
    for (let k = 0; k < TYPE_ORDER.length; k++) {
      const type = TYPE_ORDER[(k + round) % TYPE_ORDER.length];
      const [emoji, en, es] = BY_TYPE[type][round];
      deck.push({ id: `${type.toLowerCase()}${round + 1}`, type, emoji, text: { en, es } });
    }
  }
  return deck;
})();

/** The deck for a quiz length. */
export function deckFor(length: 'quick' | 'full'): Activity[] {
  return length === 'quick'
    ? ACTIVITIES.slice(0, QUICK_PER_TYPE * TYPE_ORDER.length)
    : ACTIVITIES;
}
