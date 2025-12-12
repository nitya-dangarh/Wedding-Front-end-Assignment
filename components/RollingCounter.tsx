'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface RollingCounterProps {
  targetValue: number
  duration?: number
}

export default function RollingCounter({ targetValue, duration = 2000 }: RollingCounterProps) {
  const [currentValue, setCurrentValue] = useState(0)
  
  useEffect(() => {
    const startTime = Date.now()
    const startValue = 0
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const value = startValue + (targetValue - startValue) * easeOutCubic
      
      setCurrentValue(Math.floor(value))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCurrentValue(targetValue)
      }
    }
    
    animate()
  }, [targetValue, duration])

  // Calculate the Y position to show the current digit
  const yPosition = -currentValue * 214

  return (
    <div 
      className="relative overflow-hidden flex items-center justify-center"
      style={{ 
        width: '116px', 
        height: '214px'
      }}
    >
      <motion.div
        className="flex flex-col"
        animate={{
          y: yPosition
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
          duration: 0.5
        }}
        style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '213.91px',
          fontWeight: 700,
          letterSpacing: '-2%',
          lineHeight: '214px',
          color: '#2C6E7A',
          textAlign: 'center'
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            style={{ 
              height: '214px', 
              width: '116px',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}
          >
            {i}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

