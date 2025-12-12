'use client'

import { useState } from 'react'
import QuestionBlock from './QuestionBlock'
import AnswerOption from './AnswerOption'
import NavigationButtons from './NavigationButtons'
import DecorativePaw from './DecorativePaw'

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
      style={{ backgroundColor: '#F4FDFF' }}
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
              height: '8px',
            }}
          >
            {/* Segment container with border */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: index < currentQuestion ? '#96E5FF' : '#FFFFFF',
                border: `2px solid #15313D`,
                borderRadius: '2px',
              }}
            />
            {/* Filled gradient portion for completed segments */}
            {index < currentQuestion && (
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, #96E5FF, #C6E9F7)',
                  borderRadius: '2px',
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

      {/* Navigation Buttons */}
      <div className="absolute bottom-[50px] right-[194px]">
        <NavigationButtons 
          onPrevious={onPrevious}
          onNext={onNext}
          canGoPrevious={currentQuestion > 1}
          canGoNext={currentQuestion < totalQuestions}
        />
      </div>

      {/* Decorative Paw */}
      <div className="absolute bottom-[50px] left-[194px]">
        <DecorativePaw />
      </div>
    </div>
  )
}

