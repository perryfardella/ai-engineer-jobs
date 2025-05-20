import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

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

interface JobCardProps {
  title: string;
  company: string;
  logo: string;
  location: string;
  seniority: "Junior" | "Mid-Level" | "Senior";
  pay: string;
  description: string;
  postingDate: Date;
  applyLink: string;
  techStack: string[];
}

export function JobCard({
  title,
  company,
  logo,
  location,
  seniority,
  pay,
  description,
  postingDate,
  applyLink,
  techStack,
}: JobCardProps) {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted">
          <Image
            src={logo}
            alt={`${company} logo`}
            fill
            className="object-contain p-1"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
            >
              Apply <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{location}</Badge>
          <Badge variant="secondary">{seniority}</Badge>
          <Badge variant="secondary">{pay}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Posted {getRelativeTime(postingDate)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
