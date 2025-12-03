/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageCircle, Palette, Rocket, Settings } from "lucide-react";

export interface SkillItem {
  name: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon: React.ComponentType<any>;
  skills?: SkillItem[];
}

export const skillsData: SkillItem[] = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Tailwind CSS" },
  { name: "Figma" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Git" },
];

export const accordionItems: AccordionItem[] = [
  {
    id: "habilidades-blandas",
    title: "Habilidades Blandas:",
    content: `Soy una mezcla funcional entre mente analítica y creatividad. Investigo por mi cuenta porque disfruto entender cómo funcionan las cosas (y casi siempre encuentro la solución antes de preguntar 😅).Aún no he pasado por muchos equipos, pero cuando lo hago me adapto rápido, colaboro sin drama y aporto más de lo que estorbo. También trabajo súper bien de forma autónoma.

    Soy terca en el mejor sentido: puedo quedarme resolviendo algo hasta que me duele la cabeza, pero lo hago feliz porque ver el resultado me motiva.
    Me encanta diseñar en Figma; es donde pruebo ideas y creo interfaces antes de llevarlas al código. Me gusta aprender, mejorar lo que toco y dejar cada proyecto más     ordenado, bonito y usable.`,
    icon: MessageCircle,
  },
  {
    id: "habilidades-tecnicas",
    title: "Habilidades Técnicas:",
    content: `Trabajo principalmente con React, Next.js y TypeScript, junto con JavaScript, HTML y CSS. Construyo interfaces con Tailwind CSS y he utilizado Framer Motion para agregar animaciones cuando el proyecto lo requiere.

    Mantengo mis repos ordenados con Git, diseño primero en Figma y aplico buenas prácticas de SEO y rendimiento para que todo funcione rápido y sin fricción.`,

    icon: Settings,
    skills: skillsData,
  },
  {
    id: "que-puedo-aportar",
    title: "Qué Puedo Aportar:",
    content:
      "Lo que puedo aportar es una mezcla rara pero útil: diseño con cariño, programo con obsesión y no paro hasta que todo se vea y funcione como debería. Me gusta dejar cada proyecto más ordenado, más bonito y más fluido de lo que estaba. Soy práctica, perseverante y siempre encuentro la forma de que algo salga… incluso cuando me toca pelear con el CSS a las 2 a.m.",
    icon: Rocket,
  },
  {
    id: "mi-proceso-creativo",
    title: "Mi Proceso Creativo:",
    content: `Mi proceso creativo empieza siempre igual: entendiendo a fondo qué necesita el cliente y qué espera la gente que usará el sitio. Me gusta mirar referencias, armar notas, garabatear ideas y ordenar el caos antes de abrir Figma.

    Después paso a los prototipos, donde pruebo colores, layouts y soluciones hasta que algo por fin hace clic. Cuando el diseño ya respira por sí solo, me voy al código: limpio,     ordenado y pensado para que todo fluya rápido y sin enredos.

    Al final reviso cada detalle (varias veces, porque la obsesión es real) para asegurar que el proyecto cargue rápido, se vea bien en cualquier pantalla y sea una experiencia     agradable de principio a fin.`,

    icon: Palette,
  },
];
