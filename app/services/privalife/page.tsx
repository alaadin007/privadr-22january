import { Metadata } from 'next'
import { PrivaLifeHero } from "@/components/services/privalife/privalife-hero"
import { PrivaLifeFeatures } from "@/components/services/privalife/privalife-features"
import { PrivaLifeServices } from "@/components/services/privalife/privalife-services"
import { PrivaLifeMembership } from "@/components/services/privalife/privalife-membership"

export const metadata: Metadata = {
  title: 'PrivaLife Premium Healthcare | PRIVA Dr.',
  description: 'Experience personalized, premium healthcare with PrivaLife. 24/7 access to expert medical care, comprehensive health assessments, and exclusive wellness services.',
  keywords: ['premium healthcare', 'private doctor', 'concierge medicine', 'health assessment', 'harley street'],
}

export default function PrivaLifePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PrivaLifeHero />
      <PrivaLifeFeatures />
      <PrivaLifeServices />
      <PrivaLifeMembership />
    </main>
  )
}