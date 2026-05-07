export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4">
      <nav className="max-w-6xl mx-auto mt-4 md:mt-6 px-4 md:px-6 py-3 flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-black/30 backdrop-blur-md rounded-2xl md:rounded-full text-white text-xs md:text-sm font-semibold uppercase tracking-widest overflow-x-auto">
        
        <a href="#inicio" className="hover:text-blue-300 transition whitespace-nowrap">
          Inicio
        </a>

        <a href="#sobre-mi" className="hover:text-blue-300 transition whitespace-nowrap">
          Sobre mí
        </a>

        <a href="#skills" className="hover:text-blue-300 transition whitespace-nowrap">
          Tecnologías
        </a>

        <a href="#proyectos" className="hover:text-blue-300 transition whitespace-nowrap">
          Proyectos
        </a>

        <a href="#contacto" className="hover:text-blue-300 transition whitespace-nowrap">
          Contacto
        </a>
      </nav>
    </header>
  );
}