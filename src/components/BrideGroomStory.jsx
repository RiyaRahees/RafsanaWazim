import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BrideGroomStory({ coupleMessage, galleryPhotos }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevPhoto = () => {
    setCurrentIdx((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentIdx((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section style={{
      position: 'relative',
      padding: '80px 20px',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      {/* Decorative floral or arch background accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span style={{
          fontFamily: "'Alex Brush', cursive",
          fontSize: '2.5rem',
          color: '#B58D3D',
          display: 'block',
          lineHeight: 1
        }}>
          meet the
        </span>
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(1.7rem, 3.6vw, 2.6rem)',
          letterSpacing: '0.16em',
          color: '#2A1F1B',
          fontWeight: 600,
          marginTop: '6px'
        }}>
          Bride & Groom
        </h2>
        <div style={{
          width: '60px',
          height: '1px',
          background: '#C5A059',
          margin: '14px auto 0 auto'
        }} />
      </div>

      {/* Main Interactive Couple Showcase Carousel */}
      <div style={{
        position: 'relative',
        maxWidth: '560px',
        margin: '0 auto 45px auto',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 45px rgba(0,0,0,0.14), inset 0 0 0 1px rgba(212, 175, 55, 0.4)',
        background: '#1C1815'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '3/4',
          overflow: 'hidden'
        }}>
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIdx}
              src={galleryPhotos[currentIdx].url} 
              alt={galleryPhotos[currentIdx].caption}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={prevPhoto}
            aria-label="Previous photo"
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(28, 22, 18, 0.65)',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease'
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <button 
            onClick={nextPhoto}
            aria-label="Next photo"
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(28, 22, 18, 0.65)',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease'
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Photo Dots Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '6px 12px',
            borderRadius: '9999px',
            backdropFilter: 'blur(4px)'
          }}>
            {galleryPhotos.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setCurrentIdx(i)}
                style={{
                  width: i === currentIdx ? '20px' : '7px',
                  height: '7px',
                  borderRadius: '9999px',
                  background: i === currentIdx ? '#D4AF37' : 'rgba(255,255,255,0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Heartfelt Message from the Couple */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(180deg, rgba(254, 252, 248, 0.94) 0%, rgba(246, 240, 230, 0.92) 100%)',
          borderRadius: '24px',
          padding: '40px 32px',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          boxShadow: '0 12px 35px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}
      >
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.14rem',
          lineHeight: '1.8',
          color: '#4A3B35',
          marginBottom: '20px',
          fontStyle: 'italic'
        }}>
          "{coupleMessage.text1}"
        </p>

        <div style={{
          width: '50px',
          height: '1px',
          background: '#D4AF37',
          margin: '20px auto'
        }} />

        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.08rem',
          lineHeight: '1.8',
          color: '#5C4A42'
        }}>
          {coupleMessage.text2}
        </p>

        <div style={{
          marginTop: '28px',
          fontFamily: "'Alex Brush', cursive",
          fontSize: '2.6rem',
          color: '#B58D3D'
        }}>
          With Love, Rafsana & Wazim
        </div>
      </motion.div>
    </section>
  );
}
