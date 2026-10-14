export const portfolioData = {
  personal: {
    name: "Raj Jitendra Patil",
    firstName: "Raj",
    lastName: "Patil",
    photo: "/raj-patil.jpg",
    role: "AI & Data Science Undergraduate",
    specialization: "NLP, Information Retrieval & Machine Learning",
    location: "Shirpur / Valsad, India",
    email: "rajjpatil1801@gmail.com",
    phone: "+91 98251 43904",
    phoneDisplay: "+91 98251 43904",
    github: "https://github.com/rajjpatil1801",
    githubUsername: "rajjpatil1801",
    linkedin: "https://linkedin.com/in/raj-patil-a85947331",
    linkedinDisplay: "raj-patil-a85947331",
    codechef: "https://www.codechef.com/users/vincenzo_18",
    codechefUsername: "vincenzo_18",
    availability: "Available for Summer 2025/2026 AI/ML & SWE Internships",
    bio: "AI & Data Science undergraduate with hands-on experience building NLP and information-retrieval systems using Python, TF-IDF, and vector embeddings. Skilled in Java and Python with a strong DSA foundation. Currently leading RCPIT's premier data science club DATAVERSE and delivering technical AI training to school students through structured community initiatives.",
    stats: [
      { label: "CGPA", value: "8.48", sub: "B.Tech AI & Data Science" },
      { label: "Students Mentored", value: "200+", sub: "AI Literacy & Tech Sessions" },
      { label: "Event Attendees", value: "140+", sub: "Coordinated 35 Teams" },
      { label: "Leadership", value: "Club Head", sub: "DATAVERSE Community" },
    ],
  },

  skills: {
    categories: [
      {
        name: "Languages",
        items: [
          { name: "Python", level: "Advanced", icon: "Code", highlight: true },
          { name: "Java", level: "Intermediate", icon: "Coffee", highlight: true },
        ],
      },
      {
        name: "AI & Machine Learning",
        items: [
          { name: "Natural Language Processing (NLP)", level: "Advanced", highlight: true },
          { name: "Vector Embeddings & Semantic Search", level: "Advanced", highlight: true },
          { name: "TF-IDF Scoring", level: "Advanced", highlight: true },
          { name: "Machine Learning Foundations", level: "Intermediate", highlight: false },
          { name: "Hugging Face Transformers", level: "Intermediate", highlight: true },
        ],
      },
      {
        name: "NLP Libraries",
        items: [
          { name: "NLTK", level: "Advanced", highlight: true },
          { name: "TextBlob", level: "Intermediate", highlight: false },
          { name: "VADER Sentiment", level: "Intermediate", highlight: false },
        ],
      },
      {
        name: "Databases & Tools",
        items: [
          { name: "PostgreSQL", level: "Intermediate", highlight: true },
          { name: "MySQL", level: "Intermediate", highlight: false },
          { name: "Git & GitHub", level: "Advanced", highlight: true },
          { name: "VS Code", level: "Proficient", highlight: false },
        ],
      },
      {
        name: "Core Concepts & Leadership",
        items: [
          { name: "Data Structures & Algorithms (DSA)", level: "Strong Foundation", highlight: true },
          { name: "Community Leadership", level: "Club Head", highlight: true },
          { name: "Technical Training & Communication", level: "Public Speaker", highlight: false },
          { name: "Teamwork & Adaptability", level: "Core Strength", highlight: false },
        ],
      },
    ],
  },

  projects: [
    {
      id: "unified-intelligent-search",
      title: "Unified Intelligent Search",
      tagline: "Semantic Search Engine for Research Papers & Documents",
      category: "Information Retrieval & NLP",
      featured: true,
      description:
        "Developed an intelligent semantic search engine that ranks and retrieves documents, research papers, and articles based on natural-language user queries. Overcomes keyword-matching limitations by fusing dense vector embeddings with TF-IDF statistical scoring.",
      highlights: [
        "Combined TF-IDF scoring with dense vector embeddings and semantic matching to significantly boost relevance over conventional keyword searches.",
        "Integrated PostgreSQL for reliable document storage and index querying.",
        "Engineered NLTK text preprocessing pipelines including tokenization, stop-word removal, and normalization prior to mathematical ranking.",
      ],
      techStack: ["Python", "NLTK", "TF-IDF", "Vector Embeddings", "PostgreSQL", "Semantic Search"],
      githubUrl: "https://github.com/rajjpatil1801",
      demoUrl: "https://github.com/rajjpatil1801",
      badge: "Flagship Project",
    },
    {
      id: "sentiment-analyser",
      title: "Sentiment Analyser",
      tagline: "End-to-End Multi-Model Customer Review & Text Analysis Tool",
      category: "NLP & Text Analytics",
      featured: true,
      description:
        "Built a production-ready sentiment analysis application that classifies text reviews into positive, negative, or neutral sentiment scores using a blended pipeline of NLTK, TextBlob, and VADER.",
      highlights: [
        "Engineered dual input modes: single paragraph live testing and bulk CSV/TXT processing for flexible business review audits.",
        "Architected as a reusable end-to-end tool rather than an isolated script, enabling repeatable daily operational usage.",
        "Provides sentiment confidence polarity metrics and actionable distribution summaries.",
      ],
      techStack: ["Python", "NLTK", "TextBlob", "VADER", "CSV Data Processing"],
      githubUrl: "https://github.com/rajjpatil1801",
      demoUrl: "https://github.com/rajjpatil1801",
      badge: "NLP System",
    },
  ],

  experience: [
    {
      role: "AI Tutor",
      organization: "AI Future Builders Program",
      type: "Teaching & Technical Mentorship",
      location: "Hybrid / On-site",
      period: "2024 – Present",
      current: true,
      bullets: [
        "Teach core Artificial Intelligence and computational thinking concepts to a cohort of ~80 Class VI students through weekly hands-on interactive sessions.",
        "Design activity-based lesson plans, live AI visual demonstrations, and assessment rubrics to cultivate foundational AI literacy at the school level.",
        "Demonstrate practical algorithmic logic and ethical AI fundamentals through engaging gamified experiments.",
      ],
    },
  ],

  leadership: [
    {
      title: "Head of Club — DATAVERSE",
      organization: "R.C. Patel Institute of Technology (RCPIT)",
      period: "2024 – Present",
      description:
        "Elected as Head of Club to lead the premier student data science and AI community at RCPIT. Driving technical workshops, hackathons, study groups, and industry speaker sessions.",
      badge: "Leadership",
    },
    {
      title: "Lead Event Coordinator — 'The Heist Carnival'",
      organization: "Converges-26 (Annual Tech Fest) / DATAVERSE",
      period: "2026",
      description:
        "Conceptualized and spearheaded the flagship event 'The Heist Carnival', coordinating logistics, challenge design, and judging across ~35 competitive teams (140+ participants).",
      badge: "Event Management",
    },
    {
      title: "Speaker & Host — 'Introduction to LinkedIn'",
      organization: "DATAVERSE Community",
      period: "2024",
      description:
        "Hosted an insightful professional branding and digital networking masterclass for an audience of 200+ students, focusing on profile optimization and developer outreach.",
      badge: "Public Speaking",
    },
  ],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "R.C. Patel Institute of Technology — Shirpur",
      period: "2024 – Present",
      grade: "CGPA: 8.48",
      highlights: "Active club head, focus on Machine Learning, NLP, Data Structures & Algorithms, and Mathematics for AI.",
      current: true,
    },
    {
      degree: "Higher Secondary Certificate (12th State Board)",
      institution: "Sett RJJ High School — Valsad",
      period: "2024",
      grade: "77%",
      highlights: "Science stream with Mathematics & Computer Fundamentals.",
      current: false,
    },
    {
      degree: "Secondary School Certificate (10th State Board)",
      institution: "Sett RJJ High School — Valsad",
      period: "2022",
      grade: "78%",
      highlights: "Distinction in Science & Mathematics.",
      current: false,
    },
  ],

  certifications: [
    {
      title: "Deloitte Technology Job Simulation Certificate",
      issuer: "Deloitte (Forage)",
      category: "Industry Simulation",
      date: "Verified",
      skills: ["Technology Consulting", "Software Architecture", "Client Delivery"],
    },
    {
      title: "Java Programming Course",
      issuer: "CodeChef",
      category: "Programming & DSA",
      date: "Certified",
      skills: ["Core Java", "OOP Principles", "Data Structures"],
    },
    {
      title: "Python: Beginner to Advance Course",
      issuer: "Udemy",
      category: "Programming & AI",
      date: "Certified",
      skills: ["Pythonic Idioms", "Object Oriented Design", "Data Analysis"],
    },
  ],
};
