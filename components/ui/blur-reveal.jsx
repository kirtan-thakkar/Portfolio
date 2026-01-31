"use client"

import * as React from "react"
import { motion, useInView } from "motion/react"

import { cn } from "../../app/lib/utils"

export function BlurReveal({
  className,
  children,
  delay = 0,
  duration = 1,
}) {
  const spanRef = React.useRef(null)
  const isInView = useInView(spanRef, { once: true })

  return (
    <motion.span
      ref={spanRef}
      initial={{ opacity: 0, filter: "blur(10px)", y: "20%" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)", y: "0%" } : {}}
      transition={{ duration: duration, delay: delay }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  )
}
