export interface M365App {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  useCases: string[];
}

export interface Category {
  id: string;
  name: string;
  colorClass: string;
  bgClass: string;
  apps: M365App[];
}

export const categories: Category[] = [
  {
    id: "communication",
    name: "Comunicación y colaboración",
    colorClass: "text-white",
    bgClass: "bg-category-communication",
    apps: [
      {
        id: "teams",
        name: "Teams",
        category: "communication",
        description: "Plataforma de comunicación y colaboración que combina chat, videoconferencias, almacenamiento de archivos e integración de aplicaciones.",
        features: [
          "Chat individual y grupal",
          "Videoconferencias HD",
          "Canales de equipo organizados",
          "Integración con aplicaciones de Microsoft 365",
          "Compartir pantalla y colaboración en tiempo real"
        ],
        useCases: [
          "Reuniones virtuales con clientes",
          "Colaboración en proyectos de equipo",
          "Comunicación interna empresarial"
        ]
      },
      {
        id: "viva-engage",
        name: "Viva Engage",
        category: "communication",
        description: "Red social empresarial que conecta a las personas de la organización, fomentando la comunicación abierta y el intercambio de conocimientos.",
        features: [
          "Comunidades temáticas",
          "Publicaciones y discusiones",
          "Reconocimiento de empleados",
          "Integración con Teams"
        ],
        useCases: [
          "Comunicación corporativa",
          "Gestión del conocimiento",
          "Cultura organizacional"
        ]
      },
      {
        id: "outlook",
        name: "Outlook",
        category: "communication",
        description: "Cliente de correo electrónico profesional con gestión de calendario, contactos y tareas integradas.",
        features: [
          "Bandeja de entrada prioritaria",
          "Calendario integrado",
          "Gestión de contactos",
          "Filtros y reglas automáticas"
        ],
        useCases: [
          "Comunicación por email",
          "Programación de reuniones",
          "Gestión de contactos profesionales"
        ]
      },
      {
        id: "calendario",
        name: "Calendario",
        category: "communication",
        description: "Herramienta de gestión del tiempo que permite programar eventos, reuniones y recordatorios de forma eficiente.",
        features: [
          "Vista de día, semana y mes",
          "Invitaciones a reuniones",
          "Recordatorios automáticos",
          "Sincronización entre dispositivos"
        ],
        useCases: [
          "Planificación de reuniones",
          "Gestión del tiempo personal",
          "Coordinación de equipos"
        ]
      },
      {
        id: "loop",
        name: "Loop",
        category: "communication",
        description: "Aplicación de co-creación que permite trabajar en componentes sincronizados en tiempo real a través de diferentes aplicaciones.",
        features: [
          "Componentes sincronizados",
          "Colaboración en tiempo real",
          "Integración con Teams y Outlook",
          "Espacios de trabajo flexibles"
        ],
        useCases: [
          "Brainstorming colaborativo",
          "Gestión de proyectos ágiles",
          "Documentación compartida"
        ]
      }
    ]
  },
  {
    id: "documents",
    name: "Gestión documental y almacenamiento",
    colorClass: "text-white",
    bgClass: "bg-category-documents",
    apps: [
      {
        id: "sharepoint",
        name: "SharePoint",
        category: "documents",
        description: "Plataforma de colaboración para crear sitios web, almacenar documentos y compartir información de forma segura.",
        features: [
          "Sitios de equipo e intranet",
          "Bibliotecas de documentos",
          "Flujos de trabajo automatizados",
          "Control de versiones"
        ],
        useCases: [
          "Intranet corporativa",
          "Gestión documental centralizada",
          "Portal de proyectos"
        ]
      },
      {
        id: "onedrive",
        name: "OneDrive",
        category: "documents",
        description: "Almacenamiento en la nube personal y empresarial con sincronización automática y acceso desde cualquier dispositivo.",
        features: [
          "Almacenamiento en la nube",
          "Sincronización automática",
          "Compartir archivos seguros",
          "Acceso offline"
        ],
        useCases: [
          "Backup de archivos personales",
          "Compartir documentos con externos",
          "Acceso remoto a archivos"
        ]
      },
      {
        id: "onenote",
        name: "OneNote",
        category: "documents",
        description: "Cuaderno digital para tomar notas, organizar información y colaborar en tiempo real.",
        features: [
          "Notas multimedia",
          "Organización por secciones",
          "Búsqueda de texto en imágenes",
          "Colaboración en tiempo real"
        ],
        useCases: [
          "Notas de reuniones",
          "Gestión del conocimiento",
          "Planificación de proyectos"
        ]
      },
      {
        id: "stream",
        name: "Stream",
        category: "documents",
        description: "Plataforma de video empresarial para cargar, compartir y gestionar videos de forma segura.",
        features: [
          "Streaming de video seguro",
          "Transcripción automática",
          "Integración con Teams",
          "Canales de video organizados"
        ],
        useCases: [
          "Capacitación en video",
          "Comunicaciones ejecutivas",
          "Grabaciones de reuniones"
        ]
      }
    ]
  },
  {
    id: "automation",
    name: "Automatización y desarrollo de soluciones",
    colorClass: "text-white",
    bgClass: "bg-category-automation",
    apps: [
      {
        id: "power-automate",
        name: "Power Automate",
        category: "automation",
        description: "Plataforma de automatización de flujos de trabajo que conecta aplicaciones y servicios para automatizar tareas repetitivas.",
        features: [
          "Flujos automatizados",
          "Conectores preconfigurados",
          "Aprobaciones digitales",
          "Automatización robótica (RPA)"
        ],
        useCases: [
          "Automatización de aprobaciones",
          "Notificaciones automáticas",
          "Integración entre sistemas"
        ]
      },
      {
        id: "power-apps",
        name: "Power Apps",
        category: "automation",
        description: "Plataforma low-code para crear aplicaciones empresariales personalizadas sin necesidad de programación avanzada.",
        features: [
          "Desarrollo low-code",
          "Plantillas prediseñadas",
          "Conexión a múltiples fuentes de datos",
          "Aplicaciones móviles nativas"
        ],
        useCases: [
          "Apps de gestión interna",
          "Formularios digitales",
          "Aplicaciones de campo"
        ]
      },
      {
        id: "forms",
        name: "Forms",
        category: "automation",
        description: "Herramienta para crear encuestas, cuestionarios y formularios con análisis automático de respuestas.",
        features: [
          "Creación de encuestas",
          "Análisis de respuestas",
          "Ramificación lógica",
          "Integración con Excel"
        ],
        useCases: [
          "Encuestas de satisfacción",
          "Evaluaciones y exámenes",
          "Recopilación de feedback"
        ]
      }
    ]
  },
  {
    id: "ai",
    name: "Inteligencia artificial y asistencia",
    colorClass: "text-white",
    bgClass: "bg-category-ai",
    apps: [
      {
        id: "copilot",
        name: "Copilot",
        category: "ai",
        description: "Asistente de inteligencia artificial integrado en Microsoft 365 que ayuda a crear, analizar y automatizar tareas.",
        features: [
          "Generación de contenido",
          "Análisis de datos",
          "Resúmenes automáticos",
          "Asistencia en tiempo real"
        ],
        useCases: [
          "Redacción de documentos",
          "Análisis de datos en Excel",
          "Creación de presentaciones"
        ]
      }
    ]
  },
  {
    id: "productivity",
    name: "Productividad personal y tareas",
    colorClass: "text-white",
    bgClass: "bg-category-productivity",
    apps: [
      {
        id: "todo",
        name: "To Do",
        category: "productivity",
        description: "Aplicación de gestión de tareas personales con listas inteligentes y recordatorios.",
        features: [
          "Listas de tareas",
          "Mi día inteligente",
          "Recordatorios",
          "Sincronización con Outlook"
        ],
        useCases: [
          "Gestión de tareas diarias",
          "Listas de compras",
          "Seguimiento de proyectos personales"
        ]
      },
      {
        id: "planner",
        name: "Planner",
        category: "productivity",
        description: "Herramienta visual de gestión de proyectos con tableros Kanban y asignación de tareas.",
        features: [
          "Tableros visuales",
          "Asignación de tareas",
          "Seguimiento de progreso",
          "Integración con Teams"
        ],
        useCases: [
          "Gestión de proyectos de equipo",
          "Sprints ágiles",
          "Planificación de eventos"
        ]
      },
      {
        id: "ofimatica",
        name: "Ofimática",
        category: "productivity",
        description: "Suite de aplicaciones de productividad incluyendo Word, Excel y PowerPoint para crear documentos profesionales.",
        features: [
          "Procesamiento de texto (Word)",
          "Hojas de cálculo (Excel)",
          "Presentaciones (PowerPoint)",
          "Colaboración en tiempo real"
        ],
        useCases: [
          "Creación de documentos",
          "Análisis de datos",
          "Presentaciones ejecutivas"
        ]
      }
    ]
  },
  {
    id: "analytics",
    name: "Análisis y visualización de datos",
    colorClass: "text-white",
    bgClass: "bg-category-analytics",
    apps: [
      {
        id: "power-bi",
        name: "Power BI",
        category: "analytics",
        description: "Plataforma de inteligencia empresarial para crear visualizaciones interactivas y dashboards analíticos.",
        features: [
          "Dashboards interactivos",
          "Conectores de datos múltiples",
          "Análisis en tiempo real",
          "Compartir informes seguros"
        ],
        useCases: [
          "Reportes ejecutivos",
          "Análisis de ventas",
          "KPIs en tiempo real"
        ]
      }
    ]
  },
  {
    id: "security",
    name: "Identidad, seguridad y administración de dispositivos",
    colorClass: "text-gray-800",
    bgClass: "bg-category-security border border-gray-300",
    apps: [
      {
        id: "intune",
        name: "Intune",
        category: "security",
        description: "Plataforma de gestión de dispositivos y aplicaciones móviles (MDM/MAM) para proteger datos corporativos.",
        features: [
          "Gestión de dispositivos móviles",
          "Políticas de seguridad",
          "Distribución de aplicaciones",
          "Cumplimiento normativo"
        ],
        useCases: [
          "BYOD corporativo",
          "Seguridad de endpoints",
          "Gestión de flotas de dispositivos"
        ]
      },
      {
        id: "azure-ad",
        name: "Azure Active Directory",
        category: "security",
        description: "Servicio de identidad en la nube que proporciona autenticación segura y gestión de accesos.",
        features: [
          "Single Sign-On (SSO)",
          "Autenticación multifactor",
          "Gestión de identidades",
          "Acceso condicional"
        ],
        useCases: [
          "Gestión de usuarios",
          "Seguridad de accesos",
          "Integración de aplicaciones"
        ]
      }
    ]
  }
];

export const getAppById = (id: string): M365App | undefined => {
  for (const category of categories) {
    const app = category.apps.find(app => app.id === id);
    if (app) return app;
  }
  return undefined;
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};
