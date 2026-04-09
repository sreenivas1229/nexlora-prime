// src/components/ui/Logo.jsx
// High-quality SVG logo for Nexlora Prime Technologies

export default function Logo({ size = 40, showText = true, white = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      {/* SVG Icon Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="np-grad-main" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A6EE8" />
            <stop offset="100%" stopColor="#00A896" />
          </linearGradient>
          <linearGradient id="np-grad-accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A9EFF" />
            <stop offset="100%" stopColor="#00D4B4" />
          </linearGradient>
          <filter id="np-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1A6EE8" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background rounded square */}
        <rect width="40" height="40" rx="10" fill="url(#np-grad-main)" filter="url(#np-shadow)" />

        {/* N letterform — left vertical + diagonal */}
        <path
          d="M8 10 L8 30 L13 30 L13 18 L22 30 L27 30 L27 10 L22 10 L22 22 L13 10 Z"
          fill="white"
          opacity="0.95"
        />

        {/* P letterform — right side accent */}
        <rect x="29" y="10" width="3" height="20" rx="1.5" fill="url(#np-grad-accent)" opacity="0.9" />
        <rect x="29" y="10" width="3" height="8" rx="1.5" fill="white" opacity="0.6" />

        {/* Accent dot */}
        <circle cx="32" cy="32" r="2" fill="url(#np-grad-accent)" opacity="0.8" />
      </svg>

      {/* Text Mark */}
      {showText && (
        <div style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700,
          fontSize: size * 0.475,
          lineHeight: 1,
          userSelect: 'none',
        }}>
          <span style={{ color: white ? 'white' : 'var(--text-primary)' }}>Nexlora</span>
          <span style={{ color: white ? '#4A9EFF' : 'var(--blue)' }}> Prime</span>
        </div>
      )}
    </div>
  );
}
