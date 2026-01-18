import React, { useState, useRef, useEffect } from 'react';

/**
 * ResponsiveMedia - Componente que detecta el ratio real del video/imagen
 * y lo renderiza respetando sus dimensiones originales
 */
const ResponsiveMedia = ({ 
  videoUrl,
  imageUrl,
  objectFit = 'cover', 
  objectPosition = 'center',
  className = '',
  onRatioDetected,
  placeholderRatio = 16/9,
  shouldPlay = false,
  onVideoRef,
  showControls = false
}) => {
  const [aspectRatio, setAspectRatio] = useState(placeholderRatio);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const isVideo = !!videoUrl;
  const isImage = !!imageUrl;

  useEffect(() => {
    if (isVideo && videoRef.current) {
      const video = videoRef.current;

      const handleLoadedMetadata = () => {
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
        
        if (videoWidth > 0 && videoHeight > 0) {
          const ratio = videoWidth / videoHeight;
          setAspectRatio(ratio);
          setIsLoaded(true);
          
          if (onRatioDetected) {
            onRatioDetected(ratio);
          }
        }
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      if (video.readyState >= 1) {
        handleLoadedMetadata();
      }

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    } else if (isImage && imageRef.current) {
      const img = imageRef.current;

      const handleLoad = () => {
        const imgWidth = img.naturalWidth;
        const imgHeight = img.naturalHeight;
        
        if (imgWidth > 0 && imgHeight > 0) {
          const ratio = imgWidth / imgHeight;
          setAspectRatio(ratio);
          setIsLoaded(true);
          
          if (onRatioDetected) {
            onRatioDetected(ratio);
          }
        }
      };

      img.addEventListener('load', handleLoad);
      
      if (img.complete) {
        handleLoad();
      }

      return () => {
        img.removeEventListener('load', handleLoad);
      };
    }
  }, [videoUrl, imageUrl, isVideo, isImage, onRatioDetected]);

  // Exponer la referencia del video al componente padre
  useEffect(() => {
    if (onVideoRef && videoRef.current) {
      onVideoRef(videoRef.current);
    }
  }, [onVideoRef, isVideo]);

  // Controlar reproducción del video según shouldPlay
  useEffect(() => {
    if (isVideo && videoRef.current) {
      const video = videoRef.current;
      
      if (shouldPlay) {
        video.play().catch(err => {
          // Silenciar errores de autoplay (algunos navegadores bloquean autoplay sin interacción)
          console.log('Error al reproducir video:', err);
        });
      } else {
        video.pause();
      }
    }
  }, [shouldPlay, isVideo]);

  return (
    <div 
      className={`pf2-media-container w-full h-full ${className}`}
      style={{ 
        aspectRatio: aspectRatio,
        transition: isLoaded ? 'opacity 0.3s ease-in-out' : 'none',
        opacity: isLoaded ? 1 : 0.7,
        width: '100%',
        height: '100%'
      }}
    >
      {isVideo && (
        <video
          ref={videoRef}
          src={videoUrl}
          className="pf2-media-video w-full h-full"
          style={{
            objectFit: objectFit,
            objectPosition: objectPosition,
            width: '100%',
            height: '100%'
          }}
          muted
          loop
          playsInline
          preload="metadata"
          controls={showControls}
          autoPlay={shouldPlay}
        />
      )}
      {isImage && (
        <img
          ref={imageRef}
          src={imageUrl}
          alt=""
          className="pf2-media-image w-full h-full"
          style={{
            objectFit: objectFit,
            objectPosition: objectPosition,
            width: '100%',
            height: '100%'
          }}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ResponsiveMedia;
