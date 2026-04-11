"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center scroll-mt-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        className="relative z-10 max-w-5xl px-6 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="mb-4 text-sm md:text-base uppercase tracking-[0.35em] text-gray-300">
          Portafolio Profesional
        </p>

        <img
          src="/perfil.jpg"
          alt="Foto de Rafa Álvarez"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-xl"
        />

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Rafa Álvarez
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200">
          Tecnólogo Superior Universitario en Desarrollo de Software
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg leading-8 text-gray-200">
          Desarrollador de software enfocado en backend y frontend, con experiencia en
          Java, Spring Boot, React, Next.js, Angular, APIs REST seguras y despliegue
          de aplicaciones web modernas en la nube.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Contactarme
          </a>
        </div>
      </motion.div>
    </section>
  );
}