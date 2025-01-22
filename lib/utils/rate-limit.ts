interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: number
}

const rateLimitMap = new Map<string, { count: number; reset: number }>()

export async function checkRateLimit(ip: string, limit = 5, window = 60000): Promise<RateLimitResult> {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record) {
    rateLimitMap.set(ip, { count: 1, reset: now + window })
    return { success: true, limit, remaining: limit - 1, reset: now + window }
  }

  if (now > record.reset) {
    record.count = 1
    record.reset = now + window
    return { success: true, limit, remaining: limit - 1, reset: record.reset }
  }

  record.count++
  if (record.count > limit) {
    return { success: false, limit, remaining: 0, reset: record.reset }
  }

  return { success: true, limit, remaining: limit - record.count, reset: record.reset }
}