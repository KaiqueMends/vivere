import { useState, useEffect } from 'react';

const phoneNumber = "5575982523752"; 
const message = "Olá! Estava no site da Vivere e gostaria de agendar um horário para o meu pet.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = "font-semibold text-gray-600 hover:text-brand-dark transition-colors duration-300";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo (Sempre visível) */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors duration-500 ${
              isScrolled || isMobileMenuOpen ? 'bg-brand-light text-brand-dark' : 'bg-white/20 text-white backdrop-blur-sm'
            }`}>
              <i className="fa-solid fa-leaf"></i>
            </div>
            <span className={`font-extrabold text-2xl tracking-tight transition-colors duration-500 ${
              isScrolled || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'
            }`}>
              Vivere
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center text-sm xl:text-base">
            
            <div 
              className={`flex space-x-6 mr-6 transition-all duration-500 ease-out transform ${
                isScrolled 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}
            >
              <a href="#sobre" className={navLinkClass}>Sobre</a>
              <a href="#servicos" className={navLinkClass}>Serviços</a>
              <a href="#galeria" className={navLinkClass}>Galeria</a>
              <a href="#depoimentos" className={navLinkClass}>Depoimentos</a>
              <a href="#localizacao" className={navLinkClass}>Localização</a>
              <a href="#faq" className={navLinkClass}>Dúvidas</a>
            </div>

            {/* Botão Agendar Horário (Sempre visível) */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5 ${
                isScrolled
                  ? 'bg-brand-dark text-brand-light hover:bg-brand-accent hover:shadow-xl'
                  : 'bg-white text-brand-dark hover:bg-brand-light hover:shadow-white/20'
              }`}
            >
              Agendar Horário
            </a>
          </div>

          {/* Botão Hambúrguer (Mobile) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-all duration-500 transform ${
                isScrolled || isMobileMenuOpen 
                  ? 'text-brand-dark opacity-100 translate-y-0' 
                  : 'text-white opacity-0 -translate-y-4 pointer-events-none'
              }`}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Painel do Menu Mobile (Drop-down) */}
      <div
        className={`lg:hidden absolute w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] border-t border-brand-light/30' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-dark font-semibold text-lg hover:text-brand-accent">Sobre</a>
          <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-dark font-semibold text-lg hover:text-brand-accent">Serviços</a>
          <a href="#galeria" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-dark font-semibold text-lg hover:text-brand-accent">Galeria</a>
          <a href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-dark font-semibold text-lg hover:text-brand-accent">Depoimentos</a>
          <a href="#localizacao" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-dark font-semibold text-lg hover:text-brand-accent">Localização</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-dark font-semibold text-lg hover:text-brand-accent">Dúvidas Frequentes</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-brand-dark text-brand-light px-8 py-3 rounded-full font-bold shadow-lg w-full text-center">
            Agendar Horário <i className="fa-brands fa-whatsapp ml-2"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}