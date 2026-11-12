import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { formatPrice , formatEventDate} from "@/lib/utils";
import { Button } from "./ui/button";

function FeaturedCarousel({ events }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    }),
  ]);

  const goToPrev = () => {
    emblaApi?.scrollPrev();
    emblaApi.plugins().autoplay.reset();
  };
  const goToNext = () => {
    emblaApi?.scrollNext();
    emblaApi.plugins().autoplay.reset();
  };

  const scrollTo = (i) => {
    emblaApi.scrollTo(i);
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () =>
      setSelectedIndex(emblaApi.selectedScrollSnap()),
    );
  }, [emblaApi]);
  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {events.map((event) => {
            const eventId = event._id || event.id;
            return (
              <div
                key={eventId}
                className="flex-[0_0_100%] min-w-0 relative aspect-video md:aspect-21/9 lg:aspect-24/9 max-h-125"
              >
                {/* Background Image with warm rich gradient overlay */}
                <div className="absolute inset-0 bg-[#161513]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity filter brightness-95"
                  />
                  {/* Subtle editorial warm gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#141312] via-[#141312]/60 to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-r from-[#141312] via-[#141312]/80 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-6 sm:p-10 lg:p-12 text-white max-w-3xl z-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E65100] text-white shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" /> Featured Spotlight
                      </span>
                      {event.category?.name && (
                        <Badge
                          variant="outline"
                          size="sm"
                          className="text-stone-200 border-white/20 bg-white/10 backdrop-blur-sm"
                        >
                          {event.category.name}
                        </Badge>
                      )}
                      <Badge variant="forest" size="sm">
                        {event.format === "online"
                          ? "Online"
                          : event.format === "hybrid"
                            ? "Hybrid"
                            : "In-Person"}
                      </Badge>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                      <Link
                        to={`/events/${event.slug || eventId}`}
                        className="hover:underline underline-offset-4 decoration-[#E65100]"
                      >
                        {event.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-stone-300 line-clamp-2 max-w-2xl font-normal leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-5 pt-2 text-xs sm:text-sm text-stone-300 font-medium flex-wrap">
                      <span className="flex items-center gap-1.5 text-orange-300 font-semibold">
                        <Calendar className="w-4 h-4" />
                        {formatEventDate(event.startDate)}
                      </span>
                      <span className="flex items-center gap-1.5 text-stone-300">
                        <MapPin className="w-4 h-4 text-stone-400" />
                        {event.venue}, {event.city}
                      </span>
                      <span className="flex items-center gap-1.5 font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                        {formatPrice(event.price, event.currency)}
                      </span>
                    </div>

                    <div className="pt-3 flex items-center gap-3">
                      <Link to={`/events/${event.slug || eventId}`}>
                        <Button
                          variant="primary"
                          size="md"
                          className="gap-2 shadow-lg"
                        >
                          <span>Explore Experience</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      {
                        <Button
                          variant="secondary"
                          size="md"
                          className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                        >
                          Quick Register
                        </Button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 right-6 flex items-center gap-2 z-20">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`transition-all rounded-full ${
              i === selectedIndex
                ? "w-6 h-2 bg-[#E65100]"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCarousel;