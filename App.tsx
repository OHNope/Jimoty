import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  SlideTitle, 
  SlideReason, 
  SlideModel, 
  SlideProsCons, 
  SlideGrowth, 
  SlideConclusion 
} from './components/Slides';

const SLIDES = [
  SlideTitle,
  SlideReason,
  SlideModel,
  SlideProsCons,
  SlideGrowth,
  SlideConclusion,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="relative w-screen h-screen bg-gray-50 overflow-hidden flex flex-col">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 z-50">
        <div 
          className="h-full bg-jimoty transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Slide Content */}
      <main className="flex-1 w-full h-full relative">
        <AnimatePresence mode='wait'>
          <CurrentSlideComponent key={currentSlide} />
        </AnimatePresence>
      </main>

      {/* Controls Overlay */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-40">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-jimoty"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === SLIDES.length - 1}
          className="p-3 rounded-full bg-jimoty shadow-lg hover:bg-jimotyDark disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 left-8 text-gray-400 font-mono text-sm z-40">
        {currentSlide + 1} / {SLIDES.length}
      </div>
    </div>
  );
}
