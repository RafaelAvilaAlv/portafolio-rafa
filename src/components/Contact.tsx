"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Contact() {
  return (
    <section id="contacto" className="bg-slate-950 text-white py-24 px-6 scroll-mt-32">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest mb-8">
          Contacto
        </h2>

        <p className="text-lg md:text-xl text-slate-300 leading-8 max-w-2xl mx-auto mb-12">
          Estoy abierto a oportunidades laborales, proyectos freelance y
          colaboraciones en desarrollo web y software.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* CORREO */}
          <motion.a
            whileHover={{ y: -6, scale: 1.02 }}
            href="mailto:avilalvarezmiltonrafael@gmail.com"
            className="rounded-3xl border border-slate-700 bg-slate-900 p-6 hover:border-white transition text-center"
          >
            <MdEmail className="text-3xl mx-auto mb-3 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">Correo</h3>
            <p className="text-slate-300 break-words">
              avilalvarezmiltonrafael@gmail.com
            </p>
          </motion.a>

          {/* GITHUB */}
          <motion.a
            whileHover={{ y: -6, scale: 1.02 }}
            href="https://github.com/RafaelAvilaAlv"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-700 bg-slate-900 p-6 hover:border-white transition text-center"
          >
            <FaGithub className="text-3xl mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-slate-300">
              github.com/RafaelAvilaAlv
            </p>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            whileHover={{ y: -6, scale: 1.02 }}
            href="https://www.linkedin.com/in/milton-rafael-avila-alvarez-0a2102322/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-700 bg-slate-900 p-6 hover:border-blue-400 transition text-center"
          >
            <FaLinkedin className="text-3xl mx-auto mb-3 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-slate-300">
              linkedin.com/in/milton-rafael-avila-alvarez
            </p>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            whileHover={{ y: -6, scale: 1.02 }}
            href="https://wa.me/593958635351?text=Hola%20Rafa,%20vi%20tu%20portafolio%20y%20quiero%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-green-500 bg-slate-900 p-6 hover:border-green-400 transition text-center"
          >
            <FaWhatsapp className="text-3xl mx-auto mb-3 text-green-500" />
            <h3 className="text-xl font-bold mb-2 text-green-400">WhatsApp</h3>
            <p className="text-slate-300">
              Escríbeme directamente
            </p>
          </motion.a>

        </div>

      </motion.div>
    </section>
  );
}