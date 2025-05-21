import { z } from "zod";

// Define enums for job type and experience level
const JobType = z
  .enum([
    "full-time",
    "part-time",
    "contract",
    "internship",
    "temporary",
    "volunteer",
    "other",
  ])
  .describe("Type of employment, such as full-time, part-time, or contract");

const ExperienceLevel = z
  .enum(["entry-level", "mid-level", "senior-level", "executive", "other"])
  .describe("Level of experience required for the role");

const Currency = z.enum([
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "AUD",
  "NZD",
  "CHF",
  "JPY",
  "CNY",
  "INR",
  "BRL",
  "ARS",
  "CLP",
  "COP",
  "MXN",
  "PEN",
  "PYG",
  "UYU",
  "VND",
  "ZAR",
]);

// Define the main Job Listing schema
export const jobListingSchema = z
  .object({
    title: z
      .string()
      .min(1)
      .max(255)
      .describe('Job title, e.g., "AI Engineer" or "Software Engineer"'),
    company: z
      .string()
      .min(1)
      .max(255)
      .describe("Name of the company posting the job"),
    companyUrl: z
      .string()
      .url()
      .describe("The URL of the company offering the job, must be a valid URL"),
    companyLogo: z
      .string()
      .url()
      .describe(
        "The URL of the company's logo, must be a valid URL - get this from clearbit or crunchbase, we aren't self-hosting images."
      )
      .optional(),
    location: z
      .string()
      .min(1)
      .max(255)
      .describe('Job location, e.g., "Remote" or "San Francisco, CA"'),
    description: z
      .string()
      .min(1)
      .describe(
        "Full job description, including responsibilities and requirements"
      ),
    skills: z
      .array(z.string().min(1))
      .optional()
      .describe(
        'List of required skills, e.g., ["Python", "TensorFlow", "LLMs"]'
      ),
    experienceLevel: ExperienceLevel.optional().describe(
      'Experience level, e.g., "entry-level" or "senior-level"'
    ),
    yearsOfExperience: z
      .string()
      .optional()
      .describe(
        'Years of experience required, e.g., "0-2 years" or "3+ years"'
      ),
    salary: z
      .object({
        range: z
          .string()
          .optional()
          .describe('Salary range, if provided, e.g., "$50,000 - $70,000"'),
        currency: Currency.optional().describe(
          "Currency of the salary, e.g., USD, EUR, etc."
        ),
      })
      .optional()
      .describe("Salary details, including range and currency"),
    deadline: z
      .date()
      .optional()
      .describe("Application deadline, if specified"),
    type: JobType.describe("Type of employment for the role"),
    industry: z
      .string()
      .min(1)
      .max(255)
      .optional()
      .describe('Industry of the job, e.g., "Technology" or "Healthcare"'),
    jobListingUrl: z
      .string()
      .url()
      .describe(
        "URL of the job listing - this will be used as the unique identifier"
      ),
    postedAt: z.date().describe("Date when the job was posted"),
  })
  .describe(
    "Schema for validating job listing data before storing in a Supabase database"
  );

// Export the schema type for TypeScript usage
export type JobListing = z.infer<typeof jobListingSchema>;
