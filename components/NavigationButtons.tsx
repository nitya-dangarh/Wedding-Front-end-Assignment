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
    <div style={{ 
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      width: '116px',
      height: '50px'
    }}>
      <motion.button
        className="flex items-center justify-center focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          display: 'flex',
          width: '53px',
          height: '50px',
          padding: '0',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '10px',
          border: '1px solid rgba(150, 229, 255, 0.05)',
          background: 'linear-gradient(90deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
          color: '#15313D'
        }}
        whileHover={canGoPrevious ? { scale: 1.05 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous question"
      >
        <img 
          src="/arrow_backw.png"
          alt="Previous"
          width="24"
          height="24"
          style={{ display: 'block' }}
        />
      </motion.button>
      
      <motion.button
        className="flex items-center justify-center focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          display: 'flex',
          width: '53px',
          height: '50px',
          padding: '0',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '10px',
          border: '1px solid rgba(150, 229, 255, 0.05)',
          background: 'linear-gradient(90deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
          color: '#15313D'
        }}
        whileHover={canGoNext ? { scale: 1.05 } : {}}
        whileTap={canGoNext ? { scale: 0.95 } : {}}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next question"
      >
        <img 
          src="/arrow_forward.png"
          alt="Next"
          width="24"
          height="24"
          style={{ display: 'block' }}
        />
      </motion.button>
    </div>
  )
}

