export interface SearchResponse {
  success: boolean
  response?: string
  error?: string
}

export interface SearchQuery {
  query: string
  pageType?: string
}