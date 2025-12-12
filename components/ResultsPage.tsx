'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import RollingCounter from './RollingCounter'
import { useRouter } from 'next/navigation'

interface ResultsPageProps {
  score: number
}

export default function ResultsPage({ score }: ResultsPageProps) {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleStartAgain = () => {
    router.push('/')
  }

  return (
    <div 
      className="relative w-[1542px] h-[856px] rounded-[42px] flex flex-col items-center justify-center"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Keep Learning Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="mb-8 px-4 py-2 rounded-lg"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: '#333333'
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
        className="text-center mb-8"
        style={{
          fontFamily: 'DM Serif Display, serif',
          fontStyle: 'italic',
          fontSize: '60px',
          lineHeight: '1.2',
          letterSpacing: '-2px',
          color: '#2C6E7A',
          width: 'auto'
        }}
      >
        Your Final score is
      </motion.h2>

      {/* Score Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-baseline justify-center mb-12"
        style={{ gap: '4px', height: '214px' }}
      >
        {/* Tens digit */}
        <RollingCounter targetValue={Math.floor(score / 10)} />
        
        {/* Ones digit */}
        <RollingCounter targetValue={score % 10} />
        
        {/* Percent symbol */}
        <span
          className="flex items-baseline"
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: '120px',
            fontWeight: 700,
            color: '#2C6E7A',
            height: '214px',
            lineHeight: '214px',
            paddingLeft: '8px',
            verticalAlign: 'baseline'
          }}
        >
          %
        </span>
      </motion.div>

      {/* Start Again Button - only show if score > 0 */}
      {score > 0 && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={handleStartAgain}
          className="rounded-lg px-8 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: '#9AC9E0',
            color: '#FFFFFF',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            minWidth: '150px',
            height: '50px',
            border: '1px solid rgba(154, 201, 224, 0.3)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Again
        </motion.button>
      )}
    </div>
  )
}

