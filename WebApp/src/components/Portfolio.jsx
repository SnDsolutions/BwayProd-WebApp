
import React from 'react';
import PortfolioV2View from './PortfolioV2/PortfolioV2View';

// Videos del carrusel
const carouselVideos = [
  {
    id: 1,
    title: "Recap Battle Warriors CR",
    category: "Eventos",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Recap+%40battlewarriorscr++2%EF%B8%8F%E2%83%A30%EF%B8%8F%E2%83%A32%EF%B8%8F%E2%83%A33%EF%B8%8F%E2%83%A3+%F0%9F%8E%A5%F0%9F%92%AA%F0%9F%8F%BF%F0%9F%9A%80.mp4",
    duration: "2:19",
    description: "Recap dinámico del evento Battle Warriors CR, capturando la energía y la intensidad del combate. Producción que documenta los momentos más impactantes del evento con edición cinematográfica.",
    date: "2024",
    client: "Battle Warriors CR"
  },
  {
    id: 2,
    title: "Ozuna - Live Performance",
    category: "Eventos",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Ozuna-.mp4",
    duration: "0:31",
    description: "Producción audiovisual del show en vivo de Ozuna, capturando la energía y el carisma del artista puertorriqueño. Video dinámico que documenta los momentos más impactantes de la presentación, con edición cinematográfica que refleja la conexión entre el artista y su audiencia, transmitiendo la intensidad y la magia del concierto en vivo.",
    date: "Mayo 2022",
    client: "Ozuna"
  },
  {
    id: 3,
    title: "Competencia de DownHill",
    category: "Eventos",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/AVENTURE+PARK/DH.mp4",
    duration: "1:22",
    description: "Recap cinematográfico de competencia de DownHill, capturando la velocidad, adrenalina y destreza de los ciclistas. Producción dinámica que documenta la intensidad del descenso con edición de ritmo acelerado y tomas impactantes.",
    date: "Enero 2023",
    client: "Adventure Park Heredia"
  },
  {
    id: 4,
    title: "Los Cafres - Live Performance",
    category: "Eventos",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Cafres.mp4",
    duration: "0:33",
    description: "Producción audiovisual del show en vivo de Los Cafres, capturando la energía y el carisma de la icónica banda argentina de reggae. Video dinámico que documenta los momentos más impactantes de la presentación, con edición cinematográfica que refleja la conexión entre los artistas y su audiencia, transmitiendo la intensidad y la magia del concierto en vivo.",
    date: "Mayo 2022",
    client: "Los Cafres"
  },
  {
    id: 5,
    title: "DJ EL FARI - DJ Set Live from Surf Abu Dhabi",
    category: "Eventos",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/DJFariEL+FARI+%E2%80%93+Afro+House+DJ+Set+Live+from+Surf+Abu+Dhabi+%7C+Latin+Vibes+%2B+Live+Sax+.mp4",
    duration: "38:38",
    description: "Producción audiovisual del DJ set de El Fari, capturando la energía y el ritmo de la música electrónica. Video dinámico que documenta la conexión entre el artista y la audiencia, con edición sincronizada al beat que transmite la intensidad de la experiencia musical en vivo.",
    date: "Noviembre 2025",
    client: "DJ El Fari"
  },
  {
    id: 6,
    title: "Haquil - Story | Video Musical",
    category: "Video Musical",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Haquil/Haquil-Story.mp4",
    duration: "02:10",
    description: "Producción audiovisual cinematográfica para Haquil, artista nacional. Video musical que fusiona narrativa visual con la esencia artística del músico, capturando la atmósfera y el mensaje de la canción. Edición de ritmo sincronizado que eleva la experiencia visual, destacando la calidad y el profesionalismo de la producción musical costarricense.",
    date: "Agosto 2022",
    client: "Haquil"
  },
  {
    id: 7,
    title: "Tapon en FlowFest - Live Performance",
    category: "Eventos",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/FLOWFEST/Recap-Tapon.mp4",
    duration: "01:07",
    description: "Producción audiovisual del show en vivo de Tapon en FlowFest, capturando la energía y el carisma del artista nacional. Video dinámico que documenta los momentos más impactantes de la presentación, con edición cinematográfica que refleja la conexión entre el artista y su audiencia.",
    date: "Julio 2023",
    client: "FlowFest"
  },
  {
    id: 8,
    title: "Contenido para Canal 6 - Noticias",
    category: "Eventos",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Repretel/Repretel+Recap..mp4",
    duration: "0:55",
    description: "Producción audiovisual profesional para Canal 6, destacando calidad televisiva y contenido de alto nivel. Video que refleja los estándares de excelencia del canal con edición precisa y narrativa visual efectiva.",
    date: "Junio 2022",
    client: "Canal 6"
  },
  {
    id: 9,
    title: "Víctor Ramírez | Físico Culturista",
    category: "Contenido - Redes Sociales",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/ROAD+to+Mr+Olimpia.mp4",
    duration: "2:50",
    description: "Producción audiovisual profesional para Víctor Ramírez, físico culturista. Video que destaca la dedicación, disciplina y estética corporal del atleta, capturando su transformación física con edición cinematográfica que resalta la excelencia y el profesionalismo del culturismo.",
    date: "Julio 2025",
    client: "Victor Ramirez"
  },
  {
    id: 10,
    title: "MMA Costa Rica - Recap",
    category: "Eventos",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/MMA+-+Recap-.mp4 ",
    duration: "01:04",
    description: "Recap cinematográfico del evento MMA Costa Rica, capturando la intensidad, técnica y pasión de los luchadores. Producción dinámica que documenta los momentos más impactantes del combate con edición de ritmo acelerado y tomas que resaltan la destreza y el coraje de los atletas.",
    date: "Noviembre 2025",
    client: "MMA Costa Rica"
  },
  {
    id: 11,
    title: "Seprodental - Productos Odontológicos",
    category: "Contenido - Redes Sociales",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Recap+1+-+Seprodental.mp4",
    duration: "00:59",
    description: "Producción audiovisual profesional para Seprodental, empresa líder en productos odontológicos. Video que destaca la innovación, calidad y excelencia de sus productos, capturando la precisión y el profesionalismo del sector dental con edición cinematográfica que resalta la confiabilidad y el compromiso con la salud bucal.",
    date: "Noviembre 2025",
    client: "Seprodental"
  }
];

// Categories for filtering
const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'events', label: 'Eventos' },
  { id: 'video', label: 'Video Musical' },
  { id: 'social', label: 'Redes Sociales' }
];

// Convertir videos del carrusel en items del portfolio
export const portfolioItems = carouselVideos
  .filter(video => video.videoUrl && video.videoUrl.trim() !== '') // Filtrar videos sin URL
  .map((video, index) => {
    // Determinar tamaño basado en la posición para crear un grid variado
    const sizes = ['normal', 'wide', 'tall', 'large', 'normal', 'tall', 'wide', 'normal', 'large', 'normal'];
    const size = sizes[index % sizes.length];
    
    // Mapear categorías
    let categoryId = 'events';
    if (video.category === 'Video Musical') categoryId = 'video';
    else if (video.category === 'Contenido - Redes Sociales') categoryId = 'social';
    else categoryId = 'events';
    
    return {
      id: video.id,
      title: video.title,
      category: categoryId,
      size: size,
      type: 'video',
      description: video.description,
      videoUrl: video.videoUrl,
      duration: video.duration,
      date: video.date,
      client: video.client,
      // Thumbnail será generado del video
      image: null
    };
  });

// Array para fotos
export const portfolioPhotos = [
  // Fotos de Yankee
  {
    id: 101,
    title: "Yankee - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Yankee/IMG_4164.JPG",
    description: "Fotografía profesional del evento Yankee, capturando momentos únicos y la energía del evento.",
    date: "2024",
    client: "Yankee"
  },
  {
    id: 102,
    title: "Yankee - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Yankee/IMG_4169.JPG",
    description: "Fotografía profesional del evento Yankee, capturando momentos únicos y la energía del evento.",
    date: "2024",
    client: "Yankee"
  },
  {
    id: 103,
    title: "Yankee - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Yankee/IMG_4179.JPG",
    description: "Fotografía profesional del evento Yankee, capturando momentos únicos y la energía del evento.",
    date: "2024",
    client: "Yankee"
  },
  {
    id: 104,
    title: "Yankee - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Yankee/IMG_4168.JPG",
    description: "Fotografía profesional del evento Yankee, capturando momentos únicos y la energía del evento.",
    date: "2024",
    client: "Yankee"
  },
  // Fotos de Picnic
  {
    id: 105,
    title: "Picnic - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Picnic/IMG_2175.JPG",
    description: "Fotografía profesional del evento Picnic, documentando la atmósfera y los momentos especiales del evento.",
    date: "2024",
    client: "Picnic"
  },
  {
    id: 106,
    title: "Picnic - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Picnic/IMG_2222.JPG",
    description: "Fotografía profesional del evento Picnic, documentando la atmósfera y los momentos especiales del evento.",
    date: "2024",
    client: "Picnic"
  },
  {
    id: 107,
    title: "Picnic - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Picnic/IMG_2203.JPG",
    description: "Fotografía profesional del evento Picnic, documentando la atmósfera y los momentos especiales del evento.",
    date: "2024",
    client: "Picnic"
  },
  {
    id: 108,
    title: "Picnic - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Picnic/IMG_2178.JPG",
    description: "Fotografía profesional del evento Picnic, documentando la atmósfera y los momentos especiales del evento.",
    date: "2024",
    client: "Picnic"
  },
  {
    id: 109,
    title: "Picnic - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Picnic/IMG_2206.JPG",
    description: "Fotografía profesional del evento Picnic, documentando la atmósfera y los momentos especiales del evento.",
    date: "2024",
    client: "Picnic"
  },
  {
    id: 110,
    title: "Picnic - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Picnic/IMG_2218.JPG",
    description: "Fotografía profesional del evento Picnic, documentando la atmósfera y los momentos especiales del evento.",
    date: "2024",
    client: "Picnic"
  },
  {
    id: 111,
    title: "Picnic - Evento",
    category: "events",
    type: "image",
    imageUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/PicsPagina/Picnic/IMG_2201.JPG",
    description: "Fotografía profesional del evento Picnic, documentando la atmósfera y los momentos especiales del evento.",
    date: "2024",
    client: "Picnic"
  }
];

const Portfolio = () => {
  return <PortfolioV2View videos={portfolioItems} photos={portfolioPhotos} />;
};

export default Portfolio;
