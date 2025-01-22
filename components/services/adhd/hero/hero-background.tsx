"use client"

import Image from "next/image"

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&q=80"
        alt="Child learning background"
        fill
        className="object-cover brightness-[0.2]"
        priority
      />
    </div>
  )
}