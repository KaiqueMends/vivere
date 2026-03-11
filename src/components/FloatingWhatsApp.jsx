import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll da página para mostrar/esconder o botão
  useEffect(() => {
    const handleScroll = () => {
      // Se rolar mais de 300 pixels para baixo, o botão aparece
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "5575982523752"; 
  const message = "Olá! Estava no site da Vivere e gostaria de agendar um horário para o meu pet.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end group transition-all duration-500 transform ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      
      {/* Tooltip (Balão de mensagem) */}
      <div className="mb-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-brand-dark px-4 py-2 rounded-2xl shadow-xl font-bold text-sm whitespace-nowrap pointer-events-none transform origin-bottom-right scale-95 group-hover:scale-100 hidden md:block">
        Fale com a gente! 🐾
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 rounded-sm"></div>
      </div>

      {/* Botão Principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_15px_30px_rgba(37,211,102,0.6)] transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping -z-10"></span>
        <i className="fa-brands fa-whatsapp text-3xl md:text-4xl"></i>
      </a>
      
    </div>
  );
}