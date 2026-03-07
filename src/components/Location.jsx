export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Informações de Contato e Endereço */}
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-6">Venha nos visitar</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nosso espaço foi cuidadosamente planejado para oferecer conforto e segurança em cada detalhe. Estamos esperando por você e seu pet!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-dark shadow-sm border border-brand-light shrink-0">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Endereço</h4>
                  <p className="text-gray-600">Rua Exemplo das Flores, 123 - Bairro Pet<br/>Cidade - Estado, 00000-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-dark shadow-sm border border-brand-light shrink-0">
                  <i className="fa-solid fa-clock text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 08h às 18h<br/>Sábado: 08h às 14h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa (Iframe do Google Maps Placeholder) */}
          <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197587029026!2d-46.65883202466981!3d-23.56133746158434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20S%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Vivere"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}