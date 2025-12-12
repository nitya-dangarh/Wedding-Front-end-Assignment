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

      {/* Cat Cute GIF */}
      <img 
        src="/cat-cute.gif"
        alt="Cute cat animation"
        width="120"
        height="120"
        style={{
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  )
}

