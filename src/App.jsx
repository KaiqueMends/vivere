import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-brand-dark text-gray-800 font-sans antialiased overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* 1. HERO CONGELADA (Fundo) */}
      {/* Usamos 'fixed' em vez de 'sticky'. Ela fica colada na tela o tempo todo, na camada 0. */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </div>

      {/* 2. CONTEÚDO QUE ROLA (Frente) */}
      {/* O 'mt-[100vh]' empurra todo esse bloco exatamente 1 tela inteira para baixo. 
          Quando você rolar o mouse, esta camada (z-10) vai deslizar por cima da Hero congelada. */}
      <main className="relative z-10 flex flex-col mt-[100vh]">

        {/* SERVICES - Cartão Branco */}
        <div className="relative w-full bg-white rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-30px_60px_rgba(0,0,0,0.8)] overflow-hidden pb-12 pt-8">
          <Services />
        </div>

        {/* LOCATION - Cartão Verde (Desliza sobre o Services) */}
        <div className="relative z-20 w-full bg-brand-bg rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] -mt-16 overflow-hidden pb-12 pt-8">
          <Location />
        </div>

        {/* FOOTER - Cartão Escuro Final */}
        <div className="relative z-30 w-full bg-brand-dark rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] -mt-16 overflow-hidden">
          <Footer />
        </div>

      </main>
    </div>
  )
}

export default App