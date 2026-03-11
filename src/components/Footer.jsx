export default function Footer() {
  const phoneNumber = "5575982523752"; 
  const message = "Olá! Estava no site da Vivere e gostaria de agendar um horário para o meu pet.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // O background e as bordas arredondadas já estão sendo controlados pelo App.jsx
    <footer className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        {/* Coluna 1: Marca e Sobre */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-dark font-bold text-xl">
              <i className="fa-solid fa-leaf"></i>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">
              Vivere
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            Muito mais que um petshop. Um SPA completo focado no bem-estar físico e emocional do seu melhor amigo, com um olhar veterinário em cada detalhe.
          </p>
          {/* Redes Sociais */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 transform hover:scale-110">
              <i className="fa-brands fa-instagram text-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 transform hover:scale-110">
              <i className="fa-brands fa-facebook-f text-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 transform hover:scale-110">
              <i className="fa-brands fa-tiktok text-lg"></i>
            </a>
          </div>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h4 className="text-brand-light font-bold tracking-widest uppercase text-sm mb-6">Navegação</h4>
          <ul className="space-y-4">
            <li><a href="#sobre" className="text-white/70 hover:text-brand-light transition-colors text-sm">Sobre a Vivere</a></li>
            <li><a href="#servicos" className="text-white/70 hover:text-brand-light transition-colors text-sm">Nossos Serviços</a></li>
            <li><a href="#galeria" className="text-white/70 hover:text-brand-light transition-colors text-sm">Galeria de Fotos</a></li>
            <li><a href="#depoimentos" className="text-white/70 hover:text-brand-light transition-colors text-sm">Depoimentos</a></li>
            <li><a href="#faq" className="text-white/70 hover:text-brand-light transition-colors text-sm">Dúvidas Frequentes</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h4 className="text-brand-light font-bold tracking-widest uppercase text-sm mb-6">Contato</h4>
          <ul className="space-y-4">
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-brand-light transition-colors text-sm group">
                <i className="fa-brands fa-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
                (75) 98252-3752
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/70 text-sm">
              <i className="fa-solid fa-envelope text-lg mt-0.5"></i>
              contato@viverepet.com.br
            </li>
            <li className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
              <i className="fa-solid fa-location-dot text-lg mt-0.5"></i>
              R. Miranda, 566 - Mangabeira<br />Feira de Santana - BA
            </li>
          </ul>
        </div>

        {/* Coluna 4: Horário e CTA */}
        <div>
          <h4 className="text-brand-light font-bold tracking-widest uppercase text-sm mb-6">Funcionamento</h4>
          <ul className="space-y-2 mb-8 text-sm text-white/70">
            <li className="flex justify-between"><span>Seg - Sex:</span> <span>08:00 - 18:00</span></li>
            <li className="flex justify-between"><span>Sábados:</span> <span>08:00 - 14:00</span></li>
            <li className="flex justify-between text-brand-light/70 mt-2"><span>Domingos/Feriados:</span> <span>Fechado</span></li>
          </ul>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full inline-flex justify-center items-center gap-2 bg-brand-light text-brand-dark px-6 py-3 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-lg"
          >
            Agendar Agora <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

      </div>

      {/* Linha Divisória */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/50 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} Vivere Pet Care & SPA. Todos os direitos reservados.
        </p>
        
        {/* Crédito do Desenvolvedor */}
        <p href="https://instagram.com/k.cmendes" className="text-white/50 text-xs flex items-center gap-1">
          Desenvolvido com <i className="fa-solid fa-heart text-brand-light text-[10px] animate-pulse"></i> por <a href="https://instagram.com/k.cmendes" className="text-brand-light hover:text-white font-semibold transition-colors">Kaique Mendes</a>
        </p>
      </div>
    </footer>
  );
}