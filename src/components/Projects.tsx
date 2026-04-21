"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Nova Academia",
    image: "/academico.png",
    description:
      "Plataforma web institucional full stack desarrollada para presentar programas académicos, información institucional y gestionar mensajes de contacto reales mediante integración entre frontend, backend y base de datos en la nube.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Render", "Vercel"],
    github: "https://github.com/RafaelAvilaAlv/nova-academia-web.git",
    demo: "https://nova-academia-web.vercel.app/",
  },
  {
    title: "Sistema para Negocios Pequeños",
    image: "/negocios.png",
    description:
      "Sistema orientado a la gestión de operaciones para pequeños negocios, incluyendo administración de clientes, servicios, pagos y flujo general del negocio con enfoque en escalabilidad y organización del sistema.",
    technologies: ["Angular", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/RafaelAvilaAlv/gccifrontend.git",
    demo: "https://gccifrontend-2anm.vercel.app",
  },
  {
    title: "UniversityScoreAPI",
    image: "/prediccion.png",
    description:
      "Backend robusto desarrollado con Spring Boot, enfocado en autenticación JWT, autorización por roles, validaciones profesionales, manejo de errores y estructura escalable orientada a APIs REST seguras.",
    technologies: ["Java", "Spring Boot", "JWT", "MySQL", "Spring Security"],
    github: "https://github.com/RafaelAvilaAlv/UniversityScoreApiFront.git",
    demo: "https://university-score-api-front-pi.vercel.app/login",
  },
  {
    title: "StudentStay",
    image: "/studentstay.png",
    description:
      "Plataforma web full stack para la gestión de hospedaje estudiantil. Permite administrar reservas, habitaciones, clientes, servicios, facturación y recepción, incluyendo autenticación por roles y un chatbot inteligente integrado con IA.",
    technologies: [
      "Spring Boot",
      "Java",
      "MySQL",
      "Angular",
      "TypeScript",
      "OpenAI API",
      "Swagger",
    ],
    github: "https://github.com/RafaelAvilaAlv/StudentStayWEB.git",
    demo: "https://studentstay-demo.vercel.app",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section id="proyectos" className="bg-white py-24 px-6 scroll-mt-32">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-center uppercase tracking-widest text-slate-900 mb-12">
            Proyectos
          </h2>

          <p className="text-center text-slate-600 text-lg max-w-3xl mx-auto mb-14">
            Algunos de los proyectos en los que he trabajado, aplicando desarrollo
            full stack, arquitectura de software, integración de APIs y despliegue
            en la nube.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      src: project.image,
                      alt: project.title,
                    })
                  }
                  className="relative block w-full h-48 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-slate-400"
                  aria-label={`Ampliar imagen de ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition" />
                  <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                    Ver imagen
                  </div>
                </button>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 leading-7 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-900 text-white px-5 py-2 font-semibold hover:opacity-90 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-900 px-5 py-2 font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition"
                    >
                      Demo 🚀
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-2 md:top-2 md:right-2 z-10 rounded-full bg-white text-slate-900 px-3 py-2 text-sm font-bold shadow hover:bg-slate-200 transition"
                aria-label="Cerrar imagen ampliada"
              >
                ✕
              </button>

              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <p className="mt-4 text-center text-white text-sm md:text-base font-medium">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}