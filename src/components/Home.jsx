import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ChevronRight, Shield } from 'lucide-react';

const EthosLogoLarge = () => (
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-32 h-32 md:w-48 md:h-48"
    >
        <div className="absolute inset-0 bg-violet-600/30 blur-[60px] rounded-full animate-pulse" />
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 filter drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
            <defs>
                <linearGradient id="homeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#B7F4FF" />
                </linearGradient>
            </defs>
            <path d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 L50 5Z" fill="url(#homeGrad)" />
            <path d="M50 15 L82 33 V67 L50 85 L18 67 V33 L50 15Z" fill="black" opacity="0.3" />
        </svg>
    </motion.div>
);

export const Home = ({ onStart }) => {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black px-6">
            {/* Fondo Animado de Partículas / Red */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-900/20 blur-[120px] rounded-full animate-bounce" style={{ animationDuration: '15s' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
                <EthosLogoLarge />

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-12"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        EthosHub <span className="text-[#8B5CF6]">Project</span>
                    </h1>
                    <p className="text-sm md:text-lg text-gray-400 font-light tracking-[0.4em] uppercase mb-12">
                        Plataforma de Portafolios y Validación Profesional
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col md:flex-row gap-6 items-center"
                >
                    <button
                        onClick={onStart}
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10 uppercase text-xs tracking-widest">Explorar Sprints</span>
                        <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3 px-6 py-4 border border-white/10 rounded-2xl backdrop-blur-md bg-white/5">
                        <Shield className="w-4 h-4 text-[#B7F4FF]" />
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Byte Busters S.R.L. © 2026</span>
                    </div>
                </motion.div>
            </div>

            {/* Decoración Inferior */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-violet-500 to-transparent" />
                <span className="text-[8px] text-gray-600 uppercase tracking-[0.5em]">Desplácese para comenzar</span>
            </motion.div>
        </div>
    );
};