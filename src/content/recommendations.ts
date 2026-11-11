export interface Recommendation {
  name: string;
  role: string;
  relationship: string;
  date: string;
  dateLabel: string;
  paragraphs: readonly string[];
  profile: string;
}

export const recommendations: readonly Recommendation[] = [
  {
    name: 'Arsal Azeem',
    role: 'Software Engineer at Motive',
    relationship: 'Senior colleague; did not manage me directly',
    date: '2026-10-13',
    dateLabel: '13 October 2026',
    paragraphs: [
      'While working with Javeria I found her a brilliant engineer and very detail oriented.',
      'Working as an SDET javeria really accelerated the automation for team. Plus Javeria has great sense of ownership for the work she do.',
      'I would highly recommend Javeria to any company looking for Full Stack, SDET roles.',
    ],
    profile: 'https://www.linkedin.com/in/arsalazeem/',
  },
  {
    name: 'Zainab Qureshi',
    role: 'Engineering Manager, Software QA at Motive',
    relationship: 'Worked together on the same team',
    date: '2026-09-03',
    dateLabel: '3 September 2026',
    paragraphs: [
      'I had the pleasure of working with Javeria, who was an SDET on our team, and she was one of the people I could consistently count on for fast, accurate turnaround.',
      "She learned the product quickly, consistently delivering fast turnaround while building and maintaining API automation with Java and REST Assured, and browser automation with Playwright. What stood out most was her attitude: despite being relatively new to the team, she never said no to a hard problem. She'd take on unfamiliar or ambiguous challenges and consistently find a way through, without needing to be asked twice. She brought that same energy to our internal AI hackathon, where she was part of the team that built an automation bot end-to-end.",
      "Javeria combines technical depth with genuine ownership — she doesn't just report problems, she drives them to resolution. Any QA or engineering team would be lucky to have her.",
    ],
    profile: 'https://www.linkedin.com/in/zainab88/',
  },
];
