'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface ResultsPageProps {
  score: number
}

export default function ResultsPage({ score }: ResultsPageProps) {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [animatedScore, setAnimatedScore] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Animate score from 0 to target
    const startTime = Date.now()
    const duration = 2000
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const value = Math.floor(0 + (score - 0) * easeOutCubic)
      
      setAnimatedScore(value)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setAnimatedScore(score)
      }
    }
    
    const timeout = setTimeout(() => {
      animate()
    }, 300)
    
    return () => clearTimeout(timeout)
  }, [score])

  const handleStartAgain = () => {
    router.push('/')
  }

  return (
    <div 
      className="relative flex flex-col items-center justify-center"
      style={{ 
        width: '1542px',
        height: '856px',
        backgroundColor: 'transparent'
      }}
    >
      {/* Keep Learning Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          width: '239px',
          height: '45px',
          padding: '10px 31px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          marginBottom: '32px'
        }}
      >
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: '#333333',
            margin: 0
          }}
        >
          Keep Learning!<span style={{ color: '#FF0000' }}>!</span>
        </p>
      </motion.div>

      {/* Your Final score is */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          display: 'flex',
          width: '919px',
          height: '61px',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: '"DM Serif Display", serif',
          fontSize: '60px',
          fontStyle: 'italic',
          fontWeight: 400,
          lineHeight: '24px',
          letterSpacing: '-4px',
          background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '32px'
        }}
      >
        Your Final score is
      </motion.h2>

      {/* Score Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ 
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          marginBottom: '48px',
          gap: '8px'
        }}
      >
        {/* Score Number */}
        <div
          style={{
            width: '206px',
            height: '124.684px',
            color: '#266580',
            textAlign: 'right',
            fontFamily: '"DM Serif Display", serif',
            fontSize: '162.632px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-3.253px',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'flex-end'
          }}
        >
          {animatedScore}
        </div>
        
        {/* Percent symbol */}
        <span
          style={{
            color: '#266580',
            fontFamily: '"DM Serif Display", serif',
            fontSize: '162.632px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-3.253px',
            display: 'inline-block'
          }}
        >
          %
        </span>
      </motion.div>

      {/* Start Again Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={handleStartAgain}
        style={{
          display: 'flex',
          width: '200px',
          height: '50px',
          padding: '0',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          borderRadius: '10px',
          border: '1px solid rgba(150, 229, 255, 0.05)',
          background: 'linear-gradient(90deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
          color: '#15313D',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          boxSizing: 'border-box'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Again
      </motion.button>
    </div>
  )
}
