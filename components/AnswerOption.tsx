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
      className="rounded-[10px] flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue"
      style={{
        width: '896px',
        height: '78px',
        paddingLeft: '425px',
        paddingRight: '425px',
        paddingTop: '27px',
        paddingBottom: '27px',
        background: isSelected 
          ? 'linear-gradient(to bottom, #C6E9F7, #E5F8FF)' 
          : 'linear-gradient(to bottom, #C6E9F7, #E5F8FF)',
        border: `1px solid ${isSelected ? '#96E5FF' : '#E6E6E6'}`,
        borderStyle: 'inset'
      }}
      whileHover={{
        background: 'linear-gradient(to bottom, #C6E9F7, #E5F8FF)',
        borderColor: '#96E5FF',
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
          color: '#15313D'
        }}
      >
        {text}
      </span>
    </motion.button>
  )
}

