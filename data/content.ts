// Edit this file to change what appears on the site. All text comes from the resume.

export const profile = {
  "name": "Rikku Muralidharan",
  "title": "Senior Software Developer, Frontend",
  "positioning": "I build fast, responsive React applications, from real-time leaderboards to admin dashboards.",
  "location": "Thrissur, Kerala, India",
  "availability": "Available immediately. Open to hybrid and remote roles in Kochi and beyond.",
  "email": "rikkumurali03@gmail.com",
  "linkedin": "https://www.linkedin.com/in/rikku-kiranlal-9b766b180/",
  "github": "https://github.com/rikkumurali"
};

export const highlights = [
  {
    "value": "5+ years",
    "label": "building scalable web applications"
  },
  {
    "value": "30–40%",
    "label": "application performance improvement through component and rendering optimization"
  },
  {
    "value": "20–25%",
    "label": "less development time with reusable components"
  }
];

export const about = [
  "Frontend-focused software developer with 5+ years of experience, specialising in React.js, JavaScript, TypeScript and Redux Toolkit. I build scalable, responsive, maintainable web applications with reusable components, efficient state management and REST API integration.",
  "I care about performance, cross-browser compatibility, code quality and user experience. I currently work at L-Earnings Quest Global on a multi-level quiz platform, I'm comfortable in Agile teams, and I have basic backend knowledge in Node.js, Express and Django."
];

export type Project = {
  name: string;
  summary: string;
  contribution: string[];
  outcome?: string;
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    "name": "Real-Time Quiz Platform",
    "summary": "A multi-level quiz platform with interactive interfaces, real-time leaderboards and administrative dashboards, built at L-Earnings Quest Global.",
    "contribution": [
      "Implemented Redux Toolkit state management to support dynamic user interactions.",
      "Optimized frontend components and rendering behaviour for responsiveness.",
      "Connected the frontend to application services for data-driven and real-time features."
    ],
    "outcome": "Improved application performance by 30–40% through component optimization and efficient rendering.",
    "stack": [
      "React.js",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL"
    ],
    "featured": true
  },
  {
    "name": "Watchtower (Admin Panel)",
    "summary": "A modular administrative interface backed by Django REST APIs.",
    "contribution": [
      "Built the modular UI with React.js, TypeScript and reusable components.",
      "Used React Query to retrieve, manage and update data through REST APIs.",
      "Applied TypeScript for code consistency and reliability."
    ],
    "outcome": "Improved responsiveness, component reusability and maintainability across admin workflows.",
    "stack": [
      "React.js",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Django REST Framework"
    ]
  },
  {
    "name": "NBFC Dashboard (B2B and B2C)",
    "summary": "A financial dashboard supporting business workflows across B2B and B2C operations.",
    "contribution": [
      "Created structured, reusable interface components with React.js and Material UI.",
      "Managed application state with Redux Toolkit.",
      "Connected the dashboard to application services for dynamic information."
    ],
    "outcome": "Consistent data presentation across business workflows.",
    "stack": [
      "React.js",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Material UI",
      "Node.js"
    ]
  },
  {
    "name": "Kwik-Fix (Automobile Management System)",
    "summary": "A management system for automobile services, with interfaces for administrative and operational workflows.",
    "contribution": [
      "Developed the user interfaces with React.js and Material UI.",
      "Implemented interactive elements for administrative workflows.",
      "Integrated the frontend with application services."
    ],
    "outcome": "Maintainable, responsive layouts that improve usability across screen sizes.",
    "stack": [
      "React.js",
      "JavaScript (ES6+)",
      "Material UI",
      "Django"
    ]
  }
];

export const experience = [
  {
    "role": "Senior Software Developer, Frontend",
    "company": "L-Earnings Quest Global Pvt. Ltd",
    "period": "2024 to present",
    "points": [
      "Develop scalable, responsive interfaces for a multi-level quiz platform with React.js, Redux Toolkit and Tailwind CSS.",
      "Build reusable, modular components that keep code consistent and easier to maintain.",
      "Manage application state with Redux Toolkit to support interactive, real-time workflows.",
      "Improved application performance by 30–40% through component optimization and efficient rendering.",
      "Developed real-time leaderboards, user-facing features and administrative dashboards.",
      "Integrate the UI with backend services, troubleshoot issues, and deliver in Agile."
    ]
  },
  {
    "role": "Software Developer",
    "company": "Metric Tree Labs Pvt. Ltd, Kochi",
    "period": "2021 to 2024",
    "points": [
      "Developed web application interfaces with React.js and JavaScript.",
      "Designed reusable UI components, reducing development time by 20–25% and improving consistency.",
      "Used Redux for application state and React Query for server-side data and API requests.",
      "Connected frontends to RESTful APIs and turned design specifications into responsive interfaces.",
      "Worked with cross-functional teams in Agile to deliver features and meet milestones."
    ]
  },
  {
    "role": "Frontend Developer",
    "company": "Evenza Solution Pvt. Ltd, Kochi",
    "period": "2020 to 2021",
    "points": [
      "Built interactive, responsive web pages with HTML5, CSS3 and JavaScript across desktop, tablet and mobile.",
      "Converted design specifications into accessible, user-friendly interfaces.",
      "Identified and resolved browser-specific issues for consistent cross-browser behaviour."
    ]
  }
];

export const skills = [
  {
    "group": "Languages",
    "items": [
      "JavaScript (ES6+)",
      "TypeScript"
    ]
  },
  {
    "group": "Frontend",
    "items": [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Responsive web design",
      "React Hooks",
      "React Router",
      "Component-based architecture"
    ]
  },
  {
    "group": "State and data",
    "items": [
      "Redux",
      "Redux Toolkit",
      "React Context API",
      "React Query (TanStack Query)",
      "Axios",
      "Fetch API",
      "REST APIs"
    ]
  },
  {
    "group": "UI libraries",
    "items": [
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Bootstrap",
      "Framer Motion"
    ]
  },
  {
    "group": "Quality",
    "items": [
      "Jest",
      "React Testing Library",
      "Code splitting",
      "Lazy loading",
      "Web performance optimization",
      "Cross-browser compatibility"
    ]
  },
  {
    "group": "Tooling",
    "items": [
      "Git",
      "Bitbucket",
      "npm",
      "Vite",
      "Webpack",
      "Babel",
      "JIRA",
      "Slack",
      "Figma",
      "Agile/Scrum"
    ]
  },
  {
    "group": "Backend basics",
    "items": [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL"
    ]
  }
];

export const education = [
  {
    "title": "B.Tech in Computer Science and Engineering",
    "place": "Malabar College of Engineering and Technology, Kerala",
    "period": "2014 to 2018"
  }
];

export const certifications = [
  {
    "title": "Front-End and Web Development",
    "issuer": "IBM"
  },
  {
    "title": "Master Diploma in Software Development",
    "issuer": "Cyber Metric Services"
  },
  {
    "title": "Front-End Development Using React",
    "issuer": "Board Infinity"
  }
];

export const languages = [
  "English",
  "Malayalam",
  "Hindi",
  "Tamil"
];
