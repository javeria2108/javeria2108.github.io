export interface JournalEntry {
  slug: string;
  title: string;
  category: 'Interviews' | 'Books' | 'Engineering' | 'Problem solving';
  summary: string;
  url: string;
}

// Summaries of verified LinkedIn posts, not newly ghostwritten articles.
// Every entry links to a verified post; titles and summaries are editorial.
export const journal: readonly JournalEntry[] = [
  {
    slug: 'coding-interview-preparation',
    title: 'Preparing for coding interviews',
    category: 'Interviews',
    summary: 'Start with a small example on paper, work toward a brute-force solution, then learn the underlying patterns. Advice from my DSA tutoring, including how to explain your thinking in a live interview.',
    url: 'https://www.linkedin.com/posts/javeria-zaheer_struggling-with-leetcode-and-problem-solving-activity-7436005842182897664-hR5J',
  },
  {
    slug: 'reading-code-and-books',
    title: 'Reading as an engineering habit',
    category: 'Engineering',
    summary: 'Reading unfamiliar code takes patience: follow the request and data flow, examine important logic and permissions, and notice what you do not understand. Reading books and occasionally coding without AI help build that habit.',
    url: 'https://lnkd.in/p/dpQtpiMZ',
  },
  {
    slug: 'learning-with-ai',
    title: 'Learning with AI as a junior engineer',
    category: 'Engineering',
    summary: 'Think through a ticket before asking AI to implement it. Compare approaches, review a short engineering debrief, and question the parts you do not understand so that shipping code also builds your understanding of the system.',
    url: 'https://lnkd.in/p/d__C8vvM',
  },
  {
    slug: 'you-dont-know-javascript-yet',
    title: 'You Don?t Know JavaScript Yet',
    category: 'Books',
    summary: 'Reflections on Kyle Simpson?s series and the gap between writing JavaScript and understanding it. Closures, this binding, and prototypes make more sense when you look beyond syntax to how the language works.',
    url: 'https://lnkd.in/p/de2WAdhC',
  },
  {
    slug: 'everyday-problem-solving',
    title: 'Everyday practice in problem solving',
    category: 'Problem solving',
    summary: 'A reflection prompted by a freeCodeCamp article on practising small problems through games, chess, and coding challenges. Making room for activities you enjoy can keep problem solving part of your daily routine.',
    url: 'https://lnkd.in/p/daj7a5-N',
  },
];
