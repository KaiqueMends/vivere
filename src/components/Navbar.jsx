import { useState, useEffect } from 'react';

const phoneNumber = "5575982523752"; 
const message = "Olá! Estava no site da Vivere e gostaria de agendar um horário para o meu pet.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // 1. Novo estado para controlar o menu mobile aberto/fechado
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

  return (
    <nav
      // 2. Se o menu mobile abrir, forçamos o fundo branco para garantir a leitura
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-brand-light text-brand-dark' : 'bg-white/20 text-white backdrop-blur-sm'
              }`}>
              <i className="fa-solid fa-leaf"></i>
            </div>
            <span className={`font-extrabold text-2xl tracking-tight transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'
              }`}>
              Vivere
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#sobre" className={`font-semibold transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-brand-dark' : 'text-white/80 hover:text-white'
              }`}>Sobre</a>

            <a href="#servicos" className={`font-semibold transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-brand-dark' : 'text-white/80 hover:text-white'
              }`}>Serviços</a>

            <a href="#localizacao" className={`font-semibold transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-brand-dark' : 'text-white/80 hover:text-white'
              }`}>Localização</a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5 ${isScrolled
                ? 'bg-brand-dark text-brand-light hover:bg-brand-accent hover:shadow-xl'
                : 'bg-white text-brand-dark hover:bg-brand-light hover:shadow-white/20'
              }`}>
              Agendar Horário
            </a>
          </div>

          {/* Botão Hambúrguer (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              // 3. Ao clicar, inverte o estado (de true para false e vice-versa)
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'
                }`}
            >
              {/* 4. Troca o ícone de barras para um "X" quando está aberto */}
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* 5. Painel do Menu Mobile (Drop-down) */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 border-t border-brand-light/30' : 'max-h-0'
          }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
          <a
            href="#sobre"
            onClick={() => setIsMobileMenuOpen(false)} // Fecha ao clicar
            className="block text-brand-dark font-semibold text-lg hover:text-brand-accent"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-brand-dark font-semibold text-lg hover:text-brand-accent"
          >
            Serviços
          </a>
          <a
            href="#localizacao"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-brand-dark font-semibold text-lg hover:text-brand-accent"
          >
            Localização
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 bg-brand-dark text-brand-light px-8 py-3 rounded-full font-bold shadow-lg w-full text-center"
          >
            Agendar Horário <i className="fa-brands fa-whatsapp ml-2"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}