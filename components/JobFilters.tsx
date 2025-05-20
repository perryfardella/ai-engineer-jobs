"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Check } from "lucide-react";

// These will come from the API/database later
const locations = ["Remote", "San Francisco, CA", "New York, NY", "London, UK"];
const seniorityLevels = ["Junior", "Mid-Level", "Senior"];
const techStack = ["Python", "PyTorch", "TensorFlow", "LLMs", "AWS"];
const salaryRanges = [
  "$50k - $100k",
  "$100k - $150k",
  "$150k - $200k",
  "$200k - $300k",
  "$300k+",
];

export function JobFilters() {
  const [filters, setFilters] = useState({
    locations: [] as string[],
    seniority: [] as string[],
    techStack: [] as string[],
    salary: [] as string[],
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      locations: [],
      seniority: [],
      techStack: [],
      salary: [],
    });
  };

  const hasActiveFilters = Object.values(filters).some((arr) => arr.length > 0);

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
          <Select
            value=""
            onValueChange={(value) => handleFilterChange("locations", value)}
          >
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  <div className="flex items-center justify-between w-full">
                    {location}
                    {filters.locations.includes(location) && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value=""
            onValueChange={(value) => handleFilterChange("seniority", value)}
          >
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="Seniority" />
            </SelectTrigger>
            <SelectContent>
              {seniorityLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  <div className="flex items-center justify-between w-full">
                    {level}
                    {filters.seniority.includes(level) && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value=""
            onValueChange={(value) => handleFilterChange("salary", value)}
          >
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="Salary" />
            </SelectTrigger>
            <SelectContent>
              {salaryRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  <div className="flex items-center justify-between w-full">
                    {range}
                    {filters.salary.includes(range) && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value=""
            onValueChange={(value) => handleFilterChange("techStack", value)}
          >
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="Tech Stack" />
            </SelectTrigger>
            <SelectContent>
              {techStack.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  <div className="flex items-center justify-between w-full">
                    {tech}
                    {filters.techStack.includes(tech) && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {hasActiveFilters && (
          <Button
            variant="destructive"
            size="sm"
            onClick={clearFilters}
            className="w-full sm:w-auto"
          >
            Clear all filters
          </Button>
        )}
      </div>

      {hasActiveFilters && (
        <div className="space-y-2">
          {filters.locations.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-1">Locations</h4>
              <div className="flex flex-wrap gap-1.5">
                {filters.locations.map((location) => (
                  <Badge
                    key={location}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/80 text-xs sm:text-sm"
                    onClick={() => handleFilterChange("locations", location)}
                  >
                    {location}
                    <X className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {filters.seniority.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-1">Seniority</h4>
              <div className="flex flex-wrap gap-1.5">
                {filters.seniority.map((level) => (
                  <Badge
                    key={level}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/80 text-xs sm:text-sm"
                    onClick={() => handleFilterChange("seniority", level)}
                  >
                    {level}
                    <X className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {filters.salary.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-1">Salary</h4>
              <div className="flex flex-wrap gap-1.5">
                {filters.salary.map((range) => (
                  <Badge
                    key={range}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/80 text-xs sm:text-sm"
                    onClick={() => handleFilterChange("salary", range)}
                  >
                    {range}
                    <X className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {filters.techStack.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-1">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {filters.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/80 text-xs sm:text-sm"
                    onClick={() => handleFilterChange("techStack", tech)}
                  >
                    {tech}
                    <X className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
