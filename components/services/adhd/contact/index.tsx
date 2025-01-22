import { ContactInfo } from "./contact-info"
import { ContactEmail } from "./contact-email"

export function ADHDContact() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Assessment</h2>
            <p className="text-lg text-muted-foreground">
              Contact us through WhatsApp for quick and easy assessment booking
            </p>
          </div>

          <ContactInfo />
          <ContactEmail />
        </div>
      </div>
    </section>
  )
}