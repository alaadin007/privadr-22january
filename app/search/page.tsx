"use client"

import { useState } from 'react'
import { SearchForm } from '@/components/search/search-form'
import { SearchResults } from '@/components/search/search-results'
import { useToast } from '@/components/ui/use-toast'

export default function SearchPage() {
  const [response, setResponse] = useState<string>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSearch = async (query: string, pageType: string) => {
    setIsLoading(true)
    setError(undefined)
    
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, pageType }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Failed to get response')
      }

      setResponse(data.response)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred'
      setError(message)
      toast({
        title: "Error",
        description: message,
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Medical Search Assistant
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Ask questions about medical conditions, treatments, and services
          </p>
          
          <SearchForm 
            onSearch={handleSearch}
            isLoading={isLoading}
          />
          
          <SearchResults 
            response={response}
            error={error}
          />
        </div>
      </div>
    </main>
  )
}