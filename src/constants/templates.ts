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
    initialContent: `
      <h1>Business Letter</h1>
      <p>This is a business letter.</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Contact Information]</p>
      
      <h2>Professional Summary</h2>
      <p>Brief overview of your professional background and key strengths.</p>
      
      <h2>Work Experience</h2>
      <p>[Company Name] - [Position]<br>
      [Date Range]</p>
      
      <h2>Skills</h2>
      <p>List of relevant skills and competencies.</p>
  `,
  },
  { id: "cover-letter", label: "Cover letter", imageUrl: "/cover-letter.svg" },
  { id: "letter", label: "Letter", imageUrl: "/letter.svg" },
];
