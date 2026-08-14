import type { LucideIcon } from "lucide-react";
import {
  Coffee,
  Leaf,
  Send,
  Cog,
  DatabaseZap,
  Database,
  Boxes,
  Monitor,
  ShieldCheck,
  FileCheck2,
  AlertTriangle,
  Gauge,
  Cloud,
  Workflow,
  PenTool,
  Table2,
} from "lucide-react";

/**
 * "Engineering Expertise" pipeline: Java → Spring Boot → ... → MySQL.
 * `detail` is shown in the hover/focus card for each stage.
 */
export interface PipelineStage {
  id: string;
  label: string;
  icon: LucideIcon;
  detail: string;
}

export const expertisePipeline: PipelineStage[] = [
  {
    id: "java",
    label: "Java",
    icon: Coffee,
    detail:
      "Core language for all backend work — Java 8 Streams, Lambdas and Optional for null-safe business logic, plus Java 17 on newer services.",
  },
  {
    id: "spring-boot",
    label: "Spring Boot",
    icon: Leaf,
    detail:
      "Used for building RESTful backend services, validation, exception handling and service-layer architecture.",
  },
  {
    id: "rest-apis",
    label: "REST APIs",
    icon: Send,
    detail:
      "Designs and builds RESTful endpoints with consistent request validation, centralized error responses and Swagger/OpenAPI documentation.",
  },
  {
    id: "service-layer",
    label: "Service Layer",
    icon: Cog,
    detail:
      "Business logic isolated behind a Controller → Service → Repository structure, with DTO mappers standardizing entity-to-response conversion.",
  },
  {
    id: "spring-data-jpa",
    label: "Spring Data JPA",
    icon: DatabaseZap,
    detail:
      "Repository interfaces and custom queries for the persistence layer, keeping data access declarative and testable.",
  },
  {
    id: "hibernate",
    label: "Hibernate",
    icon: Boxes,
    detail:
      "ORM mapping of entities and relationships, with Hibernate Validator handling request-level constraint validation.",
  },
  {
    id: "mysql",
    label: "MySQL",
    icon: Database,
    detail:
      "Normalized relational schemas, indexing and join/query optimization to keep reporting workloads fast.",
  },
];

/** Supporting capability chips shown under the pipeline, each with a hover detail. */
export interface Capability {
  id: string;
  label: string;
  icon: LucideIcon;
  detail: string;
}

export const capabilities: Capability[] = [
  {
    id: "api-design",
    label: "API Design",
    icon: PenTool,
    detail: "Resource modeling, predictable status codes and versionable REST contracts.",
  },
  {
    id: "database-design",
    label: "Database Design",
    icon: Table2,
    detail: "Entity relationships, constraints and normalization across catalogue, order and customer data.",
  },
  {
    id: "authentication",
    label: "Authentication",
    icon: ShieldCheck,
    detail: "Role-based access control, account locking after failed attempts and OTP-based password reset.",
  },
  {
    id: "validation",
    label: "Validation",
    icon: FileCheck2,
    detail: "Hibernate Validator request validation with length/range constraints at the API boundary.",
  },
  {
    id: "exception-handling",
    label: "Exception Handling",
    icon: AlertTriangle,
    detail: "Centralized custom exception handlers producing consistent, client-friendly API error responses.",
  },
  {
    id: "query-optimization",
    label: "Query Optimization",
    icon: Gauge,
    detail: "Joins, indexing and grouping to reduce query execution time on reporting workloads.",
  },
  {
    id: "aws-s3",
    label: "AWS S3",
    icon: Cloud,
    detail: "Secure file upload, storage and retrieval with progress-tracked uploads and downloads.",
  },
  {
    id: "ci-cd",
    label: "CI/CD",
    icon: Workflow,
    detail: "Pipelines for continuous integration and automated deployment of backend services.",
  },
];

/**
 * Interactive request-flow diagram: Client → ... → MySQL, with AWS S3 and
 * CI/CD as side nodes. `detail` is shown on hover/focus per layer.
 */
export interface ArchitectureLayer {
  id: string;
  label: string;
  icon: LucideIcon;
  detail: string;
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "client",
    label: "Client",
    icon: Monitor,
    detail:
      "Browser or React frontend issuing HTTP requests — JSON in, JSON out.",
  },
  {
    id: "controller",
    label: "REST Controller",
    icon: Send,
    detail:
      "Maps HTTP routes to handlers, binds request bodies and returns proper status codes.",
  },
  {
    id: "dto-validation",
    label: "DTO / Validation",
    icon: FileCheck2,
    detail:
      "DTOs decouple the API contract from entities; Hibernate Validator enforces constraints before any logic runs.",
  },
  {
    id: "service",
    label: "Service Layer",
    icon: Cog,
    detail:
      "Transactional business logic — rules, orchestration and mapping between DTOs and entities.",
  },
  {
    id: "repository",
    label: "Repository",
    icon: DatabaseZap,
    detail:
      "Spring Data JPA repositories with derived and custom queries — no SQL scattered through business code.",
  },
  {
    id: "hibernate-jpa",
    label: "Hibernate / JPA",
    icon: Boxes,
    detail:
      "ORM layer mapping entities, relationships and lazy/eager fetching strategies to SQL.",
  },
  {
    id: "mysql",
    label: "MySQL",
    icon: Database,
    detail:
      "Normalized schema with indexes and constraints as the system of record.",
  },
];

export const architectureSideNodes: ArchitectureLayer[] = [
  {
    id: "aws-s3",
    label: "AWS S3",
    icon: Cloud,
    detail:
      "Object storage for file and video workloads — uploads, streaming and downloads handled outside the database.",
  },
  {
    id: "ci-cd",
    label: "CI/CD",
    icon: Workflow,
    detail:
      "Automated build and deployment pipeline keeping every layer releasable.",
  },
];
