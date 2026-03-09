import { motion } from 'framer-motion';

export default function Location() {
  return (
    // Removi as cores de fundo fixas porque o cartão verde do App.jsx já cuida disso
    <section id="localizacao" className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

        {/* Esquerda: Informações (Desliza da Esquerda) */}
        <motion.div
          // x: -50 significa que começa 50 pixels escondido para a esquerda
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 lg:mb-0"
        >
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl md:text-5xl mb-6 tracking-tight">
            Venha nos visitar
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
            Nosso espaço foi cuidadosamente planejado para oferecer conforto e segurança em cada detalhe. Estamos esperando por você e seu pet!
          </p>

          <div className="space-y-8">
            {/* Endereço */}
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-dark shadow-md border border-brand-light/50 shrink-0 group-hover:scale-110 group-hover:bg-brand-light transition-all duration-300">
                <i className="fa-solid fa-location-dot text-2xl"></i>
              </div>
              <div>
                <h4 className="font-extrabold text-brand-dark text-lg mb-1">Endereço</h4>
                <p className="text-gray-600">R. Miranda, 566 - Mangabeira<br />Feira de Santana - BA, 44056-300</p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-dark shadow-md border border-brand-light/50 shrink-0 group-hover:scale-110 group-hover:bg-brand-light transition-all duration-300">
                <i className="fa-solid fa-clock text-2xl"></i>
              </div>
              <div>
                <h4 className="font-extrabold text-brand-dark text-lg mb-1">Horário de Funcionamento</h4>
                <p className="text-gray-600">Segunda a Sexta: 08h às 18h<br />Sábado: 08h às 14h</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Direita: Mapa (Desliza da Direita) */}
        <motion.div
          // x: 50 significa que começa 50 pixels escondido para a direita
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          // Adicionei um delay de 0.2s para que o mapa chegue uma fração de segundo depois do texto
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full h-[400px] lg:h-[500px] bg-gray-200 rounded-[30px] overflow-hidden shadow-2xl border-4 border-white relative group"
        >
          {/* Película verde bem sutil por cima do mapa que some ao passar o mouse */}
          <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.383319122682!2d-38.952417524025115!3d-12.222304545195877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714384c72b323b3%3A0x1766f9d01d6cd2a7!2sR.%20Miranda%2C%20566%20-%20Mangabeira%2C%20Feira%20de%20Santana%20-%20BA%2C%2044056-300!5e0!3m2!1spt-BR!2sbr!4v1772922581862!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Vivere Feira de Santana"
            className="relative z-0 grayscale-[20%] contrast-125"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}