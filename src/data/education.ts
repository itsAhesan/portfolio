export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export const education: EducationEntry[] = [
  {
    id: "nbu",
    degree: "Bachelor of Science (B.Sc)",
    institution: "University of North Bengal (NBU)",
    period: "2020 – 2024",
    score: "CGPA: 7.3",
  },
  {
    id: "hs",
    degree: "Higher Secondary (Class XII)",
    institution: "New Jalpaiguri Railway Colony High School",
    period: "2018 – 2020",
    score: "Score: 71%",
  },
];
