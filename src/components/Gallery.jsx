import { motion } from 'framer-motion';

export default function Gallery() {
    const photos = [
        {
            url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
            alt: "Cachorro relaxando pós-banho com toalha",
            className: "md:col-span-2 md:row-span-2" // Foto destaque (grande)
        },
        {
            url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
            alt: "Cães brincando na creche",
            className: "md:col-span-2 md:row-span-1" // Foto larga
        },
        {
            url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
            alt: "Cuidado veterinário",
            className: "md:col-span-1 md:row-span-1" // Foto quadrada
        },
        {
            url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
            alt: "Estética e tosa",
            className: "md:col-span-1 md:row-span-1" // Foto quadrada
        }
    ];

    return (
        <section id="galeria" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Cabeçalho da Galeria */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-extrabold text-brand-dark sm:text-5xl tracking-tight mb-4">
                    Conheça nosso espaço
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Uma estrutura premium desenhada em cada detalhe para o conforto e a segurança do seu melhor amigo.
                </p>
            </motion.div>

            {/* Grid de Fotos (Bento Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                        className={`relative overflow-hidden rounded-[24px] group shadow-md hover:shadow-xl transition-shadow ${photo.className}`}
                    >
                        {/* Overlay escuro que some ao passar o mouse */}
                        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>

                        <img
                            src={photo.url}
                            alt={photo.alt}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            draggable="false"
                        />
                    </motion.div>
                ))}
            </div>

        </section>
    );
}