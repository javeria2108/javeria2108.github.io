export const projectCategories = ['All Projects', 'Web Apps', 'AI & ML', 'Embedded & ML'] as const;
export type ProjectCategory = Exclude<typeof projectCategories[number], 'All Projects'>;
export interface CaseSection { title: string; paragraphs?: readonly string[]; bullets?: readonly string[] }
export interface Project {
  name: string;
  slug: string;
  art: 'books' | 'orbit' | 'signal' | 'moon';
  number: string;
  category: ProjectCategory;
  description: string;
  technologies: readonly string[];
  organization?: string;
  featured?: boolean;
  repository?: string;
  demo?: string;
  flow?: readonly string[];
  sections: readonly CaseSection[];
}

// Personal projects with public GitHub repositories verified through the GitHub plugin.
export const projects: readonly Project[] = [
  {
    "name": "BookCircle",
    "slug": "bookcircle",
    "number": "01",
    "art": "books",
    "category": "Web Apps",
    "description": "A book-club platform with role-based membership, private-club join requests, and Socket.IO chat.",
    "technologies": [
      "Next.js 16",
      "Express 5",
      "TypeScript",
      "PostgreSQL",
      "Neon",
      "Prisma",
      "Socket.IO",
      "JWT",
      "Tailwind CSS v4"
    ],
    "repository": "https://github.com/javeria2108/TheBookClub_frontend",
    "flow": [
      "Next.js interface",
      "Express REST API",
      "Prisma models",
      "PostgreSQL"
    ],
    "sections": [
      {
        "title": "The application",
        "paragraphs": [
          "BookCircle brings book-club administration, membership, and conversations into one full-stack application. The interface uses a responsive dark editorial design."
        ]
      },
      {
        "title": "Implemented features",
        "bullets": [
          "JWT authentication and book-club creation, viewing, updating, and deletion.",
          "OWNER, MODERATOR, and MEMBER roles, with private-club join requests and approval/rejection workflows.",
          "Members panel, cover uploads, club settings, and pagination.",
          "Club chat rooms and messages using Socket.IO."
        ]
      },
      {
        "title": "Data & authorization",
        "paragraphs": [
          "The relational model includes User, BookClub, ClubMember, ClubJoinRequest, ChatRoom, and ChatMessage. ClubMember and ClubJoinRequest each enforce a unique userId/clubId combination. The membership lifecycle and role-based authorization are central engineering concerns."
        ]
      }
    ],
    "featured": true,
    "demo": "https://the-book-club-frontend.vercel.app"
  },
  {
    "name": "SmartDocs",
    "slug": "smartdocs",
    "number": "02",
    "art": "orbit",
    "category": "AI & ML",
    "description": "A collaborative document editor with multi-user presence, comments, access roles, and Gemini-assisted features.",
    "technologies": [
      "Next.js",
      "Liveblocks",
      "Lexical",
      "Gemini"
    ],
    "repository": "https://github.com/javeria2108/SmartDocs",
    "sections": [
      {
        "title": "The application",
        "paragraphs": [
          "SmartDocs combines rich-text editing and collaboration in a shared document workflow. AI assistance is integrated into the editor rather than exposed as a separate chatbot."
        ]
      },
      {
        "title": "Implemented features",
        "bullets": [
          "Real-time collaborative editing and document synchronization.",
          "Multi-user presence and comments.",
          "Access roles and permissions.",
          "AI-assisted document features using Gemini."
        ]
      },
      {
        "title": "Engineering focus",
        "paragraphs": [
          "Liveblocks supports the collaborative experience while Lexical provides the rich-text editor. The work brings together shared application state, presence, access control, and LLM integration within an existing product workflow."
        ]
      }
    ],
    "featured": true,
    "demo": "https://docs-clone-green.vercel.app"
  },
  {
    "name": "Smart AI Support Assistant",
    "slug": "smart-ai-support-assistant",
    "number": "03",
    "art": "signal",
    "category": "AI & ML",
    "description": "Document-grounded support answers using PDF/TXT ingestion, retrieval, FastAPI, and Gemini.",
    "technologies": [
      "Python",
      "FastAPI",
      "Next.js",
      "Gemini API",
      "RAG"
    ],
    "repository": "https://github.com/javeria2108/Smart-AI-Support-Assistant",
    "flow": [
      "PDF / TXT",
      "Document ingestion",
      "Retrieve relevant material",
      "Gemini response",
      "Next.js interface"
    ],
    "sections": [
      {
        "title": "The problem",
        "paragraphs": [
          "Support responses need to use the information provided in documents. A retrieval-and-generation workflow connects a question to relevant material before producing a response."
        ]
      },
      {
        "title": "Implementation",
        "bullets": [
          "REST APIs for document ingestion and question answering.",
          "PDF and TXT document processing.",
          "Retrieval of relevant document information.",
          "Context-aware support responses grounded in retrieved material.",
          "A Next.js frontend connected to a Python/FastAPI backend and Gemini."
        ]
      },
      {
        "title": "Engineering focus",
        "paragraphs": [
          "The project centers on document ingestion, retrieval, API design, and frontend/backend integration, with responses grounded in the supplied material."
        ]
      }
    ],
    "featured": true,
    "demo": "https://smart-ai-support-assistant-umber.vercel.app"
  },
  {
    "name": "Wearable Posture Monitoring",
    "slug": "wearable-posture-monitoring",
    "number": "04",
    "art": "orbit",
    "category": "Embedded & ML",
    "organization": "Final-year project",
    "description": "An embedded-to-mobile posture classifier combining ESP32 sensors, a Python inference service, and React Native.",
    "technologies": [
      "ESP32",
      "ESP-NOW",
      "MPU6050",
      "React Native",
      "Expo",
      "Python",
      "Flask",
      "scikit-learn",
      "Random Forest"
    ],
    "repository": "https://github.com/javeria2108/FYP-APP",
    "flow": [
      "IMU & flex sensors",
      "ESP32 / ESP-NOW",
      "Flask inference",
      "React Native app"
    ],
    "sections": [
      {
        "title": "The system",
        "paragraphs": [
          "My Computer Engineering final-year project combined embedded hardware, sensor communication, machine-learning inference, and a mobile interface to classify posture and flag sustained poor posture."
        ]
      },
      {
        "title": "Implementation",
        "bullets": [
          "Three ESP32 devices communicating through ESP-NOW.",
          "Two MPU6050 IMU sensors and a flex sensor.",
          "Approximately 10,000 sensor samples used in the project.",
          "A Random Forest classifier with a Flask inference service.",
          "A React Native/Expo application connected to the system, with an alert after approximately 30 seconds of poor posture."
        ]
      },
      {
        "title": "Reported performance & limits",
        "paragraphs": [
          "The project reported approximately 92% classification accuracy. The dataset split and evaluation methodology are not documented here, so this number should be read as reported project performance. The system is not presented as clinically validated or as a medical device."
        ]
      },
      {
        "title": "Engineering focus",
        "paragraphs": [
          "The work connected sensor-data processing and inference with mobile/backend behavior. The linked repository contains the mobile application; it is not described as the complete hardware and inference codebase."
        ]
      }
    ],
    "featured": false
  },
  {
    "name": "Drive N Ride",
    "slug": "drive-n-ride",
    "number": "05",
    "art": "orbit",
    "category": "Web Apps",
    "description": "A ride-booking application with driver/passenger dashboards and role-based backend workflows.",
    "technologies": [
      "Next.js",
      "API routes",
      "Prisma",
      "PostgreSQL"
    ],
    "repository": "https://github.com/javeria2108/drive-n-ride",
    "sections": [
      {
        "title": "The application",
        "paragraphs": [
          "Drive N Ride connects authentication and ride booking with separate driver and passenger dashboards. Next.js API routes and Prisma connect the interfaces to PostgreSQL-backed workflows."
        ]
      },
      {
        "title": "Engineering focus",
        "bullets": [
          "Role-based backend workflows.",
          "Booking state and relational persistence.",
          "Coordinating frontend screens with backend state."
        ]
      }
    ],
    "featured": false
  },
  {
    "name": "Promptopia",
    "slug": "promptopia",
    "number": "06",
    "art": "books",
    "category": "Web Apps",
    "description": "An authenticated prompt-sharing application with profiles, CRUD workflows, search, and discovery.",
    "technologies": [
      "Next.js",
      "MongoDB"
    ],
    "repository": "https://github.com/javeria2108/Prompts-Sharing-for-AI-tools",
    "sections": [
      {
        "title": "The application",
        "paragraphs": [
          "Promptopia provides a place to publish and discover prompts for AI tools. The supplied architecture is Next.js and MongoDB; no separate Express backend is claimed."
        ]
      },
      {
        "title": "Implemented features",
        "bullets": [
          "Authentication and user profiles.",
          "Creating, viewing, updating, and deleting prompts.",
          "Prompt search, discovery, and sharing."
        ]
      }
    ],
    "featured": false,
    "demo": "https://promptopia-blush-five.vercel.app"
  },
  {
    "name": "Real-Time Chat",
    "slug": "real-time-chat",
    "number": "07",
    "art": "signal",
    "category": "Web Apps",
    "description": "Live messaging, authentication, and presence using Firebase’s real-time cloud synchronization.",
    "technologies": [
      "Next.js",
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "Chakra UI"
    ],
    "repository": "https://github.com/javeria2108/Full-Stack-Chat-App-with-NextJs-Firebase-and-ChakraUI",
    "sections": [
      {
        "title": "The application",
        "paragraphs": [
          "A full-stack chat application with live messaging, authenticated users, presence tracking, and real-time cloud synchronization."
        ]
      },
      {
        "title": "Engineering focus",
        "paragraphs": [
          "The application connects event-driven interface updates with Firestore subscriptions, message persistence, and Firebase Authentication."
        ]
      }
    ],
    "featured": false,
    "demo": "https://full-stack-chat-app-with-next-js-firebase-and-chakra-ui.vercel.app"
  },
  {
    "name": "Quran World",
    "slug": "quran-world",
    "number": "08",
    "art": "moon",
    "category": "Web Apps",
    "description": "Quran recitations, multilingual translations, and searchable content in a responsive React application.",
    "technologies": [
      "React",
      "Redux",
      "Tailwind CSS"
    ],
    "repository": "https://github.com/javeria2108/Quran-app-with-React-and-Redux",
    "sections": [
      {
        "title": "The application",
        "paragraphs": [
          "Also known as Quran Quill, Quran World brings recitations, multilingual translations, and searchable content into a responsive interface."
        ]
      },
      {
        "title": "Engineering focus",
        "bullets": [
          "API integration for content.",
          "Redux state management.",
          "Audio and content interfaces across screen sizes."
        ]
      }
    ],
    "featured": true,
    "demo": "https://quran-quill.vercel.app"
  }
];

export const featuredProjects = projects.filter(project => project.featured);
