export interface M365App {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  useCases: string[];
  usage: string;
  rules: string[];
  bestPractices: string[];
  examples: {
    adequate: string;
    inadequate: string;
  };
  commonErrors: string[];
  impact: string;
  videos?: string[];
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
        id: "outlook",
        name: "Outlook",
        category: "communication",
        description: "Canal formal y estructurado de comunicación corporativa para solicitudes y decisiones estratégicas.",
        features: ["Bandeja de entrada prioritaria", "Calendario integrado", "Gestión de contactos", "Filtros y reglas"],
        useCases: ["Comunicación formal", "Programación de reuniones", "Gestión de hilos de decisión"],
        usage: "Canal formal y estructurado de comunicación",
        rules: [
          "Usa para solicitudes formales, comunicaciones que impliquen cambios en procesos, políticas o decisiones estratégicas.",
          "Redacta los correos de forma clara, directa y profesional.",
          "No utilices para conversaciones operativas de seguimiento (usar Teams).",
          "Todas las solicitudes deben estar dirigidas al líder del proceso correspondiente.",
          "Evita cadenas largas de correos, responder de forma concreta y oportuna.",
          "No reenvies mensajes con información sensible sin autorización.",
          "Se encuentra prohibido el uso de la copia oculta, en concordancia con la transparencia en la comunicación.",
          "Dirige el correo a una persona especifica y solo copia a aquellos directamente implicados en el proceso"
        ],
        bestPractices: [
          "Escribe de forma directa y sin ambigüedades el cuerpo del mensaje",
          "Refleja el contenido del mensaje en pocas palabras en el asunto del correo",
          "Utiliza un tono profesional, evitando expresiones informales o agresivas.",
          "Inicia el correo con un saludo formal dirigiéndose específicamente a la persona implicada, escribe el motivo de forma clara en la solicitud en el texto del correo con un tono profesional, despedete.",
          "Da respuesta oportuna a los correos, en caso que no cuentes con la respuesta de manera inmediata, da acuse de recibido e informa el tiempo estimado para dar respuesta, comunica los avances en caso que amerite.",
          "Evita “Responder a todos” si no aplica.",
          "Incluye solo documentos necesarios al momento de adjuntar. Verifica enlaces y documentos antes de enviarlos.",
          "No escribas un mensaje o palabras en su totalidad en mayúsculas, esta forma de escribir denota un tono agresivo.",
          "Incluye en todos los correos la firma institucional que cuente con nombre, cargo y datos de contacto."
        ],
        examples: {
          adequate: "Un colaborador requiere la aprobación de un cambio en un procedimiento operativo. Para ello, envía un correo dirigido directamente al líder del proceso, con un asunto claro que resume la solicitud, un mensaje breve y estructurado que explica el motivo, el impacto y la fecha requerida, copia únicamente a las áreas involucradas y adjunta solo el documento necesario para su revisión. El correo mantiene un tono respetuoso y profesional, utiliza la firma institucional y facilita una respuesta clara y oportuna.",
          inadequate: "Un colaborador utiliza el correo para hacer seguimiento operativo diario que debería gestionarse por Teams, responde a todos generando cadenas extensas sin valor agregado, usa mayúsculas en todo el mensaje, incluye copias innecesarias, reenvía información sensible sin autorización o emplea un lenguaje informal o impulsivo. Adicionalmente, no define claramente la solicitud ni el responsable, lo que genera confusión, retrasos y reprocesos."
        },
        commonErrors: [
          "Usar el correo como chat o medio de conversación continua.",
          "Enviar correos sin asunto o con asuntos genéricos.",
          "Copiar a personas que no tienen relación directa con el proceso.",
          "Reenviar mensajes sin validar la información o los destinatarios.",
          "Utilizar un tono emocional, irónico o agresivo."
        ],
        impact: "El mal uso del correo electrónico puede generar sobrecarga de información, pérdida de trazabilidad, retrasos en la toma de decisiones, malentendidos entre áreas y riesgos asociados a la confidencialidad de la información. Por ello, su uso debe ser consciente, responsable y alineado con las normas de comunicación corporativa."
      },
      {
        id: "teams",
        name: "Teams",
        category: "communication",
        description: "Plataforma de comunicación operativa para chats rápidos, reuniones y coordinación del día a día.",
        features: ["Chat instantáneo", "Videoconferencias", "Canales operativos", "Integración M365"],
        useCases: ["Coordinación diaria", "Reuniones rápidas", "Difusión operativa"],
        usage: "Difusión y respuestas rápidas (Reemplazo de WhatsApp)",
        videos: [
          "https://www.youtube.com/embed/WpBAfLWDvUY",
          "https://www.youtube.com/embed/C2wLCd8FcxQ",
          "https://www.youtube.com/embed/28JzrfFj6cU"
        ],
        rules: [
          "Mensajes ágiles y coordinación operativa del día a día.",
          "Escribe las solicitudes en el chat directo del lider de proceso.",
          "Se encuentra prohibido crear grupos de foro o conversación general. Solo se permiten grupos de difusión.",
          "Utiliza esta herramienta para chats, llamadas, videoconferencias y reuniones organizadas.",
          "Las reuniones que no sean confidenciales grábalas y almacenadas en el sitio correspondiente del área.",
          "Evita enviar archivos innecesarios por chat. Usar SharePoint para almacenamiento de archivos estructurados."
        ],
        bestPractices: [
          "Nombra los grupos y canales de manera clara y consistente. Ejemplo: 'TI - Soporte Interno' en lugar de 'Soporte'.",
          "Usa menciones @ con moderación. Menciona a personas o equipos solo cuando se requiera una acción o atención específica.",
          "Organiza las conversaciones por hilos. Responde en el mismo hilo para mantener el contexto.",
          "Evita saturar el canal con mensajes innecesarios",
          "Comparte archivos directamente en el canal o chat correspondiente. Evita duplicados o medios paralelos.",
          "Respeta los horarios laborales. Programa mensajes si es necesario comunicar algo fuera de ese horario.",
          "Utiliza etiquetas para categorizar miembros o equipos y facilitar menciones grupales (Ej: @Líderes, @Administrativos).",
          "Revisa tu mensaje antes de publicarlo para asegurar claridad, redacción correcta y ubicación adecuada.",
          "Personaliza tus notificaciones para evitar distraerse innecesariamente de canales que no requieren acción directa."
        ],
        examples: {
          adequate: "Un colaborador utiliza el chat directo de Teams para coordinar una actividad operativa con el líder del proceso, redactando un mensaje claro y conciso que permite una respuesta rápida. Para una reunión de trabajo, agenda la sesión desde Teams, comparte la agenda con antelación y graba la reunión cuando no es confidencial, almacenando la grabación en el sitio de SharePoint del área correspondiente. Los archivos compartidos se cargan directamente en el canal adecuado, evitando duplicidad y asegurando trazabilidad. El uso de menciones se limita a los responsables directos y se respeta el horario laboral.",
          inadequate: "Crear grupos de conversación sin autorización similares a WhatsApp, enviar mensajes sin contexto o fuera del horario laboral sin carácter urgente, saturar canales con información irrelevante o utilizar Teams como repositorio de archivos desordenados. También se considera un mal uso enviar archivos por chat cuando deben estar en SharePoint, abusar de las menciones @ para llamar la atención o generar reuniones sin agenda ni propósito claro."
        },
        commonErrors: [
          "Usar Teams como canal informal sin estructura ni contexto.",
          "Crear grupos de chat para debates generales o foros no autorizados.",
          "Interrumpir constantemente con menciones innecesarias.",
          "Compartir archivos duplicados o desactualizados.",
          "No grabar reuniones relevantes o no almacenar las grabaciones en el sitio correspondiente."
        ],
        impact: "El uso incorrecto de Teams puede generar saturación de mensajes, pérdida de foco, interrupciones constantes, duplicidad de información y confusión sobre las responsabilidades. Cuando se utiliza correctamente, Teams optimiza la comunicación operativa, reduce el uso de canales no oficiales y mejora la eficiencia del trabajo colaborativo."
      },
      {
        id: "viva-engage",
        name: "Viva Engage",
        category: "communication",
        description: "Red social corporativa interna para fortalecer la cultura, el reconocimiento y la integración.",
        features: ["Comunidades", "Campañas de integración", "Reconocimientos", "Encuestas"],
        useCases: ["Cultura organizacional", "Comunicados generales", "Logros de equipo"],
        usage: "Red social corporativa interna",
        rules: [
          "Publicación de comunicados organizacionales de interés general.",
          "Espacio para interacción positiva y motivacional entre colaboradores y áreas.",
          "Participación en rankings, encuestas y campañas de integración organizacional.",
          "Cada área tendrá su espacio para compartir logros, motivaciones, celebraciones, eventos y actividades de equipo.",
          "Evitar el uso de este canal para solicitudes operativas o administrativas (usar Outlook o Teams según corresponda)."
        ],
        bestPractices: [
          "Publica contenido relevante and alineado con los objetivos de la empresa y tu área.",
          "Usa un lenguaje positivo y constructivo que fomente la participación.",
          "Responde y comenta con respeto, promoviendo el diálogo abierto y profesional.",
          "Comparte logros, reconocimientos y actividades de tu equipo para fortalecer la cultura organizacional.",
          "Se encuentran prohibidos los debates de carácter político, deportivo, religioso y sexual.",
          "Usa hashtags (#) para organizar temas y facilitar búsquedas.",
          "Revisa la ortografía y claridad del mensaje antes de publicarlo.",
          "Participa en encuestas y actividades propuestas por la empresa.",
          "Denuncia publicaciones que atenten contra la ética, el respeto o los valores de la organización (Presenta tus denuncias al correo ética.empresarial@indufaros.com)"
        ],
        examples: {
          adequate: "Un área publica en su espacio un reconocimiento al equipo por el cumplimiento de un objetivo, acompañando el mensaje con un tono positivo, una imagen institucional y hashtags que facilitan la visibilidad del contenido. La gerencia comparte un comunicado organizacional relevante para todos los colaboradores, fomentando la participación mediante comentarios respetuosos. Los colaboradores interactúan de forma constructiva, participan en encuestas corporativas y celebran fechas especiales, fortaleciendo el sentido de pertenencia y la cultura organizacional.",
          inadequate: "Utilizar Viva Engage para hacer solicitudes operativas, reclamar procesos administrativos, publicar mensajes con tono negativo o confrontacional, o generar debates de carácter político, religioso, deportivo o sexual. También se considera un mal uso compartir información no oficial, rumores, contenido ajeno a los valores de la empresa o utilizar la plataforma para temas personales sin relación con la organización."
        },
        commonErrors: [
          "Convertir la plataforma en un canal de quejas o reclamos operativos.",
          "Publicar contenido sin relación con los objetivos o la cultura organizacional.",
          "Utilizar lenguaje inapropiado, irónico o ofensivo.",
          "Abrir debates sensibles o polémicos no permitidos.",
          "No usar hashtags, dificultando la organización y búsqueda de la información."
        ],
        impact: "El uso incorrecto de Viva Engage puede afectar el clima laboral, generar conflictos innecesarios y desviar el propósito de la red social corporativa. Utilizada correctamente, la plataforma fortalece la comunicación interna, promueve el reconocimiento, la colaboración y el sentido de pertenencia, consolidando una cultura organizacional positiva y alineada con los valores de la empresa."
      },
      {
        id: "calendario",
        name: "Calendario",
        category: "communication",
        description: "Gestión eficiente del tiempo y coordinación de agendas para reuniones y eventos laborales.",
        features: ["Programación asistida", "Recordatorios", "Disponibilidad compartida", "Eventos recurrentes"],
        useCases: ["Planificación de reuniones", "Gestión de disponibilidad", "Organización personal"],
        usage: "Planificación, coordinación y gestión de reuniones, citas, eventos y recordatorios laborales, facilitando la organización del tiempo, la productividad y la colaboración entre equipos.",
        videos: [
          "https://www.youtube.com/embed/OhsiRDkXVIo"
        ],
        rules: [
          "Utiliza el calendario como canal oficial para programar reuniones y eventos laborales.",
          "Toda reunión debe contar con un objetivo claro y una agenda definida.",
          "Agenda reuniones únicamente con los participantes necesarios.",
          "Respeta la disponibilidad y los horarios laborales de los colaboradores.",
          "Evita reuniones innecesarias cuando el objetivo pueda resolverse por otro canal.",
          "Es obligatorio definir fecha, hora, duración y participantes.",
          "Las reuniones deben programarse con anticipación razonable.",
          "Las reuniones recurrentes deben revisarse periódicamente.",
          "Usa la opción de disponibilidad (libre/ocupado) para facilitar la coordinación.",
          "Cancela o actualiza oportunamente las reuniones que no se realizarán."
        ],
        bestPractices: [
          "Define un asunto claro que describa el propósito de la reunión.",
          "Incluye la agenda y material de apoyo en la invitación.",
          "Ajusta la duración realista de la reunión.",
          "Usa recordatorios de forma adecuada.",
          "Marca correctamente el estado del evento (reunión, llamada, recordatorio).",
          "Utiliza la programación asistida para evitar conflictos de horario.",
          "Graba reuniones cuando aplique y comparte el registro correspondiente.",
          "Evita bloquear agendas sin justificación clara."
        ],
        examples: {
          adequate: "Un líder agenda una reunión con objetivo claro, adjunta la agenda en la invitación, selecciona únicamente a los participantes necesarios y respeta una duración adecuada. Si la reunión se cancela, actualiza o elimina la invitación con antelación, permitiendo a los asistentes reorganizar su tiempo.",
          inadequate: "Programar reuniones sin agenda, invitar a personas que no aportan al objetivo, bloquear espacios extensos sin justificación o cancelar reuniones sin previo aviso. También es un mal uso agendar reuniones recurrentes que ya no generan valor."
        },
        commonErrors: [
          "Agendar reuniones sin objetivo ni agenda.",
          "Invitar a participantes innecesarios.",
          "Bloquear agendas sin razón clara.",
          "No cancelar reuniones que ya no aplican.",
          "Programar reuniones fuera del horario laboral sin carácter urgente."
        ],
        impact: "El uso incorrecto del calendario puede generar pérdida de productividad, saturación de reuniones, interrupciones constantes y desgaste en los equipos. Utilizado correctamente, el calendario mejora la organización del tiempo, optimiza la coordinación entre áreas y promueve una cultura de trabajo eficiente y respetuosa."
      },
      {
        id: "loop",
        name: "Loop",
        category: "communication",
        description: "Espacios de co-creación dinámica y componentes sincronizados para proyectos colaborativos.",
        features: ["Componentes vivos", "Sincronización real-time", "Integración M365"],
        useCases: ["Brainstorming", "Actas vivas", "Planeación estratégica"],
        usage: "Colaboración dinámica para crear y compartir información viva en tiempo real",
        rules: [
          "Uso para trabajo colaborativo, planeación e ideación.",
          "Espacios alineados a proyectos o iniciativas formales.",
          "Gestión de permisos bajo políticas corporativas.",
          "Respetar confidencialidad de la información.",
          "Propósito claro y responsables definidos por componente.",
          "No reemplaza SharePoint para documentos finales.",
          "Prohibido almacenar información sensible sin autorización."
        ],
        bestPractices: [
          "Define objetivo del espacio antes de compartir.",
          "Títulos claros y estructura organizada.",
          "Elimina información obsoleta.",
          "Usa Copilot para resumir y organizar.",
          "Integra con Teams u Outlook.",
          "Asigna responsables y fechas en listas.",
          "Uso para contenido dinámico (no estático)."
        ],
        examples: {
          adequate: "Lluvia de ideas para un proyecto entre áreas, con actas vivas y compromisos seguidos en tiempo real, integrando Copilot para resúmenes.",
          inadequate: "Usar como repositorio de documentos finales, guardar info confidencial sin restricciones, o para conversaciones informales."
        },
        commonErrors: [
          "Múltiples espacios para el mismo tema.",
          "No controlar permisos de edición.",
          "Información desactualizada.",
          "Sin estructura clara.",
          "Confundir con almacenamiento permanente."
        ],
        impact: "Confusión de acuerdos, duplicidad de información y riesgos de seguridad."
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
        description: "Repositorio institucional para centralizar información y asegurar el control documental.",
        features: ["Bibliotecas oficiales", "Control de versiones", "Intranet", "Permisos granulares"],
        useCases: ["Documentación oficial", "Políticas y procesos", "Gestión de permisos"],
        usage: "Centralizar y estructurar la información institucional (formatos, procesos, documentos clave).",
        videos: [
          "https://www.youtube.com/embed/cd7fDGZanmo"
        ],
        rules: [
          "Publicación de políticas, procedimientos, formatos y demás documentación oficial.",
          "La creación de sitios será gestionada exclusivamente por el área de sistemas.",
          "Se asignará un sitio por área, el cual será administrado por el líder del área correspondiente.",
          "Se establecerán niveles de permisos y restricciones para proteger la información por parte del área de sistemas",
          "Usa SharePoint como única fuente oficial de documentos para descargar.",
          "Cada líder de proceso será responsable de mantener actualizado los documentos y formatos en su última versión."
        ],
        bestPractices: [
          "Configura alertas para estar informado sobre cambios en documentos o listas clave.",
          "No descargues archivos innecesariamente: Si puedes consultar el documento en línea, evita descargarlo para mantener la seguridad de la información y reducir almacenamiento duplicado.",
          "Respeta la estructura de los documentos: No intentes modificar archivos, ya que tu acceso es solo de lectura. En caso de comentarios, usa los canales adecuados para sugerencias (Correo electrónico)",
          "Mantener una comunicación clara: Si notas información desactualizada o errores en documentos, informa a los responsables de manera clara y específica a través del correo electrónico o teams."
        ],
        examples: {
          adequate: "Un líder de proceso publica en el sitio de su área la versión oficial y aprobada de un procedimiento, asegurándose de que el nombre del archivo, la fecha y el control de versión estén correctamente identificados. Los colaboradores consultan el documento directamente en SharePoint, sin descargar copias locales necesarias, y utilizan las opciones de comentarios o los canales definidos (correo o Teams) para reportar observaciones. El área de sistemas gestiona los permisos, garantizando que solo los usuarios autorizados puedan editar o administrar la información.",
          inadequate: "Un colaborador crea carpetas o sitios sin autorización, guarda documentos locales como referencia oficial, descarga archivos para modificarlos y luego los comparte por correo o WhatsApp, o sube versiones desactualizadas sin control de cambios. Asimismo, modificar o eliminar documentos sin autorización, ignorar la estructura definida del sitio o compartir enlaces con personas no autorizadas representa un uso incorrecto de la plataforma."
        },
        commonErrors: [
          "Utilizar documentos descargados como referencia oficial.",
          "Cargar archivos sin nomenclatura, fecha o control de versión.",
          "Romper la estructura establecida del sitio por área.",
          "Otorgar permisos sin validación del área de sistemas.",
          "Usar SharePoint como repositorio personal."
        ],
        impact: "El uso incorrecto de SharePoint puede generar duplicidad de información, pérdida de control documental, riesgos de seguridad, inconsistencias en los procesos y errores operativos por el uso de versiones no oficiales. Por ello, SharePoint debe ser utilizado como la fuente única y confiable de información institucional."
      },
      {
        id: "onedrive",
        name: "OneDrive",
        category: "documents",
        description: "Almacenamiento personal de trabajo para borradores y colaboración temporal.",
        features: ["Sincronización personal", "Compartición segura", "Acceso remoto"],
        useCases: ["Borradores personales", "Colaboración temporal", "Backup individual"],
        usage: "Almacenamiento personal de trabajo y colaboración temporal de archivos. OneDrive está diseñado para que cada colaborador gestione archivos en proceso, documentos personales de trabajo y comparta información de manera controlada antes de que esta sea publicada oficialmente en SharePoint.",
        rules: [
          "OneDrive es un espacio de almacenamiento personal de trabajo, no un repositorio institucional.",
          "Úsalo para archivos en construcción, borradores o información temporal.",
          "Los documentos finales, aprobados u oficiales deben almacenarse en SharePoint.",
          "Está prohibido usar OneDrive como fuente oficial para compartir documentación institucional.",
          "Comparte archivos únicamente con las personas necesarias y por el tiempo requerido.",
          "Cada colaborador es responsable de la organización y seguridad de su OneDrive.",
          "Elimina periódicamente archivos temporales que ya no sean necesarios.",
          "No compartas enlaces de OneDrive con personas externas a la organización sin autorización.",
          "Evita subir archivos personales no relacionados con el trabajo.",
          "Al retirarse de la empresa, el colaborador debe entregar la información relevante al líder de área."
        ],
        bestPractices: [
          "Organiza tus archivos en carpetas con nombres claros y descriptivos.",
          "Usa la sincronización de archivos para trabajar sin conexión y mantener todo actualizado automáticamente.",
          "Revisa con quién estás compartiendo archivos y carpetas periódicamente.",
          "Utiliza el historial de versiones para recuperar estados anteriores de un documento.",
          "Asegúrate de que tus archivos importantes tengan una copia de seguridad o estén sincronizados correctamente.",
          "No compartas carpetas completas si solo necesitas compartir un archivo específico.",
          "Usa la opción de 'Solicitar archivos' cuando necesites que otros carguen documentos en tu OneDrive sin ver el contenido.",
          "Configura contraseñas y fechas de expiración al compartir archivos sensibles.",
          "No utilices caracteres especiales o rutas demasiado largas en los nombres de archivos.",
          "Capacítate en las herramientas de colaboración en tiempo real integradas en OneDrive."
        ],
        examples: {
          adequate: "Un colaborador está trabajando en una propuesta de proyecto que aún no está terminada. Guarda el borrador en su OneDrive personal de trabajo, lo comparte con un compañero de equipo para recibir comentarios en tiempo real y, una vez que la propuesta es aprobada y finalizada, carga la versión oficial en el sitio de SharePoint correspondiente del área.",
          inadequate: "Utilizar OneDrive como el único lugar para guardar documentos oficiales del área, no compartir los avances con los responsables, dejar archivos sensibles con acceso público o no trasladar la información a SharePoint una vez culminado el proceso."
        },
        commonErrors: [
          "Confundir OneDrive con un repositorio institucional permanente.",
          "No compartir archivos con los responsables de área.",
          "Mantener enlaces compartidos activos indefinidamente.",
          "Sincronizar carpetas personales en equipos corporativos.",
          "Ignorar el límite de almacenamiento."
        ],
        impact: "El mal uso de OneDrive puede provocar que información crítica quede aislada en cuentas personales, dificultando el acceso al equipo y generando riesgos de pérdida de datos si el colaborador se retira. Un uso adecuado garantiza agilidad en el trabajo individual y una transición fluida hacia la documentación oficial en SharePoint."
      },
      {
        id: "onenote",
        name: "OneNote",
        category: "documents",
        description: "Bloc de notas digital para organizar ideas, actas y documentación de referencia.",
        features: ["Blocs por secciones", "Búsqueda avanzada", "Soporte multimedia", "Dibujo/Anotaciones"],
        useCases: ["Actas de reunión", "Repositorio de conocimientos", "Manuales rápidos"],
        usage: "Cuaderno digital para capturar y organizar información.",
        rules: [
          "Crea blocs compartidos para proyectos de área.",
          "No guardes información confidencial sin contraseña.",
          "Mantén una estructura jerárquica clara.",
          "Revisión periódica de contenido obsoleto.",
          "Usa para documentación dinámica y notas rápidas."
        ],
        bestPractices: [
          "Usa etiquetas (Pendiente, Importante).",
          "Sincroniza en todos tus dispositivos.",
          "Inserta capturas de Outlook o documentos.",
          "Usa plantillas para actas de reuniones.",
          "Realiza búsquedas de texto en imágenes."
        ],
        examples: {
          adequate: "Bloc de notas del equipo de Marketing con ideas para campañas y actas semanales.",
          inadequate: "Un solo bloc gigante sin secciones ni orden."
        },
        commonErrors: [
          "Pérdida de sincronización por archivos muy pesados.",
          "Nombres genéricos de páginas (Página sin título).",
          "Demasiadas secciones vacías.",
          "No compartir el bloc con los interesados.",
          "Información desordenada."
        ],
        impact: "Dificultad para encontrar información y pérdida de memoria institucional."
      },
      {
        id: "stream",
        name: "Stream",
        category: "documents",
        description: "Plataforma institucional de video para formación, grabaciones y comunicación interna.",
        features: ["Grabación de pantalla", "Transcripciones automáticas", "Capítulos de video", "Integración SharePoint"],
        useCases: ["Grabaciones de reuniones", "Video-tutoriales", "Mensajes ejecutivos"],
        usage: "Gestión y visualización de videos corporativos.",
        rules: [
          "Sube videos únicamente de carácter laboral.",
          "Usa transcripciones para mejorar accesibilidad.",
          "Nombra y describe los videos claramente.",
          "Gestiona los permisos de visualización.",
          "Elimina grabaciones de reuniones que ya no sean útiles."
        ],
        bestPractices: [
          "Usa capítulos para videos largos.",
          "Añade encuestas de Forms dentro del video.",
          "Graba mensajes cortos de actualización.",
          "Organiza videos en listas de reproducción por tema.",
          "Inserta videos en páginas de SharePoint o Viva Engage."
        ],
        examples: {
          adequate: "Video-tutorial de 5 minutos sobre cómo usar el nuevo módulo de nómina.",
          inadequate: "Subir películas o contenido no relacionado con la empresa."
        },
        commonErrors: [
          "Videos sin título ni contexto.",
          "Permisos abiertos a toda la empresa innecesariamente.",
          "Audio de mala calidad.",
          "Transcripciones con errores no corregidos.",
          "No usar capítulos en grabaciones extensas."
        ],
        impact: "Consumo de almacenamiento ineficiente y dificultad para acceder al conocimiento."
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
        description: "Automatización de flujos de trabajo y tareas repetitivas para optimizar procesos.",
        features: ["Flujos en la nube", "Automatización de UI (RPA)", "Conector con M365", "Aprobaciones automáticas"],
        useCases: ["Notificaciones", "Sincronización de datos", "Procesos de aprobación"],
        usage: "Automatización de flujos de trabajo y procesos de negocio.",
        videos: [
          "https://www.youtube.com/embed/lNNtxMGLXBQ"
        ],
        rules: [
          "Sólo automatiza procesos aprobados institucionalmente.",
          "No uses flujos para manipular información sensible sin autorización.",
          "Garantiza que existan responsables para supervisar los flujos.",
          "Sigue los estándares de nomenclatura definidos.",
          "Documenta el propósito y lógica de cada flujo.",
          "Realiza pruebas en entornos controlados antes de pasar a producción.",
          "No crees flujos infinitos o con recursión descontrolada."
        ],
        bestPractices: [
          "Usa nombres descriptivos para acciones y flujos.",
          "Implementa manejo de errores (Try/Catch).",
          "Evita el uso excesivo de variables globales.",
          "Divide flujos complejos en flujos más pequeños.",
          "Usa conexiones seguras y centralizadas.",
          "Monitorea el historial de ejecución periódicamente.",
          "Optimiza el uso de conectores para reducir latencia."
        ],
        examples: {
          adequate: "Crear un flujo de aprobación para solicitudes de vacaciones que notifica automáticamente al líder y actualiza el estado en una lista de SharePoint.",
          inadequate: "Automatizar el envío masivo de correos informales o crear flujos que eliminen datos sin confirmación."
        },
        commonErrors: [
          "No contemplar casos de error o fallo en el flujo.",
          "Crear flujos duplicados para una misma tarea.",
          "Usar credenciales personales en flujos críticos del proceso.",
          "Ignorar las notificaciones de fallo.",
          "Diseñar flujos con lógica demasiado compleja en un solo paso."
        ],
        impact: "Riesgos de integridad de datos, procesos detenidos y consumo ineficiente de recursos."
      },
      {
        id: "power-apps",
        name: "Power Apps",
        category: "automation",
        description: "Creación de aplicaciones personalizadas para digitalizar procesos y toma de datos.",
        features: ["Apps de lienzo", "Model-Driven apps", "Conectores de datos", "Uso móvil/escritorio"],
        useCases: ["Registro de inspecciones", "Gestión de inventarios", "Formularios complejos"],
        usage: "Desarrollo de aplicaciones empresariales de bajo código.",
        videos: [
          "https://www.youtube.com/embed/PMJLsvTz0Zc",
          "https://www.youtube.com/embed/PMJLsvTz0Zc"
        ],
        rules: [
          "Toda aplicación debe tener un dueño de proceso definido.",
          "Las apps deben usar colores y logos institucionales.",
          "No almacenes contraseñas o datos críticos sin cifrar.",
          "Gestiona los permisos de acceso de forma estricta.",
          "Mantén un backup de las versiones publicadas.",
          "Asegura que la app sea intuitiva y fácil de usar.",
          "No utilices conectores no autorizados por TI."
        ],
        bestPractices: [
          "Define el modelo de datos antes de construir la UI.",
          "Optimiza el rendimiento reduciendo llamadas innecesarias.",
          "Implementa validaciones en todos los campos de entrada.",
          "Usa variables de contexto de manera eficiente.",
          "Asegura la compatibilidad con dispositivos móviles si aplica.",
          "Realiza pruebas de usabilidad con los usuarios finales.",
          "Incluye una sección de ayuda o soporte dentro de la app."
        ],
        examples: {
          adequate: "Una app para que los inspectores de campo registren hallazgos con fotos, que se guardan directamente en SharePoint.",
          inadequate: "Desarrollar una app sin definir el origen de datos o sin control de acceso por perfiles."
        },
        commonErrors: [
          "Lógica pesada en la propiedad OnStart de la aplicación.",
          "Ignorar la accesibilidad para usuarios con discapacidades.",
          "No probar la app en diferentes tamaños de pantalla.",
          "Sobrecargar la app con demasiadas funciones innecesarias.",
          "Uso ineficiente de la memoria y el almacenamiento local."
        ],
        impact: "Experiencia de usuario deficiente, datos incompletos y falta de adopción."
      },
      {
        id: "forms",
        name: "Forms",
        category: "automation",
        description: "Recolección estructurada de datos mediante encuestas, formularios y cuestionarios.",
        features: ["Encuestas dinámicas", "Resultados en tiempo real", "Integración Excel", "Ramas lógicas"],
        useCases: ["Evaluación de servicios", "Registro de eventos", "Encuestas de clima"],
        usage: "Creación de encuestas, cuestionarios y sondeos.",
        videos: ["https://www.youtube.com/embed/19rSj3d1iFs"],
        rules: [
          "Asegura la privacidad de los datos de los encuestados.",
          "No uses formularios para recolectar contraseñas.",
          "Define un propósito claro antes de lanzar la encuesta.",
          "Configura las fechas de inicio y cierre del formulario.",
          "Utiliza lenguaje claro y evite preguntas ambiguas.",
          "Gestiona los resultados de forma profesional.",
          "No satures a los colaboradores con encuestas innecesarias."
        ],
        bestPractices: [
          "Usa ramas lógicas para personalizar la experiencia del usuario.",
          "Añade imágenes o temas para mejorar el aspecto visual.",
          "Prueba el formulario antes de enviarlo masivamente.",
          "Exporta los datos a Excel para análisis detallados.",
          "Limita la duración de la encuesta para asegurar mayor tasa de respuesta.",
          "Usa tipos de preguntas variados (opción múltiple, calificación, etc).",
          "Incluye un mensaje de agradecimiento al finalizar."
        ],
        examples: {
          adequate: "Crear una encuesta de satisfacción post-capacitación para recolectar feedback de los participantes de forma anónima.",
          inadequate: "Solicitar datos sensibles o financieros a través de un formulario abierto."
        },
        commonErrors: [
          "Encuestas demasiado largas que los usuarios no terminan.",
          "No validar los campos de respuesta obligatorios.",
          "Olvidar configurar quién puede responder (interno/externo).",
          "No analizar los resultados de forma oportuna.",
          "Hacer preguntas que inducen a una respuesta específica."
        ],
        impact: "Datos sesgados, baja participación y posible fuga de información."
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
        description: "Asistente inteligente integrado en M365 para potenciar la creatividad y productividad.",
        features: ["Generación de texto", "Análisis de documentos", "Resumen de reuniones", "Asistencia en código"],
        useCases: ["Redacción de borradores", "Resumen de hilos de chat", "Creación de presentaciones"],
        usage: "Asistente de inteligencia artificial para productividad.",
        videos: ["https://www.youtube.com/embed/AZWk-vnAYYA"],
        rules: [
          "Valida siempre la veracidad de la información generada por IA.",
          "No ingreses información confidencial o estratégica en prompts externos.",
          "El uso debe estar enfocado en tareas laborales.",
          "No uses contenido generado para plagiar o engañar.",
          "Respeta los derechos de autor y propiedad intelectual.",
          "Sé transparente sobre el uso de la IA en tus entregables.",
          "Sigue las guías éticas de uso de IA de la compañía."
        ],
        bestPractices: [
          "Escribe prompts claros, específicos y con contexto.",
          "Itera los prompts para obtener mejores resultados.",
          "Usa Copilot para resumir reuniones de Teams y generar actas.",
          "Pide a la IA que revise y mejore tus borradores.",
          "Combina la IA con tu criterio humano profesional.",
          "Capacítate en técnicas de 'Prompt Engineering'.",
          "Utiliza la IA para aprender nuevas funciones de las herramientas M365."
        ],
        examples: {
          adequate: "Pedirle a Copilot que genere un resumen ejecutivo basado en una transcripción de una reunión de proyecto.",
          inadequate: "Confiar ciegamente en un dato estadístico generado sin verificarlo en la fuente oficial."
        },
        commonErrors: [
          "Ignorar sesgos o errores en las respuestas de la IA.",
          "Sustituir totalmente el pensamiento crítico por la IA.",
          "Usar prompts demasiado vagos que generan respuestas genéricas.",
          "No revisar la gramática y el tono del texto generado.",
          "Ingresar datos privados de clientes sin anonimizar."
        ],
        impact: "Información falsa, riesgos éticos y pérdida de calidad profesional."
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
        description: "Gestión personal de tareas y listas para organizar el trabajo diario.",
        features: ["Listas personales", "Recordatorios", "Mi día", "Sincronización M365"],
        useCases: ["Lista diaria", "Seguimiento personal", "Gestión de tareas de Outlook"],
        usage: "Planificador de tareas diarias integrado con Outlook.",
        rules: [
          "Enfocado en la gestión personal de actividades.",
          "Mantén actualizadas tus fechas de vencimiento.",
          "Clasifica tus tareas por importancia.",
          "No es una herramienta para seguimiento de proyectos grupales.",
          "Sincroniza con Outlook para mayor control."
        ],
        bestPractices: [
          "Usa la sección 'Mi Día' para priorizar.",
          "Divide tareas grandes en pasos pequeños.",
          "Activa notificaciones importantes.",
          "Revisa tus listas al iniciar y finalizar la jornada.",
          "Usa categorías o etiquetas para organizar."
        ],
        examples: {
          adequate: "Listar las 5 tareas críticas que debo completar hoy para el cierre contable.",
          inadequate: "Intentar gestionar todo el plan de un proyecto con 10 personas en To Do."
        },
        commonErrors: [
          "Saturar la lista sin prioridades.",
          "No revisar las tareas vencidas.",
          "Mezclar tareas personales no laborales.",
          "Información desactualizada.",
          "No usar recordatorios."
        ],
        impact: "Desorganización, olvido de compromisos y estrés."
      },
      {
        id: "planner",
        name: "Planner",
        category: "productivity",
        description: "Gestión visual de tareas de equipo mediante buckets y tableros Kanban.",
        features: ["Tablero Kanban", "Asignación de tareas", "Gráficos de progreso", "Integración con Teams"],
        useCases: ["Proyectos de equipo", "Gestión de campañas", "Seguimiento de entregables"],
        usage: "Gestión visual de tareas en equipo.",
        rules: [
          "Cada tarea debe tener un responsable y vencimiento.",
          "Uso para proyectos y actividades colaborativas.",
          "Mantén actualizados los estados de progreso.",
          "Nombra los buckets de forma lógica.",
          "No es para tareas de alta complejidad (usar Project)."
        ],
        bestPractices: [
          "Integra tableros en canales de Teams.",
          "Usa etiquetas de colores para prioridades.",
          "Revisa los gráficos de carga de trabajo.",
          "Adjunta archivos de referencia en las tareas.",
          "Comenta avances en los hilos de la tarea."
        ],
        examples: {
          adequate: "Tablero para el proyecto de auditoría interna con responsables por etapa.",
          inadequate: "Usar un solo bucket para 50 tareas sin categorías."
        },
        commonErrors: [
          "Tareas sin responsable asignado.",
          "Vencimientos imposibles o inexistentes.",
          "Falta de seguimiento a tareas en 'Progreso'.",
          "Duplicación de tableros.",
          "No usar las notificaciones de retraso."
        ],
        impact: "Retrasos en proyectos y falta de visibilidad en el equipo."
      },
      {
        id: "ofimatica",
        name: "Ofimática (Word, Excel, PPT)",
        category: "productivity",
        description: "Herramientas estándar para creación de documentos, hojas de cálculo y presentaciones.",
        features: ["Edición en tiempo real", "Autoguardado", "Copilot integrado", "Comentarios/Revisiones"],
        useCases: ["Informes técnicos", "Análisis financiero", "Presentaciones ejecutivas"],
        usage: "Creación y edición de documentos profesionales.",
        videos: [
          "https://www.youtube.com/embed/Bt0qR-UboIA",
          "https://www.youtube.com/embed/AklcB-yKeUw"
        ],
        rules: [
          "Usa las plantillas corporativas oficiales.",
          "Activa siempre el autoguardado en OneDrive/SharePoint.",
          "Nombra los archivos según la política de nomenclatura.",
          "Usa comentarios para revisión, no modifiques texto ajeno sin avisar.",
          "Mantén la accesibilidad de los documentos."
        ],
        bestPractices: [
          "Co-edita documentos en tiempo real con el equipo.",
          "Usa estilos de párrafo en Word para navegación.",
          "Optimiza libros de Excel (tablas, no solo rangos).",
          "Usa el diseñador de PPT para presentaciones profesionales.",
          "Usa Copilot para redactar, analizar datos o diseñar."
        ],
        examples: {
          adequate: "Presentación de resultados trimestrales creada en PPT con el equipo, usando diseño institucional.",
          inadequate: "Enviar versiones (V1, V2, Final_Final_OK) por correo en lugar de co-editar un solo link."
        },
        commonErrors: [
          "Trabajar en local sin sincronizar.",
          "Perder el control de cambios.",
          "Ignorar alertas de seguridad en macros.",
          "Sobrecargar archivos con imágenes sin comprimir.",
          "No usar tablas dinámicas en Excel."
        ],
        impact: "Duplicidad de trabajo, pérdida de versiones y falta de profesionalismo visual."
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
        description: "Análisis de datos y visualización para la toma de decisiones basada en información real.",
        features: ["Dashboards interactivos", "Modelado de datos", "Informes automáticos", "IA integrada"],
        useCases: ["Reportes de gestión", "Kpis de área", "Análisis de tendencias"],
        usage: "Visualización de datos y generación de tableros de control.",
        videos: ["https://www.youtube.com/embed/Gm6G2rXOKGA"],
        rules: [
          "Los datos mostrados deben provenir de fuentes oficiales.",
          "No compartas reportes fuera de la organización sin permiso.",
          "Garantiza que los cálculos y fórmulas (DAX) sean correctos.",
          "Mantén el diseño visual alineado a la identidad corporativa.",
          "Configura la actualización automática de datos.",
          "No expongas información sensible a perfiles no autorizados.",
          "Valida la calidad de los datos antes de publicar el informe."
        ],
        bestPractices: [
          "Usa un modelo de datos en estrella (Star Schema).",
          "Optimiza el tamaño del set de datos eliminando columnas innecesarias.",
          "Implementa filtros y segmentadores de forma intuitiva.",
          "Usa títulos claros y leyendas explicativas en cada gráfico.",
          "Diseña pensando en la jerarquía de la información (de lo general a lo específico).",
          "Prueba la velocidad de carga de los reportes.",
          "Documenta el origen y transformación de los datos."
        ],
        examples: {
          adequate: "Un tablero gerencial que muestra las ventas mensuales comparadas contra el presupuesto inicial, con posibilidad de filtrar por zona.",
          inadequate: "Gráficos confusos con demasiados colores o datos que no coinciden con la fuente original."
        },
        commonErrors: [
          "Modelos de datos con relaciones muchos a muchos no gestionadas.",
          "Cálculos DAX demasiado complejos que afectan el rendimiento.",
          "Subir datos sin limpiar o transformar previamente.",
          "Ignorar el diseño para dispositivos móviles.",
          "No actualizar las fuentes de datos periódicamente."
        ],
        impact: "Toma de decisiones con datos erróneos, confusión y falta de transparencia."
      }
    ]
  },
  {
    id: "security",
    name: "Identidad, seguridad y administración de dispositivos",
    colorClass: "text-white",
    bgClass: "bg-category-security",
    apps: [
      {
        id: "azure-ad",
        name: "Microsoft Entra ID (Azure AD)",
        category: "security",
        description: "Gestión de identidades y accesos para proteger los recursos institucionales.",
        features: ["Identidad centralizada", "MFA (Multifactor)", "Acceso condicional", "Single Sign-On (SSO)"],
        useCases: ["Control de acceso", "Autenticación segura", "Gestión de perfiles"],
        usage: "Gestión de identidades y control de acceso seguro.",
        rules: [
          "El uso de MFA (Doble factor) es obligatorio.",
          "No compartas tus credenciales de acceso bajo ningún motivo.",
          "Usa contraseñas seguras y actualízalas cuando se te solicite.",
          "Cierra sesión en equipos que no sean tuyos.",
          "Reporta intentos de acceso no autorizados inmediatamente."
        ],
        bestPractices: [
          "Usa Microsoft Authenticator como método principal de MFA.",
          "Revisa tus actividades de inicio de sesión sospechosas.",
          "Vincula tu cuenta a un solo perfil profesional.",
          "Usa el autoservicio para restablecer contraseñas si olvidas la tuya.",
          "Nunca aceptes una solicitud de MFA que no hayas iniciado tú."
        ],
        examples: {
          adequate: "Un colaborador intenta acceder a su correo desde una red desconocida y el sistema le solicita validar su identidad mediante MFA en su celular.",
          inadequate: "Anotar la contraseña en un post-it pegado al monitor o compartirla con un compañero 'para que me ayude'."
        },
        commonErrors: [
          "Aceptar notificaciones de MFA por error o descuido.",
          "Usar la misma contraseña para cuentas personales y laborales.",
          "No configurar métodos alternativos de recuperación.",
          "Ignorar las alertas de seguridad de inicio de sesión.",
          "No bloquear la sesión al retirarse del puesto de trabajo."
        ],
        impact: "Suplantación de identidad, acceso no autorizado a datos críticos y compromiso total de la red corporativa."
      },
      {
        id: "intune",
        name: "Intune",
        category: "security",
        description: "Gestión de dispositivos y aplicaciones para asegurar el acceso a la información corporativa.",
        features: ["Gestión de dispositivos (MDM)", "Gestión de apps (MAM)", "Protección de datos", "Cumplimiento"],
        useCases: ["Configuración remota", "Protección de datos móviles", "Inventario de equipos"],
        usage: "Administración de dispositivos y aplicaciones corporativas.",
        rules: [
          "Todos los dispositivos corporativos deben estar enrolados.",
          "No intentes evadir las políticas de seguridad.",
          "Reporta el robo o pérdida de un dispositivo enrolado de inmediato.",
          "Mantén el sistema operativo y apps actualizados.",
          "No instales software no autorizado en equipos corporativos."
        ],
        bestPractices: [
          "Usa el portal de empresa para instalar apps oficiales.",
          "Protege tu dispositivo con métodos de desbloqueo seguros.",
          "Separa el contenido personal del laboral en móviles.",
          "Revisa las notificaciones de cumplimiento de tu dispositivo.",
          "Consulta con TI antes de solicitar cambios en las políticas."
        ],
        examples: {
          adequate: "Un colaborador recibe su nuevo equipo y lo enrola en Intune para recibir automáticamente sus apps y configuraciones de seguridad.",
          inadequate: "Utilizar el equipo corporativo para descargar software pirata o desactivar el antivirus."
        },
        commonErrors: [
          "No realizar el enrolamiento inicial.",
          "Ignorar las solicitudes de reinicio para actualizaciones de seguridad.",
          "Perder el acceso por errores en el PIN/Contraseña.",
          "No reportar anomalías en el funcionamiento del MDM.",
          "Exponer datos corporativos en apps no gestionadas."
        ],
        impact: "Vulnerabilidades de seguridad, pérdida de datos y sanciones disciplinarias."
      }
    ]
  }
];

export const getAppById = (id: string): M365App | undefined => {
  for (const category of categories) {
    const app = category.apps.find(a => a.id === id);
    if (app) return app;
  }
  return undefined;
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(c => c.id === id);
};
