import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Salvador Gil Rosales",
  initials: "SGR",
  location: "Belfast, United Kingdom, GMT",
  locationLink: "https://www.google.com/maps/place/belfast",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a full stack engineer, I have worked on a wide range of projects, from small businesses to large enterprises. I have experience in web technologies and building products from scratch. I am a self-motivated person who loves to learn new things and share my knowledge with others.",
  avatarUrl: "https://salvagr.com/i/avatar.jpg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "salvadorgilrosales@gmail.com",
    tel: "+647288896",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/salvaoo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/salvador-gil-rosales/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/salvagr_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "EUSA University Center",
      degree: "Certificate of higher degree in web application developer",
      start: "2017",
      end: "2019",
    },
    {
      school: "La Salle School",
      degree: "Certificate of middle degree in microinformatics systems and networks",
      start: "2015",
      end: "2017",
    },
  ],
  work: [
    {
      company: "TDR Networks Limited",
      link: "https://tdrnetworks.com",
      badges: ["Remote", "On-site"],
      title: "DevOps Engineer | Full Stack Developer",
      logo: ParabolLogo,
      start: "2019",
      end: "current",
      description:
        "",
    },
    {
      company: "TDR Networks Limited",
      link: "https://tdrnetworks.com",
      badges: ["Remote"],
      title: "Web Developer",
      logo: ClevertechLogo,
      start: "2017",
      end: "2019",
      description:
        "",
    },
    {
      company: "Ayesa",
      link: "https://www.ayesa.com",
      badges: ["On-site"],
      title: "Java Developer",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "Internship as a Java programmer. I had the opportunity to work with a great team of professionals who allowed me to learn a lot in a very short time. During this time I worked on a government project.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Tailwind CSS",
    "React Native",
    "Node.js",
    "PHP",
    "Java",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ],
  projects: [
    {
      title: "Edia Healthcare",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "MySQL",
      ],
      description: "New website for Edia Healthcare company",
      logo: ConsultlyLogo,
      link: {
        label: "ediahealth.com",
        href: "https://ediahealth.com/",
      },
    },
    {
      title: "Twitch Miniplayer",
      techStack: ["Side Project", "Javascript", "Browser Extension"],
      description:
        "Browser extension that lets you watch Twitch streams in a miniplayer while the main player is playing a ad",
      logo: MonitoLogo,
      link: {
        label: "chrome web store",
        href: "https://chromewebstore.google.com/detail/twitch-miniplayer/lafajgbndkiglljfhabiamkffdcfjkfg",
      },
    },
    {
      title: "MoviAI",
      techStack: ["Side Project", "Typescript", "Next.js", "Tailwind CSS", "OpenAI"],
      description:
        "This is a movie AI recommendation website.",
      logo: MonitoLogo,
      link: {
        label: "movi-ai.vercel.app/",
        href: "https://github.com/salvaoo/moviAI",
      },
    },
    {
      title: "YouTube Retention Tool",
      techStack: ["Side Project", "Javascript", "Next.js", "Tailwind CSS", "YouTube API", "NextAuth", "Hackathon project"],
      description:
        "App that helps YouTubers create better videos by showing them which parts of their videos are the most engaging for their audience",
      logo: MonitoLogo,
      link: {
        label: "movi-ai.vercel.app/",
        href: "https://github.com/salvaoo/moviAI",
      },
    },
  ],
} as const;
