import React from 'react';
import {
    Zap, Target, Shield as ShieldIcon, BarChart3, Settings,
    Users, Cpu, Rocket, AlertCircle, FileText, CheckCircle2,
    Clock, ClipboardCheck, Bug, Calendar, Search, Layout,
    Server, Database, Code2, Info
} from 'lucide-react';

export const sprint3Slides = [
    {
        id: 'portada',
        title: 'EthosHub: Sprint 3 Review & Release v1.2.0',
        subtitle: 'Catálogo de Proyectos y Gestión de Evidencias',
        footerLeft: 'Byte Busters S.R.L. - Mayo 2026',
        footerRight: 'Jefe de Proyecto: Juan Diego Pardo Pozo'
    },
    {
        id: 'objetivo',
        epicId: 'EPIC-04',
        title: 'Objetivo del Sprint: Catálogo de Portafolio',
        lead: 'Habilitar a los profesionales para construir y exhibir un catálogo de proyectos interactivo respaldado por evidencias reales.',
        pillars: [
            { icon: <Layout className="w-5 h-5" />, label: 'Proyectos', desc: 'Creación y gestión de portafolio dinámico.' },
            { icon: <ShieldIcon className="w-5 h-5" />, label: 'Seguridad', desc: 'Prevención XSS e invalidación de JWTs.' },
            { icon: <Database className="w-5 h-5" />, label: 'Integridad', desc: 'Triggers de ordenamiento y consistencia.' },
            { icon: <Cpu className="w-5 h-5" />, label: 'Workers', desc: 'Purga automática de archivos huérfanos.' },
            { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Release', desc: 'Incremento estable v1.2.0.' }
        ]
    },
    {
        id: 'semana1',
        title: 'Semana 1: Arquitectura de Evidencias',
        period: '27 abr - 02 may 2026',
        context: 'Inicio de la gestión de proyectos y saneamiento de deuda técnica.',
        items: [
            { title: 'Grooming Técnico', detail: 'Asignación de 60 Story Points para el módulo GAN.', icon: <Users /> },
            { title: 'Transaccionalidad', detail: 'Implementación de Rollbacks ante fallos de red.', icon: <Settings /> },
            { title: 'Persistencia', detail: 'Modelado de tablas para proyectos y multimedia.', icon: <Database /> },
            { title: 'Security Core', detail: 'Configuración de Rate Limiting y Blacklist de tokens.', icon: <ShieldIcon /> }
        ]
    },
    {
        id: 'semana2',
        title: 'Semana 2: Integración y Catálogo',
        period: '04 may - 09 may 2026',
        context: 'Implementación de Dropzone y visualización pública del catálogo.',
        items: [
            { title: 'Dropzone UI', detail: 'Carga optimizada de archivos con validación local.', icon: <Zap /> },
            { title: 'Iframes Seguros', detail: 'Embebido de videos y prototipos (YouTube/Figma).', icon: <Cpu /> },
            { title: 'QA & Swarming', detail: 'Auditoría de código para resolución de 13 bugs.', icon: <ShieldIcon /> },
            { title: 'Release 1.2.0', detail: 'Incremento funcional listo para producción.', icon: <Rocket /> }
        ]
    },
    {
        id: 'metricas_graficos',
        title: 'Análisis de Ejecución Técnica',
        burndown: [60, 56, 52, 48, 48, 48, 48, 48, 48, 40, 25, 0, 0],
        burnup: [0, 4, 8, 12, 12, 12, 12, 12, 12, 20, 35, 60, 60],
        legend: [
            { color: '#8B5CF6', label: 'Real' },
            { color: 'rgba(255,255,255,0.1)', label: 'Ideal' }
        ],
        analysis: [
            {
                title: "Meseta Operativa",
                icon: <AlertCircle size={12} />,
                colorClass: "text-red-400",
                desc: "Estancamiento entre el 1 y 5 de mayo por silos de información y comunicación reactiva en el equipo."
            },
            {
                title: "Autoorganización",
                icon: <Zap size={12} />,
                colorClass: "text-[#B7F4FF]",
                desc: "El núcleo activo absorbió la carga de trabajo pendiente mediante swarming de emergencia al cierre."
            },
            {
                title: "Bandera Roja",
                icon: <ShieldIcon size={12} />,
                colorClass: "text-violet-400",
                desc: "Nuevo protocolo: tareas sin reporte por 2 días regresan al backlog para reasignación inmediata."
            }
        ]
    },
    {
        id: 'metricas_exito',
        title: 'Dashboard de Resultados',
        stats: [
            { label: 'Story Points', value: '60/60', sub: 'Alcance total cumplido', icon: <Zap size={18} /> },
            { label: 'Historias', value: '6/6', sub: 'Módulo GAN finalizado', icon: <FileText size={18} /> },
            { label: 'Velocity', value: '4.6', sub: 'Promedio de SP diario', icon: <Clock size={18} /> },
            { label: 'Integridad', value: '100%', sub: 'Cero datos corruptos', icon: <ClipboardCheck size={18} className="text-[#B7F4FF]" /> },
            { label: 'Vulnerabilidades', value: '0', sub: 'XSS y CORS mitigados', icon: <Bug size={18} className="text-[#8B5CF6]" /> }
        ],
        highlights: [
            'Blindaje: Implementación de Magic Numbers para verificación de archivos.',
            'UX Defensiva: Uso masivo de Optional Chaining para prevenir caídas.',
            'Sinergia: Integración exitosa de Dropzone con backend transaccional.'
        ]
    },
    {
        id: 'calidad',
        title: 'Validación de Release v1.2.0',
        lead: 'Se certifica la madurez de los módulos implementados fundamentando el dictamen de calidad.',
        charts: [
            { percentage: 100, color: '#8B5CF6', label: 'Funcionalidad', sublabel: 'Historias Done' },
            { percentage: 100, color: '#B7F4FF', label: 'Seguridad', sublabel: 'Validación de tokens' },
            { percentage: 100, color: '#ffffff', label: 'Consistencia', sublabel: 'SQL Rollbacks' }
        ],
        validations: [
            { item: 'Build Estable', status: 'Aprobado', detail: 'Versión v1.2.0 sin parches de emergencia.' },
            { item: 'Control de Acceso', status: 'Auditado', detail: 'Rate Limiting y Blacklist activos.' },
            { item: 'Gestión Multimedia', status: 'Aprobado', detail: 'Purga de archivos huérfanos verificada.' }
        ]
    },
    {
        id: 'sprint3_sem1',
        title: 'Proyección Sprint 4: Planificación S1',
        period: '11 may - 16 may 2026',
        context: 'Descomposición de historias, estimación y enfoque en APIs de terceros.',
        items: [
            { title: 'Grooming & Estimación', detail: 'Asignación de Story Points basados en la capacidad real (Velocity).', icon: <AlertCircle /> },
            { title: 'Integración GitHub', detail: 'Interconexión inicial con repositorios externos para importación nativa.', icon: <Code2 /> },
            { title: 'Criterios y Dependencias', detail: 'Checklist del DoD firmado por historia e identificación de bloqueos.', icon: <CheckCircle2 /> },
            { title: 'Priorización de Backlog', detail: 'Revisión y ordenamiento de tickets vinculados en la herramienta de gestión.', icon: <Search /> }
        ]
    },
    {
        id: 'sprint3_sem2',
        title: 'Proyección Sprint 4: Planificación S2',
        period: '18 may - 23 may 2026',
        context: 'Generación del incremento, despliegue en Staging y ceremonias de cierre.',
        items: [
            { title: 'Staging & Smoke Test', detail: 'Software desplegado en URL de pruebas para validación por el QA Team.', icon: <ShieldIcon /> },
            { title: 'Release v1.3.0', detail: 'Integración y compilación de la versión estable (Stable Build).', icon: <Rocket /> },
            { title: 'Sprint Review', detail: 'Demo del producto validado visualmente por interesados el 23 de mayo.', icon: <Layout /> },
            { title: 'Retrospectiva', detail: 'Análisis del ciclo generando lista de acciones "Start / Stop / Continue".', icon: <Users /> }
        ]
    },
    {
        id: 'stack_tecnologico',
        title: 'Stack Tecnológico',
        subtitle: 'HERRAMIENTAS Y TECNOLOGÍAS EMPLEADAS EN EL DESARROLLO',
        categories: [
            {
                name: 'FRONTEND',
                icon: <Layout className="text-[#8B5CF6] mb-4" size={32} />,
                items: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons']
            },
            {
                name: 'BACKEND',
                icon: <Server className="text-[#8B5CF6] mb-4" size={32} />,
                items: ['Node.js', 'Express', 'JWT Auth', 'RESTful APIs']
            },
            {
                name: 'BASE DE DATOS',
                icon: <Database className="text-[#8B5CF6] mb-4" size={32} />,
                items: ['PostgreSQL', 'Prisma ORM', 'Redis (Caching)']
            },
            {
                name: 'HERRAMIENTAS',
                icon: <Code2 className="text-[#8B5CF6] mb-4" size={32} />,
                items: ['Git/GitHub', 'Docker', 'Jest/Cypress', 'LaTeX (Docs)']
            }
        ]
    }
];