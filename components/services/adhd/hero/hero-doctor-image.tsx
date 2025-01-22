"use client"

import Image from "next/image"

export function HeroDoctorImage() {
  return (
    <div className="relative h-[120px] w-[120px] flex-shrink-0">
      <Image
        src="/images/dr-anwar-haq.jpg"
        alt="Dr. M. Anwar Haq"
        fill
        className="rounded-full object-cover border-4 border-white/20"
        priority
      />
    </div>
  )
}