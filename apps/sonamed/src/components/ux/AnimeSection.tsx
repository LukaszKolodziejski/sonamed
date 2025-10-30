'use client';

import { colors } from '@/constants/colors';
import Image from 'next/image';

interface AnimeSectionProps {
  className?: string;
}

export default function AnimeSection({ className = '' }: AnimeSectionProps) {
  // Lista ikon zębów - więcej dla bogatszej animacji
  const toothIcons = [
    '/icons/Offer-icons-9.png',
    '/icons/Offer-icons-10.png',
    // '/icons/Offer-icons-11.png',
    '/icons/Offer-icons-12.png',
    // '/icons/Offer-icons-13.png',
    '/icons/Offer-icons-14.png',
    // '/icons/Offer-icons-15.png',
    '/icons/Offer-icons-16.png',
    '/icons/Offer-icons-17.png',
    '/icons/Offer-icons-18.png',
    // Duplikaty dla większej ilości
    // '/icons/Offer-icons-9.png',
    // '/icons/Offer-icons-10.png',
    // // '/icons/Offer-icons-11.png',
    // '/icons/Offer-icons-12.png',
    // // '/icons/Offer-icons-13.png',
    // '/icons/Offer-icons-14.png',
  ];

  return (
    <div
      className={`absolute inset-0 w-full h-full z-0 overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${colors.brand.dark} 0%, ${colors.brand.primary} 60%, ${colors.secondary.seaGreen} 100%)`,
      }}
    >
      {/* Delikatne gradientowe warstwy dla głębi */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${colors.brand.primary}40 0%, transparent 60%), radial-gradient(circle at 80% 80%, ${colors.secondary.tealMedium}20 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at 60% 10%, ${colors.secondary.tealMedium}20 0%, transparent 40%), radial-gradient(circle at 40% 90%, ${colors.brand.primary}30 0%, transparent 50%)`,
        }}
      />

      {/* Animowane ikony zębów */}
      <div className="absolute inset-0 z-20">
        {toothIcons.map((icon, index) => {
          // Różne pozycje dla każdej ikony - więcej pozycji dla 16 ikon
          const positions = [
            { top: '20%', left: '5%', size: '60px' },
            { top: '25%', left: '80%', size: '65px' },
            { top: '38%', left: '8%', size: '65px' },
            { top: '60%', left: '78%', size: '60px' },
            { top: '85%', left: '90%', size: '68px' },
            { top: '75%', left: '25%', size: '62px' },
            { top: '15%', left: '75%', size: '66px' },
            // { top: '55%', left: '60%', size: '68px' },
            // { top: '80%', right: '35%', size: '60px' },
            // { top: '35%', right: '8%', size: '64px' },
            // Dodatkowe pozycje dla nowych ikon
            // { top: '15%', left: '40%', size: '62px' },
            // { top: '40%', right: '40%', size: '66px' },
            // { top: '70%', left: '50%', size: '68px' },
            // { top: '30%', left: '25%', size: '61px' },
            // { top: '85%', right: '15%', size: '67px' },
            // { top: '12%', right: '60%', size: '63px' },
          ];

          const position = positions[index];

          return (
            <div
              key={index}
              className="absolute animate-pulse"
              style={{
                ...position,
                animationDuration: `${4 + index * 0.8}s`, // Różne prędkości animacji
                animationDelay: `${index * 0.5}s`, // Opóźnienia dla bardziej organicznego efektu
              }}
            >
              <div
                className="animate-float"
                style={{
                  animation: `float-${index} ${
                    6 + index * 0.3
                  }s ease-in-out infinite`,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <Image
                  src={icon}
                  alt=""
                  width={parseInt(position.size)}
                  height={parseInt(position.size)}
                  className="opacity-40 hover:opacity-60 transition-opacity duration-1000"
                  style={{
                    filter: `brightness(1.2) sepia(0.4) hue-rotate(180deg) saturate(1.3) contrast(1.2) drop-shadow(0 0 10px ${colors.secondary.tealMedium}80)`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Dodatkowa warstwa dla jeszcze bardziej subtelnego efektu */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, transparent 80%, ${colors.secondary.tealIntense}1a 100%)`,
        }}
      />

      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(-1deg);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1.5deg);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-7px) rotate(-0.5deg);
          }
        }
        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(1deg);
          }
        }
        @keyframes float-5 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(-1.5deg);
          }
        }
        @keyframes float-6 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(0.5deg);
          }
        }
        @keyframes float-7 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(-1deg);
          }
        }
        @keyframes float-8 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-11px) rotate(1.2deg);
          }
        }
        @keyframes float-9 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-7px) rotate(-0.8deg);
          }
        }
        @keyframes float-10 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(1.3deg);
          }
        }
        @keyframes float-11 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(-0.7deg);
          }
        }
        @keyframes float-12 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1.1deg);
          }
        }
        @keyframes float-13 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(-1.4deg);
          }
        }
        @keyframes float-14 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(0.9deg);
          }
        }
        @keyframes float-15 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-7px) rotate(-1.2deg);
          }
        }
      `}</style>
    </div>
  );
}
