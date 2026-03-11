import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="bg-brand-dark text-gray-800 font-sans antialiased overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* 1. HERO CONGELADA (Fundo) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </div>

      {/* 2. CONTEÚDO QUE ROLA (Frente) */}
      <main className="relative z-10 flex flex-col mt-[100vh]">

        {/* SERVICES - Cartão Branco */}
        <div className="relative w-full bg-white rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-30px_60px_rgba(0,0,0,0.8)] overflow-hidden pb-12 pt-8 z-10">
          <Services />
        </div>

        {/* GALLERY - Cartão Verde Claro */}
        <div className="relative w-full bg-brand-bg rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] -mt-16 overflow-hidden pb-12 pt-8 z-20">
          <Gallery />
        </div>

        {/* TESTIMONIALS - Cartão Branco de Novo (NOVA SEÇÃO) */}
        <div className="relative w-full bg-white rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] -mt-16 overflow-hidden pb-12 pt-8 z-30">
          <Testimonials />
        </div>

        {/* LOCATION - Cartão Verde Claro */}
        <div className="relative w-full bg-brand-bg rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] -mt-16 overflow-hidden pb-12 pt-8 z-40">
          <Location />
        </div>

        {/* FAQ - Cartão Branco */}
        <div className="relative w-full bg-white rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] -mt-16 overflow-hidden pb-12 pt-8 z-50">
          <FAQ />
        </div>

        {/* FOOTER - Cartão Escuro Final */}
        <div className="relative w-full bg-brand-dark shadow-[0_-20px_50px_rgba(0,0,0,0.3)] -mt-16 overflow-hidden z-50">
          <Footer />
        </div>

      </main>
      <FloatingWhatsApp />
    </div>
  )
}

export default App