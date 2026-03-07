import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-brand-bg text-gray-800 font-sans antialiased overflow-x-hidden scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App