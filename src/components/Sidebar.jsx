import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Sidebar = ({ isOpen, setIsOpen, activeSprint, setActiveSprint }) => {
    const sprints = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {/* CORRECCIÓN: Cambiado a 'fixed' para que el botón no desaparezca al hacer scroll */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-8 left-8 z-[150] flex items-center justify-center p-3 bg-white/5 hover:bg-violet-500/10 border border-white/10 rounded-xl transition-all backdrop-blur-md group"
            >
                <Menu className="w-5 h-5 text-[#B7F4FF] group-hover:text-white transition-colors" />
            </button>

            {/* Panel Desplegable */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        // CORRECCIÓN: Cambiado a 'fixed' para que cubra siempre el alto de la pantalla actual
                        className="fixed left-0 top-0 h-full w-72 bg-black/95 border-r border-violet-500/10 z-[200] backdrop-blur-3xl p-8 flex flex-col"
                    >
                        {/* Cabecera del Menú */}
                        <div className="flex justify-between items-center mb-10 flex-shrink-0">
                            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500">Navegación</h3>
                            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full text-white">
                                <X size={18} />
                            </button>
                        </div>

                        {/* CORRECCIÓN: Lista de Botones con scroll interno por si la lista crece */}
                        <div className="flex flex-col gap-3 overflow-y-auto custom-scrollbar pr-2">

                            {/* 1. Botón de Inicio / Home */}
                            <button
                                onClick={() => {
                                    setActiveSprint('home');
                                    setIsOpen(false);
                                }}
                                className={`text-left px-5 py-4 rounded-xl transition-all text-sm font-light mb-4 flex-shrink-0 ${activeSprint === 'home'
                                    ? 'bg-white/10 text-white border border-white/20 font-semibold'
                                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                Inicio / Bienvenida
                            </button>

                            <h3 className="text-[9px] font-bold tracking-[0.4em] uppercase text-gray-700 mb-2 px-5 flex-shrink-0">Sprints</h3>

                            {/* 2. Botones de los Sprints */}
                            {sprints.map((num) => (
                                <button
                                    key={num}
                                    onClick={() => {
                                        setActiveSprint(num);
                                        setIsOpen(false);
                                    }}
                                    className={`text-left px-5 py-4 rounded-xl transition-all text-sm font-light flex items-center justify-between flex-shrink-0 ${activeSprint === num
                                        ? 'bg-violet-600/20 text-[#8B5CF6] border border-violet-500/30 font-semibold'
                                        : 'text-gray-400 border border-transparent hover:bg-white/5 hover:text-white hover:border-white/10'
                                        }`}
                                >
                                    Diapositivas Sprint {num}
                                    {activeSprint === num && <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>}
                                </button>
                            ))}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};