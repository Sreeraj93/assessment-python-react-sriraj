import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Rocket } from 'lucide-react';

export function Hero() {
  const { data: hero, isLoading, error } = useQuery({
    queryKey: ['hero'],
    queryFn: api.getHero
  });

  if (isLoading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="h-screen flex items-center justify-center text-red-500">
      Failed to load hero content
    </div>
  );

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <Rocket className="w-16 h-16 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{hero?.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{hero?.subtitle}</p>
          <a
            href={hero?.cta_link}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {hero?.cta_text}
          </a>
        </div>
      </div>
    </div>
  );
}