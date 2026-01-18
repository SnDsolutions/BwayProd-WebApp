import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera, Send, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visitCount] = useState(() => {
    const count = localStorage.getItem('bway_chat_visits');
    const newCount = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('bway_chat_visits', newCount.toString());
    return newCount;
  });
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `¡Hola! Soy el asistente virtual de BWAY Productions. Esta es tu visita número ${visitCount}. ¿En qué puedo ayudarte hoy?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simular respuesta del bot después de un delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('precio') || input.includes('costo') || input.includes('cuanto')) {
      return "Nuestros planes comienzan desde ₡165,000. Puedes ver todos nuestros paquetes en la sección de Planes. ¿Te gustaría que te ayude a elegir el plan ideal para tu proyecto?";
    }
    
    if (input.includes('plan') || input.includes('paquete')) {
      return "Ofrecemos diferentes planes según tus necesidades: contenido para redes sociales, eventos, bodas, videos corporativos y más. ¿Qué tipo de producción necesitas?";
    }
    
    if (input.includes('contacto') || input.includes('whatsapp') || input.includes('telefono')) {
      return "Puedes contactarnos por WhatsApp al +506 7103-2432 o visitar nuestra sección de Contacto. Estamos disponibles para responder todas tus preguntas.";
    }
    
    if (input.includes('servicio') || input.includes('que ofrecen')) {
      return "Ofrecemos producción audiovisual completa: videos, fotografía, reels, contenido para redes sociales, eventos, bodas y producción corporativa. Todo realizado por un único profesional para garantizar coherencia visual.";
    }
    
    if (input.includes('tiempo') || input.includes('entrega') || input.includes('cuanto tarda')) {
      return "Los tiempos de entrega varían según el tipo de proyecto. Para contenido de redes sociales: 5 días hábiles. Para eventos: 5-7 días. Para bodas: 10-15 días. ¿Qué tipo de proyecto tienes en mente?";
    }
    
    if (input.includes('hola') || input.includes('buenos dias') || input.includes('buenas tardes')) {
      return "¡Hola! 👋 Gracias por contactarnos. ¿En qué puedo ayudarte hoy?";
    }
    
    return "Gracias por tu mensaje. Para información más detallada sobre nuestros servicios, precios o disponibilidad, te recomiendo contactarnos directamente por WhatsApp al +506 7103-2432. ¿Hay algo más en lo que pueda ayudarte?";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <Camera className="w-5 h-5" />
            </motion.button>
          </DialogTrigger>

          <DialogContent className="max-w-sm w-[85vw] md:w-[340px] h-[70vh] md:h-[480px] p-0 flex flex-col bg-white overflow-hidden !fixed !bottom-20 md:!bottom-24 !right-4 md:!right-6 !left-auto !translate-x-0 !translate-y-0 !top-auto [&>button]:hidden" style={{ borderRadius: '24px' }}>
            {/* Header with Banner Image */}
            <div className="relative h-28 bg-gradient-to-br from-purple-600 via-cyan-500 to-purple-700 overflow-hidden" style={{ borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}>
              {/* Background Image */}
              <div className="absolute inset-0" style={{
                backgroundImage: `url("https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/b370402ce6ff35b060faa7aac79643d0.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.3
              }} />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full flex items-start justify-between px-4 pt-3 pb-3">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm mb-1">BWAY</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-white/90 text-xs">Asistente</span>
                  </div>
                </div>
                
                {/* Avatar/Image on the right */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <img 
                      src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/b370402ce6ff35b060faa7aac79643d0.png"
                      alt="BWAY Assistant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 rounded-full h-6 w-6"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </DialogTrigger>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-white space-y-2.5 custom-scrollbar">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "flex",
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-3 py-2.5 text-xs md:text-sm",
                        message.sender === 'user'
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-700"
                      )}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white" style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' }}>
              <div className="flex items-center gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full bg-gray-100 border-0 text-gray-800 placeholder:text-gray-400 focus-visible:ring-0 h-10 text-xs md:text-sm px-4"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed p-0"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </>
  );
};

export default Chatbot;

