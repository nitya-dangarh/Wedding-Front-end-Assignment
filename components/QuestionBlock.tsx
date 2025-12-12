'use client'

interface QuestionBlockProps {
  question: string
}

export default function QuestionBlock({ question }: QuestionBlockProps) {
  return (
    <div
      className="rounded-[10px] flex items-center justify-center"
      style={{
        width: '896px',
        height: '78px',
        paddingLeft: '277px',
        paddingTop: '24px',
        paddingRight: '277px',
        paddingBottom: '24px',
        background: 'linear-gradient(135deg, #96E5FF 0%, rgba(150, 229, 255, 0.5) 100%)',
        border: '1px solid #96E5FF',
        borderStyle: 'inset'
      }}
    >
      <p
        className="text-center"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '20px',
          fontWeight: 500,
          color: '#15313D'
        }}
      >
        {question}
      </p>
    </div>
  )
}

