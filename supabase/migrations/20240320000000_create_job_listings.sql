-- Create enum types
CREATE TYPE job_type AS ENUM (
  'full-time',
  'part-time',
  'contract',
  'internship',
  'temporary',
  'volunteer',
  'other'
);

CREATE TYPE experience_level AS ENUM (
  'entry-level',
  'mid-level',
  'senior-level',
  'executive',
  'other'
);

CREATE TYPE currency AS ENUM (
  'USD', 'EUR', 'GBP', 'CAD', 'AUD', 'NZD', 'CHF', 'JPY', 'CNY', 'INR',
  'BRL', 'ARS', 'CLP', 'COP', 'MXN', 'PEN', 'PYG', 'UYU', 'VND', 'ZAR'
);

-- Create the job_listings table
CREATE TABLE job_listings (
  -- Using jobListingUrl as the primary key
  job_listing_url TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  company_url TEXT NOT NULL,
  company_logo TEXT,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  skills TEXT[],
  experience_level experience_level,
  years_of_experience TEXT,
  salary_range TEXT,
  salary_currency currency,
  deadline TIMESTAMP WITH TIME ZONE,
  type job_type NOT NULL,
  industry TEXT,
  posted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- TODO: When we have a lot of data and finalise what filters we are using, create indexes for common queries
-- Create indexes for common queries
-- CREATE INDEX idx_job_listings_company ON job_listings(company);
-- CREATE INDEX idx_job_listings_location ON job_listings(location);
-- CREATE INDEX idx_job_listings_type ON job_listings(type);
-- CREATE INDEX idx_job_listings_experience_level ON job_listings(experience_level);
-- CREATE INDEX idx_job_listings_posted_at ON job_listings(posted_at);

-- Add RLS (Row Level Security) policies
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read job listings
CREATE POLICY "Allow public read access"
  ON job_listings
  FOR SELECT
  USING (true);

-- Create a policy that only allows authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users to modify"
  ON job_listings
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true); 