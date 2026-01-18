
import React, { useRef, useMemo } from 'react';
import { Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Aurora Shader Material definition
const AuroraMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#22d3ee') }, // Cyan-400
    uColor2: { value: new THREE.Color('#a855f7') }, // Purple-500
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float time = uTime * 0.3; // Slower, majestic movement

      // Coordinate manipulation for the wavy "curtain" effect
      vec2 p = uv;
      
      // Create organic wave distortion
      float wave = sin(p.x * 2.0 + time) * 0.2 
                 + sin(p.x * 5.0 - time * 1.5) * 0.1
                 + cos(p.x * 3.0 + time * 0.5) * 0.1;
      p.y += wave;

      // Generate Aurora bands
      float brightness = 0.0;
      
      // Layer 1: Main flowing band
      float y1 = 0.5; 
      float d1 = abs(p.y - y1);
      // Sharp core, soft glow
      brightness += 0.02 / (d1 * d1 + 0.01);

      // Layer 2: Secondary interference band
      float y2 = 0.5 + sin(time * 0.5) * 0.1;
      float d2 = abs(p.y - y2);
      brightness += 0.01 / (d2 + 0.05);

      // Clamp maximum brightness to prevent total washout
      brightness = min(brightness, 2.0);

      // Color Gradient Calculation
      // Mix between Cyan and Purple based on X position and Time
      float colorMix = sin(uv.x * 3.0 + time) * 0.5 + 0.5;
      vec3 col = mix(uColor1, uColor2, colorMix);

      // Add a "hot" white core where brightness is very high
      col += vec3(1.0) * smoothstep(1.0, 2.0, brightness) * 0.5;

      // Final Alpha Calculation
      // Fade out at the very edges to integrate nicely
      float alpha = smoothstep(0.0, 0.5, brightness);
      
      // Vertical fade (Auroras often fade into the sky)
      alpha *= smoothstep(0.0, 0.2, uv.y) * smoothstep(1.0, 0.8, uv.y);
      // Horizontal fade
      alpha *= smoothstep(0.0, 0.1, uv.x) * smoothstep(1.0, 0.9, uv.x);

      // Output with boosted visibility
      gl_FragColor = vec4(col, alpha * 0.8);
    }
  `
};

const AuroraMesh = () => {
  const meshRef = useRef();
  
  const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#22d3ee') },
      uColor2: { value: new THREE.Color('#a855f7') }
    },
    vertexShader: AuroraMaterial.vertexShader,
    fragmentShader: AuroraMaterial.fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending // Glow effect
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[12, 6, 1]}> {/* Reduced scale for compactness */}
      <planeGeometry args={[1, 1, 64, 64]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
};

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-100 pointer-events-none mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
        <AuroraMesh />
      </Canvas>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Portafolio', path: '/portafolio' },
    { name: 'Planes', path: '/planes' },
    { name: 'Reservas', path: '/reservas' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-r from-purple-950 via-purple-900 to-cyan-900 border-t border-white/10 pt-8 pb-6 overflow-hidden">
      {/* Background Shader */}
      <AuroraBackground />
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 via-purple-900/80 to-cyan-900/80 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 mb-8">
          
          {/* Brand & Social */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="block" onClick={handleScrollToTop}>
              <img 
                src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/eb54702e245d3090dadd93563340f94b.png" 
                alt="BWAY Productions" 
                className="h-8 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
            
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/bwayprod" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://youtube.com/@bwayprod" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/50 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="mailto:bwayproductions420@gmail.com" 
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Inspirational Quote - Center */}
          <div className="flex-1 flex justify-center items-center text-center">
            <p className="text-white/40 text-sm italic font-light max-w-md">
              "Cada historia merece ser contada con la misma pasión con la que fue vivida."
            </p>
          </div>

          {/* Contact - Compact */}
          <div className="flex flex-col gap-2 text-sm">
            <a href="mailto:bwayproductions420@gmail.com" className="text-white/50 hover:text-white transition-colors">
              bwayproductions420@gmail.com
            </a>
            <a href="tel:+50671032432" className="text-white/50 hover:text-white transition-colors">
              +506 7103-2432
            </a>
            <span className="text-white/40 text-xs">San José, Costa Rica</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {currentYear} BWAY Productions</p>
          <p>
            Desarrollado por{' '}
            <a 
              href="https://smartdigitalsolutions.cr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors"
            >
              Smart & Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
