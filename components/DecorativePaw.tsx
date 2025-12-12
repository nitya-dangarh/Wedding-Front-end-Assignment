'use client'

export default function DecorativePaw() {
  return (
    <div className="relative">
      {/* Speech Bubble */}
      <div 
        className="absolute -top-12 -left-8 px-4 py-2 rounded-lg"
        style={{
          backgroundColor: '#FFFFFF',
          border: '2px solid #15313D',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '16px',
          fontWeight: 600,
          color: '#15313D',
          whiteSpace: 'nowrap'
        }}
      >
        Best of Luck!
      </div>

      {/* Cat Paw SVG */}
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Decorative cat paw"
      >
        {/* Main paw pad */}
        <ellipse cx="60" cy="80" rx="25" ry="20" fill="#FFB6C1"/>
        
        {/* Toe pads */}
        <ellipse cx="40" cy="50" rx="12" ry="10" fill="#FFB6C1"/>
        <ellipse cx="60" cy="45" rx="12" ry="10" fill="#FFB6C1"/>
        <ellipse cx="80" cy="50" rx="12" ry="10" fill="#FFB6C1"/>
        
        {/* White fur overlay */}
        <ellipse cx="60" cy="75" rx="20" ry="15" fill="#FFFFFF" opacity="0.8"/>
        <ellipse cx="38" cy="48" rx="8" ry="7" fill="#FFFFFF" opacity="0.8"/>
        <ellipse cx="60" cy="43" rx="8" ry="7" fill="#FFFFFF" opacity="0.8"/>
        <ellipse cx="82" cy="48" rx="8" ry="7" fill="#FFFFFF" opacity="0.8"/>
      </svg>
    </div>
  )
}

