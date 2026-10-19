import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function ClosingFooter({ couple }) {
  return (
    <footer style={{
      position: 'relative',
      padding: '90px 20px 50px 20px',
      textAlign: 'center',
      background: 'radial-gradient(ellipse at bottom, #231D19 0%, #110E0C 80%, #080706 100%)',
      color: '#E8DEC8',
      borderTop: '1px solid rgba(212, 175, 55, 0.25)',
      overflow: 'hidden'
    }}>
      {/* Background Palace Arch Silhouette */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '800px',
        height: '350px',
        backgroundImage: 'url(/assets/z0aDoWhbHrkZy3vlCeavJxqXns.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'contain',
        opacity: 0.12,
        pointerEvents: 'none'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 2, maxWidth: '600px', margin: '0 auto' }}
      >
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.25rem',
          fontStyle: 'italic',
          color: '#D4AF37',
          display: 'block',
          marginBottom: '8px'
        }}>
          We eagerly await your gracious presence
        </span>

        <h2 style={{
          fontFamily: "'Alex Brush', cursive",
          fontSize: 'clamp(3rem, 7vw, 4.2rem)',
          color: '#FAF3E3',
          lineHeight: 1.1,
          fontWeight: 400,
          margin: '12px 0 20px 0'
        }}>
          Rafsana & Wazim
        </h2>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          marginBottom: '32px'
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C5A059' }} />
          <Heart size={16} color="#D4AF37" fill="#D4AF37" />
          <div style={{ width: '40px', height: '1px', background: '#C5A059' }} />
        </div>

        <p style={{
          fontFamily: 'Gotu, sans-serif',
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#BDB09B',
          marginBottom: '40px'
        }}>
          December 28, 2026 – January 2, 2026 • Kerala
        </p>

        {/* Attribution note matching reference */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          fontFamily: 'Gotu, sans-serif',
          fontSize: '0.72rem',
          color: '#7E7265',
          letterSpacing: '0.08em'
        }}>
          <div>© Missing Piece 2026 • Rafsana weds Wazim</div>
        </div>
      </motion.div>
    </footer>
  );
}
