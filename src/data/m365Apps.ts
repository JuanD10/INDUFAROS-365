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
          "Publica contenido relevante y alineado con los objetivos de la empresa y tu área.",
          "Usa un lenguaje positivo y constructivo que fomente la participación.",
          "Responde y comenta con respeto, promoviendo el diálogo abierto y profesional.",
          "Comparte logros, reconocimientos y actividades de tu equipo para fortalecer la cultura organizacional.",
          "Se encuentran prohibidos los debates de carácter político, deportivo, religioso y sexual.",
          "Usa hashtags (#) para organizar temas y facilitar búsquedas.",
          "Revisa la ortografía y claridad del mensaje antes de publicarlo.",
          "Participa en encuestas y actividades propuestas por la empresa.",
          "Denuncia publicaciones que atenten contra la ética, el respeto o los valores de la organización (Presenta tus denuncias al correo ética.empresarial@grupohnc.com)"
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
          adequate: "Un líder de proceso publica en el sitio de su área la versión oficial y aprobada de un procedimiento, asegurándose de que el nombre del archivo, la fecha y el control de versión estén correctamente identificados. Los colaboradores consultan el documento directamente en SharePoint, sin descargar copias locales innecesarias, y utilizan las opciones de comentarios o los canales definidos (correo o Teams) para reportar observaciones. El área de sistemas gestiona los permisos, garantizando que solo los usuarios autorizados puedan editar o administrar la información.",
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
          "No otorgues permisos de edición o acceso externo sin la debida autorización.",
          "El usuario es responsable de la información almacenada y compartida en su OneDrive.",
          "Evita almacenar información sensible o crítica de forma permanente en OneDrive."
        ],
        bestPractices: [
          "Organiza tus archivos en carpetas claras y con nombres descriptivos.",
          "Utiliza enlaces compartidos con fecha de caducidad cuando sea posible.",
          "Revisa y limpia periódicamente archivos que ya no sean necesarios.",
          "Usa OneDrive para colaboración temporal antes de mover la versión final a SharePoint.",
          "Verifica los permisos de los archivos compartidos antes de enviar el enlace.",
          "Sincroniza solo las carpetas necesarias en dispositivos personales o corporativos.",
          "Asegúrate de que los archivos compartidos correspondan a versiones actualizadas."
        ],
        examples: {
          adequate: "Un colaborador trabaja en el borrador de un informe en su OneDrive y lo comparte temporalmente con su equipo para recibir comentarios. Una vez el documento es revisado y aprobado, se carga la versión final en el sitio de SharePoint del área, eliminando el acceso compartido en OneDrive para evitar confusión sobre la versión oficial.",
          inadequate: "Guardar documentos oficiales, políticas o formatos aprobados únicamente en OneDrive y compartirlos como referencia institucional. También es un mal uso conservar información sensible sin controles adecuados o mantener archivos compartidos de forma indefinida sin revisión de permisos."
        },
        commonErrors: [
          "Usar OneDrive como repositorio oficial de la empresa.",
          "Compartir enlaces sin controlar permisos o vigencia.",
          "Conservar versiones finales y borradores mezcladas.",
          "Compartir información sensible sin autorización.",
          "No retirar accesos cuando el archivo deja de ser necesario."
        ],
        impact: "El uso incorrecto de OneDrive puede generar pérdida de control documental, riesgos de seguridad, uso de versiones no oficiales y dependencia de archivos personales. Esto afecta la trazabilidad de la información y la continuidad operativa. Usado correctamente, OneDrive facilita la productividad individual y la colaboración controlada, complementando de manera adecuada a SharePoint y Teams."
      },
      {
        id: "onenote",
        name: "OneNote",
        category: "documents",
        description: "Cuaderno digital para minutas de reuniones y organización personal de apuntes.",
        features: ["Notas estructuradas", "Multidispositivo", "Búsqueda avanzada"],
        useCases: ["Minutas de reunión", "Seguimiento personal", "Registro de ideas"],
        usage: "Organización de notas de trabajo, registro de ideas, reuniones, apuntes operativos y documentación personal o de equipo, facilitando la consulta rápida de información y el seguimiento de actividades.",
        rules: [
          "Utiliza OneNote para notas de trabajo, minutas de reuniones y seguimiento personal o de equipo.",
          "OneNote no es un repositorio oficial de documentación institucional.",
          "Las notas estratégicas o formales deben trasladarse a los repositorios oficiales (SharePoint, Planner, etc.).",
          "Cada usuario es responsable del contenido almacenado en sus libretas.",
          "Evita almacenar información confidencial o sensible sin autorización.",
          "Las libretas compartidas deben tener un propósito claro.",
          "No dupliques información que ya esté documentada oficialmente.",
          "Mantén las libretas organizadas por secciones y páginas.",
          "El acceso a libretas compartidas debe limitarse a los involucrados.",
          "OneNote complementa, pero no reemplaza, los procesos formales."
        ],
        bestPractices: [
          "Organiza las libretas por proyectos, áreas o temas.",
          "Usa títulos claros y fechas en las páginas.",
          "Registra acuerdos y responsables en notas de reunión.",
          "Sincroniza regularmente las libretas para evitar pérdida de información.",
          "Utiliza etiquetas para resaltar tareas o puntos clave.",
          "Revisa y limpia notas antiguas que ya no sean necesarias.",
          "Comparte libretas solo cuando sea necesario."
        ],
        examples: {
          adequate: "Un colaborador registra en OneNote la minuta de una reunión, anotando acuerdos, responsables y fechas. Luego, las tareas definidas se trasladan a Planner y los documentos oficiales se almacenan en SharePoint. OneNote queda como soporte de consulta rápida y registro histórico personal o de equipo.",
          inadequate: "Usar OneNote como repositorio oficial de procedimientos, guardar información sensible con controles o depender exclusivamente de notas personales para procesos críticos. También es un mal uso compartir libretas sin control de acceso."
        },
        commonErrors: [
          "Usar OneNote como archivo oficial de la empresa.",
          "Guardar información sensible sin autorización.",
          "Mantener libretas desordenadas o sin estructura.",
          "No trasladar acuerdos a herramientas formales.",
          "Compartir libretas con usuarios no involucrados."
        ],
        impact: "El uso incorrecto de OneNote puede generar desorden de información, pérdida de acuerdos formales y riesgos de seguridad. Utilizado correctamente, OneNote mejora la organización personal, facilita el seguimiento de ideas y reuniones, y complementa eficazmente las herramientas oficiales de gestión y comunicación."
      },
      {
        id: "stream",
        name: "Stream",
        category: "documents",
        description: "Gestión y visualización de video corporativo, capacitaciones y comunicados.",
        features: ["Streaming seguro", "Capítulos", "Transcripciones", "Integración Teams"],
        useCases: ["Capacitación", "Comunicados gerencia", "Tutoriales"],
        usage: "Microsoft Stream se utiliza como la plataforma corporativa para la gestión, publicación y visualización de contenidos de video institucionales, como capacitaciones, comunicados, reuniones grabadas, tutoriales y piezas audiovisuales internas, integradas con SharePoint, Teams y Microsoft 365.",
        rules: [
          "Stream is el canal oficial para el almacenamiento y distribución de videos corporativos.",
          "Los videos deben estar asociados a un área, proceso o propósito organizacional claro.",
          "Las grabaciones deben almacenarse en el sitio de SharePoint del área correspondiente.",
          "El acceso a los videos se gestiona mediante los permisos definidos por el área de sistemas.",
          "Está prohibido publicar contenido que incumpla las políticas de ética, confidencialidad y seguridad de la información.",
          "Los videos deben tener títulos, descripciones y fechas claras.",
          "No se permite el uso de Stream para contenido personal, recreativo o ajeno a la actividad laboral."
        ],
        bestPractices: [
          "Nombrar los videos de forma clara y estandarizada.",
          "Añadir descripciones que indiquen objetivo, audiencia y fecha.",
          "Usar capítulos y marcas de tiempo para mejorar la experiencia del usuario.",
          "Subir los videos en la ubicación correcta del sitio de SharePoint.",
          "Eliminar o archivar contenidos obsoletos.",
          "Usar Stream para capacitaciones y material reutilizable.",
          "Validar que los permisos de acceso sean los correctos antes de compartir."
        ],
        examples: {
          adequate: "📌 Capacitación interna de procesos: El área de Talento Humano graba una capacitación, la almacena en su sitio de SharePoint mediante Stream, asigna permisos de visualización a los colaboradores y comparte el enlace oficial a través de Teams.",
          inadequate: "Subir videos personales o informales, publicar grabaciones sin contexto o sin título, almacenar videos en ubicaciones incorrectas, compartir enlaces sin validar permisos, usar Stream como repositorio temporal sin orden."
        },
        commonErrors: [
          "No nombrar correctamente los videos.",
          "Dejar grabaciones desactualizadas disponibles.",
          "Compartir videos sin revisar permisos.",
          "Duplicar videos en distintas ubicaciones.",
          "No usar capítulos o descripciones."
        ],
        impact: "Dificultad para encontrar información clave, consumo innecesario de almacenamiento, riesgos de exposición de información sensible, baja adopción de la plataforma, pérdida de valor del contenido audiovisual corporativo."
      },
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
        description: "Optimización de procesos mediante flujos de trabajo automáticos y aprobaciones digitales.",
        features: ["Flujos automatizados", "Aprobaciones", "Conectores", "RPA"],
        useCases: ["Aprobaciones digitales", "Notificaciones auto", "Integración datos"],
        usage: "Diseño y ejecución de flujos de trabajo automatizados para optimizar procesos, reducir tareas manuales, mejorar la eficiencia operativa y asegurar la trazabilidad de las actividades.",
        rules: [
          "Utiliza Power Automate para automatizar procesos recurrentes, aprobaciones y notificaciones.",
          "Todo flujo debe estar asociado a un proceso definido y documentado.",
          "La creación de flujos institucionales debe ser aprobada por el líder del proceso y el área de sistemas.",
          "Cada flujo debe contar con un responsable funcional and un responsable técnico.",
          "Está prohibido crear flujos que manipulen información sensible sin los controles adecuados.",
          "Evita duplicar flujos para un mismo proceso.",
          "Los flujos deben documentarse indicando su objetivo, origen de datos y alcance.",
          "Se debe establecer monitoreo y validación periódica de los flujos activos.",
          "Los flujos críticos deben contar con planes de contingencia o reversión.",
          "No utilices Power Automate como reemplazo de controles o decisiones humanas no autorizadas."
        ],
        bestPractices: [
          "Diseña el flujo con lógica clara antes de construirlo.",
          "Usa nombres descriptivos para flujos y acciones.",
          "Implementa validaciones y controles de error.",
          "Limita los permisos y accesos a lo estrictamente necesario.",
          "Documenta cada flujo al momento de su creación.",
          "Prueba los flujos en escenarios reales antes de su liberación.",
          "Monitorea el historial de ejecuciones para detectar fallas.",
          "Optimiza los flujos para evitar ejecuciones innecesarias."
        ],
        examples: {
          adequate: "Un área automatiza un flujo de aprobación de solicitudes internas que se inicia desde Microsoft Forms, envía notificaciones controladas por correo o Teams y almacena los resultados en SharePoint. El flujo fue documentado, aprobado por el líder del proceso y probado antes de su puesta en producción, contando con validaciones de error y responsables definidos.",
          inadequate: "Crear flujos sin documentación ni aprobación, automatizar procesos críticos sin validaciones, manipular datos sensibles sin controles de seguridad o depender de flujos creados por usuarios sin respaldo del área de sistemas. También es un mal uso no monitorear flujos que están fallando o duplicar automatizaciones existentes."
        },
        commonErrors: [
          "Crear flujos sin responsable definido.",
          "Falta de manejo de errores y excepciones.",
          "Duplicar flujos para el mismo proceso.",
          "Automatizar procesos no documentados.",
          "No revisar el historial de ejecuciones.",
          "Usar flujos personales para procesos institucionales."
        ],
        impact: "El uso incorrecto de Power Automate puede generar fallos operativos, pérdida de información, automatizaciones ineficientes y riesgos de seguridad. Cuando se utiliza correctamente, Power Automate permite estandarizar procesos, reducir errores humanos, mejorar los tiempos de respuesta y fortalecer el control y la trazabilidad de las operaciones."
      },
      {
        id: "power-apps",
        name: "Power Apps",
        category: "automation",
        description: "Creación de aplicaciones de bajo código para digitalizar procesos y captura de datos.",
        features: ["Apps móviles", "Low-code", "Conexión datos", "Formularios"],
        useCases: ["Digitalización procesos", "Captura de campo", "Apps gestión"],
        usage: "Microsoft Power Apps se utiliza para el desarrollo de aplicaciones empresariales de bajo código (low-code) que permiten digitalizar procesos manuales, recolectar datos en campo, automatizar tareas and mejorar la interacción de los usuarios con la información institucional.",
        rules: [
          "La creación de aplicaciones debe estar orientada a resolver necesidades de procesos institucionales definidos y aprobados.",
          "Toda aplicación institucional debe contar con la autorización del líder del proceso y del área de sistemas.",
          "Cada aplicación debe tener asignado un responsable funcional y un responsable técnico.",
          "Utiliza únicamente fuentes de datos oficiales y autorizadas para la alimentación de las aplicaciones.",
          "No dupliques aplicaciones que ya existan para el mismo fin organizacional.",
          "Está prohibido gestionar información sensible o confidencial sin los controles de seguridad establecidos.",
          "Es obligatoria la documentación básica de la aplicación (objetivo, lógica, flujo de datos).",
          "Los permisos de acceso y edición serán controlados y auditados por el área de sistemas.",
          "Las aplicaciones deben pasar por una fase de pruebas antes de su publicación oficial.",
          "No se permite el uso de Power Apps para aplicaciones de carácter personal o ajeno a la gestión corporativa."
        ],
        bestPractices: [
          "Diseña la lógica y la interfaz de usuario (UI) antes de iniciar el desarrollo.",
          "Mantén una nomenclatura clara y consistente en controles, variables y colecciones.",
          "Asegura la calidad de los datos mediante validaciones en los campos de entrada.",
          "Aplica principios de simplicidad y facilidad de uso para el usuario final (UX).",
          "Realiza un control de versiones de la aplicación.",
          "Documenta los cambios realizados en cada actualización.",
          "Realiza pruebas exhaustivas con usuarios finales en diferentes dispositivos."
        ],
        examples: {
          adequate: "📌 Aplicación de registro de inspecciones en campo: Se desarrolla una aplicación que permite a los colaboradores registrar hallazgos desde sus dispositivos móviles, conectada a una lista de SharePoint y con un flujo de aprobación en Power Automate. La aplicación cuenta con validaciones de datos, está documentada y fue aprobada por el área de sistemas antes de su uso oficial.",
          inadequate: "Crear aplicaciones conectadas a fuentes de datos no oficiales, gestionar procesos críticos sin las debidas validaciones, publicar aplicaciones sin control de acceso o sin haber realizado pruebas previas. También es un mal uso duplicar soluciones existentes o no documentar el funcionamiento de la aplicación."
        },
        commonErrors: [
          "Desarrollar aplicaciones sin un proceso definido.",
          "Duplicar soluciones existentes.",
          "Falta de manejo de errores y validaciones de datos.",
          "Otorgar permisos de acceso excesivos.",
          "No documentar la lógica de la aplicación."
        ],
        impact: "El uso incorrecto de Power Apps puede generar soluciones frágiles, descontrol en el manejo de la información, inconsistencia de datos y riesgos de seguridad. Cuando se utiliza correctamente, Power Apps permite una rápida digitalización de procesos, mejora la calidad de la información recolectada, aumenta la productividad y facilita la toma de decisiones basada en datos reales y confiables."
      },
      {
        id: "forms",
        name: "Forms",
        category: "automation",
        description: "Recolección estructurada de información mediante encuestas y registros digitales.",
        features: ["Encuestas dinámicas", "Análisis automático", "Ramificación lógica"],
        useCases: ["Evaluaciones", "Feedback", "Registros"],
        usage: "Microsoft Forms se utiliza para el diseño and aplicación de formularios, encuestas, sondeos and cuestionarios digitales que permiten recolectar información de manera estructurada, ágil and segura, facilitando el análisis de datos en tiempo real.",
        rules: [
          "Utiliza Microsoft Forms para la creación de encuestas de satisfacción, evaluaciones de capacitación, registros de asistencia y formularios de recolección de datos internos.",
          "Cada formulario debe tener un propósito claro y estar alineado con un proceso o iniciativa institucional.",
          "La creación de formularios para procesos críticos o masivos debe ser aprobada por el líder del proceso correspondiente.",
          "Evita la duplicidad de formularios para un mismo fin administrativo.",
          "Asegura que el tratamiento de la información recolectada cumpla con las políticas de privacidad y protección de datos personales.",
          "No solicites información sensible o confidencial a través de Forms sin la debida autorización y justificación técnica.",
          "Es responsabilidad del creador del formulario revisar y almacenar de forma segura los resultados obtenidos.",
          "Los formularios deben tener una vigencia definida y ser desactivados una vez cumplido su objetivo.",
          "El responsable de cada formulario debe garantizar que la información sea procesada y comunicada a los interesados cuando aplique."
        ],
        bestPractices: [
          "Define el objetivo y la audiencia del formulario antes de crearlo.",
          "Utiliza títulos y descripciones claros para orientar al usuario.",
          "Solicita únicamente la información necesaria para evitar formularios extensos y fatiga del usuario.",
          "Configura validaciones en los campos (números, fechas, obligatoriedad) para asegurar la calidad de la data.",
          "Realiza una prueba del formulario antes de su publicación definitiva.",
          "Informa a los encuestados sobre el uso que se le dará a la información recolectada.",
          "Analiza los resultados utilizando las gráficas integradas o exporta a Excel para un análisis detallado.",
          "Desactiva la recepción de respuestas una vez finalizado el periodo de recolección."
        ],
        examples: {
          adequate: "📌 Evaluación de una sesión de capacitación: Se crea un formulario con un objetivo claro, se define la fecha de cierre, se validan los campos obligatorios y se cuenta con la aprobación del líder de formación. Los resultados son analizados para identificar oportunidades de mejora en futuros eventos.",
          inadequate: "Recolectar datos sensibles sin autorización, crear formularios extensos sin un objetivo definido, mantener encuestas abiertas por tiempo indefinido sin responsable de análisis o usar Forms para capturar información que ya existe en otras bases de datos institucionales."
        },
        commonErrors: [
          "Diseñar formularios extensos o con preguntas irrelevantes.",
          "Utilizar preguntas ambiguas que confundan al encuestado.",
          "No establecer una fecha de cierre para la recolección de datos.",
          "Duplicar encuestas para el mismo grupo de interés.",
          "No realizar el análisis de la información recolectada."
        ],
        impact: "El uso incorrecto de Microsoft Forms puede generar datos incompletos o erróneos, molestia en los usuarios por exceso de encuestas, pérdida de credibilidad institucional y riesgos en el manejo de datos personales. Cuando se utiliza de forma estratégica, Forms agiliza la toma de decisiones, facilita la escucha activa de los colaboradores y optimiza la recolección de insumos para la mejora de procesos."
      },
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
        description: "Asistente inteligente para potenciar la productividad y generación de contenido.",
        features: ["Generación texto/código", "Resúmenes", "Análisis datos", "Asistencia real-time"],
        useCases: ["Redacción borradores", "Análisis tendencias", "Síntesis info"],
        usage: "Microsoft Copilot se utiliza como un asistente de inteligencia artificial para apoyar la productividad, la generación de borradores de contenido, el resumen de información, el análisis de datos y la optimización de tareas diarias en el ecosistema Microsoft 365.",
        rules: [
          "Copilot debe considerarse una herramienta de apoyo, no una fuente única y definitiva para la toma de decisiones.",
          "Está estrictamente prohibido ingresar información confidencial, secretos industriales o datos personales sensibles en los prompts de Copilot.",
          "El usuario es el único responsable de validar, corregir y aprobar el contenido generado por la IA antes de su uso.",
          "No utilices Copilot para reemplazar procesos de aprobación formal o controles de calidad humanos.",
          "Toda comunicación o documento oficial generado con apoyo de Copilot debe pasar por una revisión humana obligatoria.",
          "El uso de Copilot debe estar alineado con las políticas de ética, seguridad y valores corporativos.",
          "El acceso a Copilot está sujeto a los límites de licenciamiento y perfiles autorizados por el área de sistemas.",
          "Sistemas gestiona y audita los permisos de uso de la herramienta.",
          "No se debe presentar información generada por la IA como conocimiento propio sin haber validado su veracidad y pertinencia."
        ],
        bestPractices: [
          "Define un objetivo claro y proporciona contexto suficiente en tus solicitudes (prompts).",
          "Ajusta y personaliza las respuestas generadas para que se alineen con el tono y la cultura organizacional.",
          "Verifica siempre las fuentes de datos y las cifras proporcionadas por el asistente.",
          "Utiliza Copilot para agilizar la redacción de correos, resúmenes de reuniones y esquematización de proyectos.",
          "Mantén un juicio crítico y ético sobre las recomendaciones sugeridas por la IA.",
          "Aprende de las sugerencias del asistente para mejorar tus propias habilidades digitales."
        ],
        examples: {
          adequate: "📌 Resumen de un documento extenso: Un colaborador utiliza Copilot para obtener los puntos clave de un informe de 50 páginas. Posteriormente, el colaborador lee el resumen, valida la información técnica con el documento original y redacta un correo institucional con sus propias conclusiones, citando los datos verificados.",
          inadequate: "Generar un informe financiero crítico y enviarlo sin revisión humana, ingresar datos estratégicos del negocio en el chat de IA, o confiar ciegamente en una respuesta académica sin validar su exactitud. También es un mal uso delegar decisiones de liderazgo o talento humano exclusivamente a las recomendaciones de la herramienta."
        },
        commonErrors: [
          "Confianza ciega en la información generada por la IA.",
          "Ingresar información confidencial en los prompts.",
          "Omitir la revisión y validación humana obligatoria.",
          "Reemplazar aprobaciones formales por sugerencias de Copilot.",
          "Uso para fines no laborales o contenidos inapropiados."
        ],
        impact: "El uso inadecuado de Copilot puede generar errores en la información oficial, riesgos de seguridad por fuga de datos, sesgos en la toma de decisiones y posibles incumplimientos éticos o legales. Cuando se utiliza de forma responsable, Copilot potencia la creatividad, mejora la eficiencia operativa y permite a los colaboradores enfocarse en tareas de alto valor estratégico."
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
        description: "Gestión personal de tareas y pendientes individuales sincronizados.",
        features: ["Listas Mi Día", "Recordatorios", "Integración Outlook", "Pasos"],
        useCases: ["Pendientes diarios", "Recordatorios personales", "Tareas Outlook"],
        usage: "Microsoft To Do se utiliza como la herramienta oficial para la gestión personal y ligera de tareas individuales, permitiendo a los colaboradores organizar sus pendientes diarios, establecer recordatorios y sincronizar compromisos integrados con Outlook y Planner.",
        rules: [
          "Utilza Microsoft To Do como la herramienta principal para la gestión de tus tareas individuales de trabajo.",
          "To Do es para uso personal; para seguimiento de tareas grupales o proyectos de área, utiliza Microsoft Planner.",
          "Las tareas registradas deben estar asociadas a compromisos laborales reales.",
          "Se recomienda sincronizar las tareas con los correos marcados de Outlook para una gestión centralizada.",
          "El contenido de las tareas debe ser claro y profesional.",
          "No registres información sensible o estratégica del negocio sin seguir los lineamientos de seguridad establecidos por el área de sistemas."
        ],
        bestPractices: [
          "Crea listas temáticas para organizar diferentes tipos de pendientes.",
          "Utiliza fechas de vencimiento y recordatorios para priorizar tus actividades.",
          "Desglosa tareas complejas en pasos más pequeños para facilitar su ejecución.",
          "Revisa cada mañana la sección 'Mi día' para planificar tu jornada laboral.",
          "Utiliza etiquetas para agrupar tareas similares.",
          "Elimina o archiva listas de tareas que ya hayan sido completadas.",
          "Limpia periódicamente tus pendientes para mantener la lista actualizada y manejable."
        ],
        examples: {
          adequate: "📌 Organización de la jornada diaria: Un colaborador marca un correo importante en Outlook, el cual aparece automáticamente en su lista de tareas de To Do. Luego, agrega pasos específicos para completar la solicitud, asigna una fecha de vencimiento y añade la tarea a 'Mi día' para asegurar su cumplimiento durante la jornada.",
          inadequate: "Intentar controlar las tareas de todo un equipo de trabajo a través de To Do, duplicar planes de seguimiento que ya existen en Planner, o registrar tareas personales ajenas a la labor profesional sin distinción. También es un mal uso saturar las listas con pendientes irrelevantes o sin fecha de compromiso."
        },
        commonErrors: [
          "Registrar tareas vagas o sin fecha de vencimiento.",
          "Saturar la lista de tareas sin establecer prioridades.",
          "Duplicar información entre To Do y Planner innecesariamente.",
          "No marcar como completadas las tareas finalizadas.",
          "No revisar la sección 'Mi día' regularmente."
        ],
        impact: "El uso inadecuado de Microsoft To Do puede generar desorganización personal, pérdida de control sobre los compromisos laborales, baja productividad y estrés por acumulación de pendientes. Utilizado correctamente, To Do mejora el enfoque individual, facilita el cumplimiento de objetivos diarios y optimiza la gestión del tiempo personal."
      },
      {
        id: "planner",
        name: "Planner",
        category: "productivity",
        description: "Gestión visual de tareas colaborativas y seguimiento de compromisos de equipo.",
        features: ["Tableros Kanban", "Buckets", "Asignación visual", "Gráficos progreso"],
        useCases: ["Proyectos áreas", "Seguimiento planes", "Tareas equipo"],
        usage: "Microsoft Planner se utiliza para la planeación, asignación and seguimiento del trabajo colaborativo mediante tableros visuales, permitiendo a los equipos organizar proyectos, gestionar tareas compartidas and monitorear el progreso de los objetivos grupales de manera integrada con Teams.",
        rules: [
          "Utiliza Microsoft Planner para la gestión de tareas de equipo, seguimiento de proyectos de área o planes de acción colaborativos.",
          "Cada plan de tareas debe estar asociado a un equipo de trabajo o canal específico en Microsoft Teams.",
          "Toda tarea creada debe contar con un responsable asignado, una fecha de vencimiento y una descripción clara del entregable.",
          "El líder del área o proyecto es el responsable de administrar el tablero y asegurar que los buckets (categorías) sean coherentes con el proceso.",
          "Evita la duplicidad de tareas para un mismo entregable.",
          "Planner se establece como la herramienta oficial para el seguimiento de compromisos en reuniones de equipo.",
          "Los archivos relacionados con las tareas deben estar linkeados desde SharePoint para asegurar el control documental.",
          "Actualizar el estado de las tareas (No iniciada, En curso, Completada) oportunamente para reflejar el progreso real del equipo.",
          "No utilices Planner para conversaciones informales o temas que deben tratarse por chat o correo electrónico."
        ],
        bestPractices: [
          "Define un objetivo claro para el plan antes de iniciar la creación de tareas.",
          "Divide los proyectos en tareas pequeñas y manejables.",
          "Utiliza las etiquetas de colores para identificar prioridades, tipos de tareas o riesgos.",
          "Usa la sección de comentarios en cada tarea para dejar evidencia de avances o aclaraciones técnicas.",
          "Realiza una revisión periódica del tablero en las reuniones de seguimiento de equipo.",
          "Utiliza los gráficos de progreso de Planner para identificar cuellos de botella.",
          "Planifica las tareas por buckets lógicos (Ej: Por fase de proyecto, por tipo de actividad)."
        ],
        examples: {
          adequate: "📌 Seguimiento de un proyecto de área: El líder de un equipo crea un plan en Planner con buckets divididos por fases de implementación. Cada tarea tiene un responsable, una fecha clara y el equipo comenta los avances diariamente, actualizando el estado de las mismas conforme se completan. Los documentos de soporte están vinculados desde el sitio de SharePoint del equipo.",
          inadequate: "Mantener planes sin responsables asignados, crear tareas sin fecha de compromiso, o usar el tablero como un simple listado de ideas sin gestión real. También es un mal uso adjuntar archivos locales a las tareas en lugar de usar enlaces a SharePoint, o no actualizar el progreso del plan durante semanas."
        },
        commonErrors: [
          "Crear tareas sin asignar responsable ni fecha.",
          "No actualizar el progreso de las tareas asignadas.",
          "Usar Planner como un listado pasivo sin gestión activa.",
          "Adjuntar archivos desde la computadora local directamente.",
          "No definir un objetivo claro para cada plan creado."
        ],
        impact: "El uso incorrecto de Microsoft Planner puede generar falta de visibilidad sobre los avances, incumplimiento de compromisos, desorganización en el equipo y reprocesos por falta de claridad en las responsabilidades. Cuando se utiliza correctamente, Planner mejora la transparencia administrativa, fortalece el trabajo en equipo, optimiza el cumplimiento de plazos y facilita el monitoreo ágil de los resultados organizacionales."
      },
      {
        id: "ofimatica",
        name: "Ofimática",
        category: "productivity",
        description: "Herramientas estándar para creación y análisis de documentos (Word, Excel, PowerPoint).",
        features: ["Documentación", "Análisis datos", "Presentaciones", "Coautoría"],
        useCases: ["Informes", "Cálculos", "Capacitaciones"],
        usage: "Las herramientas de ofimática (Word, Excel y PowerPoint) se utilizan para la creación, edición, análisis y presentación de información corporativa, facilitando la documentación de procesos, el cálculo de indicadores y la comunicación de resultados estratégicos.",
        rules: [
          "Todos los documentos oficiales generados deben almacenarse en SharePoint o OneDrive según corresponda.",
          "Es obligatorio el uso de las plantillas corporativas vigentes para la creación de informes, presentaciones y formatos institucionales.",
          "La información plasmada en los documentos de ofimática debe ser veraz, actualizada y profesional.",
          "El control de versiones debe realizarse a través de las funciones nativas de Microsoft 365, evitando renombrar archivos como “v2”, ”final”, etc.",
          "Está prohibido compartir documentos que contengan información sensible o estratégica sin los permisos de acceso definidos.",
          "Respeta la estructura, tipografía y formatos estandarizados por la organización en cada herramienta."
        ],
        bestPractices: [
          "Identifica tus archivos con nombres claros, cortos y estandarizados.",
          "Aprovecha las funciones de coautoría para trabajar en tiempo real con tu equipo y evitar la creación de múltiples copias.",
          "Utiliza el control de cambios y comentarios para revisiones colaborativas.",
          "Asegura la calidad visual y ortográfica de tus documentos antes de su distribución final.",
          "Usa Excel para el análisis estructurado de datos y evita su uso como base de datos masiva o CRM.",
          "Crea presentaciones de PowerPoint dinámicas, evitando el exceso de texto y priorizando la claridad visual.",
          "Utiliza la protección de archivos con contraseña o cifrado cuando la información lo requiera."
        ],
        examples: {
          adequate: "📌 Elaboración de un informe de gestión: Un colaborador utiliza la plantilla institucional en Word, realiza el análisis de datos en Excel utilizando tablas dinámicas y sintetiza los resultados en una presentación de PowerPoint. Todos los archivos se almacenan en el sitio de SharePoint del área y se comparten mediante enlaces controlados para su revisión bajo el esquema de coautoría.",
          inadequate: "Mantener múltiples versiones de un mismo archivo en carpetas locales con nombres confusos como “informe_final_v2_este_si”, saturar presentaciones con exceso de texto y transiciones distractoras, o utilizar tipografías y colores no institucionales en documentos corporativos oficiales. También es un mal uso compartir archivos pesados por correo electrónico en lugar de usar enlaces de SharePoint."
        },
        commonErrors: [
          "Mantener múltiples versiones manuales de un archivo.",
          "No utilizar las plantillas institucionales obligatorias.",
          "Omitir la validación de fórmulas y datos en hojas de cálculo.",
          "Saturar documentos y presentaciones con información irrelevante.",
          "Compartir archivos sin configurar correctamente los permisos de acceso."
        ],
        impact: "El uso incorrecto de las herramientas de ofimática puede generar desorganización documental, riesgos de error en la información crítica, pérdida de la imagen institucional y dificultades para la colaboración eficiente. Utilizadas bajo los estándares definidos, estas herramientas fortalecen la profesionalización de la gestión, aseguran la calidad de la información y facilitan la toma de decisiones basada en reportes claros y confiables."
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
        description: "Visualización interactiva de indicadores para la toma de decisiones basada en datos.",
        features: ["Tableros control", "Medidas DAX", "Actualización auto", "RLS"],
        useCases: ["KPIs negocio", "Reportes gerenciales", "Monitoreo real-time"],
        usage: "Microsoft Power BI se utiliza para el análisis, visualización and monitoreo de información empresarial mediante tableros interactivos (dashboards), facilitando la toma de decisiones basada en indicadores clave de desempeño (KPIs) and datos reales obtenidos de diversas fuentes tecnológicas.",
        rules: [
          "Utiliza Power BI como la herramienta oficial para el análisis y visualización de datos de la organización.",
          "Todo reporte o tablero desarrollado debe basarse en fuentes de información oficiales y validadas por el área de sistemas.",
          "La creación y publicación de tableros institucionales requiere la autorización del líder del proceso y el visto bueno técnico de sistemas.",
          "Cada tablero debe tener un responsable funcional (dueño del dato) and un responsable técnico del modelo.",
          "Define niveles de seguridad y acceso acordes a la sensibilidad de la información plasmada en el reporte.",
          "Evita la duplicidad de indicadores; antes de desarrollar un nuevo reporte, verifica si la información ya existe en tableros consolidados.",
          "Los modelos de datos deben construirse bajo buenas prácticas de rendimiento y escalabilidad (Modelado en estrella, medidas DAX claras).",
          "La publicación de reportes debe realizarse en las áreas de trabajo (workspaces) oficiales y no en perfiles personales.",
          "Se debe definir la periodicidad de actualización de los datos y asegurar su correcto funcionamiento.",
          "Cualquier modificación en las consultas o medidas principales debe ser documentada y comunicada a los interesados."
        ],
        bestPractices: [
          "Define el objetivo del tablero y las preguntas de negocio que debe responder antes de iniciar el desarrollo.",
          "Usa modelos de datos estructurados para optimizar el rendimiento de las visualizaciones.",
          "Utiliza visualizaciones simples, claras y orientadas a la experiencia del usuario final.",
          "Implementa seguridad a nivel de fila (RLS) cuando el reporte contenga información que deba ser filtrada por perfiles.",
          "Valida los resultados del tablero con los responsables del dato antes de su distribución final.",
          "Documenta las métricas principales y las fuentes de origen en una sección de glosario dentro del reporte.",
          "Mantén el diseño alineado con la identidad visual corporativa."
        ],
        examples: {
          adequate: "📌 Tablero de indicadores financieros: Se desarrolla un reporte conectado automáticamente al sistema transaccional, con métricas de ingresos y gastos validadas por el área financiera. El tablero se publica en el workspace corporativo, cuenta con permisos de acceso segmentados y se actualiza diariamente al inicio de la jornada.",
          inadequate: "Crear reportes con extracciones de datos manuales sin validación, duplicar tableros con métricas que muestran resultados contradictorios para el mismo indicador, o publicar información sensible en espacios públicos sin control de acceso. También es un mal uso saturar los reportes con visualizaciones innecesarias que dificultan la interpretación de los datos críticos."
        },
        commonErrors: [
          "Construir reportes sobre fuentes de datos no confiables o manuales.",
          "Falta de validación de los resultados con los dueños del proceso.",
          "Publicar tableros en espacios de trabajo personales.",
          "No implementar controles de acceso y seguridad de la información.",
          "Desarrollar modelos de datos excesivamente complejos o ineficientes."
        ],
        impact: "El uso incorrecto de Power BI puede generar toma de decisiones basadas en datos erróneos, duplicidad de esfuerzos, riesgos de seguridad de la información corporativa y confusión entre las áreas por falta de estandarización de indicadores. Cuando se utiliza correctamente, Power BI democratiza el acceso a la información, mejora la transparencia operativa y permite una gestión estratégica basada en evidencias y resultados medibles."
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
        id: "azure-ad",
        name: "Azure AD (Entra ID)",
        category: "security",
        description: "Control de identidades y accesos seguros a los recursos digitales.",
        features: ["MFA", "SSO", "Acceso condicional", "Gestión roles"],
        useCases: ["Autenticación", "Control accesos", "Gestión usuarios"],
        usage: "Microsoft Azure AD (Entra ID) se utiliza para la gestión centralizada de identidades, autenticación and control de accesos a los sistemas, aplicaciones and recursos digitales de la organización, garantizando la seguridad and el acceso adecuado de los usuarios.",
        rules: [
          "Azure AD es la fuente única y oficial de gestión de identidades de la organización.",
          "Todas las cuentas de usuario deben estar asociadas a una persona identificada.",
          "La creación, modificación y eliminación de cuentas es responsabilidad del área de sistemas.",
          "Los accesos deben asignarse según el principio de mínimo privilegio.",
          "Está prohibido compartir credenciales entre usuarios.",
          "Toda baja de personal debe reflejarse oportunamente en Azure AD.",
          "Se deben aplicar políticas de seguridad definidas (MFA, contraseñas, acceso condicional).",
          "El acceso a aplicaciones y servicios debe estar justificado por función o rol.",
          "Las cuentas con privilegios elevados deben estar debidamente controladas y auditadas.",
          "No se deben crear cuentas genéricas sin aprobación formal."
        ],
        bestPractices: [
          "Habilita la autenticación multifactor (MFA) en todas las cuentas.",
          "Revisa periódicamente los accesos asignados a usuarios y aplicaciones.",
          "Usa grupos de seguridad para asignar permisos.",
          "Aplica políticas de acceso condicional según el contexto de riesgo.",
          "Documenta roles y permisos críticos.",
          "Monitorea inicios de sesión y alertas de seguridad.",
          "Deshabilita cuentas inactivas o no autorizadas de forma oportuna."
        ],
        examples: {
          adequate: "📌 Gestión de accesos: El área de sistemas gestiona el alta de un nuevo colaborador creando su cuenta en Azure AD, asignándole accesos según su rol y habilitando MFA. Cuando el colaborador cambia de área o se retira de la empresa, los permisos se ajustan o la cuenta se deshabilita de forma inmediata, manteniendo la seguridad y la trazabilidad.",
          inadequate: "Compartir credenciales entre usuarios, mantener cuentas activas de empleados retirados, asignar privilegios excesivos sin justificación o crear cuentas genéricas para múltiples personas. También es un mal uso desactivar controles de seguridad por comodidad."
        },
        commonErrors: [
          "Crear cuentas genéricas o sin responsable.",
          "No retirar accesos a tiempo cuando un usuario cambia de rol o sale de la empresa.",
          "Asignar permisos directamente a usuarios en lugar de grupos.",
          "Deshabilitar MFA o políticas de seguridad.",
          "No monitorear accesos sospechosos."
        ],
        impact: "El uso incorrecto de Azure AD puede generar accesos no autorizados, fugas de información, incumplimientos normativos y altos riesgos de ciberseguridad. Utilizado correctamente, Azure AD fortalece el control de identidades, mejora la seguridad de los accesos y garantiza la continuidad operativa de la organización."
      },
      {
        id: "intune",
        name: "Intune",
        category: "security",
        description: "Administración de dispositivos y cumplimiento de políticas de seguridad corporativas.",
        features: ["MDM/MAM", "Borrado remoto", "Cumplimiento", "Seguridad endpoints"],
        useCases: ["Gobernanza dispositivos", "Protección datos móviles", "BYOD"],
        usage: "Microsoft Intune se utiliza para la gestión centralizada de dispositivos corporativos and personales (BYOD), aplicación de políticas de seguridad, control de cumplimiento and protección de la información, garantizando el acceso seguro a los recursos de la organización.",
        rules: [
          "Microsoft Intune es la herramienta oficial para la administración de dispositivos corporativos y autorizados.",
          "Todo dispositivo que acceda a recursos corporativos debe estar inscrito y gestionado en Intune.",
          "El área de sistemas es responsable de la inscripción, configuración y administración de dispositivos.",
          "Se deben aplicar políticas de seguridad obligatorias en todos los dispositivos gestionados.",
          "Está prohibido acceder a información corporativa desde dispositivos no gestionados.",
          "Se deben definir políticas diferenciadas para dispositivos corporativos y BYOD.",
          "Los dispositivos deben cumplir los requisitos de seguridad para mantener el acceso.",
          "El borrado remoto será aplicado en caso de pérdida, robo o baja del colaborador.",
          "No se permite la manipulación o desactivación de políticas de Intune por parte del usuario.",
          "El incumplimiento de las políticas puede generar restricción o bloqueo de acceso."
        ],
        bestPractices: [
          "Mantén los dispositivos actualizados con los últimos parches de seguridad.",
          "Usa políticas de cumplimiento claras y comunicadas a los usuarios.",
          "Aplica perfiles de configuración estandarizados.",
          "Separa claramente datos personales y corporativos en dispositivos BYOD.",
          "Monitorea continuamente el estado de cumplimiento de los dispositivos.",
          "Documenta las políticas aplicadas.",
          "Revisa periódicamente dispositivos inactivos o no conformes."
        ],
        examples: {
          adequate: "📌 Dispositivo gestionado: Un colaborador recibe un equipo corporativo que es inscrito en Intune por el área de sistemas, con políticas de seguridad, cifrado y acceso condicional. El dispositivo cumple permanentemente las políticas y permite al usuario acceder de forma segura a los recursos corporativos. En caso de pérdida, el área de sistemas ejecuta un borrado remoto para proteger la información.",
          inadequate: "Acceder a correo o documentos corporativos desde un dispositivo personal no inscrito, desactivar políticas de seguridad, compartir equipos corporativos o negarse a aplicar actualizaciones obligatorias. También es un mal uso manipular el dispositivo para evadir controles de seguridad."
        },
        commonErrors: [
          "Acceder a información corporativa desde dispositivos no gestionados.",
          "Desactivar o evadir políticas de seguridad.",
          "Compartir dispositivos corporativos.",
          "No reportar pérdida o robo de dispositivos.",
          "Mantener dispositivos sin actualizar."
        ],
        impact: "El uso incorrecto de Intune puede generar pérdida de información, accesos no autorizados, incumplimientos de seguridad y riesgos legales. Utilizado correctamente, Intune fortalece la seguridad de los dispositivos, protege los datos corporativos y permite una gestión eficiente y centralizada del entorno tecnológico."
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
