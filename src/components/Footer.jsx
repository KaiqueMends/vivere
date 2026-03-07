export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-leaf text-3xl"></i>
          <span className="font-extrabold text-2xl text-white">Vivere</span>
        </div>
        <p className="text-sm opacity-80 text-center md:text-left">© {new Date().getFullYear()} Vivere Pet Care & SPA. Cuidar hoje para viver melhor amanhã.</p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center hover:bg-brand-light hover:text-brand-dark transition">
            <i className="fa-brands fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}