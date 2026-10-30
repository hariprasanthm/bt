import React from 'react';

export const HosurMapCanvas: React.FC = () => {
  return (
    <svg
      viewBox="0 0 600 400"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: '#E8EFF9' }}
    >
      <defs>
        {/* Soft Land/Water Gradients */}
        <linearGradient id="waterGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CBE2FC" />
          <stop offset="100%" stopColor="#B9DAFB" />
        </linearGradient>

        <linearGradient id="parkGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D8EEDF" />
          <stop offset="100%" stopColor="#CEEAD6" />
        </linearGradient>

        {/* Pulse Ring Animation for Location Marker */}
        <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background Land Areas */}
      <rect width="600" height="400" fill="#EBF1FA" />

      {/* Green Spaces / Tech Parks */}
      <path
        d="M 20 60 Q 90 40 140 90 T 80 180 T 10 140 Z"
        fill="url(#parkGrad)"
        opacity="0.7"
      />
      <path
        d="M 440 260 Q 520 230 580 270 T 560 380 T 460 350 Z"
        fill="url(#parkGrad)"
        opacity="0.6"
      />

      {/* Water Bodies (Lakes / Reservoirs) */}
      <path
        d="M 500 180 Q 550 160 580 190 T 540 240 T 480 210 Z"
        fill="url(#waterGrad)"
      />
      <path
        d="M 40 280 Q 90 270 110 310 T 60 370 T 20 330 Z"
        fill="url(#waterGrad)"
      />

      {/* Secondary Streets & Urban Grid */}
      <g stroke="#FFFFFF" strokeWidth="3" opacity="0.9" fill="none">
        <line x1="0" y1="90" x2="600" y2="80" />
        <line x1="0" y1="180" x2="600" y2="190" />
        <line x1="0" y1="270" x2="600" y2="260" />
        <line x1="120" y1="0" x2="110" y2="400" />
        <line x1="280" y1="0" x2="270" y2="400" />
        <line x1="460" y1="0" x2="480" y2="400" />
        <line x1="50" y1="50" x2="250" y2="250" />
        <line x1="320" y1="80" x2="520" y2="280" />
        <line x1="180" y1="350" x2="420" y2="110" />
      </g>

      {/* Major Primary Roads (Light Blue / Grey Highway network) */}
      <g stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* State Highway 17 */}
        <path d="M 0 140 Q 180 160 340 130 T 600 110" />
        {/* Bagalur Road connecting to Hosur */}
        <path d="M 160 0 Q 220 180 320 220 T 440 400" />
        {/* Inner Ring Road */}
        <path d="M 400 0 Q 380 150 480 240 T 600 360" />
      </g>

      {/* National Highway 44 (Yellow/Orange route badge) */}
      <g stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 520 0 Q 480 140 430 220 T 360 400" />
      </g>
      <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 520 0 Q 480 140 430 220 T 360 400" />
      </g>

      {/* Highway Shield Badges */}
      <g transform="translate(540, 60)">
        <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#F59E0B" />
        <text x="0" y="4" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          44
        </text>
      </g>

      <g transform="translate(470, 240)">
        <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#F59E0B" />
        <text x="0" y="4" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          844
        </text>
      </g>

      <g transform="translate(80, 80)">
        <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#3B82F6" />
        <text x="0" y="4" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          17
        </text>
      </g>

      {/* Place Labels (Hosur, Bagalur) */}
      <g fontFamily="sans-serif">
        <text x="510" y="165" fill="#1E293B" fontSize="16" fontWeight="bold" textAnchor="middle">
          Hosur
        </text>
        <text x="510" y="182" fill="#64748B" fontSize="12" fontWeight="600" textAnchor="middle">
          ஓசூர்
        </text>

        <text x="140" y="240" fill="#334155" fontSize="13" fontWeight="bold" textAnchor="middle">
          BAGALUR
        </text>
        <text x="140" y="255" fill="#64748B" fontSize="11" textAnchor="middle">
          பாகலூர்
        </text>
      </g>

      {/* Location Pin Marker at Best Technology Headquarters */}
      <g transform="translate(360, 210)">
        {/* Animated Pulsing Ring */}
        <circle cx="0" cy="0" r="28" fill="url(#pinGlow)" opacity="0.6">
          <animate attributeName="r" values="16;34;16" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Pin Shadow */}
        <ellipse cx="0" cy="8" rx="8" ry="4" fill="#000000" opacity="0.3" />

        {/* Red Map Pin SVG */}
        <path
          d="M 0 -28 C -10 -28 -16 -20 -16 -10 C -16 2 0 10 0 10 C 0 10 16 2 16 -10 C 16 -20 10 -28 0 -28 Z"
          fill="#EF4444"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
        <circle cx="0" cy="-12" r="5" fill="#FFFFFF" />
      </g>
    </svg>
  );
};

export default HosurMapCanvas;
