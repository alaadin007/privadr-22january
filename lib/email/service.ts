import { ContactFormData } from '@/lib/contact/types'
import { emailConfig } from './config'
import { generateAdminNotification } from './templates/admin-notification'
import { generateAutoReply } from './templates/auto-reply'
import { validateEmail, sanitizeHtml } from './utils'

export async function sendContactFormEmails(data: ContactFormData, ipAddress: string) {
  try {
    if (!validateEmail(data.email)) {
      throw new Error('Invalid email address')
    }

    // Send admin notification
    const adminEmail = generateAdminNotification(data, ipAddress)
    await sendEmail({
      to: emailConfig.adminEmail,
      from: emailConfig.from,
      subject: adminEmail.subject,
      html: sanitizeHtml(adminEmail.html)
    })

    // Send auto-reply
    const autoReply = generateAutoReply(data)
    await sendEmail({
      to: data.email,
      from: emailConfig.from,
      subject: autoReply.subject,
      html: sanitizeHtml(autoReply.html)
    })

    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send emails' 
    }
  }
}

async function sendEmail({ to, from, subject, html }: {
  to: string
  from: string
  subject: string
  html: string
}) {
  // Implementation will depend on your email service provider
  // Example using NodeMailer or other email service
  console.log('Sending email:', { to, from, subject })
}