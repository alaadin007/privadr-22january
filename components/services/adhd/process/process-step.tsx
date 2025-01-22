import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface ProcessStepProps {
  icon: React.ReactElement<LucideIcon>
  title: string
  description: string
  details: string[]
  index: number
}

export function ProcessStep({ icon, title, description, details, index }: ProcessStepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-sm font-medium">
              {index + 1}
            </span>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {details.map((detail, detailIndex) => (
              <li key={detailIndex} className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}