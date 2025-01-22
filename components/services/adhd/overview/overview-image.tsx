import Image from "next/image"

export function OverviewImage() {
  return (
    <div className="relative h-[600px] rounded-2xl overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80"
        alt="Child learning and developing"
        fill
        className="object-cover"
      />
    </div>
  )
}