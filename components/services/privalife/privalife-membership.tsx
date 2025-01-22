import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const membershipPlans = [
  {
    name: "Essential",
    price: "£2,500",
    period: "per year",
    features: [
      "Annual health assessment",
      "24/7 GP access",
      "Priority appointments",
      "Digital health record",
      "Secure messaging"
    ]
  },
  {
    name: "Premium",
    price: "£5,000",
    period: "per year",
    features: [
      "Comprehensive health assessment",
      "24/7 GP & specialist access",
      "Same-day appointments",
      "Mental health support",
      "Nutrition consultation",
      "Personal care coordinator",
      "Travel medicine services",
      "Family health planning"
    ]
  }
]

export function PrivaLifeMembership() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Membership Plans</h2>
          <p className="text-lg text-muted-foreground">
            Choose the level of care that suits your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {membershipPlans.map((plan) => (
            <Card key={plan.name} className="p-8 bg-[#0A0A0A]">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}