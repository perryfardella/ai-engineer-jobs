import { JobCard } from "@/components/JobCard";
import { LockedJobCard } from "@/components/JobCard";

type Seniority = "Junior" | "Mid-Level" | "Senior";

interface Job {
  title: string;
  company: string;
  companyUrl: string;
  logo: string;
  location: string;
  seniority: Seniority;
  pay: string;
  description: string;
  postingDate: Date;
  applyLink: string;
  techStack: string[];
}

const sampleJobs: Job[] = [
  {
    title: "Senior AI Engineer",
    company: "OpenAI",
    companyUrl: "https://openai.com",
    logo: "https://logo.clearbit.com/openai.com",
    location: "San Francisco, CA",
    seniority: "Senior",
    pay: "$200k - $300k",
    description:
      "Join our team to build the next generation of AI systems. You'll work on cutting-edge research and development of large language models and other AI technologies.",
    postingDate: new Date("2024-03-15"),
    applyLink: "https://openai.com/careers",
    techStack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "LLMs",
      "Distributed Systems",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Anthropic",
    companyUrl: "https://anthropic.com",
    logo: "https://logo.clearbit.com/anthropic.com",
    location: "Remote",
    seniority: "Mid-Level",
    pay: "$150k - $200k",
    description:
      "Help us build Claude, our AI assistant. You'll work on training, fine-tuning, and deploying large language models at scale.",
    postingDate: new Date("2024-03-14"),
    applyLink: "https://anthropic.com/careers",
    techStack: ["Python", "PyTorch", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "AI Research Engineer",
    company: "DeepMind",
    companyUrl: "https://deepmind.com",
    logo: "https://logo.clearbit.com/deepmind.com",
    location: "London, UK",
    seniority: "Senior",
    pay: "£120k - £180k",
    description:
      "Contribute to groundbreaking AI research. You'll work on developing new algorithms and models that push the boundaries of what's possible in AI.",
    postingDate: new Date("2024-03-13"),
    applyLink: "https://deepmind.com/careers",
    techStack: ["Python", "TensorFlow", "JAX", "Research", "Mathematics"],
  },
  {
    title: "Junior AI Developer",
    company: "Hugging Face",
    companyUrl: "https://huggingface.co",
    logo: "https://logo.clearbit.com/huggingface.co",
    location: "Remote",
    seniority: "Junior",
    pay: "$80k - $120k",
    description:
      "Join our team to help democratize AI. You'll work on our open-source libraries and tools that make AI accessible to everyone.",
    postingDate: new Date("2024-03-12"),
    applyLink: "https://huggingface.co/careers",
    techStack: ["Python", "Transformers", "NLP", "Open Source"],
  },
  {
    title: "AI Infrastructure Engineer",
    company: "Cohere",
    companyUrl: "https://cohere.com",
    logo: "https://logo.clearbit.com/cohere.com",
    location: "Toronto, Canada",
    seniority: "Mid-Level",
    pay: "$130k - $180k",
    description:
      "Build and scale our AI infrastructure. You'll work on optimizing model training and deployment pipelines for our language models.",
    postingDate: new Date("2024-03-11"),
    applyLink: "https://cohere.com/careers",
    techStack: ["Python", "MLOps", "Kubernetes", "AWS", "GCP"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <main className="mx-auto max-w-7xl space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Find Your Next AI Engineering Role
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most exciting AI engineering opportunities from leading
            companies. From machine learning to LLMs, find the perfect role to
            advance your career.
          </p>
        </div>
        <div className="space-y-6">
          {sampleJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
          <LockedJobCard {...sampleJobs[0]} totalLockedJobs={50} />
        </div>
      </main>
    </div>
  );
}
