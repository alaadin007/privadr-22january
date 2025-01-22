import { ProcessSteps } from "./process-steps"
import { AssessmentCTA } from "../cta/assessment-cta"

export function ADHDProcess() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our ADHD Assessment Process
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            A comprehensive, multi-step approach to understanding and supporting your child
          </p>
          
          <ProcessSteps />
          <AssessmentCTA />
        </div>
      </div>
    </section>
  )
}