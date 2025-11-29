"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
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
                    className="relative border-2 border-primary/30 rounded-lg overflow-hidden"
                >
                    <Image
                        src="/Foto-Da-Turma.jpg"
                        alt="Foto da Turma MangueBit"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />

                </motion.div>
            </div>
        </section>
    );
}
