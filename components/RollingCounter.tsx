'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface RollingCounterProps {
  targetValue: number
  duration?: number
}

export default function RollingCounter({ targetValue, duration = 2000 }: RollingCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    // Reset to 0
    setDisplayValue(0)
    
    // Start animation after a brief delay
    const timeout = setTimeout(() => {
      const startTime = Date.now()
      const startValue = 0
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const value = Math.floor(startValue + (targetValue - startValue) * easeOutCubic)
        
        setDisplayValue(value)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setDisplayValue(targetValue)
        }
      }
      
      animate()
    }, 200)
    
    return () => clearTimeout(timeout)
  }, [targetValue, duration])

  // Calculate Y position for rolling effect
  const yPosition = -displayValue * 214

  return (
    <div 
      className="relative overflow-hidden"
      style={{ 
        width: '116px', 
        height: '214px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        className="flex flex-col"
        animate={{
          y: yPosition
        }}
        transition={{
          type: 'tween',
          duration: 0.3,
          ease: 'easeOut'
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
