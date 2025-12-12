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
        background: 'linear-gradient(90deg, rgba(198, 233, 247, 0.10) 0.09%, rgba(229, 248, 255, 0.10) 99.91%)',
        border: '1px solid rgba(150, 229, 255, 0.50)'
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

