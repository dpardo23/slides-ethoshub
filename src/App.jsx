import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ChevronLeft, Sparkles, Send, Loader2, X,
  Target, Zap, Shield as ShieldIcon, BarChart3, Settings,
  Calendar, CheckCircle2, AlertCircle, TrendingDown, TrendingUp,
  Clock, Users, FileText, Rocket, Cpu, Award, Search, Info, Bug, ClipboardCheck, ArrowUpRight,
  Code2, Database, Layout, Server, Activity, Users2
} from 'lucide-react';

const apiKey = "";

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;800&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      background-color: #000000;
      font-family: 'Sora', sans-serif;
      overflow: hidden;
      color: white;
    }

    .glow-cyan { box-shadow: 0 0 20px rgba(183, 244, 255, 0.2); }
    .glow-violet { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
    
    .violet-pulse {
      animation: pulse-glow 4s infinite ease-in-out;
    }

    @keyframes pulse-glow {
      0%, 100% { text-shadow: 0 0 10px rgba(139, 92, 246, 0); }
      50% { text-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
    }

    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #8B5CF6; border-radius: 10px; }
    
    .chart-line {
      filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
    }

    /* Estilos específicos para la diapo de Stack Tecnológico */
    .stack-card {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 24px;
        padding: 24px;
        transition: all 0.3s ease;
    }
    .stack-card:hover {
        background: rgba(139, 92, 246, 0.05);
        border-color: rgba(139, 92, 246, 0.3);
        transform: translateY(-5px);
    }
  `}} />
);

// Componente de Gráfica de Dona Animada
const DonutChart = ({ percentage, color, label, sublabel }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r={radius}
            stroke="currentColor" strokeWidth="6"
            fill="transparent" className="text-white/5"
          />
          <motion.circle
            cx="50" cy="50" r={radius}
            stroke={color} strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 2, ease: "easeOut" }}
            strokeLinecap="round"
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

// Helper for slide animations
const slideVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.4, ease: "easeIn" } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [userQuery, setUserQuery] = useState("");

  const slides = [
    {
      id: 'portada',
      title: 'EthosHub: Sprint 2 Review & Release v1.1.0',
      subtitle: 'Matriz de Habilidades y Validación Social',
      footerLeft: 'Byte Busters S.R.L. - Abril 2026',
      footerRight: 'Jefe de Proyecto: Juan Diego Pardo Pozo'
    },
    {
      id: 'objetivo',
      epicId: 'EPIC-03',
      title: 'Objetivo del Sprint: La Matriz de Confianza',
      lead: 'Abordamos el desafío del reclutamiento tecnológico mediante la validación real de competencias.',
      description: 'Verificación por pares (Endorsements) y creación de un mapa de calor interactivo.',
      pillars: [
        { icon: <Zap className="w-5 h-5" />, label: 'Hard Skills', desc: 'Interfaz asíncrona niveles Jr/Mid/Sr.' },
        { icon: <Target className="w-5 h-5" />, label: 'Soft Skills', desc: 'Casos de éxito y competencias.' },
        { icon: <ShieldIcon className="w-5 h-5" />, label: 'Validación', desc: 'Motor de votos verificados.' },
        { icon: <BarChart3 className="w-5 h-5" />, label: 'Ranking', desc: 'Ordenamiento por relevancia.' },
        { icon: <Settings className="w-5 h-5" />, label: 'Normalización', desc: 'Gobernanza de etiquetas SEO.' }
      ]
    },
    {
      id: 'semana1',
      title: 'Semana 1: Cimentación Sprint 2',
      period: '13 abr - 18 abr 2026',
      context: 'Enfoque en arquitectura hexagonal y descomposición de historias.',
      items: [
        { title: 'Grooming', detail: 'Asignación de 46 Story Points iniciales.', icon: <Users /> },
        { title: 'Base de Datos', detail: 'Modelado de MHVS y relaciones de validación.', icon: <Settings /> },
        { title: 'Frontend Core', detail: 'Componentes CandidateCard y SearchBar.', icon: <Cpu /> },
        { title: 'Staging Sync', detail: 'Primer despliegue para pruebas de flujo.', icon: <Rocket /> }
      ]
    },
    {
      id: 'semana2',
      title: 'Semana 2: Estabilización Sprint 2',
      period: '20 abr - 25 abr 2026',
      context: 'Swarming técnico para cierre de incremento y Release v1.1.0.',
      items: [
        { title: 'QA Riguroso', detail: 'Ejecución de 80 casos de prueba integrales.', icon: <ShieldIcon /> },
        { title: 'Bug Fixing', detail: 'Resolución de 18 bugs críticos en Staging.', icon: <AlertCircle /> },
        { title: 'Docs LaTeX', detail: 'Reportes técnicos unificados (IEEE).', icon: <FileText /> },
        { title: 'Sprint Review', detail: 'Demo del incremento validado al 100%.', icon: <CheckCircle2 /> }
      ]
    },
    {
      id: 'metricas_graficos',
      title: 'Análisis de Ejecución Técnica',
      burndown: [46, 43, 40, 31, 31, 31, 31, 31, 25, 18, 0],
      burnup: [0, 8, 15, 15, 15, 15, 15, 15, 28, 41, 46],
      legend: [
        { color: '#8B5CF6', label: 'Real' },
        { color: 'rgba(255,255,255,0.1)', label: 'Ideal' }
      ]
    },
    {
      id: 'metricas_exito',
      title: 'Dashboard de Resultados',
      stats: [
        { label: 'Story Points', value: '46/46', sub: 'Alcance total cumplido', icon: <Zap size={18} /> },
        { label: 'Historias', value: '8/8', sub: 'Cierre total de ciclo', icon: <FileText size={18} /> },
        { label: 'Velocity', value: '3.8', sub: 'Promedio diario real', icon: <Clock size={18} /> },
        { label: 'Test Cases', value: '80', sub: 'Validación integral', icon: <ClipboardCheck size={18} className="text-[#B7F4FF]" /> },
        { label: 'Bugs', value: '18', sub: 'Cero críticos pendientes', icon: <Bug size={18} className="text-[#8B5CF6]" /> }
      ],
      highlights: [
        'Resiliencia: Absorción autónoma de tareas huérfanas.',
        'Calidad: Incremento v1.1.0 listo para producción.',
        'Documentación: 100% de reportes en LaTeX.'
      ]
    },
    {
      id: 'calidad',
      title: 'Métricas de Éxito del Sprint',
      lead: 'Validación cuantitativa de los procesos de Verificación y Validación.',
      charts: [
        { percentage: 100, color: '#8B5CF6', label: 'Cobertura', sublabel: 'Tests Pasados' },
        { percentage: 100, color: '#B7F4FF', label: 'Resolución', sublabel: 'Bugs Fixeados' },
        { percentage: 100, color: '#ffffff', label: 'DoD', sublabel: 'Historias Done' }
      ],
      validations: [
        { item: 'Build Producción', status: 'Estable', detail: 'Compilación v1.1.0 limpia.' },
        { item: 'Data Governance', status: 'Auditado', detail: 'Filtros y roles validados.' },
        { item: 'Manual QA', status: 'Aprobado', detail: 'Smoke tests realizados.' }
      ]
    },
    {
      id: 'sprint3_sem1',
      title: 'Sprint 3: Planificación Semana 1',
      period: '27 abr - 02 may 2026',
      context: 'Inicio de EPIC-04: Motor de Match Inteligente y Optimización de Velocity.',
      items: [
        { title: 'Planning 3 & Kick-off', detail: 'Reajuste de Velocity a 3.8 SP/día con equipo activo.', icon: <Calendar /> },
        { title: 'Refactorización Hexagonal', detail: 'Mejora de la capa de dominio tras lecciones del Sprint 2.', icon: <Cpu /> },
        { title: 'Motor de Filtros v2', detail: 'Optimización de queries y búsqueda por ponderación.', icon: <Search /> },
        { title: 'Daily Sync Reforzada', detail: 'Implementación de reportes de bloqueo inmediatos.', icon: <Users /> }
      ]
    },
    {
      id: 'sprint3_sem2',
      title: 'Sprint 3: Planificación Semana 2',
      period: '04 may - 09 may 2026',
      context: 'Integración de analíticas y cierre de Release v1.2.0.',
      items: [
        { title: 'Dashboard Analytics', detail: 'Visualización de métricas para reclutadores.', icon: <BarChart3 /> },
        { title: 'Security Audit', detail: 'Revisión de middlewares de validación social.', icon: <ShieldIcon /> },
        { title: 'Automation QA', detail: 'Implementación de tests de integración automáticos.', icon: <CheckCircle2 /> },
        { title: 'Pre-Release v1.2.0', detail: 'Congelamiento de código y preparación de demo final.', icon: <Rocket /> }
      ]
    },
    {
      id: 'stack_tecnologico',
      title: 'Stack Tecnológico',
      subtitle: 'Herramientas y tecnologías empleadas en el desarrollo',
      categories: [
        {
          name: 'Frontend',
          icon: <Layout className="text-[#8B5CF6] mb-4" size={32} />,
          items: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons']
        },
        {
          name: 'Backend',
          icon: <Server className="text-[#B7F4FF] mb-4" size={32} />,
          items: ['Node.js', 'Express', 'JWT Auth', 'RESTful APIs']
        },
        {
          name: 'Base de Datos',
          icon: <Database className="text-[#8B5CF6] mb-4" size={32} />,
          items: ['PostgreSQL', 'Prisma ORM', 'Redis (Caching)']
        },
        {
          name: 'Herramientas',
          icon: <Code2 className="text-[#B7F4FF] mb-4" size={32} />,
          items: ['Git/GitHub', 'Docker', 'Jest/Cypress', 'LaTeX (Docs)']
        }
      ]
    }
  ];

  const askGemini = async (prompt) => {
    setAiLoading(true);
    setAiResponse("");
    const systemPrompt = "Eres un asistente experto en EthosHub. Analiza el futuro: Sprint 3 basado en Velocity 3.8 del Sprint 2.";
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });
      const data = await response.json();
      setAiResponse(data.candidates?.[0]?.content?.parts?.[0]?.text);
      setIsAiOpen(true);
    } catch (e) { setAiResponse("Error de enlace."); }
    finally { setAiLoading(false); }
  };

  return (
    <div className="w-full h-screen bg-[#000000] text-white selection:bg-violet-500/30 overflow-hidden relative font-['Sora']">
      <GlobalStyles />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full h-full relative p-10 md:p-16 flex flex-col justify-center"
        >
          {/* Header persistente */}
          {currentSlide !== 0 && (
            <div className="absolute top-8 right-10 z-50 flex items-center gap-6">
              <div className="text-right hidden md:block">
                <p className="text-[9px] tracking-[0.3em] text-violet-400 uppercase font-bold">EthosHub / v1.1.0</p>
                <p className="text-[8px] tracking-[0.2em] text-gray-500 uppercase">
                  {slides[currentSlide].id.includes('sprint3') ? 'Proyectando Sprint 3' : (slides[currentSlide].id === 'stack_tecnologico' ? 'Arquitectura' : 'Sprint 2 Review')}
                </p>
              </div>
              <EthosLogo className="w-10 h-10" />
            </div>
          )}

          {/* RENDERIZADO DE PORTADA */}
          {slides[currentSlide].id === 'portada' && (
            <div className="flex flex-col items-center text-center">
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-10"><EthosLogo className="w-24 h-24 mx-auto" /></motion.div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                {slides[currentSlide].title.split(" ").map((w, i) => <span key={i} className={w.includes("Sprint") || w.includes("Review") ? "text-[#8B5CF6] violet-pulse" : ""}>{w} </span>)}
              </h1>
              <p className="text-xl font-light text-[#B7F4FF] tracking-[0.3em] uppercase mb-24 opacity-60">{slides[currentSlide].subtitle}</p>
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end border-t border-white/5 pt-8 text-[9px] tracking-[0.4em] uppercase text-gray-600 font-bold">
                <div className="flex flex-col gap-1"><span>Entidad</span><span className="text-white/40">{slides[currentSlide].footerLeft}</span></div>
                <div className="flex flex-col gap-1 items-end"><span>Liderazgo</span><span className="text-[#8B5CF6]">{slides[currentSlide].footerRight}</span></div>
              </div>
            </div>
          )}

          {/* RENDERIZADO DE SEMANAS (SPRINT 2 Y 3) */}
          {(['semana1', 'semana2', 'sprint3_sem1', 'sprint3_sem2'].includes(slides[currentSlide].id)) && (
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-5">
                <div className="mb-10">
                  <span className={`text-[9px] font-bold tracking-[0.4em] uppercase ${slides[currentSlide].id.includes('sprint3') ? 'text-[#B7F4FF]' : 'text-violet-500'}`}>
                    {slides[currentSlide].period}
                  </span>
                  <h2 className="text-4xl font-bold mt-2 mb-6">{slides[currentSlide].title}</h2>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{slides[currentSlide].context}</p>
                </div>
                {slides[currentSlide].id.includes('sprint3') && (
                  <div className="p-4 rounded-2xl bg-[#B7F4FF]/5 border border-[#B7F4FF]/20 flex items-center gap-4">
                    <ArrowUpRight className="text-[#B7F4FF]" size={20} />
                    <p className="text-[10px] text-gray-400">Objetivo: Mantener Velocity 3.8 SP/día basada en el desempeño previo.</p>
                  </div>
                )}
              </div>
              <div className="md:col-span-7 space-y-4">
                {slides[currentSlide].items.map((item, i) => (
                  <motion.div variants={itemVariants} transition={{ delay: i * 0.1 }} key={i} className="flex gap-6 items-center p-5 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-violet-500/30 transition-all">
                    <div className={`p-3 rounded-2xl ${slides[currentSlide].id.includes('sprint3') ? 'bg-[#B7F4FF]/10 text-[#B7F4FF]' : 'bg-violet-600/10 text-[#8B5CF6]'}`}>{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-white/90 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 font-light">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* GRÁFICOS (MEJORADOS CON ANIMACIONES Y STATS) */}
          {slides[currentSlide].id === 'metricas_graficos' && (
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-4xl font-bold mb-12">{slides[currentSlide].title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {['burndown', 'burnup'].map((type, i) => (
                  <motion.div variants={itemVariants} transition={{ delay: i * 0.2 }} key={i} className="bg-white/[0.02] p-10 rounded-[40px] border border-white/5 relative group overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                      {type === 'burndown' ? <TrendingDown size={32} className="text-red-400" /> : <TrendingUp size={32} className="text-green-400" />}
                    </div>
                    <h3 className={`text-[10px] uppercase font-bold mb-8 ${type === 'burndown' ? 'text-[#8B5CF6]' : 'text-[#B7F4FF]'}`}>
                      {type.toUpperCase()} CHART
                    </h3>
                    <div className="h-48 w-full relative pt-2 pr-2">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="0" x2="0" y2="100" stroke="#333" strokeWidth="0.5" />
                        <line x1="0" y1="100" x2="100" y2="100" stroke="#333" strokeWidth="0.5" />
                        <line x1="0" y1={type === 'burndown' ? '0' : '100'} x2="100" y2={type === 'burndown' ? '100' : '0'} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4" />
                        <motion.path
                          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
                          d={`M 0 ${type === 'burndown' ? '0' : '100'} ${slides[currentSlide][type].map((v, idx) => `L ${(idx * 100) / 10} ${100 - (v * 100) / 46}`).join(' ')}`}
                          fill="none" stroke={type === 'burndown' ? '#8B5CF6' : '#B7F4FF'} strokeWidth="2.5" className="chart-line"
                        />
                        {slides[currentSlide][type].map((v, idx) => (
                          <motion.circle
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + (idx * 0.1) }}
                            cx={(idx * 100) / 10} cy={100 - (v * 100) / 46} r="1.5" fill={type === 'burndown' ? '#8B5CF6' : '#B7F4FF'}
                          />
                        ))}
                      </svg>
                    </div>
                    {/* Stats de resumen abajo del gráfico */}
                    <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-gray-400">
                      {type === 'burndown' ? (
                        <>
                          <div className="flex flex-col"><span className="text-[#8B5CF6] font-bold text-lg">0 SP</span><span>Restantes</span></div>
                          <div className="flex flex-col items-end"><span className="text-white">Día 12</span><span>Completado</span></div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-col"><span className="text-[#B7F4FF] font-bold text-lg">46 SP</span><span>Alcanzados</span></div>
                          <div className="flex flex-col items-end"><span className="text-white">+18 SP</span><span>en 48h (Swarming)</span></div>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* DASHBOARD RESULTADOS */}
          {slides[currentSlide].id === 'metricas_exito' && (
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-4xl font-bold mb-10">{slides[currentSlide].title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
                {slides[currentSlide].stats.map((s, i) => (
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
                  {slides[currentSlide].highlights.map((h, i) => (
                    <p key={i} className="text-xs text-gray-400 leading-relaxed flex gap-3"><span className="text-violet-500">•</span> {h}</p>
                  ))}
                </div>
                <div className="flex justify-center"><DonutChart percentage={100} color="#8B5CF6" label="Velocity Rate" sublabel="Final Sprint 2" /></div>
              </motion.div>
            </div>
          )}

          {/* ÉXITO (DONAS) */}
          {slides[currentSlide].id === 'calidad' && (
            <div className="max-w-5xl mx-auto w-full">
              <h2 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h2>
              <p className="text-sm text-gray-500 font-light italic mb-12">{slides[currentSlide].lead}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {slides[currentSlide].charts.map((c, i) => (
                  <motion.div variants={itemVariants} transition={{ delay: i * 0.15 }} key={i} className="bg-white/[0.03] border border-white/5 rounded-[40px] p-6 flex flex-col items-center">
                    <DonutChart percentage={c.percentage} color={c.color} label={c.label} sublabel={c.sublabel} />
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-4">
                {slides[currentSlide].validations.map((v, i) => (
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

          {/* OBJETIVO EPIC-03 */}
          {slides[currentSlide].id === 'objetivo' && (
            <div className="max-w-6xl mx-auto w-full">
              <div className="mb-12 border-l-4 border-[#8B5CF6] pl-8">
                <h2 className="text-xs font-bold text-[#8B5CF6] tracking-[0.5em] uppercase mb-4">{slides[currentSlide].epicId} / Módulo Core</h2>
                <h3 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h3>
                <p className="text-lg text-white/80 max-w-3xl leading-relaxed font-light">{slides[currentSlide].lead}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {slides[currentSlide].pillars.map((p, i) => (
                  <motion.div variants={itemVariants} transition={{ delay: i * 0.1 }} key={i} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl group hover:bg-violet-600/5 transition-all">
                    <div className="text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform">{p.icon}</div>
                    <h4 className="font-bold text-[10px] tracking-widest uppercase mb-2 text-[#B7F4FF]">{p.label}</h4>
                    <p className="text-[11px] text-gray-500 leading-snug">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* STACK TECNOLOGICO */}
          {slides[currentSlide].id === 'stack_tecnologico' && (
            <div className="max-w-6xl mx-auto w-full">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slides[currentSlide].title}</h2>
                <p className="text-[#B7F4FF] tracking-[0.2em] uppercase text-sm">{slides[currentSlide].subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {slides[currentSlide].categories.map((cat, i) => (
                  <motion.div
                    variants={itemVariants}
                    transition={{ delay: i * 0.15 }}
                    key={i}
                    className="stack-card flex flex-col items-center text-center"
                  >
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

      {/* NAVEGACIÓN */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-[100]">
        <button disabled={currentSlide === 0} onClick={() => setCurrentSlide(p => p - 1)} className="p-4 border border-white/10 rounded-full hover:bg-white/5 disabled:opacity-20 transition-all active:scale-95"><ChevronLeft size={20} /></button>
        <button disabled={currentSlide === slides.length - 1} onClick={() => setCurrentSlide(p => p + 1)} className="p-4 bg-[#8B5CF6] rounded-full hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] disabled:opacity-20 transition-all active:scale-95"><ChevronRight size={20} /></button>
      </div>

      {/* CORE AI ✨ */}
      <button onClick={() => setIsAiOpen(true)} className="absolute top-8 left-8 z-[100] flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-violet-500/10 border border-white/10 rounded-full transition-all group backdrop-blur-md">
        <Sparkles className="w-4 h-4 text-[#B7F4FF]" />
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/60 group-hover:text-white">Neural Assistant ✨</span>
      </button>

      {/* PANEL AI */}
      <AnimatePresence>
        {isAiOpen && (
          <motion.div initial={{ x: -500 }} animate={{ x: 0 }} exit={{ x: -500 }} className="absolute left-0 top-0 h-full w-full max-w-md bg-black/95 border-r border-violet-500/10 z-[200] backdrop-blur-3xl p-12 flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500">System Brain v1.1.0</h3>
              <button onClick={() => setIsAiOpen(false)} className="p-2 hover:bg-white/5 rounded-full"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 space-y-8">
              {aiLoading ? <Loader2 className="w-8 h-8 text-[#8B5CF6] animate-spin mx-auto py-20" /> : <div className="text-sm font-light text-gray-400 leading-relaxed whitespace-pre-wrap">{aiResponse || "Consulta sobre la planificación del Sprint 3."}</div>}
            </div>
            <div className="mt-auto pt-8 border-t border-white/5">
              <input type="text" value={userQuery} onChange={(e) => setUserQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && askGemini(userQuery)} placeholder="Introducir comando..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-xs outline-none focus:border-[#8B5CF6]/40 transition-colors" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
        <motion.div className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#B7F4FF] to-[#8B5CF6]" animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} transition={{ duration: 0.5 }} />
      </div>
    </div>
  );
};

export default App;