export const aimlFeatured = [
  {
    title: "TripMate AI",
    tagline: "Multi-agent travel planning assistant — orchestrates flight, hotel, itinerary & budget agents to plan a full trip from one sentence.",
    period: "Jul 2026 – Aug 2026",
    stack: ["Python", "LangGraph", "LangChain", "Groq", "Duffel API", "AviationStack", "Tavily", "PostgreSQL", "Streamlit"],
    bullets: [
      "Architected a multi-agent AI travel planning system using **LangGraph** and **LangChain**, orchestrating **4+ specialized agents** (flight, hotel, itinerary, budget) that cut trip-planning time from **~2 hours to under 10 minutes** via a single natural-language query.",
      "Integrated **Duffel API, AviationStack & Tavily Search** with PostgreSQL-backed checkpointing for real-time flight/hotel data and persistent itineraries — **50+ test queries** across **50+ cities**, **95% success rate**.",
    ],
    github: "https://github.com/Ishan-1104/TripMate-AI",
    demo: "https://tripmate-a.streamlit.app",
    demoLabel: "tripmate-a.streamlit.app",
    embeddable: false, // Streamlit blocks iframe embedding
    image: "/TripMate-AI.png",
  },
  {
    title: "Research Mind AI",
    tagline: "Self-critiquing multi-agent research pipeline — searches, scrapes, drafts, and grades its own report before handing it back.",
    period: "2026",
    stack: ["Python", "LangChain", "Mistral AI", "Tavily", "BeautifulSoup4", "Streamlit"],
    bullets: [
      "Orchestrated a multi-agent pipeline: a **Search Agent** (Tavily + Mistral tool-calling) finds relevant sources, a **Scraper** (BeautifulSoup, with URL fallback) pulls full page content, chained end-to-end with **LangChain** so each stage feeds the next automatically.",
      "Built self-critiquing report generation — a **Writer Chain** drafts a structured **900–1200 word report** from scraped material, then a separate **Critic Chain** reviews and self-scores the output, giving the pipeline a built-in quality-check step instead of single-pass generation.",
      "Shipped a real-time **Streamlit interface** that tracks pipeline stage progress live, keeps a history of past runs, and lets users export the final report directly to Markdown.",
    ],
    github: "https://github.com/Ishan-1104/Multi_Agent_System",
    demo: "https://research-mind-18.streamlit.app/",
    demoLabel: "research-mind-18.streamlit.app",
    embeddable: false, // Streamlit blocks iframe embedding
    image: "/Research-Mind-AI.png",
  },
  {
    title: "AI Video Assistant",
    tagline: "RAG-powered meeting & video intelligence platform — turns any video into transcripts, summaries and a chat interface.",
    period: "Jun 2026 – Jul 2026",
    stack: ["Python", "LangChain LCEL", "Mistral AI", "Whisper", "ChromaDB", "Hugging Face", "Streamlit"],
    bullets: [
      "Built an end-to-end **RAG pipeline** using LangChain LCEL, Mistral AI, and Whisper to process YouTube/local videos, auto-generating transcripts, summaries, action items and key decisions.",
      "Shipped a session-isolated semantic search system (**ChromaDB + all-MiniLM-L6-v2**) enabling conversational Q&A across **1,000+ transcript chunks** with **zero cross-session data leakage**, plus concurrent sessions and real-time processing status.",
    ],
    github: "https://github.com/Ishan-1104/Video-Agent",
    demo: "https://video-agent-18.streamlit.app",
    demoLabel: "video-agent-18.streamlit.app",
    embeddable: false, // Streamlit blocks iframe embedding
    image: "/AI-Video-Assistant.png",
  },
]

export const aimlCompact = [
  {
    title: "CineAI",
    description: "Content-based movie recommendation engine using TF-IDF vectorization and cosine similarity across 500,000+ TMDB records, sub-500ms responses.",
    stack: ["Python", "Scikit-learn", "TF-IDF", "Cosine Similarity"],
    metric: "500K+ movies · sub-500ms",
    github: "https://github.com/Ishan-1104/CineAI",
    demo: "https://cineai-6ygv.onrender.com",
    image: "/Cine-ai.png",
  },
  {
    title: "Multi-Disease Prediction System",
    description: "ML-powered healthcare app predicting Heart Disease, Diabetes & Parkinson's using Logistic Regression and SVM, with real-time inference.",
    stack: ["Python", "Scikit-learn", "Streamlit", "SVM"],
    metric: "~80% accuracy · <2s inference",
    github: "https://github.com/Ishan-1104/multi-diseases",
    demo: "https://multi-diseases-xahsafbhcqcsgfpvpkqgu2.streamlit.app/",
    image: "/Multi-Disease.png",
  },
  {
    title: "Resume Parser",
    description: "Resume recommendation system benchmarking 4 supervised models (Random Forest, SVM, Logistic Regression, Naive Bayes) to generate top-5 job matches.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    metric: "~85% accuracy · <2s latency",
    github: null,
    demo: "https://resume-parser-iiuu.onrender.com/",
    image: "/Resume-Parser.png",
  },
  {
    title: "RAG Chatbot",
    description: "Retrieval-augmented Q&A tool that chunks PDF documents and answers natural-language questions grounded strictly in the retrieved chunks.",
    stack: ["Python", "LangChain", "RAG", "Vector Search"],
    metric: null,
    github: "https://github.com/Ishan-1104/RAG",
    demo: null,
    image: "/Rag-chat.png",
  },
]

export const sdeFeatured = [
  {
    title: "CineAI",
    tagline: "Full-stack AI movie recommendation platform — MERN stack backend wired to a Python recommendation engine.",
    period: "May 2026 – Jun 2026",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "TMDB API", "JWT", "Tailwind CSS", "Render"],
    bullets: [
      "Built a full-stack recommendation platform using the **MERN stack** with a Python recommendation engine, delivering personalized suggestions across **500,000+ TMDB movie entries**.",
      "Implemented secure **JWT authentication** with protected routes, user profiles, favorites and watchlist management via MongoDB Atlas — **zero unauthorized access**.",
      "Integrated 5+ TMDB API endpoints for search, autocomplete, posters and ratings at **sub-500ms** response times; deployed on Render at **99.9% uptime** across React, Express, MongoDB and Python services.",
    ],
    github: "https://github.com/Ishan-1104/CineAI",
    demo: "https://cineai-6ygv.onrender.com",
    demoLabel: "cineai-6ygv.onrender.com",
    embeddable: true, // Render allows iframe embedding
  },
  {
    title: "Streamify",
    tagline: "Real-time language learning & chat platform — matches learners with native speakers for messaging and video calls.",
    period: "Jul 2025 – Aug 2025",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stream Chat API", "JWT", "Tailwind CSS", "Render"],
    bullets: [
      "Developed a full-stack language exchange platform connecting users across **10+ languages** through real-time messaging, video calls and language-based matching.",
      "Implemented JWT auth with friend-request workflows and Stream Chat API integration — messaging under **100ms latency**, video for up to **50 concurrent users**.",
      "Built a fully responsive UI across **4 breakpoints**, reducing UI-related drop-off through clearer navigation flows.",
    ],
    github: "https://github.com/Ishan-1104",
    demo: "https://streamify-1-gesi.onrender.com/",
    demoLabel: "streamify-1-gesi.onrender.com",
    embeddable: true, // Render allows iframe embedding
  },
  {
    title: "ResumeForge AI",
    tagline: "AI-powered ATS resume optimization platform — Gemini-generated bullet points and keyword-gap analysis against job descriptions.",
    period: "Apr 2026 – May 2026",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Gemini API", "Vercel"],
    bullets: [
      "Built an AI-powered resume platform using the **Gemini API** to generate ATS-optimized bullet points, summaries and skill recommendations — cut average revision time by **~60%**.",
      "Implemented AI-driven resume-to-job-description analysis identifying **10+ missing keywords** per scan to improve ATS match scores.",
      "Designed a responsive Next.js + Tailwind UI achieving **90+ Lighthouse** scores across desktop and mobile.",
    ],
    github: "https://github.com/Ishan-1104",
    demo: "https://resumeforge-ai-five.vercel.app",
    demoLabel: "resumeforge-ai-five.vercel.app",
    embeddable: true, // Vercel allows iframe embedding
  },
]