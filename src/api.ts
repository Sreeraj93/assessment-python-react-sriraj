import { HeroData, Feature, Testimonial } from './types';

// Mock data that matches the FastAPI response structure
const MOCK_DATA = {
  hero: {
    title: "Welcome to Our Platform",
    subtitle: "We help you grow your business",
    cta_text: "Get Started",
    cta_link: "/signup"
  },
  
  features: [
    {
      icon: "🚀",
      title: "Fast Performance",
      description: "Our system runs blazing fast."
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Top-notch security for your data."
    },
    {
      icon: "⚡",
      title: "Scalable",
      description: "Grow without limits."
    }
  ],
  
  testimonials: [
    {
      name: "Alice",
      feedback: "Amazing service!"
    },
    {
      name: "Bob",
      feedback: "Very reliable platform."
    },
    {
      name: "Charlie",
      feedback: "Highly recommend it!"
    }
  ]
};

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  getHero: async (): Promise<HeroData> => {
    await delay(500); // Simulate network delay
    return MOCK_DATA.hero;
  },
  
  getFeatures: async (): Promise<Feature[]> => {
    await delay(500);
    return MOCK_DATA.features;
  },
  
  getTestimonials: async (): Promise<Testimonial[]> => {
    await delay(500);
    return MOCK_DATA.testimonials;
  }
};