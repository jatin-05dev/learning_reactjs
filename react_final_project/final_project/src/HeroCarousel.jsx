import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

export const HeroCarousel = () => {
  // 1. Autoplay Plugin setup (stopOnInteraction: false zaroori hai)
  const autoplayOptions = {
    delay: 3000, 
    stopOnInteraction: false,
    stopOnMouseEnter: true, // Mouse upar ho toh ruk jaye (optional)
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    [Autoplay(autoplayOptions)]
  )

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  // Optional: Check karne ke liye ki API load hui ya nahi
  useEffect(() => {
    if (emblaApi) {
      console.log("Carousel is ready!")
    }
  }, [emblaApi])

  return (
    <div className="relative w-full h-[600px] group">
      {/* Viewport (emblaRef yahan hona chahiye) */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        {/* Container */}
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] min-w-0 h-full" key={index}>
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center p-4">
                <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] mb-4 uppercase">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl font-medium mb-10 tracking-widest">
                  {slide.subtitle}
                </p>
                <button className="border-2 border-white bg-transparent text-white px-12 py-3 text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" 
        onClick={scrollPrev}
      >
        <ChevronLeft size={60} strokeWidth={1} />
      </button>
      <button 
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" 
        onClick={scrollNext}
      >
        <ChevronRight size={60} strokeWidth={1} />
      </button>

      {/* Progress Bar Style Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <span className="text-white text-xs font-bold tracking-tighter">01</span>
        <div className="h-[1px] w-32 bg-white/30 relative">
            <div className="absolute h-full bg-white w-1/3 animate-[progress_3s_infinite_linear]"></div>
        </div>
        <span className="text-white text-xs font-bold tracking-tighter">03</span>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}