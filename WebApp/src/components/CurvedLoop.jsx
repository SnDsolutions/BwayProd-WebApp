
import React, { useRef, useEffect } from 'react';
import './CurvedLoop.css';

const CurvedLoop = () => {
  const textRef = useRef(null);
  
  // Text to repeat
  const baseText = "Cinematografía • Edición • Dirección • Producción • Storytelling • Calidad Premium • ";
  const repeatedText = baseText.repeat(15); // Repeat enough times to cover wide screens + scrolling

  useEffect(() => {
    let animationFrameId;
    let offset = 0;
    
    const animate = () => {
      // Move text to the left
      offset -= 0.8; 
      
      // Reset logic: rough estimate based on character count/width to create infinite loop illusion
      // If we go too far negative, we can reset. But for typical session duration, just letting it run is often smoother
      // to avoid 'jump' unless we calculate exact text width.
      // A simple large enough reset point:
      if (offset < -4000) {
        offset = 0;
      }

      if (textRef.current) {
        textRef.current.setAttribute('startOffset', `${offset}px`);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="curved-text-container">
      <svg className="curved-svg" viewBox="0 0 1000 100" preserveAspectRatio="none"> 
        {/* A subtle wave path - Raised vertically by changing Y from 75 to 45 */}
        <path 
          id="curve-path" 
          d="M0,45 Q500,0 1000,45 T2000,45" 
          className="curved-text-path"
        />
        <text className="curved-text" width="100%">
          <textPath 
            ref={textRef} 
            href="#curve-path" 
            startOffset="0"
          >
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedLoop;
