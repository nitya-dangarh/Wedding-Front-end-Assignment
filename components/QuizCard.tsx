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
      className="relative w-[1542px] h-[856px] rounded-[42px] flex flex-col items-center"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '19.31px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Title */}
      <h1 
        className="text-center mt-[206px] mb-4"
        style={{ 
          fontFamily: 'DM Serif Display, serif',
          fontStyle: 'italic',
          fontSize: '90px',
          lineHeight: '24px',
          letterSpacing: '-4px',
          color: '#15313D',
          width: '919px',
          height: '102px'
        }}
      >
        Test Your Knowledge
      </h1>

      {/* Subtitle */}
      <p 
        className="text-center mb-[10px]"
        style={{ 
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '24px',
          letterSpacing: '-0.31px',
          color: '#15313D',
          width: '359px',
          height: '24px'
        }}
      >
        Answer all questions to see your results
      </p>

      {/* Progress Indicator */}
      <div className="mb-8 flex gap-[2px] justify-center items-center">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <div
            key={index}
            className="relative"
            style={{
              width: '43.2px',
              height: '2px',
            }}
          >
            {/* Progress segment */}
            {index < currentQuestion ? (
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: '#15313D',
                  borderRadius: '1px',
                }}
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: '#E6E6E6',
                  borderRadius: '1px',
                }}
              />
            )}
          </div>
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

