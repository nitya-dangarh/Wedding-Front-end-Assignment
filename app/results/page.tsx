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
      background: 'linear-gradient(135deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)'
    }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ResultsContent />
      </Suspense>
    </main>
  )
}

