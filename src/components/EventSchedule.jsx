import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles } from 'lucide-react';

export default function EventSchedule({ events }) {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <section style={{
      position: 'relative',
      padding: '90px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span style={{
            fontFamily: "'Alex Brush', cursive",
            fontSize: '2.4rem',
            color: '#B58D3D',
            display: 'block',
            lineHeight: 1
          }}>
            sacred celebrations
          </span>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '0.16em',
            color: '#2A1F1B',
            fontWeight: 700,
            marginTop: '6px'
          }}>
            Royal Wedding Events
          </h2>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '16px'
          }}>
            <div style={{ width: '45px', height: '1.5px', background: 'linear-gradient(90deg, transparent, #C5A059)' }} />
            <Sparkles size={16} color="#B58D3D" />
            <div style={{ width: '45px', height: '1.5px', background: 'linear-gradient(90deg, #C5A059, transparent)' }} />
          </div>
        </motion.div>
      </div>

      {/* Grid of Event Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px'
      }}>
        {events.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.12 }}
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
            whileHover={{ y: -8 }}
            style={{
              position: 'relative',
              borderRadius: '90px 90px 28px 28px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF6EE 100%)',
              border: '2px solid rgba(212, 175, 55, 0.45)',
              boxShadow: hoveredEvent === event.id 
                ? '0 25px 50px rgba(181, 141, 61, 0.22), 0 0 0 1px rgba(212, 175, 55, 0.6)' 
                : '0 15px 35px rgba(0,0,0,0.06), 0 0 0 1px rgba(212, 175, 55, 0.25)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Top Royal Arch Graphic / Image Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '260px',
              overflow: 'hidden',
              borderRadius: '90px 90px 0 0',
              borderBottom: '2px solid rgba(212, 175, 55, 0.35)'
            }}>
              <motion.img 
                src={event.cardImage} 
                alt={event.title}
                animate={{ scale: hoveredEvent === event.id ? 1.06 : 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(30,22,17,0.55) 100%)'
              }} />

              {/* Event Badge Title overlay with Gold Trim */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '0',
                right: '0',
                textAlign: 'center'
              }}>
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  color: '#FFFFFF',
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                  background: 'linear-gradient(135deg, rgba(38, 30, 24, 0.85) 0%, rgba(68, 52, 40, 0.85) 100%)',
                  padding: '6px 24px',
                  borderRadius: '9999px',
                  backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(212, 175, 55, 0.6)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}>
                  {event.title}
                </span>
              </div>
            </div>

            {/* Event Content Details */}
            <div style={{
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              justifyContent: 'space-between',
              textAlign: 'center'
            }}>
              <div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  lineHeight: '1.5',
                  color: '#7D6451',
                  marginBottom: '20px',
                  minHeight: '44px'
                }}>
                  “{event.tagline}”
                </p>

                {/* Date */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'Gotu, sans-serif',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#2E221E',
                  marginBottom: '10px'
                }}>
                  <Calendar size={16} color="#B58D3D" />
                  <span>{event.dateFormatted}</span>
                </div>

                {/* Time */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'Gotu, sans-serif',
                  fontSize: '0.82rem',
                  color: '#6E5544',
                  marginBottom: '12px'
                }}>
                  <Clock size={16} color="#B58D3D" />
                  <span>{event.time}</span>
                </div>

                {/* Venue */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'Gotu, sans-serif',
                  fontSize: '0.84rem',
                  color: '#2E221E',
                  fontWeight: 500,
                  marginBottom: '22px'
                }}>
                  <MapPin size={16} color="#B58D3D" />
                  <span>{event.venueName}, {event.location}</span>
                </div>
              </div>

              {/* Action: Google Maps Directions */}
              <a 
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '11px 22px',
                  fontSize: '0.78rem',
                  fontFamily: 'Gotu, sans-serif',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: 'linear-gradient(135deg, #B58D3D 0%, #D4AF37 50%, #9B772E 100%)',
                  border: 'none',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(181, 141, 61, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(181, 141, 61, 0.3)';
                }}
              >
                <span>GET DIRECTIONS</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
