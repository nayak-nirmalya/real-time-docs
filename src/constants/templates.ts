export const templates = [
  { id: "blank", label: "Blank Document", imageUrl: "/blank-document.svg" },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>Brief description of the proposed software development project.</p>
      
      <h2>Scope of Work</h2>
      <p>Detailed breakdown of project deliverables and requirements.</p>
      
      <h2>Timeline</h2>
      <p>Project milestones and delivery schedule.</p>
      
      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
  },
  { id: "resume", label: "Resume", imageUrl: "/resume.svg" },
  { id: "cover-letter", label: "Cover letter", imageUrl: "/cover-letter.svg" },
  { id: "letter", label: "Letter", imageUrl: "/letter.svg" },
];
