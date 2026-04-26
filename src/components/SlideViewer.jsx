import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, TrendingDown, TrendingUp, CheckCircle2, Rocket, Zap, FileText, Clock, ClipboardCheck, Bug, AlertCircle, Shield as ShieldIcon } from 'lucide-react';

const DonutChart = ({ percentage, color, label, sublabel }) => {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                    <motion.circle
                        cx="50" cy="50" r={radius} stroke={color} strokeWidth="6" fill="transparent"
                        strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }} transition={{ duration: 2, ease: "easeOut" }} strokeLinecap="round"
                    />
                </svg>
                <span className="absolute text-sm font-bold text-white">{percentage}%</span>
            </div>
            <div className="mt-2 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">{label}</p>
                <p className="text-[8px] text-gray-500 uppercase">{sublabel}</p>
            </div>
        </div>
    );
};

const EthosLogo = ({ className = "w-12 h-12" }) => (
    <div className={`${className} relative flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
                <linearGradient id="lilaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#D8B4FE" />
                </linearGradient>
            </defs>
            <path d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 L50 5Z" fill="url(#lilaGrad)" />
            <path d="M50 15 L82 33 V67 L50 85 L18 67 V33 L50 15Z" fill="black" opacity="0.2" />
        </svg>
    </div>
);

const slideVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.4, ease: "easeIn" } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
};

export const SlideViewer = ({ slides, activeSprint }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setCurrentSlide(0);
    }, [slides]);

    if (!slides || slides.length === 0) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-10">
                <div className="absolute top-8 right-10 z-50">
                    <EthosLogo className="w-10 h-10" />
                </div>
                <h2 className="text-2xl text-gray-500 font-light tracking-widest uppercase mb-4">Sprint {activeSprint}</h2>
                <p className="text-sm text-gray-600 uppercase tracking-widest">En construcción...</p>
            </div>
        );
    }

    const slide = slides[currentSlide];

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    // CORRECCIÓN PASO 2: Permitir scroll, barra personalizada y ajuste de alineación
                    className="w-full h-full relative p-10 md:p-16 flex flex-col justify-start md:justify-center items-center overflow-y-auto custom-scrollbar pb-32"
                >
                    {currentSlide !== 0 && (
                        <div className="absolute top-8 right-10 z-50 flex items-center gap-6">
                            <div className="text-right hidden md:block">
                                <p className="text-[9px] tracking-[0.3em] text-violet-400 uppercase font-bold">EthosHub / Sprint {activeSprint}</p>
                                <p className="text-[8px] tracking-[0.2em] text-gray-500 uppercase">Presentación Técnica</p>
                            </div>
                            <EthosLogo className="w-10 h-10" />
                        </div>
                    )}

                    {slide.id === 'portada' && (
                        <div className="flex flex-col items-center text-center py-10 md:py-0">
                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-10"><EthosLogo className="w-24 h-24 mx-auto" /></motion.div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                                {slide.title.split(" ").map((w, i) => <span key={i} className={w.includes("Sprint") || w.includes("Review") ? "text-[#8B5CF6] violet-pulse" : ""}>{w} </span>)}
                            </h1>
                            <p className="text-xl font-light text-[#B7F4FF] tracking-[0.3em] uppercase mb-24 opacity-60">{slide.subtitle}</p>
                            <div className="w-full max-w-4xl flex justify-between items-end border-t border-white/5 pt-8 text-[9px] tracking-[0.4em] uppercase text-gray-600 font-bold mt-auto md:mt-0">
                                <div className="flex flex-col gap-1 text-left"><span>Entidad</span><span className="text-white/40">{slide.footerLeft}</span></div>
                                <div className="flex flex-col gap-1 text-right"><span>Liderazgo</span><span className="text-[#8B5CF6]">{slide.footerRight}</span></div>
                            </div>
                        </div>
                    )}

                    {slide.id === 'objetivo' && (
                        <div className="max-w-6xl mx-auto w-full py-10 md:py-0">
                            <div className="mb-12 border-l-4 border-[#8B5CF6] pl-8 text-left">
                                <h2 className="text-xs font-bold text-[#8B5CF6] tracking-[0.5em] uppercase mb-4">{slide.epicId} / Módulo Core</h2>
                                <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                                <p className="text-lg text-white/80 max-w-3xl leading-relaxed font-light">{slide.lead}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                {slide.pillars.map((p, i) => (
                                    <motion.div variants={itemVariants} transition={{ delay: i * 0.1 }} key={i} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl group hover:bg-violet-600/5 transition-all text-left">
                                        <div className="text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform">{p.icon}</div>
                                        <h4 className="font-bold text-[10px] tracking-widest uppercase mb-2 text-[#B7F4FF]">{p.label}</h4>
                                        <p className="text-[11px] text-gray-500 leading-snug">{p.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {(['semana1', 'semana2', 'sprint3_sem1', 'sprint3_sem2'].includes(slide.id)) && (
                        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 items-center py-10 md:py-0 text-left">
                            <div className="md:col-span-5">
                                <div className="mb-10">
                                    <span className={`text-[9px] font-bold tracking-[0.4em] uppercase ${slide.id.includes('sprint3') ? 'text-[#B7F4FF]' : 'text-violet-500'}`}>
                                        {slide.period}
                                    </span>
                                    <h2 className="text-4xl font-bold mt-2 mb-6">{slide.title}</h2>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">{slide.context}</p>
                                </div>
                            </div>
                            <div className="md:col-span-7 space-y-4">
                                {slide.items.map((item, i) => (
                                    <motion.div variants={itemVariants} transition={{ delay: i * 0.1 }} key={i} className="flex gap-6 items-center p-5 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-violet-500/30 transition-all">
                                        <div className={`p-3 rounded-2xl ${slide.id.includes('sprint3') ? 'bg-[#B7F4FF]/10 text-[#B7F4FF]' : 'bg-violet-600/10 text-[#8B5CF6]'}`}>{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-xs uppercase text-white/90 mb-1">{item.title}</h4>
                                            <p className="text-xs text-gray-500 font-light">{item.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {slide.id === 'metricas_graficos' && (
                        <div className="max-w-6xl mx-auto w-full py-10 md:py-0 text-left">
                            <h2 className="text-4xl font-bold mb-8">{slide.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                                {['burndown', 'burnup'].map((type, i) => (
                                    <motion.div variants={itemVariants} transition={{ delay: i * 0.2 }} key={i} className="bg-white/[0.02] p-8 rounded-[40px] border border-white/5 relative group overflow-hidden flex flex-col">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                            {type === 'burndown' ? <TrendingDown size={32} className="text-red-400" /> : <TrendingUp size={32} className="text-green-400" />}
                                        </div>
                                        <h3 className={`text-[10px] uppercase font-bold mb-6 ${type === 'burndown' ? 'text-[#8B5CF6]' : 'text-[#B7F4FF]'}`}>
                                            {type.toUpperCase()} CHART
                                        </h3>
                                        <div className="h-40 w-full relative pt-2 pr-2">
                                            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                <line x1="0" y1="0" x2="0" y2="100" stroke="#333" strokeWidth="0.5" />
                                                <line x1="0" y1="100" x2="100" y2="100" stroke="#333" strokeWidth="0.5" />
                                                <line x1="0" y1={type === 'burndown' ? '0' : '100'} x2="100" y2={type === 'burndown' ? '100' : '0'} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4" />
                                                <motion.path
                                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
                                                    d={`M 0 ${type === 'burndown' ? '0' : '100'} ${slide[type].map((v, idx) => `L ${(idx * 100) / 10} ${100 - (v * 100) / 46}`).join(' ')}`}
                                                    fill="none" stroke={type === 'burndown' ? '#8B5CF6' : '#B7F4FF'} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4"
                                                />
                                                {slide[type].map((v, idx) => (
                                                    <motion.circle
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 1 + (idx * 0.1) }}
                                                        cx={(idx * 100) / 10} cy={100 - (v * 100) / 46} r="2.5"
                                                        fill={type === 'burndown' ? '#8B5CF6' : '#B7F4FF'}
                                                        style={{ filter: `drop-shadow(0 0 6px ${type === 'burndown' ? '#8B5CF6' : '#B7F4FF'})` }}
                                                    />
                                                ))}
                                            </svg>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            {slide.analysis && (
                                <motion.div variants={itemVariants} transition={{ delay: 0.5 }} className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {slide.analysis.map((item, idx) => (
                                        <div key={idx}>
                                            <h4 className={`text-[10px] ${item.colorClass} font-bold uppercase tracking-widest mb-2 flex items-center gap-2`}>
                                                {item.icon} {item.title}
                                            </h4>
                                            <p className="text-xs text-gray-400 leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    )}

                    {slide.id === 'metricas_exito' && (
                        <div className="max-w-6xl mx-auto w-full py-10 md:py-0 text-left">
                            <h2 className="text-4xl font-bold mb-10">{slide.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
                                {slide.stats.map((s, i) => (
                                    <motion.div variants={itemVariants} transition={{ delay: i * 0.1 }} key={i} className="p-6 bg-white/[0.03] border border-white/5 rounded-[32px] text-center group hover:bg-white/[0.05] transition-all">
                                        <div className="mx-auto mb-4 p-3 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">{s.icon}</div>
                                        <h4 className="text-[8px] uppercase tracking-[0.4em] text-gray-600 mb-2 font-bold">{s.label}</h4>
                                        <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
                                        <p className="text-[9px] text-gray-500 uppercase">{s.sub}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div variants={itemVariants} transition={{ delay: 0.5 }} className="bg-violet-950/10 border border-violet-500/20 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#8B5CF6] mb-2 flex items-center gap-2"><Rocket size={14} /> Factores de Rendimiento</h4>
                                    {slide.highlights.map((h, i) => (
                                        <p key={i} className="text-xs text-gray-400 leading-relaxed flex gap-3"><span className="text-violet-500">•</span> {h}</p>
                                    ))}
                                </div>
                                <div className="flex justify-center"><DonutChart percentage={100} color="#8B5CF6" label="Velocity Rate" sublabel={`Final Sprint ${activeSprint}`} /></div>
                            </motion.div>
                        </div>
                    )}

                    {slide.id === 'calidad' && (
                        <div className="max-w-5xl mx-auto w-full py-10 md:py-0 text-left">
                            <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                            <p className="text-sm text-gray-500 font-light italic mb-12">{slide.lead}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {slide.charts.map((c, i) => (
                                    <motion.div variants={itemVariants} transition={{ delay: i * 0.15 }} key={i} className="bg-white/[0.03] border border-white/5 rounded-[40px] p-6 flex flex-col items-center">
                                        <DonutChart percentage={c.percentage} color={c.color} label={c.label} sublabel={c.sublabel} />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="grid gap-4">
                                {slide.validations.map((v, i) => (
                                    <motion.div variants={itemVariants} transition={{ delay: 0.4 + (i * 0.1) }} key={i} className="flex justify-between items-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                                        <div className="flex items-center gap-6">
                                            <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center text-[#8B5CF6]"><CheckCircle2 size={18} /></div>
                                            <div><h4 className="font-bold text-xs uppercase text-white/90 tracking-widest">{v.item}</h4><p className="text-[10px] text-gray-600 mt-1">{v.detail}</p></div>
                                        </div>
                                        <div className="px-5 py-1.5 rounded-full border border-green-500/30 text-green-400 text-[8px] font-bold uppercase">Aprobado</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {slide.id === 'stack_tecnologico' && (
                        <div className="max-w-6xl mx-auto w-full py-10 md:py-0">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                                <p className="text-[#B7F4FF] tracking-[0.2em] uppercase text-sm">{slide.subtitle}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {slide.categories.map((cat, i) => (
                                    <motion.div variants={itemVariants} transition={{ delay: i * 0.15 }} key={i} className="stack-card flex flex-col items-center text-center">
                                        {cat.icon}
                                        <h3 className="text-lg font-bold mb-6 tracking-widest uppercase text-white/90">{cat.name}</h3>
                                        <ul className="w-full space-y-3">
                                            {cat.items.map((item, j) => (
                                                <li key={j} className="text-sm text-gray-400 bg-white/[0.02] py-2 px-4 rounded-lg border border-white/5">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                </motion.div>
            </AnimatePresence>

            {/* CORRECCIÓN PASO 2: Botones de navegación en posición FIXED */}
            <div className="fixed bottom-10 right-10 flex gap-4 z-[100]">
                <button disabled={currentSlide === 0} onClick={() => setCurrentSlide(p => p - 1)} className="p-4 border border-white/10 rounded-full hover:bg-white/5 disabled:opacity-20 transition-all active:scale-95 bg-black/20 backdrop-blur-sm"><ChevronLeft size={20} /></button>
                <button disabled={currentSlide === slides.length - 1} onClick={() => setCurrentSlide(p => p + 1)} className="p-4 bg-[#8B5CF6] rounded-full hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] disabled:opacity-20 transition-all active:scale-95"><ChevronRight size={20} /></button>
            </div>

            {/* CORRECCIÓN PASO 2: Barra de progreso en posición FIXED */}
            <div className="fixed bottom-0 left-0 w-full h-[1px] bg-white/5 z-[100]">
                <motion.div className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#B7F4FF] to-[#8B5CF6]" animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} transition={{ duration: 0.5 }} />
            </div>
        </>
    );
};