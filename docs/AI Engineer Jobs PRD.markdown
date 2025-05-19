# Product Requirements Document (PRD) for AI Engineer Jobs (AEJ)

## 1. Overview

- **Product Name**: AI Engineer Jobs (AEJ)
- **Purpose**: To provide a centralized platform for AI engineers to find job opportunities.
- **Target Audience**: AI engineers, machine learning engineers, and related professionals; companies hiring AI talent.

## 2. Objective

- To simplify job searches for AI engineers by offering a dedicated platform.
- To enable employers to reach qualified AI candidates efficiently.
- **Success Metrics**:
  - Number of registered users
  - Number of job postings
  - User engagement (e.g., time on site, pages per visit)
  - Conversion rate from non-signed-in to signed-in users

## 3. Context

- **Customer Personas**:
  - **Job Seeker**: AI professional, from entry-level to senior, seeking relevant job opportunities. Values curated listings and advanced filtering options.
  - **Employer**: Companies or recruiters posting AI-related jobs. (Note: For MVP, jobs are manually added by the founder.)
- **Use Cases**:
  - Job seekers search and apply for jobs using filters.
  - The founder manually adds/removes jobs.
- **Competitive Landscape**:
  - General job boards: [Indeed](https://www.indeed.com), [LinkedIn](https://www.linkedin.com)
  - Niche AI job boards: [AI Jobs](https://ai-jobs.net)
  - AEJ differentiates by focusing on AI engineering roles with curated listings.

## 4. Assumptions

- There is sufficient demand for a dedicated AI job board.
- Manual job addition is sufficient for the MVP.
- Users will sign up to access all job listings.
- The tech stack is suitable for the project.

## 5. Scope

- **In Scope (MVP)**:
  - Job listing page with cards
  - Sign-in/sign-up with email/password and Google
  - Limited visibility for non-signed-in users (first 5 jobs visible)
  - Filters for location, seniority, tech stack, pay
  - Manual job addition/removal via admin panel
- **Out of Scope (Future)**:
  - Automated job scraping
  - Employer dashboards
  - Resume uploads, matching algorithms
  - Monetization features

## 6. Requirements

### Functional Requirements

- **Job Listings**: Display job cards with title, company, logo, location, seniority, pay, description, posting date, apply link, and tech stack tags. Non-signed-in users see only 5 jobs; others blurred with sign-up prompt.
- **Filters**:
  - Location: city/state/country or remote
  - Seniority: Junior, Mid-Level, Senior
  - Tech Stack: tags from job ads
  - Pay: minimum salary filter
- **Authentication**: Sign-in/sign-up buttons in header using Supabase Auth.
- **Admin Interface**: Simple panel for founder to add/remove jobs.
- **Application Process**: Apply buttons link to employer websites.

### Non-Functional Requirements

- Responsive design for mobile devices
- Page load time < 2 seconds
- Secure authentication/authorization
- Regular data backups

## 7. Technical Requirements

- **Tech Stack**:
  - Front-end: [Next.js](https://nextjs.org)
  - Back-end: [Supabase](https://supabase.com)
  - Package Manager: [pnpm](https://pnpm.io)
  - Styling: [shadcn](https://ui.shadcn.com)
- **Database**: Supabase PostgreSQL
- **APIs**: Supabase authentication, possible email service
- **Hosting**: [Vercel](https://vercel.com)
- **Analytics**: [Vercel Analytics](https://vercel.com) or [Posthog](https://posthog.com)

## 8. Data Requirements

- **User Data**: Email, hashed password
- **Job Data**: Title, company, logo, location, seniority, pay, description, posting date, apply link, tech stack
- **Privacy**: Minimal data; basic security measures

## 9. Integration Requirements

- Email service for verification, resets, notifications
- Future: Social logins (Google, GitHub)

## 10. Security and Privacy

- HTTPS, secure authentication
- Protect against common vulnerabilities
- No GDPR compliance needed

## 11. Testing and QA

- Unit, integration, user acceptance testing
- Analytics for user behavior tracking

## 12. Timeline and Milestones

- Rough estimate: 10 weeks for MVP (setup, UI, backend, testing, deployment)

## 13. Resources and Budget

- Bootstrapped, solo founder
- Minimal costs for hosting, email service

## 14. Future Roadmap

- AI automation for job scraping/removal
- User subscriptions with billing dashboards
- Employer dashboards
- Advanced features (resumes, matching)
