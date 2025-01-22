import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { query, pageType = 'General' } = await req.json()

    if (!query?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Query is required' },
        { status: 400 }
      )
    }

    const response = await fetch('https://medacles.app.n8n.cloud/webhook/e3ff112c-54a4-4b69-9af4-7b9a7abf4702/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, pageType })
    })

    if (!response.ok) {
      throw new Error('Failed to fetch response')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to process search' 
      },
      { status: 500 }
    )
  }
}