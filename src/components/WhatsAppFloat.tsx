"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/593958635351?text=Hola%20Rafa,%20vi%20tu%20portafolio%20y%20quiero%20contactarte"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 
                 flex items-center justify-center 
                 w-14 h-14 md:w-16 md:h-16 
                 rounded-full bg-green-500 text-white 
                 shadow-2xl hover:bg-green-600 transition"
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </motion.a>
  );
}