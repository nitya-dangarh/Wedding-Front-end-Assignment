'use client'

interface QuestionBlockProps {
  question: string
}

export default function QuestionBlock({ question }: QuestionBlockProps) {
  return (
    <div
      style={{
        display: 'flex',
        width: '896px',
        height: '78px',
        padding: '24px 277px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '10px',
        border: '1px solid #96E5FF',
        background: 'linear-gradient(90deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
      }}
    >
      <p
        style={{
          color: '#15313D',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '24px',
          letterSpacing: '-0.312px',
          margin: 0
        }}
      >
        {question}
      </p>
    </div>
  )
}

