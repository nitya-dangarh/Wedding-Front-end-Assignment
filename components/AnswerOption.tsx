'use client'

import { motion } from 'framer-motion'

interface AnswerOptionProps {
  text: string
  isSelected: boolean
  onClick: () => void
}

export default function AnswerOption({ text, isSelected, onClick }: AnswerOptionProps) {
  return (
    <motion.button
      onClick={onClick}
      style={{
        display: 'flex',
        width: '896px',
        height: '78px',
        padding: isSelected ? '27px 425px' : '27px 425px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '10px',
        border: isSelected 
          ? '1px solid #96E5FF'
          : '1px solid rgba(150, 229, 255, 0.50)',
        background: isSelected 
          ? 'linear-gradient(90deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
          : 'transparent',
        cursor: 'pointer',
        transition: 'all 0.2s'
      }}
      whileHover={{
        scale: 1.01
      }}
      whileTap={{ scale: 0.99 }}
      aria-pressed={isSelected}
    >
      <span
        style={{
          color: '#15313D',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '24px',
          letterSpacing: '-0.312px'
        }}
      >
        {text}
      </span>
    </motion.button>
  )
}

