import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { icon: 'fa-user-doctor', title: 'Consultório', desc: 'Atendimento clínico especializado, vacinas e exames de rotina com todo o cuidado.' },
    { icon: 'fa-paw', title: 'Creche', desc: 'Ambiente seguro e divertido para socialização e gasto de energia.' },
    { icon: 'fa-shower', title: 'Banho & Tosa', desc: 'Estética animal com produtos premium e profissionais capacitados.' },
    { icon: 'fa-spa', title: 'SPA', desc: 'Terapias relaxantes, ofurô e cuidados especiais para aliviar o estresse.' }
  ];

  return (
    // Removi a cor de fundo daqui porque o cartão branco lá do App.jsx já cuida disso
    <section id="servicos" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* 1. Animação do Título (Sobe suavemente) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-extrabold text-brand-dark sm:text-5xl tracking-tight">
          Tudo que seu pet precisa
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Nossos serviços são pensados para o bem-estar físico e mental do seu companheiro.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          /* 2. Animação dos Cartões em Cascata */
          <motion.div
            key={index}
            // Começa invisível e 50px mais para baixo
            initial={{ opacity: 0, y: 50 }}
            // Vai para opacidade 100% e posição original quando entra na tela
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }} garante que a animação só rode a primeira vez que o usuário descer
            viewport={{ once: true, margin: "-50px" }}
            // O truque da cascata: o delay multiplica o índice, então o 1º não tem delay, o 2º tem 0.15s, o 3º 0.30s...
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}

            className="bg-brand-bg rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 border border-brand-light/50 hover:shadow-2xl hover:shadow-brand-light/40 group flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <div className="w-16 h-16 bg-brand-light text-brand-dark rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
              <i className={`fa-solid ${service.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}