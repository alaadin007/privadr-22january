import { Card } from "@/components/ui/card"
import { Stethoscope, Activity, Brain, Heart } from "lucide-react"

const services = [
  {
    icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
    title: "Annual Health Assessment",
    features: [
      "Comprehensive medical examination",
      "Advanced health screenings",
      "Detailed health report",
      "Personalized recommendations"
    ]
  },
  {
    icon: <Activity className="h-6 w-6 text-purple-500" />,
    title: "Lifestyle Medicine",
    features: [
      "Nutrition consultation",
      "Exercise programming",
      "Stress management",
      "Sleep optimization"
    ]
  },
  {
    icon: <Brain className="h-6 w-6 text-pink-500" />,
    title: "Mental Wellness",
    features: [
      "Psychological support",
      "Stress assessment",
      "Mindfulness training",
      "Work-life balance coaching"
    ]
  },
  {
    icon: <Heart className="h-6 w-6 text-green-500" />,
    title: "Preventive Care",
    features: [
      "Risk assessment",
      "Genetic screening",
      "Vaccination programs",
      "Early detection services"
    ]
  }
]

export function PrivaLifeServices() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive healthcare solutions tailored to your lifestyle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6 bg-[#0A0A0A]">
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
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