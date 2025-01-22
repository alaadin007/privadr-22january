"use client"

import { motion } from "framer-motion"
import { HeroDoctorImage } from "./hero-doctor-image"
import { HeroDoctorInfo } from "./hero-doctor-info"

export function HeroDoctor() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 flex items-center justify-center gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-8"
    >
      <HeroDoctorImage />
      <HeroDoctorInfo />
    </motion.div>
  )
}