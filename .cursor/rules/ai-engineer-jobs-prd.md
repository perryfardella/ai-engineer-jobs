# AI Engineer Jobs (AEJ) Project Rules

## Project Overview

- Product: AI Engineer Jobs (AEJ) - A centralized platform for AI engineers to find job opportunities
- Target Audience: AI engineers, ML engineers, and companies hiring AI talent
- Tech Stack: Next.js, Supabase, pnpm, shadcn
- Hosting: Vercel

## Core Requirements

1. Job Listings:

   - Display job cards with title, company, logo, location, seniority, pay, description, posting date, apply link, and tech stack tags
   - Non-signed-in users see only 5 jobs; others blurred with sign-up prompt

2. Authentication:

   - Sign-in/sign-up with email/password
   - Implemented using Supabase Auth

3. Filtering:

   - Location (city/state/country or remote)
   - Seniority (Junior, Mid-Level, Senior)
   - Tech Stack (tags from job ads)
   - Pay (minimum salary filter)

4. Admin Features:
   - Simple panel for founder to add/remove jobs
   - Manual job management (no automated scraping for MVP)

## Technical Guidelines

- Use Next.js for frontend development
- Implement Supabase for backend and authentication
- Use pnpm as package manager
- Style components using shadcn
- Ensure responsive design for mobile devices
- Maintain page load time < 2 seconds
- Implement secure authentication/authorization
- Use Vercel for hosting and analytics

## Data Structure

- User Data: Email, hashed password
- Job Data: Title, company, logo, location, seniority, pay, description, posting date, apply link, tech stack

## MVP Scope

- Job listing page with cards
- Authentication system
- Limited visibility for non-signed-in users
- Filtering system
- Manual job management
- Basic admin panel

## Out of Scope (Future)

- Automated job scraping
- Employer dashboards
- Resume uploads
- Matching algorithms
- Monetization features
- Google and Github Auth
