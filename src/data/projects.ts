export interface EngineeringHighlight {
  title: string;
  detail: string;
}

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
  /**
   * Concrete engineering decisions taken from the source code — the things a
   * backend interviewer asks about. Keep every entry verifiable in the repo.
   */
  engineeringHighlights: EngineeringHighlight[];
  /** Codebase scale facts measured from the repository (label → value). */
  scale?: { label: string; value: string }[];
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
    engineeringHighlights: [
      {
        title: "Idempotent payment settlement",
        detail:
          "Settling an agent's payment window is a single @Transactional operation that rejects an already-settled window, recomputes the total server-side from collection rows, and refuses to proceed if the client-supplied amount drifts beyond ₹0.01 — the client is never trusted with money.",
      },
      {
        title: "Account security done properly",
        detail:
          "Passwords are BCrypt-hashed via Spring Security's PasswordEncoder. Three failed logins lock the account; recovery is a 6-digit emailed OTP with a 5-minute expiry checked server-side.",
      },
      {
        title: "Real-time notifications per user",
        detail:
          "Spring WebSocket with a STOMP message broker; SimpMessagingTemplate pushes payment events to each user's private /queue/notifications, so agents see payments the moment an admin settles them.",
      },
      {
        title: "Audit trail as first-class schema",
        detail:
          "Four dedicated audit entities (admin, agent, bank details, collections) capture every change, and the repository layer paginates server-side rather than loading whole tables into memory.",
      },
    ],
    scale: [
      { label: "Java classes", value: "78" },
      { label: "Lines of Java", value: "~9,000" },
      { label: "JPA entities", value: "10" },
      { label: "Controllers", value: "13" },
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
    engineeringHighlights: [
      {
        title: "Object storage, not the database",
        detail:
          "Videos are streamed straight to an S3 bucket through the AWS SDK (putObject / listObjectsV2 / deleteObject) and served back by URL, keeping large binaries out of the application server and database entirely.",
      },
      {
        title: "Large-file uploads",
        detail:
          "Spring's multipart limits are raised to 1 GB per file and per request so full-length videos upload in one call, with clear 404 / 500 responses when an object is missing or S3 rejects the write.",
      },
      {
        title: "Progress the user can actually see",
        detail:
          "The React client uses Axios onUploadProgress and onDownloadProgress (blob responses) to drive Bootstrap progress bars, so multi-hundred-megabyte transfers never look frozen.",
      },
    ],
    github: "https://github.com/itsAhesan/video-upload-application",
  },
];
