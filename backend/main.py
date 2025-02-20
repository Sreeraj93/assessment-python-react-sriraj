from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class HeroData(BaseModel):
    title: str
    subtitle: str
    cta_text: str
    cta_link: str

class Feature(BaseModel):
    icon: str
    title: str
    description: str

class Testimonial(BaseModel):
    name: str
    feedback: str

# Static data
HERO_DATA = HeroData(
    title="Welcome to Our Platform",
    subtitle="We help you grow your business",
    cta_text="Get Started",
    cta_link="/signup"
)

FEATURES = [
    Feature(
        icon="🚀",
        title="Fast Performance",
        description="Our system runs blazing fast."
    ),
    Feature(
        icon="🔒",
        title="Secure",
        description="Top-notch security for your data."
    ),
    Feature(
        icon="⚡",
        title="Scalable",
        description="Grow without limits."
    )
]

TESTIMONIALS = [
    Testimonial(
        name="Alice",
        feedback="Amazing service!"
    ),
    Testimonial(
        name="Bob",
        feedback="Very reliable platform."
    ),
    Testimonial(
        name="Charlie",
        feedback="Highly recommend it!"
    )
]

# Endpoints
@app.get("/hero", response_model=HeroData)
async def get_hero():
    return HERO_DATA

@app.get("/features", response_model=List[Feature])
async def get_features():
    return FEATURES

@app.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    return TESTIMONIALS

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}