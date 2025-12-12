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
      style={{ backgroundColor: '#F4FDFF' }}
    >
      {/* Keep Learning Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="mb-8 px-4 py-2 rounded-lg"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px dashed #E6E6E6'
        }}
      >
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: '#15313D'
          }}
        >
          Keep Learning!
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
          lineHeight: '24px',
          letterSpacing: '-4px',
          color: '#15313D',
          width: '919px',
          height: '61px'
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
        style={{ gap: '8px', height: '214px' }}
      >
        {/* Tens digit */}
        <RollingCounter targetValue={Math.floor(score / 10)} />
        
        {/* Ones digit */}
        <RollingCounter targetValue={score % 10} />
        
        {/* Percent symbol */}
        <span
          className="flex items-baseline"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '60px',
            fontWeight: 500,
            color: '#15313D',
            height: '214px',
            lineHeight: '214px',
            paddingLeft: '4px'
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
        className="rounded-lg px-8 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue"
        style={{
          width: '200px',
          height: '50px',
          backgroundColor: '#96E5FF',
          color: '#15313D',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '18px',
          fontWeight: 600
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Again
      </motion.button>
    </div>
  )
}

