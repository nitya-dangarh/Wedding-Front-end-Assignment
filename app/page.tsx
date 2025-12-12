'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuizCard from '@/components/QuizCard'

const QUESTIONS = [
  {
    number: 1,
    question: "What sound does a cat make?",
    answers: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"]
  },
  {
    number: 2,
    question: "What would you probably find in your fridge?",
    answers: ["Shoes", "Ice Cream", "Books"]
  },
  {
    number: 3,
    question: "How many stars are in the sky?",
    answers: ["Two", "Infinite", "One Hundred"]
  },
  {
    number: 4,
    question: "What color are bananas?",
    answers: ["Blue", "Yellow", "Red"]
  }
]

export default function Home() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const currentQ = QUESTIONS[currentQuestion - 1]

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate score and navigate to results
      const correctAnswers: Record<number, string> = {
        1: "Meow-Meow",
        2: "Ice Cream",
        3: "Infinite",
        4: "Yellow"
      }
      
      let correctCount = 0
      QUESTIONS.forEach((q) => {
        if (answers[q.number] === correctAnswers[q.number]) {
          correctCount++
        }
      })
      
      const score = Math.round((correctCount / QUESTIONS.length) * 100)
      router.push(`/results?score=${score}`)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleAnswerSelect = (answer: string) => {
    setAnswers({ ...answers, [currentQ.number]: answer })
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-8" style={{
      background: 'linear-gradient(135deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)'
    }}>
      <QuizCard
        questionNumber={currentQ.number}
        question={currentQ.question}
        answers={currentQ.answers}
        currentQuestion={currentQuestion}
        totalQuestions={QUESTIONS.length}
        selectedAnswer={answers[currentQ.number]}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </main>
  )
}
