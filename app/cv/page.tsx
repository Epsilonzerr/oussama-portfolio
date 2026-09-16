export const metadata = {
  title: "CV | Oussama Moustarzik",
  description: "Curriculum vitae of Oussama Moustarzik, Software & AI Engineer.",
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: 18, margin: "28px 0 12px", letterSpacing: "-0.02em" }}>{children}</h2>
);

export default function CVPage() {
  return (
    <main style={{ background: "#f5f7fb", minHeight: "100vh", padding: "40px 16px", color: "#111827" }}>
      <article style={{ maxWidth: 900, margin: "0 auto", background: "white", padding: 40, borderRadius: 20, boxShadow: "0 20px 60px rgba(0,0,0,.08)" }}>
        <header style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: 24 }}>
          <h1 style={{ fontSize: 36, margin: 0 }}>Moustarzik Oussama</h1>
          <p style={{ margin: "8px 0 0", color: "#4b5563" }}>Software & AI Engineer · Casablanca, Morocco</p>
          <p style={{ margin: "10px 0 0", color: "#374151", lineHeight: 1.7 }}>
            0679587819 · oussamamoustarzik7@gmail.com · LinkedIn: Oussama Moustarzik
          </p>
        </header>

        <SectionTitle>Professional Experience</SectionTitle>
        <section>
          <h3>AI Engineer — Telexcel</h3>
          <p><strong>September 2025 — Present · Casablanca</strong></p>
          <ul>
            <li>Developed CallQualify, an AI platform for automatic customer-call qualification.</li>
            <li>Designed the architecture with FastAPI, PostgreSQL, Docker, OpenAI, Speechmatics and AWS S3.</li>
            <li>Built automated transcription, LLM analysis and evaluation pipelines.</li>
            <li>Implemented campaign processing for large volumes of audio recordings.</li>
            <li>Built a modern web interface for campaign management and performance analysis.</li>
          </ul>

          <h3>Software Development Intern — AnzarConseil</h3>
          <p><strong>July 2024 — September 2024 · Rabat</strong></p>
          <ul>
            <li>Developed an AI-assisted application for automatic synthesis-document generation.</li>
            <li>Designed backend services and integrated AI models to accelerate report production.</li>
            <li>Optimized document-generation workflows to reduce manual work.</li>
          </ul>

          <h3>Software Development Intern — MonBâtiment</h3>
          <p><strong>April 2023 — June 2023 · Toulouse</strong></p>
          <ul>
            <li>Developed a school-management web application for students, teachers and classes.</li>
            <li>Designed the database and backend features for users, enrollments and academic tracking.</li>
            <li>Contributed to architecture design, backend development and solution validation.</li>
          </ul>
        </section>

        <SectionTitle>Selected Projects</SectionTitle>
        <section>
          <h3>CallQualify</h3>
          <p>AI-powered call qualification platform using Python, FastAPI, PostgreSQL, Docker, OpenAI, Speechmatics and AWS S3.</p>
          <h3>Fraud Detection</h3>
          <p>Machine-learning system for banking fraud detection, including preprocessing, model training and performance evaluation.</p>
          <h3>Event Microservices</h3>
          <p>Distributed microservices architecture for event management with REST APIs and inter-service communication.</p>
          <h3>Document Management System (DMS)</h3>
          <p>Secure document-management platform with authentication, access control and centralized document tracking.</p>
        </section>

        <SectionTitle>Education</SectionTitle>
        <section>
          <h3>State Engineering Degree in Computer Engineering — ESIM</h3>
          <p><strong>October 2023 — July 2026 · Casablanca</strong></p>
          <p>Specialization in Artificial Intelligence, Software Engineering and Information Systems. Final-year project: CallQualify.</p>

          <h3>DUT in Computer Engineering — EST</h3>
          <p><strong>September 2021 — June 2023 · Casablanca</strong></p>
          <p>Software development, databases, networking, operating systems and software engineering.</p>
        </section>

        <SectionTitle>Technical Skills</SectionTitle>
        <section style={{ lineHeight: 1.8 }}>
          <p><strong>Languages:</strong> Python, Java, JavaScript, SQL, C/C++</p>
          <p><strong>Frontend:</strong> React.js, Next.js, HTML5, CSS3</p>
          <p><strong>Backend:</strong> FastAPI, Django, Spring Boot, Laravel, REST API</p>
          <p><strong>AI:</strong> OpenAI API, LLM, RAG, LangChain, LangGraph, TensorFlow, PyTorch, Scikit-learn, NLP</p>
          <p><strong>Databases:</strong> PostgreSQL, SQL Server, MySQL, Oracle, Neo4j</p>
          <p><strong>Cloud & DevOps:</strong> Docker, Git, Linux, AWS, CI/CD</p>
          <p><strong>Architecture:</strong> Microservices, distributed systems, AI Agents, n8n</p>
          <p><strong>Tools:</strong> GitHub, Postman, Jira, Figma, Notion</p>
        </section>

        <footer style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid #e5e7eb", display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/" style={{ padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: 10 }}>Back to portfolio</a>
          <button onClick={() => window.print()} style={{ padding: "10px 14px", border: 0, borderRadius: 10, background: "#111827", color: "white", cursor: "pointer" }}>Print / Save as PDF</button>
        </footer>
      </article>
    </main>
  );
}
