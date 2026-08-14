export const profile = {
  name: "Ahesan Chowdhury",
  firstName: "Ahesan",
  title: "Software Engineer | Java Backend Developer",
  role: "Software Engineer",
  location: "Bengaluru, Karnataka, India",
  heroHeading: "Building Scalable Backend Systems with Java & Spring",
  heroSubtitle:
    "Software Engineer specializing in Java, Spring Boot, REST APIs, Spring Data JPA, Hibernate and MySQL.",
  summary:
    "Software Engineer with close to two years of experience building Java backend systems, currently working full-time on a client e-commerce platform. Builds REST APIs with Spring Boot and Spring MVC, models relational schemas, and works across the full service layer with Spring Data JPA and Hibernate on MySQL. Comfortable across the full SDLC in an Agile team, from requirement gathering and proof-of-concept work through code review, CI/CD and production support.",
  openTo:
    "I am currently open to Java Backend Developer and Software Engineer opportunities.",
  email: "ahesanchowdhury@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/ahesan-chowdhury-44a8202aa",
    github: "https://github.com/itsAhesan",
  },
  githubUsername: "itsAhesan",
  resumePath: "/resume/Ahesan_Chowdhury_Resume.pdf",
  resumeFileName: "Ahesan_Chowdhury_Resume.pdf",
  photo: {
    src: "/images/ahesan.jpg",
    alt: "Portrait of Ahesan Chowdhury",
  },
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Bengali", level: "Fluent" },
  ],
} as const;

export type Profile = typeof profile;
