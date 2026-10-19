import React from 'react';
import { motion } from 'framer-motion';

export default function FamilyInvitation({ couple, bismillahArabic, invitationMessage }) {
  return (
    <section style={{
      position: 'relative',
      padding: '80px 20px',
      maxWidth: '820px',
      margin: '0 auto',
      textAlign: 'center',
      color: '#3A2E2B'
    }}>
      {/* Decorative Gold Crest / Motif */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '24px' }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          margin: '0 auto 16px auto',
          color: '#B58D3D',
          fontSize: '1.4rem'
        }}>
          ❧
        </div>
        
        {/* Bismillah Calligraphy */}
        <div className="arabic-calligraphy" style={{
          fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
          color: '#8A6A2C',
          marginBottom: '18px',
          lineHeight: '1.8'
        }}>
          {bismillahArabic}
        </div>

        <div style={{
          width: '100px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C5A059, transparent)',
          margin: '0 auto 28px auto'
        }} />
      </motion.div>

      {/* Grandparents' blessings section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          marginBottom: '40px',
          background: 'rgba(255, 255, 255, 0.55)',
          backdropFilter: 'blur(8px)',
          borderRadius: '16px',
          padding: '28px 20px',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
        }}
      >
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.15rem',
          fontStyle: 'italic',
          color: '#8C6E44',
          display: 'block',
          marginBottom: '10px'
        }}>
          With the blessings of
        </span>
        <div style={{
          fontFamily: 'Gotu, sans-serif',
          fontSize: '0.88rem',
          lineHeight: '1.8',
          letterSpacing: '0.04em',
          color: '#4A3B35'
        }}>
          <div>{couple.blessingsGrandparents1}</div>
          <div style={{ color: '#C5A059', margin: '4px 0' }}>— ❦ —</div>
          <div>{couple.blessingsGrandparents2}</div>
        </div>
      </motion.div>

      {/* Parents invitation message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ marginBottom: '45px' }}
      >
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
          lineHeight: '1.7',
          color: '#44342E',
          maxWidth: '680px',
          margin: '0 auto 24px auto'
        }}>
          {invitationMessage}
        </p>

        {/* Bride & Groom Name Display */}
        <div style={{
          margin: '28px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)',
            letterSpacing: '0.18em',
            color: '#2A1F1B',
            fontWeight: 600
          }}>
            {couple.brideFull}
          </h2>
          <div style={{
            fontFamily: "'Alex Brush', cursive",
            fontSize: '2.4rem',
            color: '#B58D3D',
            lineHeight: 1
          }}>
            &
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)',
            letterSpacing: '0.18em',
            color: '#2A1F1B',
            fontWeight: 600
          }}>
            {couple.groomFull}
          </h2>

          <div style={{
            marginTop: '12px',
            fontFamily: 'Gotu, sans-serif',
            fontSize: '0.82rem',
            color: '#7A624E',
            letterSpacing: '0.08em'
          }}>
            Son of {couple.parentsGroom}
          </div>
        </div>
      </motion.div>

      {/* Quranic Dua Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4 }}
        style={{
          background: 'linear-gradient(135deg, rgba(254, 252, 248, 0.92) 0%, rgba(246, 240, 230, 0.88) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '24px',
          padding: '36px 28px',
          boxShadow: '0 12px 35px rgba(0,0,0,0.04), inset 0 0 15px rgba(212,175,55,0.08)'
        }}
      >
        <div className="arabic-calligraphy" style={{
          fontSize: 'clamp(1.25rem, 2.8vw, 1.7rem)',
          color: '#8A6A2C',
          marginBottom: '16px',
          lineHeight: '1.9'
        }}>
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </div>
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: 'italic',
          fontSize: '1.08rem',
          lineHeight: '1.65',
          color: '#524037',
          maxWidth: '620px',
          margin: '0 auto 10px auto'
        }}>
          “And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.”
        </p>
        <span style={{
          fontFamily: 'Gotu, sans-serif',
          fontSize: '0.74rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#9E7D3B',
          fontWeight: 600
        }}>
          Surah Ar-Rum (30:21)
        </span>
      </motion.div>
    </section>
  );
}
