import { OverviewContent } from "./overview-content"
import { OverviewImage } from "./overview-image"

export function ADHDOverview() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <OverviewContent />
          <OverviewImage />
        </div>
      </div>
    </section>
  )
}