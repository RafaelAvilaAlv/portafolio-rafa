export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto mt-6 px-6 py-3 flex justify-center gap-8 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold uppercase tracking-widest">
        <a href="#inicio" className="hover:text-blue-300 transition">
          Inicio
        </a>
        <a href="#sobre-mi" className="hover:text-blue-300 transition">
          Sobre mí
        </a>
        <a href="#skills" className="hover:text-blue-300 transition">
          Tecnologías
        </a>
        <a href="#proyectos" className="hover:text-blue-300 transition">
          Proyectos
        </a>
        <a href="#contacto" className="hover:text-blue-300 transition">
          Contacto
        </a>
      </nav>
    </header>
  );
}