"use client"

import { Card } from '@/components/ui/card'

interface SearchResultsProps {
  response?: string
  error?: string
}

export function SearchResults({ response, error }: SearchResultsProps) {
  if (error) {
    return (
      <Card className="p-6 mt-6 text-destructive">
        <p>{error}</p>
      </Card>
    )
  }

  if (!response) return null

  return (
    <Card className="p-6 mt-6">
      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: response }} />
      </div>
    </Card>
  )
}