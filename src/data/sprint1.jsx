import React from 'react';
import {
    Zap, Target, Shield as ShieldIcon, BarChart3, Settings,
    Users, Cpu, Rocket, AlertCircle, FileText, CheckCircle2,
    Clock, ClipboardCheck, Bug, Calendar, Search, Layout,
    Server, Database, Code2, Info
} from 'lucide-react';

export const sprint1Slides = [
    {
        id: 'portada',
        title: 'EthosHub: Sprint 1 Review & Release v1.0.0',
        subtitle: 'Autenticación, Perfiles y Motor Base',
        footerLeft: 'Byte Busters S.R.L. - Abril 2026',
        footerRight: 'Jefe de Proyecto: Juan Diego Pardo Pozo'
    },
    {
        id: 'objetivo',
        epicId: 'EPIC-01 & EPIC-02',
        title: 'Objetivo del Sprint: Producto Mínimo Entregable',
        lead: 'Se alcanzó el primer hito de producto estable y funcional, saltando a la versión 1.x.x.',
        description: 'Desarrollo del motor de acceso, registro de usuarios y la estructura visual de los perfiles profesionales.',
        pillars: [
            { icon: <Zap className="w-5 h-5" />, label: 'Autenticación', desc: 'Flujo OAuth2 y gestión de sesiones certificadas.' },
            { icon: <Target className="w-5 h-5" />, label: 'Perfiles', desc: 'Esquema de datos para el usuario profesional y foto de perfil.' },
            { icon: <ShieldIcon className="w-5 h-5" />, label: 'Seguridad', desc: 'Capa de datos robusta, estricta y segura.' },
            { icon: <BarChart3 className="w-5 h-5" />, label: 'UI/UX', desc: 'Vistas responsivas y herramientas de conversión.' },
            { icon: <Settings className="w-5 h-5" />, label: 'Arquitectura', desc: 'Despliegue inicial en Neon.tech con tipos restrictivos.' }
        ]
    },
    {
        id: 'semana1',
        title: 'Semana 1: Fundamentos y Base de Datos',
        period: '30 mar - 04 abr 2026',
        context: 'Descomposición del backlog y establecimiento de la infraestructura inicial.',
        items: [
            { title: 'Planning & Grooming', detail: 'Asignación de 71 Story Points distribuidos en 16 historias.', icon: <Users /> },
            { title: 'Base de Datos', detail: 'Esquema lógico desplegado en Neon.tech.', icon: <Database /> },
            { title: 'Estructura de Perfil', detail: 'Definición de campos de usuario y diseño de persistencia (IDEN-001).', icon: <FileText /> },
            { title: 'Frontend Capa Base', detail: 'Creación de la vista del perfil (/dashboard/profile).', icon: <Layout /> }
        ]
    },
    {
        id: 'semana2',
        title: 'Semana 2: Integración y Release v1.0.0',
        period: '06 abr - 11 abr 2026',
        context: 'Estabilización de componentes, pruebas QA y revisión final del incremento.',
        items: [
            { title: 'Auth APIs', detail: 'Validación de rutas de registro e inicio de sesión seguro (LOG-006).', icon: <ShieldIcon /> },
            { title: 'Ciclo de Pruebas', detail: 'Resolución de defectos para asegurar la estabilidad de la Release v1.0.0.', icon: <CheckCircle2 /> },
            { title: 'Bug Fixing', detail: 'Aplazamiento táctico en la selección de tipo de usuario para minimizar fricción.', icon: <AlertCircle /> },
            { title: 'Sprint Review', detail: 'Aprobación del estado del Sprint y demo de producto funcional.', icon: <Rocket /> }
        ]
    },
    {
        id: 'metricas_graficos',
        title: 'Análisis de Ejecución Técnica',
        // Datos matemáticos simulando los 12 días del Sprint 1 (30 de Marzo al 11 de Abril)
        burndown: [71, 71, 71, 65, 65, 65, 60, 60, 45, 30, 11, 11],
        burnup: [0, 0, 0, 6, 6, 6, 11, 11, 26, 41, 60, 60],
        legend: [
            { color: '#8B5CF6', label: 'Real' },
            { color: 'rgba(255,255,255,0.1)', label: 'Ideal' }
        ],
        analysis: [
            {
                title: "Alta Capacidad de Entrega",
                icon: <Zap size={12} />,
                colorClass: "text-[#B7F4FF]",
                desc: "Se cerraron 60 SP. Lograr esta cantidad en el primer ciclo indica una Velocity excelente al convertir la plataforma estática a dinámica."
            },
            {
                title: "Picos al Cierre",
                icon: <AlertCircle size={12} />,
                colorClass: "text-violet-400",
                desc: "Mucho trabajo se cerró justo en la fecha límite (10 y 11 de abril). Es clave usar el checklist pre-entrega (DoD) para un avance más suave."
            },
            {
                title: "Transparencia de Bloqueos",
                icon: <Info size={12} />,
                colorClass: "text-gray-300",
                desc: "La brecha final de 11 puntos no fue por falta de esfuerzo, sino por dependencias externas bien documentadas (Admin Tool y SEO)."
            }
        ]
    },
    {
        id: 'metricas_exito',
        title: 'Dashboard de Resultados',
        stats: [
            { label: 'Story Points', value: '60/71', sub: 'Alta capacidad de entrega', icon: <Zap size={18} /> },
            { label: 'Historias', value: '14/16', sub: '2 bloqueadas externamente', icon: <FileText size={18} /> },
            { label: 'Velocity', value: '5.0', sub: 'Promedio de SP diario', icon: <Clock size={18} /> },
            { label: 'Test Cases', value: '100%', sub: 'Módulos base aprobados', icon: <ClipboardCheck size={18} className="text-[#B7F4FF]" /> },
            { label: 'Hotfixes', value: '0', sub: 'Release estable', icon: <Bug size={18} className="text-[#8B5CF6]" /> }
        ],
        highlights: [
            'Arquitectura Funcional: La base técnica establecida reduce drásticamente la deuda técnica para los futuros ciclos.',
            'Integración OAuth2: Flujo de autenticación finalizado con éxito.',
            'Versión Estable: Sistema apto para liberación a producción sin requerir parches (PATCH 0).'
        ]
    },
    {
        id: 'calidad',
        title: 'Estabilización Release v1.0.0',
        lead: 'El incremento de software superó las validaciones, alcanzando el estado de "producto mínimo entregable".',
        charts: [
            { percentage: 87, color: '#8B5CF6', label: 'Alcance SP', sublabel: 'Puntos Cerrados' },
            { percentage: 87, color: '#B7F4FF', label: 'Resolución', sublabel: 'Historias Completas' },
            { percentage: 100, color: '#ffffff', label: 'Estabilidad', sublabel: 'Sin Hotfixes' }
        ],
        validations: [
            { item: 'Build Producción v1.0.0', status: 'Estable', detail: 'Primer hito funcional sin parches de emergencia (PATCH 0).' },
            { item: 'Motor de Acceso', status: 'Aprobado', detail: 'Flujos de autenticación OAuth2 y manejo de sesiones.' },
            { item: 'Interfaz Reactiva', status: 'Aprobado', detail: 'Vistas responsivas y validación cronológica finalizada.' }
        ]
    },
    // Usamos el ID sprint3_sem1 para mantener los colores cian de "Proyección Futura" en la plantilla
    {
        id: 'sprint3_sem1',
        title: 'Proyección Sprint 2: Planificación S1',
        period: '13 abr - 18 abr 2026',
        context: 'Inicio de la Epic 3: Matriz de Confianza y Endorsements.',
        items: [
            { title: 'Integración Pendiente', detail: 'Conexión End-to-End del registro de usuarios como prioridad número uno.', icon: <AlertCircle /> },
            { title: 'Checklist DoD', detail: 'Implementación estricta del checklist pre-entrega para evitar acumulaciones al final del sprint.', icon: <CheckCircle2 /> },
            { title: 'Nuevas Historias', detail: 'Asignación de tareas para la Matriz de Habilidades y Validación Social (MHVS).', icon: <Users /> },
            { title: 'Desbloqueo SEO', detail: 'Reanudación de las historias IDEN-007 e IDEN-008 pospuestas.', icon: <Search /> }
        ]
    },
    {
        id: 'sprint3_sem2',
        title: 'Proyección Sprint 2: Planificación S2',
        period: '20 abr - 25 abr 2026',
        context: 'Desarrollo del motor de validación por pares y vistas públicas.',
        items: [
            { title: 'Sistema de Votos', detail: 'Desarrollo de las interfaces asíncronas para respaldos (Endorsements).', icon: <Zap /> },
            { title: 'Mapa de Calor', detail: 'Visualización interactiva de niveles de experiencia.', icon: <BarChart3 /> },
            { title: 'Auditoría', detail: 'Gobernanza de etiquetas SEO y perfiles públicos.', icon: <ShieldIcon /> },
            { title: 'Preparación v1.1.0', detail: 'Ciclo de QA riguroso para la siguiente entrega mayor.', icon: <Rocket /> }
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
                items: ['PostgreSQL', 'Prisma ORM', 'Neon.tech']
            },
            {
                name: 'Herramientas',
                icon: <Code2 className="text-[#B7F4FF] mb-4" size={32} />,
                items: ['Git/GitHub', 'Docker', 'Jest/Cypress', 'LaTeX (Docs)']
            }
        ]
    }
];