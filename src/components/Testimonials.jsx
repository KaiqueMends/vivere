import { motion } from 'framer-motion';

export default function Testimonials() {
    // Array original de depoimentos
    const testimonials = [
        {
            name: "Mariana Silva",
            pet: "Mãe do Thor (Golden)",
            text: "O melhor SPA da cidade! O Thor volta para casa cheiroso, relaxado e super feliz. A equipe é maravilhosa e muito atenciosa com ele."
        },
        {
            name: "Carlos Mendes",
            pet: "Pai da Luna (Shih Tzu)",
            text: "Confiança total. Deixo a Luna na creche todos os dias e sei que ela está sendo cuidada com muito amor, socializando com outros pets em segurança."
        },
        {
            name: "Amanda Costa",
            pet: "Mãe do Bob (Bulldog)",
            text: "A estrutura é impecável. O banho de ofurô fez milagres pelo estresse do Bob. Ele adora a visita semanal ao SPA. Recomendo de olhos fechados!"
        },
        {
            name: "Rafael Souza",
            pet: "Pai da Mia (Gata Persa)",
            text: "O cuidado do corpo veterinário é excepcional. Muito atenciosos, prestativos e sempre prontos para tirar todas as dúvidas. Nota 10!"
        },
        {
            name: "Juliana Freitas",
            pet: "Mãe da Mel (Poodle)",
            text: "A tosa na tesoura é perfeita! Fiquei impressionada com o carinho que tiveram com a Mel, que costuma ser bem medrosa. Ganharam uma cliente fiel."
        }
    ];

    // Duplicamos o array para criar o efeito de "rolagem infinita" sem quebras
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="depoimentos" className="py-24 overflow-hidden relative w-full">

            {/* Estilo CSS embutido para a animação contínua */}
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          /* Pausa a animação quando o usuário passa o mouse por cima */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
            </style>

            {/* Cabeçalho da Seção */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center mb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <h2 className="text-3xl font-extrabold text-brand-dark sm:text-5xl tracking-tight mb-4">
                    O que dizem sobre nós
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    O amor e a confiança dos nossos clientes (e de seus humanos) são a nossa maior recompensa.
                </p>
            </motion.div>

            {/* Container do Carrossel Infinito */}
            <div className="relative flex overflow-x-hidden group">

                {/* Sombras laterais (Gradientes) para dar o efeito de que os cards estão surgindo e sumindo suavemente */}
                <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Trilha que se movimenta */}
                <div className="flex animate-marquee gap-6 md:gap-8 px-4 w-max">
                    {duplicatedTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-[300px] md:w-[400px] bg-brand-bg rounded-[30px] p-8 shadow-sm border border-brand-light/30 shrink-0 relative hover:-translate-y-2 transition-transform duration-300 cursor-grab active:cursor-grabbing"
                        >
                            {/* Ícone de Aspas decorativo no fundo */}
                            <i className="fa-solid fa-quote-right absolute top-6 right-8 text-6xl text-brand-light/20 z-0"></i>

                            <div className="relative z-10">
                                {/* Estrelas */}
                                <div className="flex gap-1 text-brand-accent mb-6 text-sm">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>

                                {/* Texto do Depoimento */}
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                                    "{item.text}"
                                </p>

                                {/* Autor */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-dark font-bold text-xl">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-dark">{item.name}</h4>
                                        <p className="text-sm text-gray-500">{item.pet}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}