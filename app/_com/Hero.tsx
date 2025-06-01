"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import sawir from "@/public/sawirDh.jpg";
import sawir2 from "@/public/shop2.jpg";
export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Discover Your",
      highlight: "Perfect Style",
      description:
        "Explore our curated collection of premium fashion, accessories, and lifestyle products. Quality meets style in every piece.",
      badge: "New Collection Available",
      image: sawir,
      bgGradient: "from-slate-50 to-slate-100",
      ctaPrimary: "Shop Now",
      ctaSecondary: "View Lookbook",
    },
    {
      title: "Summer Sale",
      highlight: "Up to 70% Off",
      description:
        "Don't miss out on our biggest sale of the year. Premium quality items at unbeatable prices for a limited time only.",
      badge: "Limited Time Offer",
      image: sawir2,
      bgGradient: "from-orange-50 to-red-50",
      ctaPrimary: "Shop Sale",
      ctaSecondary: "View Deals",
    },
    {
      title: "New Arrivals",
      highlight: "Fresh & Trendy",
      description:
        "Be the first to discover our latest collection featuring the hottest trends and must-have pieces for this season.",
      badge: "Just Dropped",
      image: sawir,
      bgGradient: "from-purple-50 to-pink-50",
      ctaPrimary: "Explore New",
      ctaSecondary: "See Trends",
    },
    {
      title: "Premium Quality",
      highlight: "Luxury Collection",
      description:
        "Indulge in our exclusive luxury line featuring handcrafted items made from the finest materials by skilled artisans.",
      badge: "Exclusive Collection",
      image: sawir2,
      bgGradient: "from-emerald-50 to-teal-50",
      ctaPrimary: "Shop Luxury",
      ctaSecondary: "Learn More",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  // Touch/swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative h-screen overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full h-full bg-gradient-to-br ${slide.bgGradient} py-20 lg:py-32 flex items-center`}
          >
            <div className="container relative mx-auto xl:max-w-[1400px]">
              <div className="grid lg:grid-cols-2 gap-12 items-center ">
                <div className="space-y-8 pl-7">
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                      {slide.title}
                      <span className="text-primary block">
                        {slide.highlight}
                      </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-lg">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="text-lg px-8 bg-blue-600">
                      {slide.ctaPrimary}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8"
                    >
                      {slide.ctaSecondary}
                    </Button>
                  </div>

                  <div className="flex items-center space-x-8 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">50K+</div>
                      <div className="text-sm text-muted-foreground">
                        Happy Customers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">4.9</div>
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">1000+</div>
                      <div className="text-sm text-muted-foreground">
                        Products
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative z-10">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt="Fashion Model"
                      width={500}
                      height={500}
                      className="rounded-2xl h-[600px] shadow-2xl"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-orange-600 transition-all duration-100 ease-linear"
          style={{
            width: isAutoPlaying
              ? `${((currentSlide + 1) / slides.length) * 100}%`
              : "0%",
          }}
        ></div>
      </div>
    </div>
  );
}
