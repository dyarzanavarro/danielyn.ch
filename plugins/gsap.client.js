import { gsap } from 'gsap'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Global GSAP configuration
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    })
    
    // Set default ease
    gsap.defaults({
      ease: "power2.out",
      duration: 0.8
    })
    
    return {
      provide: {
        gsap
      }
    }
  }
})