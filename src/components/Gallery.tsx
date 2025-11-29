"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const artworks = [
    {
        id: 1,
        title: "O Mar",
        artist: "Icaro - Costa",
        description: "Uma releitura do Mar com traços de mórbidos.",
        color: "bg-primary",
        image: "/Artista01.png",
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
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                            className={`group relative aspect-square overflow-hidden border-2 border-zinc-800 hover:border-primary transition-colors ${art.image ? 'cursor-pointer' : ''}`}
                            onClick={() => art.image && setSelectedImage(art.image)}
                        >
                            {/* Image or Placeholder */}
                            {art.image ? (
                                <Image
                                    src={art.image}
                                    alt={art.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className={`w-full h-full ${art.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                            )}

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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative w-full max-w-5xl h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Artwork Fullscreen"
                                fill
                                className="object-contain"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
