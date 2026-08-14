import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Layers,
  Network,
  Database,
  Cloud,
  Wrench,
  MonitorSmartphone,
  GitPullRequest,
} from "lucide-react";

export interface SkillCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Skills rendered as badges; `highlight: true` marks core strengths. */
  skills: { name: string; highlight?: boolean }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    icon: Braces,
    skills: [
      { name: "Java 8", highlight: true },
      { name: "Java 17", highlight: true },
      { name: "SQL", highlight: true },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    icon: Layers,
    skills: [
      { name: "Spring Boot", highlight: true },
      { name: "Spring MVC", highlight: true },
      { name: "Spring Data JPA", highlight: true },
      { name: "Spring ORM" },
      { name: "Spring WebSocket" },
      { name: "Hibernate", highlight: true },
      { name: "J2EE" },
      { name: "JSP/JSTL" },
      { name: "Hibernate Validator" },
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    icon: Network,
    skills: [
      { name: "REST APIs", highlight: true },
      { name: "RESTful Web Services" },
      { name: "Microservices" },
      { name: "MVC" },
      { name: "Layered Architecture", highlight: true },
      { name: "Controller / Service / Repository / DTO" },
      { name: "OOP" },
      { name: "Design Patterns" },
      { name: "Factory Pattern" },
      { name: "Singleton Pattern" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", highlight: true },
      { name: "JDBC" },
      { name: "Database Schema Design", highlight: true },
      { name: "Database Normalization" },
      { name: "Indexing" },
      { name: "Joins" },
      { name: "Query Optimization" },
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS S3", highlight: true },
      { name: "CI/CD", highlight: true },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Maven" },
      { name: "Apache Tomcat" },
    ],
  },
  {
    id: "testing-tools",
    label: "Testing & Tools",
    icon: Wrench,
    skills: [
      { name: "Postman" },
      { name: "Swagger / OpenAPI" },
      { name: "Jira" },
      { name: "Slack" },
      { name: "Lombok" },
      { name: "Jackson" },
      { name: "Apache POI" },
      { name: "PDFBox" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: MonitorSmartphone,
    skills: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    id: "practices",
    label: "Practices",
    icon: GitPullRequest,
    skills: [
      { name: "Agile / Scrum" },
      { name: "SDLC" },
      { name: "Code Review" },
      { name: "Technical Documentation" },
      { name: "Production Support" },
    ],
  },
];
