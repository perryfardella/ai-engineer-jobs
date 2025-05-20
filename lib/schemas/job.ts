import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company name is required"),
  companyUrl: z.string().url("Company URL must be a valid URL"),
  logo: z.string().url("Logo URL must be a valid URL"),
  location: z.string().min(1, "Location is required"),
  seniority: z.enum(["Junior", "Mid-Level", "Senior"], {
    description: "The seniority level of the position",
  }),
  pay: z.string().min(1, "Pay information is required"),
  description: z.string().min(1, "Job description is required"),
  postingDate: z.date({
    description: "The date when the job was posted",
  }),
  applyLink: z.string().url("Apply link must be a valid URL"),
  techStack: z
    .array(z.string())
    .min(1, "At least one tech stack item is required"),
  specialty: z.string().min(1, "Specialty is required"),
});

// Type inference
export type Job = z.infer<typeof jobSchema>;

// Optional: Create a schema for creating/updating jobs
export const createJobSchema = jobSchema.omit({ postingDate: true }).extend({
  postingDate: z.string().datetime().optional(),
});

export type CreateJob = z.infer<typeof createJobSchema>;
