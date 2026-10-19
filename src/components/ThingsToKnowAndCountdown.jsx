import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Car } from 'lucide-react';

export default function ThingsToKnowAndCountdown({ thingsToKnow, targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section style={{
      position: 'relative',
      padding: '80px 20px',
      maxWidth: '920px',
      margin: '0 auto'
    }}>
      {/* Things to know header */}
      <div style={{ textAlign: 'center', marginBottom: '45px' }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.25rem',
          fontStyle: 'italic',
          color: '#8C6E44',
          display: 'block'
        }}>
          Guest Guidance
        </span>
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(1.7rem, 3.8vw, 2.6rem)',
          letterSpacing: '0.14em',
          color: '#2A1F1B',
          fontWeight: 600,
          marginTop: '6px'
        }}>
          Things to Know
        </h2>
        <p style={{
          fontFamily: 'Gotu, sans-serif',
          fontSize: '0.86rem',
          color: '#6E5544',
          maxWidth: '560px',
          margin: '12px auto 0 auto',
          lineHeight: '1.6'
        }}>
          To help you feel at ease and enjoy every moment of the celebrations, we’ve gathered a few thoughtful details we’d love for you to know before the big day.
        </p>
      </div>

      {/* Weather and Parking Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '65px'
      }}>
        {/* Weather Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '30px 24px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            textAlign: 'center'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.12)',
            color: '#B58D3D',
            marginBottom: '16px'
          }}>
            <Sun size={24} />
          </div>
          <h3 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1.25rem',
            color: '#2A1F1B',
            marginBottom: '10px',
            letterSpacing: '0.1em'
          }}>
            {thingsToKnow.weather.title}
          </h3>
          <p style={{
            fontFamily: 'Gotu, sans-serif',
            fontSize: '0.84rem',
            lineHeight: '1.7',
            color: '#5C4A42'
          }}>
            {thingsToKnow.weather.desc}
          </p>
        </motion.div>

        {/* Parking Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '30px 24px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            textAlign: 'center'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.12)',
            color: '#B58D3D',
            marginBottom: '16px'
          }}>
            <Car size={24} />
          </div>
          <h3 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1.25rem',
            color: '#2A1F1B',
            marginBottom: '10px',
            letterSpacing: '0.1em'
          }}>
            {thingsToKnow.parking.title}
          </h3>
          <p style={{
            fontFamily: 'Gotu, sans-serif',
            fontSize: '0.84rem',
            lineHeight: '1.7',
            color: '#5C4A42'
          }}>
            {thingsToKnow.parking.desc}
          </p>
        </motion.div>
      </div>

      {/* The Countdown Begins Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          borderRadius: '32px',
          background: 'linear-gradient(135deg, #1C1815 0%, #2A241F 100%)',
          border: '1px solid rgba(212, 175, 55, 0.45)',
          padding: '48px 24px',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          color: '#FAF6EE'
        }}
      >
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.25rem',
          fontStyle: 'italic',
          color: '#D4AF37',
          display: 'block',
          marginBottom: '8px'
        }}>
          Counting Down The Moments
        </span>
        <h3 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
          letterSpacing: '0.16em',
          color: '#FFFFFF',
          marginBottom: '12px',
          fontWeight: 600
        }}>
          The Countdown Begins
        </h3>
        <p style={{
          fontFamily: 'Gotu, sans-serif',
          fontSize: '0.84rem',
          color: '#D1C2B0',
          maxWidth: '540px',
          margin: '0 auto 36px auto',
          lineHeight: '1.6'
        }}>
          Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.
        </p>

        {/* Countdown Digits */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'clamp(10px, 3vw, 24px)',
          flexWrap: 'wrap'
        }}>
          {[
            { label: 'DAYS', val: timeLeft.days },
            { label: 'HOURS', val: timeLeft.hours },
            { label: 'MINUTES', val: timeLeft.minutes },
            { label: 'SECONDS', val: timeLeft.seconds }
          ].map((item, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'clamp(72px, 18vw, 105px)',
                height: 'clamp(85px, 20vw, 115px)',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: 'inset 0 0 12px rgba(212, 175, 55, 0.1)'
              }}
            >
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 600,
                color: '#F3E5C8',
                lineHeight: 1
              }}>
                {String(item.val).padStart(2, '0')}
              </span>
              <span style={{
                fontFamily: 'Gotu, sans-serif',
                fontSize: '0.66rem',
                letterSpacing: '0.2em',
                color: '#C5A059',
                marginTop: '6px',
                fontWeight: 600
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
