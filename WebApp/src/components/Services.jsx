
import React from 'react';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Button } from '@/components/ui/button';
import { MessageSquare, Check, Clock, Users, ArrowUpRight, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import CurvedLoop from '@/components/CurvedLoop';

// Complete BWAY PROD Service Packages - Detailed Data
const servicesByCategory = [
  {
    category: "Contenido Social",
    description: "Paquetes de creación de contenido para redes sociales.",
    items: [
      {
        title: "Pack Contenido - Básico 1",
        price: "₡65,000",
        description: "Paquete introductorio perfecto para generar presencia digital con material profesional.",
        idealFor: "Emprendedores iniciales",
        deliveryTime: "5-7 días hábiles",
        details: [
          "4 Reels (edición dinámica, hasta 30s)",
          "4 Fotografías editadas en alta resolución",
          "1 Jornada de grabación (máx 2 horas)",
          "Formato vertical para IG/TikTok"
        ],
        link: "/reservas?service=content-basic-1",
      },
      {
        title: "Pack Contenido - Básico 2",
        price: "₡125,000",
        description: "Mayor volumen de contenido para mantener tu feed activo durante todo el mes.",
        idealFor: "Pymes, tiendas online",
        deliveryTime: "7-10 días hábiles",
        details: [
          "8 Reels (hasta 45s, tendencias)",
          "8 Fotografías editadas",
          "2 Jornadas de grabación (2 horas c/u)",
          "Asesoría básica de tendencias"
        ],
        link: "/reservas?service=content-basic-2",
      },
    ]
  },
  {
    category: "Planes Recurrentes",
    description: "Suscripción mensual para crecimiento sostenido.",
    items: [
      {
        title: "Plan Recurrente - Quincenal",
        price: "₡220,000 / mes",
        description: "Mantén tu marca fresca con actualizaciones de contenido cada dos semanas.",
        idealFor: "Restaurantes, cafeterías",
        deliveryTime: "Entregas quincenales",
        details: [
          "2 Visitas mensuales de producción",
          "6 Reels por visita (12 total/mes)",
          "10 Fotos por visita (20 total/mes)",
          "Reunión de planificación mensual"
        ],
        link: "/reservas?service=plan-quincenal",
      },
      {
        title: "Plan Recurrente - Mensual",
        price: "₡380,000 / mes",
        description: "La solución completa de outsourcing audiovisual para tu empresa.",
        idealFor: "Marcas establecidas",
        deliveryTime: "Flujo continuo semanal",
        details: [
          "4 Visitas mensuales (1 por semana)",
          "8 Reels por visita (32 total/mes)",
          "15 Fotos por visita (60 total/mes)",
          "Estrategia de contenido mensual",
          "Reporte de resultados básico"
        ],
        link: "/reservas?service=plan-mensual",
      },
      {
        title: "Plan Ejecutivo Premium",
        price: "₡550,000 / mes",
        description: "Servicio VIP con prioridad y volumen ilimitado bajo agenda.",
        idealFor: "Corporaciones, Franquicias",
        deliveryTime: "Prioridad Express (48-72h)",
        details: [
          "Visitas ilimitadas (previa agenda)",
          "Reels y Fotografías ilimitadas (durante sesiones)",
          "Prioridad en fila de edición",
          "Cobertura de eventos de la marca incluida",
          "Asesoría creativa dedicada"
        ],
        link: "/reservas?service=plan-premium",
      },
    ]
  },
  {
    category: "Eventos Sociales",
    description: "Cobertura de eventos sociales, fiestas y actividades.",
    items: [
      {
        title: "Eventos - Bronce",
        price: "₡120,000",
        description: "Cobertura esencial para capturar los momentos clave.",
        idealFor: "Cumpleaños, baby showers",
        deliveryTime: "5 días hábiles",
        details: [
          "3 Horas de cobertura continua",
          "Video resumen (highlight) de 1 minuto",
          "30 Fotografías digitales editadas",
          "Entrega vía galería digital"
        ],
        link: "/reservas?service=event-bronze",
      },
      {
        title: "Eventos - Plata",
        price: "₡180,000",
        description: "Cobertura estándar con mayor detalle y duración.",
        idealFor: "Fiestas de empresa",
        deliveryTime: "7 días hábiles",
        details: [
          "5 Horas de cobertura continua",
          "Video highlight de 2-3 minutos",
          "1 Reel vertical para redes sociales",
          "50 Fotografías digitales editadas"
        ],
        link: "/reservas?service=event-silver",
      },
      {
        title: "Eventos - Oro",
        price: "₡250,000",
        description: "Cobertura completa para no perderse ningún detalle.",
        idealFor: "Eventos corporativos grandes",
        deliveryTime: "10 días hábiles",
        details: [
          "8 Horas de cobertura continua",
          "Video largo (5 min) + Trailer (1 min)",
          "80 Fotografías digitales editadas",
          "Tomas con Drone (si la locación lo permite)"
        ],
        link: "/reservas?service=event-gold",
      },
    ]
  },
  {
    category: "Bodas",
    description: "Cinematografía y fotografía nupcial.",
    items: [
      {
        title: "Boda - Esencial",
        price: "₡350,000",
        description: "Recuerdos puros de la ceremonia y sesión principal.",
        idealFor: "Bodas civiles, elopements",
        deliveryTime: "15 días hábiles",
        details: [
          "Cobertura: Ceremonia + Sesión de Novios",
          "Video resumen cinematográfico (3 min)",
          "50 Fotografías en alta resolución",
          "Audio profesional para votos"
        ],
        link: "/reservas?service=wedding-essential",
      },
      {
        title: "Boda - Cinematográfica",
        price: "₡650,000",
        description: "Tu historia de amor contada como una película.",
        idealFor: "Bodas tradicionales completas",
        deliveryTime: "20-25 días hábiles",
        details: [
          "Cobertura: Preparativos hasta 2 horas de fiesta",
          "Wedding Film (7-10 min)",
          "Teaser para redes (1 min)",
          "150 Fotografías editadas",
          "Tomas aéreas con Drone"
        ],
        link: "/reservas?service=wedding-cinema",
      },
      {
        title: "Boda - Premium",
        price: "₡950,000",
        description: "La experiencia de lujo definitiva sin compromisos.",
        idealFor: "Grandes celebraciones",
        deliveryTime: "30 días hábiles",
        details: [
          "Equipo: 2 Camarógrafos + 2 Fotógrafos",
          "Video Documental Completo (20 min)",
          "Same Day Edit (Video para proyectar el mismo día)",
          "Sesión Pre-boda incluida",
          "Álbum físico de lujo (20 páginas)"
        ],
        link: "/reservas?service=wedding-premium",
      },
    ]
  },
  {
    category: "Masivos",
    description: "Producción para conciertos, festivales y espectáculos.",
    items: [
      {
        title: "Masivos - Esencial",
        price: "₡200,000",
        description: "Cobertura dinámica para captar la vibra del show.",
        idealFor: "Conciertos, stand-up comedy",
        deliveryTime: "5 días hábiles",
        details: [
          "4 Horas de cobertura",
          "Aftermovie dinámico (1 min)",
          "30 Fotos de ambiente y artistas",
          "Entrega en formatos vertical y horizontal"
        ],
        link: "/reservas?service=massive-essential",
      },
      {
        title: "Masivos - Pro",
        price: "₡350,000",
        description: "Cobertura robusta para festivales medianos.",
        idealFor: "Festivales de música",
        deliveryTime: "7-10 días hábiles",
        details: [
          "6 Horas de cobertura",
          "Aftermovie extendido (2-3 min)",
          "Cobertura de historias en tiempo real",
          "50 Fotos de alta calidad",
          "Grabación de audio de consola"
        ],
        link: "/reservas?service=massive-pro",
      },
      {
        title: "Masivos - Premium",
        price: "₡500,000",
        description: "Producción multicámara de clase mundial.",
        idealFor: "Festivales internacionales",
        deliveryTime: "15 días hábiles",
        details: [
          "Cobertura Total del evento",
          "Equipo de 3 personas",
          "Aftermovie en 4K",
          "Entrevistas a artistas y público",
          "Paquete completo para prensa"
        ],
        link: "/reservas?service=massive-premium",
      },
    ]
  },
  {
    category: "Corporativo",
    description: "Comunicación visual estratégica para empresas.",
    items: [
      {
        title: "Corp - Esencial",
        price: "₡150,000",
        description: "Video directo y efectivo para comunicación interna o redes.",
        idealFor: "Testimoniales, inducciones",
        deliveryTime: "5 días hábiles",
        details: [
          "Entrevistas simples (1 cámara)",
          "B-Roll básico de instalaciones",
          "Edición limpia con logos y títulos",
          "Duración máxima: 2 minutos"
        ],
        link: "/reservas?service=corp-essential",
      },
      {
        title: "Corp - Pro",
        price: "₡280,000",
        description: "Narrativa de marca con acabado publicitario.",
        idealFor: "Videos 'Quiénes somos'",
        deliveryTime: "10 días hábiles",
        details: [
          "Guion creativo y estructura narrativa",
          "Iluminación profesional (Set de luces)",
          "Motion Graphics básicos",
          "Música con licencia comercial"
        ],
        link: "/reservas?service=corp-pro",
      },
      {
        title: "Corp - Premium",
        price: "Cotizar",
        description: "Producción comercial de alto impacto estilo TV/Cine.",
        idealFor: "Comerciales de TV",
        deliveryTime: "A convenir",
        details: [
          "Casting de actores y locaciones",
          "Dirección de arte y maquillaje",
          "Animación 2D/3D avanzada",
          "Equipo de cine (Cámaras Cinema Line)",
          "Diseño sonoro completo"
        ],
        link: "/reservas?service=corp-premium",
      },
    ]
  },
  {
    category: "Salud (Dental/Médico)",
    description: "Marketing ético y estético para el sector salud.",
    items: [
      {
        title: "Dental - Básico",
        price: "₡95,000",
        description: "Pack introductorio para mostrar la clínica y servicios.",
        idealFor: "Consultorios independientes",
        deliveryTime: "5-7 días hábiles",
        details: [
          "4 Reels educativos o promocionales",
          "Fotografía del equipo médico y consultorio",
          "1 Sesión de producción (2 horas)"
        ],
        link: "/reservas?service=dental-basic",
      },
      {
        title: "Dental - Pro",
        price: "₡165,000",
        description: "Documentación de casos de éxito y testimonios.",
        idealFor: "Clínicas de especialidades",
        deliveryTime: "7-10 días hábiles",
        details: [
          "8 Reels (procedimientos, tips, trends)",
          "1 Video testimonio de paciente",
          "Fotografía clínica (Antes/Después)",
          "Guion para videos educativos"
        ],
        link: "/reservas?service=dental-pro",
      },
      {
        title: "Dental - Mensual",
        price: "₡290,000 / mes",
        description: "Presencia digital constante para atraer pacientes.",
        idealFor: "Clínicas dentales grandes",
        deliveryTime: "Mensual continuo",
        details: [
          "12 Reels mensuales",
          "Gestión completa de ideas de contenido",
          "2 Visitas al mes para grabación",
          "Videos para sala de espera"
        ],
        link: "/reservas?service=dental-monthly",
      },
    ]
  },
  {
    category: "Restaurantes",
    description: "Contenido gastronómico que despierta el apetito.",
    items: [
      {
        title: "Gastro - Básico",
        price: "₡85,000",
        description: "Actualización visual del menú y redes.",
        idealFor: "Food trucks, cafeterías",
        deliveryTime: "5 días hábiles",
        details: [
          "10 Fotos de platillos (iluminación básica)",
          "2 Reels de ambiente/preparación",
          "1.5 horas de sesión",
          "Entrega optimizada para redes"
        ],
        link: "/reservas?service=gastro-basic",
      },
      {
        title: "Gastro - Pro",
        price: "₡150,000",
        description: "Producción estilizada para destacar la calidad.",
        idealFor: "Restaurantes gourmet",
        deliveryTime: "7 días hábiles",
        details: [
          "20 Fotos estilizadas (con props)",
          "5 Reels (cocina, mixología, sala)",
          "Food Styling intermedio",
          "3 horas de sesión"
        ],
        link: "/reservas?service=gastro-pro",
      },
      {
        title: "Gastro - Mensual",
        price: "₡250,000 / mes",
        description: "Flujo constante de contenido para mantener el interés.",
        idealFor: "Franquicias, restaurantes",
        deliveryTime: "Semanal/Quincenal",
        details: [
          "2 Visitas mensuales",
          "Contenido para todo el mes (reels + fotos)",
          "Fotos de especiales de temporada",
          "Banco de imágenes para menú digital"
        ],
        link: "/reservas?service=gastro-monthly",
      },
    ]
  },
  {
    category: "Otros Servicios",
    description: "Soluciones específicas y complementos.",
    items: [
      {
        title: "Producción por Hora",
        price: "₡35,000 / hora",
        description: "Servicio flexible para necesidades puntuales.",
        idealFor: "Entrevistas rápidas",
        deliveryTime: "Inmediato/3 días",
        details: [
          "Equipo profesional de cámara y audio",
          "Entrega de material en bruto (raw)",
          "Mínimo 2 horas de contratación",
          "No incluye edición compleja"
        ],
        link: "/reservas?service=hourly",
      },
      {
        title: "Branding Personal",
        price: "₡90,000",
        description: "Eleva tu imagen profesional con fotos y video de alta gama.",
        idealFor: "Abogados, agentes, coaches",
        deliveryTime: "5 días hábiles",
        details: [
          "Sesión en estudio o locación (2 horas)",
          "15 Fotos retocadas (piel, luz, color)",
          "1 Video de presentación (pitch)",
          "Asesoría de imagen y poses básica"
        ],
        link: "/reservas?service=branding",
      },
      {
        title: "Edición / Post-producción",
        price: "Desde ₡15,000",
        description: "Servicio de edición para material que ya grabaste.",
        idealFor: "YouTubers, empresas",
        deliveryTime: "Depende del proyecto",
        details: [
          "Corte y montaje narrativo",
          "Colorización (Color Grading)",
          "Diseño sonoro y mezcla de audio",
          "Subtítulos animados",
          "Adaptación de formatos"
        ],
        link: "/reservas?service=editing",
      },
      {
        title: "Extras & Drone",
        price: "Cotizar",
        description: "Complementos para potenciar cualquier paquete.",
        idealFor: "Añadir valor de producción",
        deliveryTime: "N/A",
        details: [
          "Vuelo de Drone FPV",
          "Vuelo de Drone Mavic",
          "Fotografía adicional",
          "Entrega express (24 horas)",
          "Servicio de maquillaje profesional"
        ],
        link: "/reservas?service=extras",
      },
    ]
  },
];

// Enhanced Service Card Component
const ServiceCard = ({ service }) => (
  <div className="group flex flex-col h-full p-6 md:p-7 rounded-3xl bg-[#0F0F10] hover:bg-[#141416] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-lg shadow-black/40 hover:shadow-cyan-900/10">
    {/* Card Header */}
    <div className="space-y-4 flex-grow">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl md:text-2xl font-bold text-white font-montserrat leading-tight group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>
        <div className="bg-white/5 rounded-lg px-3 py-1 text-center min-w-[80px]">
          <span className="block text-sm font-bold text-cyan-400">
             {service.price.split(' ')[0]}
          </span>
          {service.price.includes('mes') && (
            <span className="block text-[10px] text-gray-500 uppercase tracking-wider">Mensual</span>
          )}
        </div>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed border-b border-white/5 pb-4">
        {service.description}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 pt-1">
        <Badge variant="secondary" className="bg-purple-500/5 text-purple-300 border border-purple-500/10 text-[10px] font-medium px-2.5 py-0.5">
          <Users className="w-3 h-3 mr-1.5" /> {service.idealFor}
        </Badge>
        <Badge variant="secondary" className="bg-cyan-500/5 text-cyan-300 border border-cyan-500/10 text-[10px] font-medium px-2.5 py-0.5">
          <Clock className="w-3 h-3 mr-1.5" /> {service.deliveryTime}
        </Badge>
      </div>

      {/* Features */}
      <div className="pt-2">
        <ul className="space-y-3">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex items-start text-xs md:text-sm text-gray-300/90 group-hover:text-gray-200 transition-colors">
              <span className="mt-0.5 mr-3 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                 <Check className="h-2.5 w-2.5" />
              </span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Action Footer */}
    <div className="pt-8 mt-2">
      <Button 
        variant="outline" 
        className="w-full h-11 text-sm rounded-full border-cyan-500/40 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,212,240,0.4)] transition-all duration-300 font-semibold tracking-wide"
        onClick={() => window.open(`https://wa.me/50671032432?text=Hola,%20me%20interesa%20reservar%20el%20${encodeURIComponent(service.title)}`, '_blank')}
      >
        Reservar ahora
      </Button>
    </div>
  </div>
);

const GeneralConditions = () => {
  const conditions = [
    { title: "Reserva", text: "50% anticipo. 50% contra entrega." },
    { title: "Viáticos", text: "Fuera de GAM se cotizan aparte." },
    { title: "Cambios", text: "Incluye 2 rondas de cambios." },
    { title: "Archivos Raw", text: "No se entregan (salvo pago extra)." },
    { title: "Validez", text: "Precios válidos por 15 días." },
    { title: "Derechos", text: "Uso comercial para el cliente." },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-24 px-6 md:px-0">
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-10 border-t border-b border-white/5 bg-white/[0.01] rounded-3xl">
         {conditions.map((item, idx) => (
           <div key={idx} className="text-center px-4">
             <h4 className="text-cyan-400/80 font-bold mb-2 text-[10px] uppercase tracking-widest">{item.title}</h4>
             <p className="text-gray-500 text-xs leading-relaxed font-medium">{item.text}</p>
           </div>
         ))}
       </div>
    </div>
  );
};

const Services = () => {
  // Flatten products for parallax, preserving category info for the Hero section
  const parallaxProducts = servicesByCategory.flatMap(cat => 
    cat.items.map(item => ({
      ...item,
      category: cat.category,
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    }))
  );

  return (
    <section id="servicios" className="bg-grafito min-h-screen pb-20">
      
      {/* Hero Parallax Section */}
      <HeroParallax products={parallaxProducts} />

      {/* Curved Text Loop Separator */}
      <div className="-mt-24 mb-24 relative z-20"> 
         <CurvedLoop />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10"> 
        
        {/* Section Header */}
        <div className="mb-24 text-center">
           {/* Removed the Badge element with "Catálogo 2024" text */}
           <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-6 tracking-tight">
             Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Audiovisuales</span>
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
             Explora nuestros paquetes diseñados para potenciar tu marca. Desde contenido ágil para redes hasta producciones cinematográficas de alto nivel.
           </p>
        </div>

        {/* Organized Accordion Grid */}
        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-0">
          {servicesByCategory.map((categoryData, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-white/5 rounded-3xl bg-white/[0.01] px-2 md:px-4 overflow-hidden data-[state=open]:bg-white/[0.02] data-[state=open]:border-white/10 transition-all duration-300"
            >
              <AccordionTrigger className="py-6 px-4 hover:no-underline group hover:bg-white/[0.02] rounded-2xl my-1 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full pr-4 text-left gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-xl md:text-2xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 font-montserrat">
                      {categoryData.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="text-xs md:text-sm text-gray-500 font-normal hidden md:inline-block">
                      {categoryData.description}
                    </span>
                    <Badge variant="outline" className="ml-auto md:ml-0 border-white/10 text-gray-500 group-hover:border-cyan-500/30 group-hover:text-cyan-400 bg-transparent transition-all h-6">
                      {categoryData.items.length} paquetes
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="pt-6 pb-8 px-2 md:px-4">
                 <div className="md:hidden mb-6 px-2">
                    <p className="text-sm text-gray-500 italic border-l-2 border-cyan-500/30 pl-3">
                      {categoryData.description}
                    </p>
                 </div>
                 
                 {/* GRID LAYOUT Implementation */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                  {categoryData.items.map((service, sIndex) => (
                    <ServiceCard key={sIndex} service={service} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* General Conditions Section */}
        <GeneralConditions />

        {/* Final CTA - Enhanced Design */}
        <div className="mt-24 flex flex-col items-center text-center">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] mb-8">¿Tienes un proyecto especial en mente?</p>
          
          <Button
            className="group relative px-10 py-8 text-lg rounded-full bg-black border border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300"
            onClick={() => window.open('https://wa.me/50671032432', '_blank')}
          >
            <MessageSquare className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-300 stroke-[1.5px]" />
            <span className="font-medium tracking-wide">Hablar con un Asesor</span>
            <ArrowUpRight className="w-5 h-5 ml-4 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
