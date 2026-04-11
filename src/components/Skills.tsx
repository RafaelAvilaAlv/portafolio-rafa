"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaAngular,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiJsonwebtokens,
  SiVercel,
  SiRender,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Render", icon: <SiRender /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-100 py-24 px-6 scroll-mt-32">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-center uppercase tracking-widest text-slate-900 mb-12">
          Tecnologías
        </h2>

        <p className="text-center text-slate-600 text-lg max-w-3xl mx-auto mb-12">
          Tecnologías y herramientas con las que desarrollo aplicaciones web modernas,
          backend robusto y soluciones full stack orientadas a buenas prácticas.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm md:text-base font-semibold text-slate-800 shadow-sm hover:shadow-md transition"
            >
              <span className="text-2xl flex items-center">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}