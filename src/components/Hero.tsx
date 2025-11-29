"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-[120px]" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            <div className="z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 tracking-widest uppercase">
                        Do Mangue ao Mundo
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <h1
                        className="text-5xl md:text-8xl font-black mb-6 tracking-tighter glitch"
                        data-text="COMPUTADORES FAZEM ARTE"
                    >
                        COMPUTADORES
                        <br />
                        FAZEM ARTE
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    Uma exposição digital das obras criadas no curso de desenho.
                    Misturando a estética do Recife, a vibração do Manguebeat e a precisão dos algoritmos.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-none border-2 border-transparent hover:border-white transition-all transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                        EXPLORAR A GALERIA
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="w-8 h-8 text-primary" />
            </motion.div>
        </section>
    );
}
