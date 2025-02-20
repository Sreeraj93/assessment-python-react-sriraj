export interface HeroData {
  title: string;
  subtitle: string;
  cta_text: string;
  cta_link: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  feedback: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}