import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEDDING_DATA } from './weddingData';
import InvitationCover from './components/InvitationCover';
import FamilyInvitation from './components/FamilyInvitation';
import EventSchedule from './components/EventSchedule';
import BrideGroomStory from './components/BrideGroomStory';
import ThingsToKnowAndCountdown from './components/ThingsToKnowAndCountdown';
import ClosingFooter from './components/ClosingFooter';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log('Audio autoplay prevented:', err);
      });
    }
  };

  const handleOpenInvitation = () => {
    setIsOpened(true);
    // Play romantic royal wedding shehnai instrumental on user gesture
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }

    setTimeout(() => {
      const el = document.getElementById('invitation-experience');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F8F5EE',
      color: '#3A2E2B',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Background Shehnai / Sitar Audio Track */}
      <audio 
        ref={audioRef}
        src="/assets/royal_wedding_music.mp3"
        loop
        preload="auto"
      />

      {/* Floating Royal Music Control Button */}
      {isOpened && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={toggleMusic}
          className="music-toggle-btn"
          aria-label={isPlaying ? "Mute Royal Music" : "Play Royal Music"}
          title={isPlaying ? "Mute Royal Music" : "Play Royal Music"}
        >
          {isPlaying ? (
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Volume2 size={24} className="music-wave" />
            </div>
          ) : (
            <VolumeX size={24} />
          )}
        </motion.button>
      )}

      {/* Subtle Palace Marble & Wall Texture Background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.95), rgba(247, 242, 233, 0.92))',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Subtle Palace Arch Columns on Left & Right Margins for Desktop */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '180px',
        height: '100%',
        backgroundImage: 'url(/assets/lxBK3jzh6Y5ZMhiwX2Su3x6FOAg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        opacity: 0.12,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '100%',
        backgroundImage: 'url(/assets/lxBK3jzh6Y5ZMhiwX2Su3x6FOAg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        transform: 'scaleX(-1)',
        opacity: 0.12,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Full-screen Opening Experience */}
        {!isOpened ? (
          <InvitationCover onOpen={handleOpenInvitation} />
        ) : (
          <motion.div
            id="invitation-experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            {/* Top Navigation Bar */}
            <div style={{
              padding: '16px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(12px)',
              position: 'sticky',
              top: 0,
              zIndex: 50
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.86rem',
                  letterSpacing: '0.2em',
                  color: '#8A6A2C',
                  fontWeight: 700
                }}>
                  RAFSANA & WAZIM
                </span>
                {isPlaying && (
                  <span style={{
                    fontSize: '0.68rem',
                    color: '#B58D3D',
                    fontFamily: 'Gotu, sans-serif',
                    background: 'rgba(212, 175, 55, 0.12)',
                    padding: '2px 8px',
                    borderRadius: '12px'
                  }}>
                    ♫ Playing
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={toggleMusic}
                  style={{
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    borderRadius: '9999px',
                    padding: '6px 12px',
                    fontSize: '0.72rem',
                    fontFamily: 'Gotu, sans-serif',
                    color: '#8A6A2C',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {isPlaying ? <Volume2 size={13} /> : <VolumeX size={13} />}
                  <span>{isPlaying ? 'Mute Music' : 'Music'}</span>
                </button>

                <button
                  onClick={() => setIsOpened(false)}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '0.72rem',
                    fontFamily: 'Gotu, sans-serif',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#6E523E',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Cover Page
                </button>
              </div>
            </div>

            {/* Section 1: Family Invitation & Quranic Dua */}
            <FamilyInvitation 
              couple={WEDDING_DATA.couple}
              bismillahArabic={WEDDING_DATA.bismillahArabic}
              invitationMessage={WEDDING_DATA.invitationMessage}
            />

            {/* Section 2: Wedding Event Schedule */}
            <EventSchedule events={WEDDING_DATA.events} />

            {/* Section 3: Meet the Bride & Groom & Photo Showcase */}
            <BrideGroomStory 
              coupleMessage={WEDDING_DATA.coupleMessage}
              galleryPhotos={WEDDING_DATA.galleryPhotos}
            />

            {/* Section 4: Things to Know & Real-time Countdown */}
            <ThingsToKnowAndCountdown 
              thingsToKnow={WEDDING_DATA.thingsToKnow}
              targetDate={WEDDING_DATA.countdownTargetDate}
            />

            {/* Section 5: Closing Invitation & Footer */}
            <ClosingFooter couple={WEDDING_DATA.couple} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
