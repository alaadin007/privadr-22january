"use client"

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SearchFormProps {
  onSearch: (query: string, pageType: string) => Promise<void>
  defaultPageType?: string
  showPageTypeSelect?: boolean
  isLoading: boolean
}

export function SearchForm({ 
  onSearch, 
  defaultPageType = 'General',
  showPageTypeSelect = true,
  isLoading 
}: SearchFormProps) {
  const [query, setQuery] = useState('')
  const [pageType, setPageType] = useState(defaultPageType)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query, pageType)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a medical question..."
            className="pl-10"
            disabled={isLoading}
          />
        </div>
        {showPageTypeSelect && (
          <Select
            value={pageType}
            onValueChange={setPageType}
            disabled={isLoading}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select context" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="General">General</SelectItem>
              <SelectItem value="Diabetes Care">Diabetes Care</SelectItem>
              <SelectItem value="Cardiology">Cardiology</SelectItem>
              <SelectItem value="Primary Care">Primary Care</SelectItem>
            </SelectContent>
          </Select>
        )}
        <Button type="submit" disabled={isLoading || !query.trim()}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </div>
    </form>
  )
}