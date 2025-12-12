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
        padding: '27px 425px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '10px',
        border: '1px solid rgba(150, 229, 255, 0.50)',
        background: isSelected 
          ? 'linear-gradient(90deg, rgba(198, 233, 247, 0.10) 0.09%, rgba(229, 248, 255, 0.10) 99.91%)'
          : 'linear-gradient(90deg, rgba(198, 233, 247, 0.10) 0.09%, rgba(229, 248, 255, 0.10) 99.91%)',
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
          fontFamily: 'Manrope, sans-serif',
          fontSize: '20px',
          fontWeight: 500,
          color: '#15313D',
          textAlign: 'center'
        }}
      >
        {text}
      </span>
    </motion.button>
  )
}

