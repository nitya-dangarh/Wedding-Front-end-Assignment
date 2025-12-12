'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ResultsPage from '@/components/ResultsPage'

function ResultsContent() {
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') || '0', 10)

  return <ResultsPage score={score} />
}

export default function Results() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8" style={{
      backgroundColor: '#E0F2F7'
    }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ResultsContent />
      </Suspense>
    </main>
  )
}

