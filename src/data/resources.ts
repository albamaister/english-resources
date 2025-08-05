import { Resource } from "@/types/resource";

export const resources: Resource[] = [
  {
    id: "1",
    title: "YouGlish",
    description:
      "Improve your pronunciation by hearing real people speak words in context from YouTube videos.",
    url: "https://youglish.com",
    category: "Pronunciation",
    thumbnail: "/images/youglish.jpg",
    tags: ["pronunciation", "listening", "youtube"],
    featured: true,
  },
  {
    id: "2",
    title: "LyricsTraining",
    description:
      "Improve your listening and vocabulary through music videos with interactive lyric-based games.",
    url: "https://lyricstraining.com/en/",
    category: "Listening",
    thumbnail: "/images/lyricstraining.png",
    tags: ["listening", "music", "games"],
    featured: true,
  },
  {
    id: "3",
    title: "Relatos en Inglés con Duolingo",
    description:
      "Real-life stories told in English with Spanish narration and support. Ideal for intermediate learners who want to improve listening and comprehension.",
    url: "https://open.spotify.com/show/0RjrXVjw3FhNlO7saEPoSF",
    category: "Listening",
    thumbnail: "/images/duolingo.jpg",
    tags: ["listening", "podcast", "stories"],
    featured: true,
  },

  {
    id: "4",
    title: "Curso-Inglés.com",
    description:
      "Comprehensive online English course in Spanish with grammar explanations, vocabulary exercises, audio lessons, and free placement tests.",
    url: "https://www.curso-ingles.com/",
    category: "Grammar",
    thumbnail: "/images/curso-ingles.png",
    tags: ["grammar", "vocabulary", "spanish"],
    featured: false,
  },
  {
    id: "5",
    title: "ChatGPT",
    description:
      "AI conversational partner for practicing English conversations and getting language help.",
    url: "https://chat.openai.com",
    category: "AI Tools",
    thumbnail: "/images/chat-gpt.avif",
    tags: ["ai", "conversation", "practice"],
  },
  {
    id: "6",
    title: "Bob the Canadian",
    description:
      "Learn natural English expressions, pronunciation, and daily vocabulary through videos from a real Canadian teacher.",
    url: "https://www.youtube.com/@LearnEnglishwithBobtheCanadian",
    category: "Listening",
    thumbnail: "/images/bob.jpg",
    tags: ["listening", "youtube", "speaking"],
    featured: true,
  },
  {
    id: "7",
    title: "Hemingway Editor",
    description:
      "Improve your English writing by making it clearer and more concise. Highlights passive voice, complex sentences, and readability issues.",
    url: "https://hemingwayapp.com/",
    category: "Writing",
    thumbnail: "/images/hemingway.png",
    tags: ["writing", "clarity", "editing"],
    featured: false,
  },
  {
    id: "8",
    title: "EF SET",
    description:
      "Take a free, official online English test with certification. Measure your CEFR level in 15–50 minutes.",
    url: "https://www.efset.org/",
    category: "General",
    thumbnail: "/images/ef-set.jpg",
    tags: ["certification", "test", "assessment"],
    featured: true,
  },
  {
    id: "9",
    title: "iA Spid",
    description:
      "Improve your English listening and speaking with AI-powered simulations of real-life conversations.",
    url: "https://iaspid.com/",
    category: "AI Tools",
    thumbnail: "/images/iaspid.png",
    tags: ["speaking", "ai", "listening"],
    featured: true,
  },
  {
    id: "10",
    title: "BBC Learning English",
    description:
      "Learn grammar, vocabulary, pronunciation, and current events through daily videos, quizzes, and courses.",
    url: "https://www.bbc.co.uk/learningenglish",
    category: "General",
    thumbnail: "/images/bbc.jpg",
    tags: ["grammar", "news", "pronunciation"],
    featured: true,
  },
  {
    id: "11",
    title: "Elllo.org",
    description:
      "Free audio and video lessons with transcripts and quizzes to improve listening comprehension.",
    url: "https://elllo.org/",
    category: "Listening",
    thumbnail: "/images/elllo.png",
    tags: ["listening", "audio", "quizzes"],
    featured: false,
  },
  {
    id: "12",
    title: "TalkEnglish",
    description:
      "Practice English speaking online with structured lessons, pronunciation tips, and audio-based practice. Designed for everyday conversations.",
    url: "https://www.talkenglish.com/",
    category: "Speaking",
    thumbnail: "/images/talkenglish.jpg",
    tags: ["speaking", "conversation", "practice"],
    featured: true,
  },
];
