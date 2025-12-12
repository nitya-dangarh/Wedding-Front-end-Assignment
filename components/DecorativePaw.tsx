'use client'

export default function DecorativePaw() {
  return (
    <div className="relative" style={{ width: '150px', height: '150px' }}>
      {/* Cat Cute GIF - Bottom layer */}
      <img 
        src="/cat-cute.gif"
        alt="Cute cat animation"
        width="150"
        height="150"
        style={{
          objectFit: 'contain',
          display: 'block',
          position: 'relative',
          zIndex: 0
        }}
      />
      
      {/* Best of Luck Updated Image - Above the GIF */}
      <img 
        src="/best of luck updated.png"
        alt="Best of luck"
        style={{
          position: 'absolute',
          top: '-60px',
          left: '-40px',
          width: '180px',
          height: 'auto',
          objectFit: 'contain',
          zIndex: 1
        }}
      />
    </div>
  )
}
