import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Animation frame loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // GSAP integration
    const { $gsap } = useNuxtApp()
    if ($gsap) {
      // Removed ScrollTrigger reference
      $gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      $gsap.ticker.lagSmoothing(0)
    }

    // Make lenis globally available
    return {
      provide: {
        lenis
      }
    }
  }
});