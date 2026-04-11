"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-white py-28 px-6 scroll-mt-32">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-12 uppercase tracking-widest text-gray-900">
          Sobre mí
        </h2>

        <div className="text-lg md:text-xl leading-9 text-gray-700 space-y-8">
          <p>
            Soy Tecnólogo Superior Universitario en Desarrollo de Software, con
            experiencia en el desarrollo de aplicaciones web modernas,
            escalables y orientadas a las necesidades del usuario.
          </p>

          <p>
            Trabajo principalmente con tecnologías como{" "}
            <span className="font-semibold">
              Java, Spring Boot, React, Next.js y Angular
            </span>
            , desarrollando soluciones full stack y APIs REST robustas,
            aplicando buenas prácticas de arquitectura de software.
          </p>

          <p>
            Además, cuento con experiencia en bases de datos{" "}
            <span className="font-semibold">SQL y NoSQL</span>, así como en el
            despliegue de aplicaciones en la nube, garantizando soluciones
            eficientes, seguras y escalables.
          </p>
        </div>
      </motion.div>
    </section>
  );
}