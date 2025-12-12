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
        background: 'linear-gradient(to right, #C6E9F7, #E5F8FF)',
        border: '1px solid #96E5FF',
        borderStyle: 'inset'
      }}
    >
      <p
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '20px',
          fontWeight: 500,
          color: '#15313D',
          textAlign: 'left',
          width: '100%'
        }}
      >
        {question}
      </p>
    </div>
  )
}

