'use client'

import { motion } from 'framer-motion'

interface NavigationButtonsProps {
  onPrevious?: () => void
  onNext?: () => void
  canGoPrevious?: boolean
  canGoNext?: boolean
}

export default function NavigationButtons({ 
  onPrevious, 
  onNext, 
  canGoPrevious = true, 
  canGoNext = true 
}: NavigationButtonsProps) {
  return (
    <div className="flex items-center" style={{ gap: '10px', width: '116px', height: '50px' }}>
      <motion.button
        className="rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#96E5FF',
          color: '#15313D'
        }}
        whileHover={canGoPrevious ? { scale: 1.05 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous question"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
      
      <motion.button
        className="rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#96E5FF',
          color: '#15313D'
        }}
        whileHover={canGoNext ? { scale: 1.05 } : {}}
        whileTap={canGoNext ? { scale: 0.95 } : {}}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next question"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </div>
  )
}

