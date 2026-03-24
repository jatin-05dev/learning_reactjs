  import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=2071', 
    title: 'CELEBRATE THE SEASON',
    subtitle: 'OF COLOUR WITH VIBRANT POLOS.',
  },
  {
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1974',
    title: 'NEW ARRIVALS',
    subtitle: 'EXPLORE THE LATEST SUMMER COLLECTION.',
  },
  {
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070',
    title: 'EXCLUSIVE OFFERS',
    subtitle: 'UP TO 50% OFF ON SELECTED ITEMS.',
  }
]

/* ================= TYPEWRITER ================= */
const Typewriter = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    setDisplayText("")
    let i = 0

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return <span>{displayText}</span>
}

/* ================= MAIN COMPONENT ================= */
export const HeroCarousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev()
  }

  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext()
  }

  useEffect(() => {
    if (emblaApi) {
      console.log("Carousel Ready")
    }
  }, [emblaApi])

  return (
    <div className="relative w-full h-[600px]">

      {/* Carousel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] h-full" key={index}>
              
              {/* Image */}
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">

                {/* TITLE TYPEWRITER */}
                <motion.h2 
                  key={slide.title}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl mb-4 uppercase font-bold"
                >
                  <Typewriter text={slide.title} speed={60} />
                </motion.h2>

                {/* SUBTITLE TYPEWRITER */}
                <motion.p 
                  key={slide.subtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl mb-6"
                >
                  <Typewriter text={slide.subtitle} speed={30} />
                </motion.p>

                {/* BUTTON */}
                <motion.button 
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="border px-8 py-2 hover:bg-white hover:text-black transition"
                >
                  SHOP NOW
                </motion.button>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Prev */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft size={40} />
      </button>

      {/* Next */}
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10"
        onClick={scrollNext}
      >
        <ChevronRight size={40} />
      </button>

    </div>
  )
}