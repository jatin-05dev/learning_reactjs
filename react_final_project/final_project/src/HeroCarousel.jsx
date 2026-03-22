 import React, { useEffect } from 'react'
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

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  )

  // simple functions (no useCallback)
  function scrollPrev() {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }

  function scrollNext() {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }

  useEffect(() => {
    if (emblaApi) {
      console.log("Carousel Ready")
    }
  }, [emblaApi])

  return (
    <div className="relative w-full h-[600px]">

      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] h-full" key={index}>
              
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
                <h2 className="text-4xl md:text-6xl mb-4 uppercase">
                  {slide.title}
                </h2>

                <p className="text-lg md:text-xl mb-6">
                  {slide.subtitle}
                </p>

                <button className="border px-8 py-2 hover:bg-white hover:text-black">
                  SHOP NOW
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
        onClick={scrollPrev}
      >
        <ChevronLeft size={40} />
      </button>

      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
        onClick={scrollNext}
      >
        <ChevronRight size={40} />
      </button>

    </div>
  )
}