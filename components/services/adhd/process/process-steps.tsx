import { ClipboardList, Users, FileText, Brain, Calendar } from "lucide-react"
import { ProcessStep } from "./process-step"

const assessmentSteps = [
  {
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
    title: "Initial Documentation",
    description: "Complete comprehensive parent reports including Conners forms to gather detailed behavioral observations",
    details: [
      "Developmental history questionnaire",
      "Parent observation forms",
      "Daily routine assessment",
      "Previous medical records"
    ]
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Teacher Assessment",
    description: "Collect detailed teacher reports including Conners forms for school-based observations",
    details: [
      "Classroom behavior evaluation",
      "Academic performance review",
      "Social interaction assessment",
      "Learning style analysis"
    ]
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Data Analysis",
    description: "Our specialists analyze all collected information to form a comprehensive understanding",
    details: [
      "Behavioral pattern analysis",
      "Cross-environment comparison",
      "Symptom frequency assessment",
      "Impact evaluation"
    ]
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Consultation & Diagnosis",
    description: "Detailed consultation with our consultant to discuss findings and receive diagnosis",
    details: [
      "Review of all assessments",
      "Discussion of findings",
      "Diagnosis explanation",
      "Treatment recommendations"
    ]
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Follow-up Care",
    description: "Ongoing support and monitoring to ensure effective management",
    details: [
      "Treatment plan implementation",
      "Progress monitoring",
      "Adjustments as needed",
      "Regular check-ins"
    ]
  }
]

export function ProcessSteps() {
  return (
    <div className="space-y-6">
      {assessmentSteps.map((step, index) => (
        <ProcessStep
          key={step.title}
          {...step}
          index={index}
        />
      ))}
    </div>
  )
}