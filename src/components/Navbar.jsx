export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-dark font-bold text-xl">
              <i className="fa-solid fa-leaf"></i>
            </div>
            <span className="font-extrabold text-2xl text-brand-dark tracking-tight">Vivere</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#sobre" className="text-gray-600 hover:text-brand-dark font-semibold transition">Sobre</a>
            <a href="#servicos" className="text-gray-600 hover:text-brand-dark font-semibold transition">Serviços</a>
            <a href="#localizacao" className="text-gray-600 hover:text-brand-dark font-semibold transition">Localização</a>
            <a href="#agendar" className="bg-brand-dark text-brand-light px-6 py-2.5 rounded-full font-bold hover:bg-brand-accent transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Agendar Horário
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-brand-dark focus:outline-none">
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}