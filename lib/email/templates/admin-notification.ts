import { ContactFormData } from '@/lib/contact/types'

export function generateAdminNotification(data: ContactFormData, ipAddress: string) {
  const timestamp = new Date().toISOString()
  
  return {
    subject: `New Contact Form Submission - ${data.firstName} ${data.lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Timestamp:</strong> ${timestamp}</p>
      <p><strong>IP Address:</strong> ${ipAddress}</p>
      
      <h3>Contact Details</h3>
      <ul>
        <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Service:</strong> ${data.service}</li>
      </ul>

      <h3>Message</h3>
      <p>${data.message}</p>

      ${data.requestCallback ? `
        <h3>Callback Request</h3>
        <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
      ` : ''}
    `
  }
}