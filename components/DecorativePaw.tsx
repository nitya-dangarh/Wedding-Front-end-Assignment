'use client'

export default function DecorativePaw() {
  return (
    <div className="relative" style={{ width: '120px', height: '120px' }}>
      {/* Vector Background Image - Under the GIF */}
      <img 
        src="/best of luck vector.png"
        alt="Best of luck decorative background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          zIndex: 0,
          top: 0,
          left: 0
        }}
      />
      
      {/* Cat Cute GIF - On top of vector */}
      <img 
        src="/cat-cute.gif"
        alt="Cute cat animation"
        width="120"
        height="120"
        style={{
          objectFit: 'contain',
          display: 'block',
          position: 'relative',
          zIndex: 1
        }}
      />
      
      {/* Text on Vector Image */}
      <div 
        className="absolute"
        style={{
          top: '-48px',
          left: '-32px',
          padding: '8px 16px',
          backgroundColor: 'transparent',
          zIndex: 2
        }}
      >
        <p
          style={{
            transform: 'rotate(-2.565deg)',
            color: '#15313D',
            textAlign: 'center',
            fontFamily: '"Caveat Brush", cursive',
            fontSize: '32.727px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '19.636px',
            letterSpacing: '-0.818px',
            margin: 0,
            whiteSpace: 'nowrap'
          }}
        >
          Best of Luck !
        </p>
      </div>
    </div>
  )
}

