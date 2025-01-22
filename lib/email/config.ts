import { z } from 'zod'

export const emailConfig = {
  from: 'PRIVA Dr. <noreply@privadr.com>',
  adminEmail: 'info@privadr.com',
  businessHours: '9:00 AM - 6:00 PM (GMT)',
  responseTime: '24-48 hours',
  templates: {
    adminNotification: 'admin-notification',
    autoReply: 'auto-reply'
  }
} as const

export const emailConfigSchema = z.object({
  from: z.string(),
  adminEmail: z.string().email(),
  businessHours: z.string(),
  responseTime: z.string(),
  templates: z.object({
    adminNotification: z.string(),
    autoReply: z.string()
  })
})