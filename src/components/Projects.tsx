"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Nova Academia",
    image: "/academico.png",
    description:
      "Plataforma web institucional full stack orientada a la presentación de programas académicos y gestión de contacto real con usuarios. Desarrollada con arquitectura moderna separando frontend y backend, permite visualizar información académica, enviar formularios que se almacenan en base de datos y simular un entorno institucional real desplegado en la nube. Incluye validación robusta de datos en backend, comunicación mediante API REST y manejo estructurado de solicitudes. Implementa despliegue en servicios cloud con configuración de entorno, optimización de rendimiento y enfoque en escalabilidad.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Render", "Vercel"],
    github: "#",
    demo: "https://nova-academia-web.vercel.app/",
  },

  {
    title: "Sistema de Gestión para Negocios Locales",
    image: "/negocios.png",
    description:
      "Plataforma web para la gestión de pequeños negocios diseñada para centralizar y optimizar las operaciones diarias. Permite administrar clientes, citas, pagos y procesos de facturación de manera organizada y eficiente. Desarrollada con arquitectura API REST y un frontend moderno, mejora el flujo operativo, la gestión de la información y la productividad del negocio.",
    technologies: [
      "Angular",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "REST API",
      "JWT",
    ],
    github: "https://github.com/RafaelAvilaAlv/gccifrontend.git",
    demo: "https://gccifrontend-2anm.vercel.app",
  },

  {
    title: "FacturaPro AI",
    image: "/imgfactura.png",
    description:
      "Plataforma SaaS de facturación electrónica multiempresa diseñada bajo principios de arquitectura escalable. Implementa seguridad robusta con JWT y control de acceso por roles, gestión integral de operaciones comerciales (clientes, servicios, citas, pagos y facturas) y dashboard financiero con analítica en tiempo real. Incluye integración simulada con el SRI (Ecuador) y un módulo de inteligencia artificial para consultas de negocio y automatización. Preparado para despliegue containerizado y evolución hacia microservicios.",
    technologies: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Angular",
      "TypeScript",
      "JWT",
      "Chart.js",
      "OpenAI API",
      "Swagger",
      "Docker (ready)",
    ],
    github: "https://github.com/TU_REPO",
    demo: "https://factura-pro-front.vercel.app/login",
  },

  {
    title: "UniversityScoreAPI",
    image: "/prediccion.png",
    description:
      "Sistema diseñado para gestionar información académica de estudiantes de forma organizada y segura. Permite registrar usuarios, almacenar datos académicos y consultar resultados a través de una interfaz conectada al sistema. Cuenta con control de acceso mediante inicio de sesión, diferenciando permisos según el tipo de usuario. Su objetivo es facilitar la administración y consulta de información en entornos educativos de manera eficiente.",
    technologies: [
      "Java",
      "Spring Boot",
      "JWT",
      "MySQL",
      "REST API",
    ],
    github:
      "https://github.com/RafaelAvilaAlv/UniversityScoreApiFront.git",
    demo:
      "https://university-score-api-front-pi.vercel.app/login",
  },

  {
    title: "StudentStay",
    image: "/studentstay.png",
    description:
      "Plataforma web para la gestión de hospedaje estudiantil que permite administrar habitaciones, reservas y clientes de manera organizada. Facilita el control de ocupación, registro de pagos y procesos de facturación, mejorando la administración del servicio. Incluye sistema de inicio de sesión con diferentes niveles de acceso y un asistente inteligente que ayuda a resolver consultas de los usuarios, brindando una experiencia más interactiva y moderna.",
    technologies: [
      "Spring Boot",
      "Java",
      "MySQL",
      "Angular",
      "TypeScript",
      "JWT",
      "OpenAI API",
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
      <section
        id="proyectos"
        className="min-h-screen bg-white py-24 px-4 sm:px-6 scroll-mt-32 overflow-x-hidden"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-center uppercase tracking-widest text-slate-900 mb-10">
            Proyectos
          </h2>

          <p className="text-center text-slate-600 text-base md:text-lg max-w-3xl mx-auto mb-14 leading-8">
            Algunos de los proyectos en los que he trabajado, aplicando
            desarrollo full stack, arquitectura de software, integración de APIs
            y despliegue en la nube.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      src: project.image,
                      alt: project.title,
                    })
                  }
                  className="relative block w-full h-52 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-slate-400"
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

                <div className="flex flex-col flex-1 p-7">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 leading-7 mb-6 text-[15px]">
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

                  <div className="flex gap-3 mt-auto">
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