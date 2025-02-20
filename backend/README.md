# FastAPI Backend

This is the backend service for the landing page application. It provides static data through RESTful endpoints.

## Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

The server will start at http://localhost:8000

## API Endpoints

- GET /hero - Returns hero section content
- GET /features - Returns feature items
- GET /testimonials - Returns testimonials
- GET /health - Health check endpoint

## API Documentation

FastAPI automatically generates API documentation:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc