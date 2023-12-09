'use client';

import { useEffect, useState } from 'react';

import { ArrowSmallUpIcon } from '@heroicons/react/20/solid';

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`btn btn-sm fixed bottom-20 left-4 z-10 flex items-center justify-center rounded-md px-2 shadow-lg transition-transform duration-300 md:bottom-4 ${
        isVisible
          ? 'translate-y-0'
          : '-translate-x-[175%] md:translate-x-0 md:translate-y-[175%]'
      }`}
      onClick={scrollToTop}
    >
      <ArrowSmallUpIcon className="h-6 w-6" />
    </button>
  );
}
