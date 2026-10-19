import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InvitationCover({ onOpen }) {
  const handleOpen = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#F5E1A4', '#FFFFFF', '#C5A059']
      });
    } catch (e) {
      // ignore
    }
    onOpen();
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at center, #1E1A17 0%, #100E0C 70%, #070605 100%)',
      padding: '20px'
    }}>
      {/* Background Architectural Palace Layer */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.38, scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/gKsY2P8sUeXBBBzdDqRJVpTculc.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
          pointerEvents: 'none'
        }}
      />

      {/* Decorative Gold Radial Light Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '550px',
        height: '550px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.03) 60%, transparent 80%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)'
      }} />

      {/* Main Arch Frame Container */}
      <motion.div 
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '520px',
          borderRadius: '260px 260px 32px 32px',
          background: 'linear-gradient(180deg, rgba(254, 252, 248, 0.96) 0%, rgba(246, 240, 230, 0.94) 100%)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212, 175, 55, 0.4), inset 0 0 25px rgba(212,175,55,0.12)',
          padding: '48px 28px 42px 28px',
          textAlign: 'center',
          backdropFilter: 'blur(12px)',
          border: '2px solid rgba(212, 175, 55, 0.5)'
        }}
      >
        {/* Ornate Arch Top Illustration / Arch Silhouette */}
        <div style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          {/* Subtle Arch Ornament */}
          <div style={{
            width: '80px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #C5A059, transparent)',
            marginBottom: '16px'
          }} />

          {/* Bismillah in Arabic calligraphy */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="arabic-calligraphy"
            style={{
              fontSize: '1.45rem',
              color: '#8C6D2D',
              marginBottom: '12px',
              textShadow: '0 1px 2px rgba(212,175,55,0.2)'
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.div>

          <span style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.72rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#8E7345',
            fontWeight: 500,
            marginBottom: '4px'
          }}>
            THE WEDDING INVITATION
          </span>
        </div>

        {/* Grand Arch Image Portal */}
        <div style={{
          position: 'relative',
          width: '260px',
          height: '320px',
          margin: '0 auto 24px auto',
          borderRadius: '130px 130px 18px 18px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0,0,0,0.18), inset 0 0 0 2px rgba(212, 175, 55, 0.6)',
          border: '3px solid #E8D5B5'
        }}>
          <motion.img 
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src="/assets/tCS0KnsGqVuondQbhS4tq8DwuYY.jpg"
            alt="Rafsana & Wazim"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top'
            }}
          />
          {/* Soft inner vignette gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 65%, rgba(45, 34, 25, 0.45) 100%)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Couple Names */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          style={{ marginBottom: '18px' }}
        >
          <h1 style={{
            fontFamily: "'Alex Brush', cursive",
            fontSize: 'clamp(2.5rem, 6vw, 3.4rem)',
            color: '#382A24',
            lineHeight: 1.15,
            fontWeight: 400,
            margin: '0'
          }}>
            Rafsana & Wazim
          </h1>
          <div style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: '#8C6E44',
            letterSpacing: '0.06em',
            marginTop: '4px'
          }}>
            Together with their families
          </div>
        </motion.div>

        {/* Date & Destination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '26px'
          }}
        >
          <div style={{ width: '32px', height: '1px', background: '#D4AF37' }} />
          <span style={{
            fontFamily: 'Gotu, sans-serif',
            fontSize: '0.78rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#5C4736',
            fontWeight: 500
          }}>
            DECEMBER 28, 2026
          </span>
          <div style={{ width: '32px', height: '1px', background: '#D4AF37' }} />
        </motion.div>

        {/* Open Invitation CTA Button */}
        <motion.button 
          whileHover={{ scale: 1.04, boxShadow: '0 12px 30px rgba(181, 141, 61, 0.5)' }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpen}
          className="luxury-btn"
          id="open-invitation-btn"
          style={{
            margin: '0 auto'
          }}
        >
          <Sparkles size={16} />
          <span>OPEN INVITATION</span>
        </motion.button>

        {/* Subtle decorative florals corner hints */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.7rem',
          color: '#A89279',
          letterSpacing: '0.15em',
          textTransform: 'uppercase'
        }}>
          ✦ SAYA MANSION & LIWA BALLROOM ✦
        </div>
      </motion.div>
    </div>
  );
}
