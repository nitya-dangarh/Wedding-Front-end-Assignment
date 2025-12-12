'use client'

import { useState } from 'react'
import QuestionBlock from './QuestionBlock'
import AnswerOption from './AnswerOption'
import NavigationButtons from './NavigationButtons'
import DecorativePaw from './DecorativePaw'
import { motion } from 'framer-motion'

interface QuizCardProps {
  questionNumber: number
  question: string
  answers: string[]
  currentQuestion: number
  totalQuestions: number
  selectedAnswer?: string | null
  onAnswerSelect?: (answer: string) => void
  onNext?: () => void
  onPrevious?: () => void
}

export default function QuizCard({ 
  questionNumber, 
  question, 
  answers,
  currentQuestion,
  totalQuestions,
  selectedAnswer: propSelectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious
}: QuizCardProps) {
  const [internalSelectedAnswer, setInternalSelectedAnswer] = useState<string | null>(null)
  const selectedAnswer = propSelectedAnswer !== undefined ? propSelectedAnswer : internalSelectedAnswer
  
  const handleAnswerClick = (answer: string) => {
    if (propSelectedAnswer === undefined) {
      setInternalSelectedAnswer(answer)
    }
    onAnswerSelect?.(answer)
  }

  return (
    <div 
      className="relative flex flex-col items-center"
      style={{ 
        width: '1542px',
        height: '856px',
        borderRadius: '42px',
        backgroundColor: '#F4FDFF',
        padding: '19.31px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
        boxSizing: 'border-box'
      }}
    >
      {/* Title */}
      <h1 
        style={{ 
          display: 'flex',
          width: '919px',
          height: '102px',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: '"DM Serif Display", serif',
          fontSize: '90px',
          fontStyle: 'italic',
          fontWeight: 400,
          lineHeight: '24px',
          letterSpacing: '-4px',
          background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginTop: '206px',
          marginBottom: '16px'
        }}
      >
        Test Your Knowledge
      </h1>

      {/* Subtitle */}
      <div 
        style={{ 
          display: 'flex',
          width: '422px',
          height: '45px',
          padding: '10px 31px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          marginBottom: '10px'
        }}
      >
        <p 
          style={{ 
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '-0.31px',
            color: '#15313D',
            textAlign: 'center',
            margin: 0
          }}
        >
          Answer all questions to see your results
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8 flex justify-center items-center" style={{ gap: '0' }}>
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="216"
            height="2"
            viewBox="0 0 216 2"
            fill="none"
            style={{ display: 'block' }}
          >
            <path 
              d="M0 1H216" 
              stroke={index < currentQuestion ? '#E3E3E3' : '#E6E6E6'} 
              strokeWidth="2"
            />
          </svg>
        ))}
      </div>

      {/* Question Block */}
      <div className="mb-[10px]">
        <QuestionBlock question={`${questionNumber}. ${question}`} />
      </div>

      {/* Answer Options */}
      <div className="flex flex-col gap-[10px]">
        {answers.map((answer, index) => (
          <AnswerOption
            key={index}
            text={answer}
            isSelected={selectedAnswer === answer}
            onClick={() => handleAnswerClick(answer)}
          />
        ))}
      </div>

      {/* Navigation Buttons or Submit Button */}
      {currentQuestion === totalQuestions ? (
        <div className="absolute bottom-[50px] right-[194px]">
          <motion.button
            onClick={onNext}
            className="rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue"
            style={{
              backgroundColor: '#9AC9E0',
              color: '#FFFFFF',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              width: '120px',
              height: '50px'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      ) : (
        <div className="absolute bottom-[50px] right-[194px]">
          <NavigationButtons 
            onPrevious={onPrevious}
            onNext={onNext}
            canGoPrevious={currentQuestion > 1}
            canGoNext={currentQuestion < totalQuestions}
          />
        </div>
      )}

      {/* Decorative Paw - only show on first question */}
      {currentQuestion === 1 && (
        <div className="absolute bottom-[50px] left-[194px]">
          <DecorativePaw />
        </div>
      )}
    </div>
  )
}

