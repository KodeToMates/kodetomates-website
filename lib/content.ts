// lib/content.ts

export const STATS = [
  { value: 500, label: "Mates", suffix: "+" }, // TODO: replace with dynamic data
  { value: 40, label: "Projects shipped", suffix: "+" }, // TODO: replace with dynamic data
  { value: 12, label: "Mentors", suffix: "" }, // TODO: replace with dynamic data
  { value: 4.9, label: "Community rating", suffix: "/5" }, // TODO: replace with dynamic data
];

export const ABOUT = {
  eyebrow: "Why KodeToMates",
  heading: "Nobody learns to code alone.",
  paragraphs: [
    "We believe that the best way to learn software engineering is by building real projects with real people. Our platform connects you with a mate, so you can pair program, review each other's code, and grow together.",
    "From your first HTML tag to your first senior developer role, you'll have a community of peers and mentors supporting you every step of the way."
  ],
  features: [
    { title: "Pair up", description: "Get matched with developers at your level.", icon: "👥" },
    { title: "Ship real projects", description: "Build a portfolio of actual products, not just tutorials.", icon: "🚀" },
    { title: "Get mentored", description: "Receive code reviews and advice from industry pros.", icon: "🎓" },
    { title: "Grow your career", description: "Prep for interviews and land your dream job.", icon: "📈" }
  ]
};

export const PROGRAMS = {
  heading: "Pick your path",
  items: [
    {
      title: "Frontend Foundations",
      level: "Beginner",
      duration: "8 weeks",
      outcomes: ["Master HTML, CSS & JS", "Build responsive layouts", "Deploy your first site"],
      tech: ["HTML5", "CSS3", "JavaScript"],
      featured: false
    },
    {
      title: "Full-Stack with Next.js",
      level: "Intermediate",
      duration: "12 weeks",
      outcomes: ["Build React apps", "Server-side rendering", "Database integration"],
      tech: ["Next.js", "React", "TypeScript", "PostgreSQL"],
      featured: true
    },
    {
      title: "Career Launchpad",
      level: "Advanced",
      duration: "6 weeks",
      outcomes: ["System design", "Mock interviews", "Resume reviews"],
      tech: ["Architecture", "Algorithms", "Soft Skills"],
      featured: false
    }
  ]
};

export const HOW_IT_WORKS = {
  heading: "How it works",
  steps: [
    { title: "Join", description: "Create your profile and tell us your goals." },
    { title: "Get matched with a mate", description: "We pair you with someone at a similar skill level." },
    { title: "Build a real project", description: "Collaborate on a structured project with weekly milestones." },
    { title: "Present and get hired", description: "Demo your work to the community and our hiring partners." }
  ]
};

export const PROJECTS = {
  heading: "Built by mates",
  items: [
    {
      title: "DevFlow",
      description: "A collaborative kanban board for remote engineering teams.",
      tech: ["Next.js", "Tailwind", "Supabase"],
      builders: ["Alex R.", "Sam K."] // TODO: replace with real data
    },
    {
      title: "CodeSnippet Pro",
      description: "A desktop app to save and organize your most used code snippets.",
      tech: ["Electron", "React", "TypeScript"],
      builders: ["Jordan T.", "Casey M."] // TODO: replace with real data
    },
    {
      title: "EcoTrack",
      description: "Track your daily carbon footprint and get actionable reduction tips.",
      tech: ["React Native", "Expo", "Node.js"],
      builders: ["Taylor S.", "Morgan L."] // TODO: replace with real data
    }
  ]
};

export const COMMUNITY = {
  heading: "A room full of builders",
  text: "Join our active Discord community. Whether you're debugging a tricky issue, looking for a pair programming buddy, or just want to hang out, there's always someone online.",
  chips: ["#show-your-build", "#code-review-swap", "#ask-a-mentor", "#jobs", "#friday-demos"],
  event: {
    date: "This Friday, 5 PM EST",
    title: "Weekly Project Demos",
  }
};

export const MENTORS = [
  // TODO: replace with real data
  { name: "Jane Doe", initials: "JD", role: "Senior Engineer", company: "TechCorp", skills: ["React", "Node"] },
  { name: "John Smith", initials: "JS", role: "Staff Engineer", company: "CloudSys", skills: ["System Design", "AWS"] },
  { name: "Alice Lee", initials: "AL", role: "Frontend Lead", company: "WebWizards", skills: ["CSS", "Accessibility"] },
  { name: "Bob Chen", initials: "BC", role: "Engineering Manager", company: "StartupX", skills: ["Leadership", "Career"] }
];

export const TESTIMONIALS = [
  // TODO: replace with real data
  { quote: "KodeToMates completely changed my learning trajectory. Building with a partner kept me accountable and made learning fun.", name: "Placeholder Name", role: "Frontend Developer" },
  { quote: "The mentorship I received here helped me land my first senior role. The community is incredibly supportive.", name: "Placeholder Name", role: "Software Engineer" },
  { quote: "I used to get stuck on tutorials. Now I ship real products and can actually explain my code in interviews.", name: "Placeholder Name", role: "Full Stack Dev" }
];

export const BLOG = {
  heading: "From the community",
  posts: [
    { title: "How to ace your first technical interview", tag: "Career", readTime: "5 min read", date: "Oct 12, 2026" },
    { title: "Understanding React Server Components", tag: "Engineering", readTime: "8 min read", date: "Oct 5, 2026" },
    { title: "My journey from bootcamp to junior dev", tag: "Story", readTime: "4 min read", date: "Sep 28, 2026" }
  ]
};

export const FAQ = [
  { question: "Who is it for?", answer: "Anyone looking to improve their coding skills by building real projects with others. We have paths for beginners, intermediate, and advanced developers." },
  { question: "Is it free?", answer: "Our core community and pairing platform are completely free and open-source. We offer optional premium mentorship tracks." },
  { question: "How much time per week?", answer: "We recommend dedicating at least 5-10 hours per week to get the most out of your pairing sessions and project work." },
  { question: "Do I need experience?", answer: "Some basic knowledge of HTML/CSS/JS is helpful, but we have beginner paths designed to take you from the basics to your first full project." },
  { question: "How does pairing work?", answer: "We match you with a mate based on your skill level and time zone. You'll schedule weekly sessions to build a structured project together." },
  { question: "Do you help with jobs?", answer: "Yes! Our Career Launchpad program includes resume reviews, mock interviews, and direct intros to our hiring partners." }
];
