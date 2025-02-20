import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Hero />
        <Features />
        <Testimonials />
      </div>
    </QueryClientProvider>
  );
}

export default App;