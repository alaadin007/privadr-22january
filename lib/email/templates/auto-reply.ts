import { ContactFormData } from '@/lib/contact/types'
import { emailConfig } from '../config'
import { generateReferenceNumber } from '../utils'

export function generateAutoReply(data: ContactFormData) {
  const referenceNumber = generateReferenceNumber()

  return {
    subject: "Thank you for contacting PrivaDR - We've received your message",
    html: `
      <h2>Thank you for contacting PRIVA Dr.</h2>
      
      <p>Dear ${data.firstName},</p>
      
      <p>We have received your message and appreciate you taking the time to contact us. 
      Our team will review your inquiry and respond within ${emailConfig.responseTime}.</p>

      <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0;">
        <p><strong>Your Reference Number:</strong> ${referenceNumber}</p>
        <p>Please keep this number for future correspondence.</p>
      </div>

      <h3>Business Hours</h3>
      <p>${emailConfig.businessHours}</p>

      <p>For urgent matters, you can reach us through WhatsApp at +44 7778 435806.</p>

      <p>Best regards,<br>PRIVA Dr. Team</p>
    `
  }
}