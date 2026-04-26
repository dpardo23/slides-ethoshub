import React from 'react';
import {
    Zap, Target, Shield as ShieldIcon, BarChart3, Settings,
    Users, Cpu, Rocket, AlertCircle, FileText, CheckCircle2,
    Clock, ClipboardCheck, Bug, Calendar, Search, Layout,
    Server, Database, Code2
} from 'lucide-react';

export const sprint2Slides = [
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
        ],
        // NUEVO: El texto de análisis pasa a ser pura data
        analysis: [
            {
                title: "La Meseta Crítica",
                icon: <AlertCircle size={12} />,
                colorClass: "text-violet-400",
                desc: "Estancamiento evidenciado entre el 17 y 20 de abril debido a la falta de comunicación de dos desarrolladores, lo que paralizó historias clave de la Epic 3."
            },
            {
                title: "Swarming de Emergencia",
                icon: <Zap size={12} />,
                colorClass: "text-[#B7F4FF]",
                desc: "La drástica caída final representa una reestructuración del equipo activo. Se absorbieron tareas huérfanas logrando completar 18 SP en las últimas 48 horas."
            },
            {
                title: "Correcciones a Futuro",
                icon: <ShieldIcon size={12} />,
                colorClass: "text-red-400",
                desc: "El ritmo de cierre no es sostenible. Para el Sprint 3, la Velocity se ajustará asumiendo únicamente la capacidad del núcleo confiable del equipo."
            }
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