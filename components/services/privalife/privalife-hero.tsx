"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PrivaLifeHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
          alt="Premium Healthcare"
          fill
          className="object-cover brightness-[0.2]"
          priority
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PrivaLife Premium Healthcare
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience Healthcare Reimagined
            </p>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">
                Welcome to PrivaLife, where exceptional healthcare meets unparalleled convenience. 
                Our premium service offers 24/7 access to expert medical care, comprehensive health 
                assessments, and a suite of exclusive wellness services designed to optimize your health 
                and well-being.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}