import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { colors } from '@/constants/colors';

interface MapComponentProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  isHovered: boolean;
}

const MapComponent = ({ coordinates, isHovered }: MapComponentProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Inicjalizacja mapy
      mapRef.current = L.map('map', {
        center: [coordinates.lat, coordinates.lng],
        zoom: 15,
        zoomControl: true,
        attributionControl: true,
      });

      // Dodanie warstwy OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Niestandardowa ikona markera z animowanym zębem
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="marker-container animate-marker-entry">
            <div class="marker-pin">
              <div class="tooth-icon">🦷</div>
            </div>
            <div class="marker-pulse"></div>
            <div class="marker-ripple"></div>
            <div class="marker-glow"></div>
          </div>
        `,
        iconSize: [60, 60],
        iconAnchor: [30, 50],
      });

      // Dodanie markera z tooltip
      markerRef.current = L.marker([coordinates.lat, coordinates.lng], {
        icon: customIcon,
      })
        .addTo(mapRef.current)
        .bindTooltip(
          `<div style="font-family: system-ui; padding: 8px; text-align: center; background: ${colors.brand.primary}; color: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">🦷 Gabinet SONAMED</div>
            <div style="font-size: 12px; opacity: 0.9;">Stomatologia i medycyna estetyczna</div>
            <div style="font-size: 11px; margin-top: 4px; opacity: 0.8;">Kalinowa 28, Kościerzyna</div>
          </div>`,
          {
            permanent: false,
            direction: 'top',
            offset: [0, -20],
            className: 'custom-tooltip',
          }
        );

      // Dodanie klasy animacji do mapy po załadowaniu
      setTimeout(() => {
        const mapElement = document.getElementById('map');
        if (mapElement) {
          mapElement.classList.add('map-loaded');
        }
      }, 100);
    }

    // Czyszczenie przy odmontowaniu
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coordinates]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full h-full"
    >
      <style jsx global>{`
        .custom-marker {
          background: transparent;
          border: none;
        }

        .marker-container {
          position: relative;
          width: 40px;
          height: 40px;
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-marker-entry {
          animation: markerEntry 0.8s ease-out 0.3s forwards;
        }

        @keyframes markerEntry {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .marker-pin {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          background: ${colors.brand.primary};
          border: 3px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 15px ${colors.brand.primary}60,
            0 0 30px ${colors.secondary.tealMedium}30;
          z-index: 3;
          transition: all 0.3s ease;
          animation: pinEntry 0.8s ease-out 0.8s forwards;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tooth-icon {
          font-size: 18px;
          color: white;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          animation: toothBounce 2s ease-in-out infinite 1.5s;
        }

        @keyframes toothBounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-3px);
          }
          60% {
            transform: translateY(-2px);
          }
        }

        @keyframes pinEntry {
          0% {
            transform: translate(-50%, -50%) scale(0);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .marker-pulse {
          width: 60px;
          height: 60px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: ${colors.secondary.tealMedium}40;
          border-radius: 50%;
          z-index: 2;
          opacity: 0;
          animation: pulse 2.5s infinite 1.2s,
            fadeIn 0.3s ease-out 1.2s forwards;
        }

        .marker-ripple {
          width: 80px;
          height: 80px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 3px solid ${colors.brand.primary}50;
          border-radius: 50%;
          z-index: 1;
          opacity: 0;
          animation: ripple 3.5s infinite 1.5s,
            fadeIn 0.3s ease-out 1.5s forwards;
        }

        .marker-glow {
          width: 100px;
          height: 100px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            ${colors.secondary.tealSoft}20 0%,
            transparent 70%
          );
          border-radius: 50%;
          z-index: 0;
          opacity: 0;
          animation: glow 4s infinite 2s, fadeIn 0.5s ease-out 2s forwards;
        }

        @keyframes glow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.6;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.2);
            opacity: 0;
          }
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        .marker-container:hover .marker-pin {
          transform: translate(-50%, -50%) scale(1.3);
          background: ${colors.secondary.seaGreen};
          box-shadow: 0 0 25px ${colors.brand.primary}80,
            0 0 40px ${colors.secondary.tealMedium}60;
          border-color: ${colors.secondary.mintLight};
        }

        .marker-container:hover .tooth-icon {
          animation: toothBounceHover 0.6s ease-in-out infinite;
        }

        @keyframes toothBounceHover {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-4px) rotate(-5deg);
          }
          75% {
            transform: translateY(-2px) rotate(5deg);
          }
        }

        #map {
          height: 60vh;
          width: 100%;
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: scale(0.98);
          transition: all 0.8s ease-out;
        }

        #map.map-loaded {
          opacity: 1;
          transform: scale(1);
        }

        .leaflet-container {
          height: 100%;
          width: 100%;
        }

        .custom-tooltip {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }

        .leaflet-tooltip-top:before {
          border-top-color: ${colors.brand.primary} !important;
        }

        .leaflet-tooltip-bottom:before {
          border-bottom-color: ${colors.brand.primary} !important;
        }

        .leaflet-tooltip-left:before {
          border-left-color: ${colors.brand.primary} !important;
        }

        .leaflet-tooltip-right:before {
          border-right-color: ${colors.brand.primary} !important;
        }
      `}</style>
      <div id="map" className="relative z-10 w-full h-full" />
    </motion.div>
  );
};

export default MapComponent;
