interface Job {
  jobTitle: string;
  company: string;
  location: string;
  jobDescription: string;
  keyResponsibilities: string[];
  requiredSkills: string[];
  qualifications: string;
  experienceLevel: "Entry" | "Mid" | "Senior" | "Executive";
  salaryCompensation?: string; // Optional, as salary might not always be disclosed
  employmentType:
    | "Full-Time"
    | "Part-Time"
    | "Contract"
    | "Temporary"
    | "Freelance";
  workHours?: string; // Optional, as work hours can vary
  reportsTo?: string; // Optional, some jobs might not have a direct reporting line
  directReports?: string[]; // Optional, for jobs without management duties
  careerPath?: string[]; // Optional, a career path may not always be defined
  industry: string;
  jobEnvironment?: string; // Optional, as it might not always be specified
  jobStability?: "High" | "Medium" | "Low"; // Optional, stability can be subjective
  jobBenefits?: string[]; // Optional, for roles without specific benefits
  growthOpportunities?: string[]; // Optional, not all jobs offer these explicitly
  technologiesToolsUsed?: string[]; // Optional, tech/tools used might vary
  workLifeBalance?: string; // Optional, could be subjective or vary by person
  jobChallenges?: string[]; // Optional, varies from job to job
  impactContribution?: string; // Optional, the role's significance in the org
  startDate?: Date; // Optional, especially for ongoing roles
  endDate?: Date; // Optional, for jobs that have finished
  achievementsAccomplishments?: string[]; // Optional, some roles might not have key highlights
  jobRequirements?: string[]; // Optional, extra requirements like background checks
  jobSatisfaction?: string; // Optional, subjective feedback on the role
  physicalDemands?: string; // Optional, for roles with no significant physical demands
  diversityInclusion?: string; // Optional, only if relevant to the role
  travelRequirements?: string; // Optional, for jobs with no travel requirements
  languageRequirements?: string[]; // Optional, if no specific language is required
}

export const career: Job[] = [
  {
    jobTitle: "Fullstack Web Develop & Webdesigner",
    company: "Le Kaba",
    location: "Paris 14ème",
    jobDescription:
      "Develop, test, and maintain two web applications for individuals or companies in order to support them in their ecological transition in their daily actions.",
    keyResponsibilities: [
      "Write clean, scalable code using JavaScript, React, and Node.js",
      "Collaborate with cross-functional teams including designers and product managers",
      "Troubleshoot, debug, and upgrade existing software",
      "Participate in code reviews and contribute to team best practices",
      "Ensure application performance, scalability, and security",
    ],
    requiredSkills: [
      "JavaScript",
      "React",
      "Node.js",
      "Git",
      "Problem-solving",
    ],
    qualifications:
      "Bachelor's degree in Computer Science or equivalent experience",
    experienceLevel: "Entry",
    salaryCompensation: "apprenticeship salary - around 1.200€/month",
    employmentType: "Part-Time",
    workHours: "Flexible, 35 hours per week",
    reportsTo: "Engineering Manager",
    careerPath: [
      "Senior Software Engineer",
      "Lead Engineer",
      "Engineering Manager",
    ],
    industry: "Technology",
    jobEnvironment: "Fully Remote with flexible working hours",
    jobStability: "High",
    jobBenefits: [
      "Health insurance",
      "401(k) with company match",
      "Stock options",
      "Remote work stipend",
    ],
    growthOpportunities: [
      "Access to professional development courses",
      "Internal mentorship programs",
    ],
    technologiesToolsUsed: [
      "JavaScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Figma",
      "Strapi",
      "Stripe",
      "NextJS",
    ],
    workLifeBalance:
      "Excellent work-life balance with flexible hours and no overtime expected",
    jobChallenges: [
      "Managing complex client requirements",
      "Maintaining performance for high-traffic applications",
    ],
    impactContribution:
      "Directly responsible for the development and performance of key client applications",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2023-09-01"),
    achievementsAccomplishments: [
      "Developed a high-traffic e-commerce application for a major client",
      "Reduced application load times by 30% through performance optimizations",
    ],
    travelRequirements: "None",
    languageRequirements: ["English"],
  },
];
