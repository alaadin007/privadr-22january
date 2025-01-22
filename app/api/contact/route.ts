import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/contact/validation'
import { sendContactFormEmails } from '@/lib/email/service'
import { checkRateLimit } from '@/lib/utils/rate-limit'

export async function POST(req: Request) {
  try {
    // Get client IP
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
    
    // Check rate limit
    const rateLimitResult = await checkRateLimit(ip)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { success: false, error: 'Too many requests' },
        { status: 429 }
      )
    }

    // Validate form data
    const data = await req.json()
    const validatedData = contactFormSchema.parse(data)

    // Send emails
    const result = await sendContactFormEmails(validatedData, ip)
    
    if (!result.success) {
      throw new Error(result.error)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form submission failed:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to process submission' 
      },
      { status: 500 }
    )
  }
}