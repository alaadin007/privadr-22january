"use client"

import { motion } from "framer-motion"

export function HeroContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        ADHD Support and Care for Your Child
      </h1>
      <p className="text-xl text-gray-200 mb-8">
        Empowering Children to Overcome Challenges and Unlock Their Potential
      </p>
    </motion.div>
  )
}