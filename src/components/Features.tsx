import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

export function Features() {
  const { data: features, isLoading, error } = useQuery({
    queryKey: ['features'],
    queryFn: api.getFeatures
  });

  if (isLoading) return (
    <div className="h-64 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="h-64 flex items-center justify-center text-red-500">
      Failed to load features
    </div>
  );

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover what makes our platform stand out
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}