export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyNote?: string;
  location: string;
  period: string;
  /** Marks the current, visually prominent entry. */
  current?: boolean;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "trigent",
    role: "Software Engineer",
    company: "Trigent Software",
    companyNote: "Professional Services",
    location: "Bengaluru, India",
    period: "March 2026 – Present",
    current: true,
    highlights: [
      "Contribute across the full SDLC of a client e-commerce application, from requirement gathering, design, analysis, development and production support.",
      "Design relational database schemas for e-commerce platforms, defining entity relationships and constraints across catalogue, order and customer data.",
      "Build and maintain the persistence layer using Spring Data JPA, implementing repository interfaces and custom queries where appropriate.",
      "Deliver proof-of-concept implementations for new requirements and carry accepted approaches through to production code.",
      "Work across backend services and frontend integration, enforcing coding conventions and maintaining technical documentation for handover and support.",
      "Contribute to CI/CD pipelines for continuous integration and automated deployment.",
    ],
    stack: ["Java", "Spring Data JPA", "MySQL", "CI/CD", "E-commerce"],
  },
  {
    id: "xworkz",
    role: "Software Engineer Intern",
    company: "X-workz ODC",
    location: "Bengaluru, India",
    period: "April 2025 – February 2026",
    highlights: [
      "Built and tested RESTful endpoints with Spring Boot, applying Hibernate Validator request validation and centralized custom exception handling for consistent API error responses.",
      "Designed normalized relational schemas and optimized SQL queries using joins, indexing and grouping to reduce query execution time on reporting workloads.",
      "Developed the Happy Cow dairy management system end to end in Spring MVC and Hibernate, including role-based admin and agent dashboards, OTP-based password reset, account locking, and real-time payment notifications over Spring WebSocket.",
      "Applied Java 8 Streams, Lambdas and Optional to write null-safe data-processing logic and reduce boilerplate in business-rule code.",
      "Built reusable utility classes and DTO mappers using OOP principles and Factory and Singleton patterns, standardizing entity-to-response conversions across services.",
    ],
    stack: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "MySQL", "WebSocket"],
  },
  {
    id: "ajark",
    role: "Full-Stack Developer Intern",
    company: "AJARK IT Solutions Pvt Ltd",
    location: "Hyderabad, India (Remote)",
    period: "October 2024 – April 2025",
    highlights: [
      "Developed and maintained RESTful APIs in Spring Boot with length/range validation, service-layer business logic and MySQL persistence through JPA/Hibernate.",
      "Integrated AWS S3 for secure file upload, storage and retrieval within backend services, including progress-tracked uploads and downloads.",
      "Built UI components with HTML, CSS, JavaScript and React, wiring them to backend REST endpoints for end-to-end feature delivery.",
      "Worked in an Agile team using Jira for task tracking and Slack for collaboration, participating in code reviews and deployments.",
      "Tested APIs with Postman and managed builds with Maven.",
    ],
    stack: ["Java", "Spring Boot", "AWS S3", "React", "MySQL", "Maven"],
  },
];
