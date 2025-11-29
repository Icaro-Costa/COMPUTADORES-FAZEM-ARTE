"use client";

import { motion } from "framer-motion";

const artworks = [
    {
        id: 1,
        title: "Caranguejo Cibernético",
        artist: "Artista 01",
        description: "Uma releitura do símbolo do manguebeat com traços de circuito impresso.",
        color: "bg-primary",
    },
    {
        id: 2,
        title: "Recife Glitch",
        artist: "Artista 02",
        description: "As pontes do Recife distorcidas por erros digitais.",
        color: "bg-secondary",
    },
    {
        id: 3,
        title: "Maracatu Vetorial",
        artist: "Artista 03",
        description: "A geometria sagrada dos tambores de maracatu.",
        color: "bg-accent",
    },
    {
        id: 4,
        title: "Lama.exe",
        artist: "Artista 04",
        description: "Texturas orgânicas geradas por código.",
        color: "bg-mud",
    },
    {
        id: 5,
        title: "Sol da Meia-Noite",
        artist: "Artista 05",
        description: "O calor do nordeste em neon.",
        color: "bg-orange-600",
    },
    {
        id: 6,
        title: "Antena da Lama",
        artist: "Artista 06",
        description: "Conectando a periferia ao mundo digital.",
        color: "bg-purple-600",
    },
];

export default function Gallery() {
    return (
        <section className="py-20 px-4 bg-background relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary uppercase"
                >
                    Galeria Digital
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artworks.map((art, index) => (
                        <motion.div
                            key={art.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-square overflow-hidden border-2 border-zinc-800 hover:border-primary transition-colors"
                        >
                            {/* Placeholder for Image */}
                            <div className={`w-full h-full ${art.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-1">{art.title}</h3>
                                <p className="text-sm text-primary font-mono mb-2">{art.artist}</p>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {art.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
