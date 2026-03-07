export default function Services() {
  const services = [
    { icon: 'fa-user-doctor', title: 'Consultório', desc: 'Atendimento clínico especializado, vacinas e exames de rotina com todo o cuidado.' },
    { icon: 'fa-paw', title: 'Creche', desc: 'Ambiente seguro e divertido para socialização e gasto de energia.' },
    { icon: 'fa-shower', title: 'Banho & Tosa', desc: 'Estética animal com produtos premium e profissionais capacitados.' },
    { icon: 'fa-spa', title: 'SPA', desc: 'Terapias relaxantes, ofurô e cuidados especiais para aliviar o estresse.' }
  ];

  return (
    <section id="servicos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Tudo que seu pet precisa</h2>
          <p className="mt-4 text-lg text-gray-500">Nossos serviços são pensados para o bem-estar físico e mental do seu companheiro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-bg rounded-3xl p-8 hover:-translate-y-2 transition duration-300 border border-brand-light/50 hover:shadow-2xl hover:shadow-brand-light/40 group">
              <div className="w-16 h-16 bg-brand-light text-brand-dark rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}