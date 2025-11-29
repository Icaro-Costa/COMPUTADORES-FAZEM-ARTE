"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function About() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <section className="py-20 px-4 bg-zinc-900/50 relative overflow-hidden">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        A Ciência do <span className="text-secondary">Mangue</span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Neste curso, exploramos como a tecnologia pode ser uma ferramenta de expressão para a cultura local.
                        Inspirados pelo manifesto Manguebeat, conectamos as raízes do Recife com as antenas do mundo.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        "Computadores fazem arte, artistas fazem dinheiro." A frase icônica de Chico Science guia nossa jornada
                        de descoberta, onde o pixel encontra a lama e o algoritmo encontra o maracatu.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative border-2 border-primary/30 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => setIsLightboxOpen(true)}
                >
                    <Image
                        src="/Foto-Da-Turma.jpg"
                        alt="Foto da Turma MangueBit"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="transition-transform duration-500 group-hover:scale-105"
                    />

                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsLightboxOpen(false)}
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
                                src="/Foto-Da-Turma.jpg"
                                alt="Foto da Turma Fullscreen"
                                fill
                                className="object-contain"
                            />
                            <button
                                onClick={() => setIsLightboxOpen(false)}
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
