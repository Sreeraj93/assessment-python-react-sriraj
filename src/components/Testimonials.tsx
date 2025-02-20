import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: api.getTestimonials
  });

  if (isLoading) return (
    <div className="h-64 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="h-64 flex items-center justify-center text-red-500">
      Failed to load testimonials
    </div>
  );

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              <p className="text-gray-600 mb-4 italic">"{testimonial.feedback}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}