export default function Hero() {
  return (
    <section id="sobre" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 text-center lg:text-left z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-light/50 text-brand-dark font-bold text-sm mb-4 border border-brand-light">
              <i className="fa-solid fa-paw mr-2"></i>Pet Care & SPA
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
              Cuidar hoje para viver melhor <span className="text-brand-accent">amanhã</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Olhar veterinário em cada momento. Proporcionamos saúde, estética e bem-estar em um ambiente preparado para o conforto do seu melhor amigo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#agendar" className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent transition shadow-xl flex items-center justify-center gap-2">
                Falar no WhatsApp <i className="fa-brands fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
             <div className="relative w-full aspect-square bg-brand-light rounded-[40%_60%_70%_30%/40%_50%_60%_50%] p-2 shadow-2xl overflow-hidden flex items-center justify-center border-4 border-white transition-all duration-700 hover:rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cachorro feliz" className="w-full h-full object-cover opacity-90 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}