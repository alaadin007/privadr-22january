import { Card } from "@/components/ui/card"
import { Clock, Shield, HeartPulse, Phone } from "lucide-react"

const features = [
  {
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    title: "24/7 Access",
    description: "Round-the-clock availability to our medical team through secure messaging and video consultations"
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-500" />,
    title: "Comprehensive Care",
    description: "Regular health assessments and personalized wellness plans tailored to your needs"
  },
  {
    icon: <HeartPulse className="h-6 w-6 text-pink-500" />,
    title: "Priority Services",
    description: "Fast-track access to specialists and expedited appointment scheduling"
  },
  {
    icon: <Phone className="h-6 w-6 text-green-500" />,
    title: "Personal Care Team",
    description: "Dedicated healthcare professionals managing your medical needs"
  }
]

export function PrivaLifeFeatures() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Premium Healthcare Features</h2>
          <p className="text-lg text-muted-foreground">
            Experience the benefits of personalized, premium healthcare
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 bg-[#0A0A0A]">
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}