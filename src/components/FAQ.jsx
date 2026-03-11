import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  // Estado para controlar qual pergunta está aberta (começa com nenhuma: null)
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quais vacinas meu pet precisa ter para frequentar a Vivere?",
      answer: "Para a segurança de todos os nossos hóspedes, exigimos a apresentação da carteirinha com as vacinas V8 ou V10, Raiva, Gripe e Giárdia atualizadas. O controle de pulgas e carrapatos também deve estar rigorosamente em dia."
    },
    {
      question: "Vocês atendem pets idosos, medrosos ou com necessidades especiais?",
      answer: "Com certeza! Nosso conceito de Pet Care e SPA foi criado exatamente para oferecer um cuidado sem pressa e focado no bem-estar. Nossa equipe veterinária adapta todo o manuseio para respeitar o tempo e as limitações do seu melhor amigo."
    },
    {
      question: "Preciso agendar o banho ou SPA com antecedência?",
      answer: "Sim. Como trabalhamos com horários exclusivos para evitar estresse e superlotação, recomendamos que o agendamento seja feito previamente pelo nosso WhatsApp."
    },
    {
      question: "Posso acompanhar os procedimentos estéticos do meu pet?",
      answer: "Totalmente! Nossa estrutura foi desenhada com visores de vidro (conceito open view). Você é muito bem-vindo para tomar um café conosco enquanto acompanha todo o carinho e transparência do nosso atendimento."
    }
  ];

  const toggleFAQ = (index) => {
    // Se clicar na mesma pergunta que já está aberta, ela fecha. Se clicar em outra, abre a nova.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-extrabold text-brand-dark sm:text-5xl tracking-tight mb-4">
          Dúvidas Frequentes
        </h2>
        <p className="text-lg text-gray-500">
          Tudo o que você precisa saber antes de nos fazer uma visita.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-brand-light/40 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
            >
              <span className={`font-bold text-lg transition-colors duration-300 ${openIndex === index ? 'text-brand-accent' : 'text-brand-dark'}`}>
                {faq.question}
              </span>
              <span className="ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-bg text-brand-dark">
                {/* Ícone que gira quando aberto */}
                <motion.i 
                  className="fa-solid fa-chevron-down"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-brand-light/20 mx-6">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    </section>
  );
}