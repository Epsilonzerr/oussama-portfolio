export const skills = [
  "Python",
  "FastAPI",
  "Spring Boot",
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS S3",
  "Neo4j",
  "Qdrant",
  "LangChain",
  "LangGraph",
  "n8n",
  "GitHub",
  "GitLab",
];

export const projects = [
  {
    name: "CallQualify",
    label: "AI / Production",
    description:
      "AI-powered call qualification platform for contact-center workflows, combining speech processing, structured LLM analysis, campaign orchestration and production monitoring.",
    highlights: [
      "Speech-to-text & call analysis",
      "Structured AI qualification",
      "Dynamic campaigns & background workers",
      "RAG, PostgreSQL, Redis & AWS S3",
    ],
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "OpenAI", "AWS"],
    href: "#contact",
    privateProject: true,
  },
  {
    name: "CodeMentor",
    label: "GraphRAG / Developer Tool",
    description:
      "Repository intelligence platform designed to help developers understand unfamiliar codebases by combining code parsing, graph relationships and retrieval-augmented generation.",
    highlights: [
      "Tree-sitter code ingestion",
      "Neo4j dependency graph",
      "Vector retrieval + GraphRAG",
      "Repository-level architecture exploration",
    ],
    stack: ["FastAPI", "Neo4j", "Tree-sitter", "Vector DB", "GraphRAG"],
    href: "#contact",
    privateProject: true,
  },
  {
    name: "Job Intelligence",
    label: "Automation / AI Agents",
    description:
      "Automated job-intelligence workflow that aggregates opportunities, normalizes offers, applies profile-based processing and orchestrates notifications.",
    highlights: [
      "Multi-source job aggregation",
      "n8n orchestration",
      "MCP-oriented workflows",
      "Structured processing & filtering",
    ],
    stack: ["n8n", "MCP", "JSON Schema", "Automation", "AI"],
    href: "#contact",
    privateProject: true,
  },
  {
    name: "E-commerce Microservices",
    label: "Microservices",
    description:
      "Microservices-oriented commerce project focused on service separation, API communication and containerized development workflows.",
    highlights: [
      "Distributed service architecture",
      "Containerized environment",
      "API-first backend design",
      "Modern frontend integration",
    ],
    stack: ["Microservices", "Docker", "REST", "Frontend", "Backend"],
    href: "https://github.com/Epsilonzerr/Ecommerce-Microservices-V",
    privateProject: false,
  },
  {
    name: "Gestion Voyage",
    label: "Spring Boot / Distributed Systems",
    description:
      "Travel-management platform built with Spring Boot microservices, service discovery, an API gateway and asynchronous messaging.",
    highlights: [
      "Eureka service discovery",
      "API Gateway",
      "RabbitMQ messaging",
      "PostgreSQL + Docker Compose",
    ],
    stack: ["Spring Boot", "Eureka", "RabbitMQ", "PostgreSQL", "Docker"],
    href: "https://gitlab.com/OussamaMoustarzik/gestion-voyage",
    privateProject: false,
  },
];

export const experience = [
  {
    period: "2026",
    role: "Software & AI Engineering — CallQualify",
    company: "Telexcel",
    description:
      "Designed and evolved an AI-assisted call qualification platform, covering backend services, AI pipelines, campaign execution, retrieval and production-oriented infrastructure.",
  },
  {
    period: "Engineering journey",
    role: "Automation & Industrial IT Engineering",
    company: "Academic & personal projects",
    description:
      "Built projects across AI, IoT, microservices, automation and intelligent information systems, with a strong focus on practical end-to-end delivery.",
  },
];
