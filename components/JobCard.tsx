import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ExternalLink, Clock, MapPin, User, Coins, Lock } from "lucide-react";

function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? "" : "s"} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears === 1 ? "" : "s"} ago`;
}

export interface JobCardProps {
  title: string;
  company: string;
  companyUrl: string;
  logo: string;
  location: string;
  seniority: "Junior" | "Mid-Level" | "Senior";
  pay: string;
  description: string;
  postingDate: Date;
  applyLink: string;
  techStack: string[];
  specialty: string;
}

export function JobCard({
  title,
  company,
  companyUrl,
  logo,
  location,
  seniority,
  pay,
  description,
  postingDate,
  applyLink,
  techStack,
  specialty,
}: JobCardProps) {
  return (
    <Card className="w-full hover:shadow-lg transition-all duration-200 hover:border-primary/50 hover:ring-1 hover:ring-primary/50">
      <CardHeader className="space-y-4">
        <div className="flex flex-row items-start gap-4">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:underline inline-flex items-center gap-1"
                >
                  {company}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <a
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors w-24"
              >
                Apply <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors w-24"
          >
            Apply <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </Badge>
          <Badge variant="secondary" className="inline-flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            {seniority}
          </Badge>
          <Badge variant="secondary" className="inline-flex items-center gap-1">
            <Coins className="w-3.5 h-3.5" />
            {pay}
          </Badge>
          <Badge variant="secondary">{specialty}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Posted {getRelativeTime(postingDate)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

interface LockedJobCardProps extends JobCardProps {
  totalLockedJobs: number;
}

export function LockedJobCard({
  totalLockedJobs,
  ...props
}: LockedJobCardProps) {
  return (
    <div className="relative">
      <div className="blur-[3px] pointer-events-none">
        <JobCard {...props} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[1px]">
        <div className="text-center space-y-4 p-6">
          <Lock className="w-12 h-12 mx-auto text-muted-foreground" />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Sign in to view more jobs</h3>
            <p className="text-sm text-muted-foreground">
              {/* TODO: Replace with actual count from database */}
              {totalLockedJobs} more jobs waiting for you
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <a
              href="/signin"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary hover:bg-primary/10 rounded-md transition-colors"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
