export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  featured?: boolean;
  technologies: string[];
  keyFeatures: string[];
  /** Ordered layers rendered as the project's architecture flow in the details view. */
  architecture: string[];
  detailTechnologies: string[];
  github: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: "happy-cow",
    name: "Happy Cow",
    tagline: "Dairy Management System",
    description:
      "Enterprise-style dairy operations platform with separate admin and agent dashboards, role-based access control, milk collection tracking, and bi-monthly payment window processing.",
    featured: true,
    technologies: [
      "Java",
      "Spring MVC",
      "Hibernate",
      "MySQL",
      "Spring WebSocket",
      "JSP/JSTL",
      "Maven",
      "Tomcat",
      "Swagger",
    ],
    keyFeatures: [
      "Separate Admin and Agent dashboards",
      "Role-based access control",
      "Authentication and account security",
      "Account locking after failed attempts",
      "OTP-based password reset",
      "Full audit trail",
      "Milk collection tracking",
      "Payment processing",
      "Real-time payment notifications",
      "Spring WebSocket integration",
      "Excel import/export using Apache POI",
      "PDF invoice generation using PDFBox",
      "QR code generation using ZXing",
      "Layered architecture",
      "REST API documentation using Swagger",
    ],
    architecture: ["Controller", "Service", "Repository", "Entity / DTO", "MySQL"],
    detailTechnologies: [
      "Java",
      "Spring MVC",
      "Hibernate",
      "MySQL",
      "WebSocket",
      "JSP",
      "Swagger",
      "Apache POI",
      "PDFBox",
      "ZXing",
    ],
    github: "https://github.com/itsAhesan/happy-cow",
  },
  {
    id: "video-manager",
    name: "Video Manager",
    tagline: "Cloud Video Upload Service",
    description:
      "Full-stack cloud video management application for uploading, streaming, downloading and deleting videos using AWS S3 object storage.",
    technologies: [
      "Java 17",
      "Spring Boot 3.3.5",
      "AWS S3",
      "React",
      "Vite",
      "Axios",
      "Bootstrap",
    ],
    keyFeatures: [
      "Large file upload",
      "AWS S3 integration",
      "Video storage",
      "Video streaming",
      "Video download",
      "Video deletion",
      "REST APIs",
      "React frontend",
      "Real-time upload progress",
      "Real-time download progress",
      "Backend / frontend integration",
    ],
    architecture: ["React", "REST API", "Spring Boot", "AWS S3"],
    detailTechnologies: [
      "Java 17",
      "Spring Boot 3.3.5",
      "AWS S3",
      "React",
      "Vite",
      "Axios",
      "Bootstrap",
    ],
    github: "https://github.com/itsAhesan/video-upload-application",
  },
];
