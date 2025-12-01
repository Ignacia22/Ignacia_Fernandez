export const extractTechnologies = (desc: string): string[] => {
  const techKeywords = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Auth0",
    "NextAuth",
    "Leaflet",
    "Google Maps",
    "Stripe",
    "Socket.io",
    "Radix UI",
    "Axios",
    "SweetAlert2",
    "Vite",
    "Express",
    "TypeORM",
    "PostgreSQL",
    "Moment",
    "dotenv",
    "React Router",
    "Formik",
    "WordPress",
    "Elementor Pro",
    "Framer Motion",
    "EmailJS",
    "Angular",
    "RxJS",
    "zone.js",
  ];

  const detectedTechs: string[] = [];

  for (const tech of techKeywords) {
    const regex = new RegExp(`${tech}\\s*(\\d+)?`, "i");
    if (regex.test(desc)) {
      const match = desc.match(new RegExp(`${tech}\\s*(\\d+)`, "i"));
      if (match && match[1]) {
        detectedTechs.push(`${tech} ${match[1]}`);
      } else {
        detectedTechs.push(tech);
      }
    }
  }

  return detectedTechs;
};
