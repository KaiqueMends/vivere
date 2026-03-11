const phoneNumber = "5575982523752"; 
const message = "Olá! Estava no site da Vivere e gostaria de agendar um horário para o meu pet.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function Hero() {
  return (
    <section
      id="sobre"
      // CORREÇÃO: Adicionado pt-28 para afastar o conteúdo do menu e min-h-[700px] para garantir espaço
      className="relative w-full h-screen min-h-[700px] bg-brand-dark flex flex-col items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* 1. TEXTO GIGANTE DE FUNDO */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
        <h1 className="text-[22vw] md:text-[16vw] font-black text-brand-light/10 leading-none tracking-tighter">
          Vivere
        </h1>
      </div>

      {/* 2. TEXTO PRINCIPAL E IMAGEM CENTRAL */}
      {/* CORREÇÃO: Removido o margin-top excessivo que estava empurrando o layout */}
      <div className="z-10 relative w-full flex flex-col items-center px-4 h-full justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-8 text-center tracking-tight drop-shadow-lg">
          Cuidar hoje para <br className="hidden md:block" /> viver melhor amanhã.
        </h2>

        {/* IMAGEM CENTRAL */}
        {/* CORREÇÃO: Tamanho máximo ajustado (max-w-xs no mobile, max-w-lg no desktop) para não quebrar a tela */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl transform hover:scale-105 transition-transform duration-700 ease-out mt-auto mb-auto">
          {/* Brilho atrás da imagem */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-light rounded-full mix-blend-overlay filter blur-[80px] opacity-30"></div>

          <img
            src="./dog.png"
            alt="Mascote Vivere"
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            draggable="false"
          />
        </div>
      </div>

      {/* 3. MICRORITMOS / METADADOS */}
      <div className="absolute bottom-6 left-4 md:bottom-12 md:left-12 flex flex-col z-20">
        <span className="text-brand-light text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-1">
          Pet Care & SPA
        </span>
        <span className="text-white/70 font-medium text-xs md:text-sm">
          Feira de Santana, BA
        </span>
      </div>

      <div className="absolute bottom-6 right-4 md:bottom-12 md:right-12 flex gap-4 md:gap-8 z-20">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-white font-bold text-xs md:text-sm tracking-widest uppercase transition-all"
        >
          <span className="bg-brand-light text-brand-dark w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <i className="fa-brands fa-whatsapp md:text-lg"></i>
          </span>
          <span  className="group-hover:text-brand-light transition-colors hidden sm:block">Agendar</span>
        </a>
      </div>
    </section>
  );
}