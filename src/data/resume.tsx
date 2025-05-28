import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Cleopatra Ropot",
  initials: "CR",
  url: "https://kleopatraropot.io",
  location: "Chisinau, Republic of Moldova",
  locationLink: "https://www.google.com/maps/place/moldova",
  description:
    "Frontend developer passionate about building beautiful, useful interfaces. I love clean code, smart design, and working with kind people.",
  summary:
    "In 2021, I realized I was deeply drawn to frontend development — not just as a skill, but as a way to build things that feel right. What started as curiosity turned into full commitment. Since then, I’ve [built real-world web apps](/#projects) using **AngularJS**, **React**, **Next.js**, and **Tailwind**, contributed to internal tools and admin dashboards, and [worked closely with designers, backend devs, and PMs to ship features](/#collaborations). I care about clean code, smart design systems, and **writing interfaces that are both beautiful and functional**. I bring **speed**, **clarity**, and a strong sense of ownership into every project. Currently, I’m focused on developing scalable interfaces and [growing with teams that value good architecture and great energy](/#contact).",
  avatarUrl: "/me.png",
  skills: [
    "AngularJS",
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "HTML5",
    "CSS / SCSS",
    "Tailwind CSS",
    "REST APIs",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "cleopatraropot@gmail.com",
    tel: "+37367108184",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cleopatraropotgitprojects",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cleopatra-ropot",
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/RopotCleopatra",
        icon: Icons.facebook,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=cleopatraropot@gmail.com&su=Hello%20Cleopatra&body=Hi%20Cleopatra,%0D%0A%0D%0AI%20wanted%20to%20get%20in%20touch...",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Romanian Government Platform",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/peeac.png",
      start: "October 2024",
      end: "May 2025",
      description:
        "I worked on both the Front Office (public-facing) and Back Office (internal) platforms for managing social support tickets. Although the project was officially in maintenance, I implemented numerous new features, refined UI components, and handled complex REST API integrations. Using Next.js, and Tailwind CSS, I built responsive layouts, improved accessibility, and contributed to architecture decisions to keep the system clean and scalable.",
    },
    {
      company: "Latercut",
      badges: [],
      href: "https://www.latercut.com/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/latercut.png",
      start: "August 2023",
      end: "Present (on-call basis)",
      description:
        "I built the core UI for an AI-based video editing tool using AngularJS and Tailwind CSS. My work included translating Figma designs into reusable components, adding animations, and handling dynamic layout behavior. I optimized performance for visual rendering and collaborated closely with designers and backend devs to ensure a smooth, responsive user experience aligned with AI processing flows.",
    },
    {
      company: "Codtal",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/codtal.png",
      start: "June 2022",
      end: "April 2023",
      description:
        "At Codtal, I helped build a learning platform for developers, starting with Angular and later migrating to React. I contributed to UI structure, refactored components, and supported the transition with cleaner, modular code using Tailwind CSS. Working in a small team, I collaborated on feature planning, participated in sprint delivery, and learned how to work effectively in a fast-paced startup environment focused on MVPs and rapid iteration.",
    },
  ],
  projects: [
    {
      title: "To-Do App",
      href: "https://to-do-app-blush-nine.vercel.app/",
      dates: "3 March 2025 - 10 March 2025",
      active: true,
      description:
        "Designed a fun productivity tool: Navigate daily tasks with previous/next flow and clean task control — built with real use in mind.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "React Hook Form",
        "Yup",
        "REST API",
        "Lucide React",
        "GitHub",
        "Custom Hooks",
      ],
      links: [
        {
          type: "Website",
          href: "https://to-do-app-blush-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cleopatraropotgitprojects/to-do-list-fe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/demo/demo-to-do.mov",
    },
    {
      title: "Admin Dashboard",
      href: "https://admin-dashboard-ui-weld.vercel.app/dashboard",
      dates: "13 March 2025 - 20 March 2025",
      active: true,
      description:
        "Built a clean and focused admin dashboard: Track users, revenue, and orders with mocked data — designed for fast insights and simple extendability.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Zustand",
        "React Hook Form",
        "Yup",
        "Lucide React",
        "Mock Data",
        "GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://admin-dashboard-ui-weld.vercel.app/dashboard",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cleopatraropotgitprojects/admin-dashboard-ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/demo/demo-admin-dashboard.mov",
    },
    {
      title: "Quiz App",
      href: "https://quiz-app-three-tawny.vercel.app/",
      dates: "22 March 2025 - 1 April 2025",
      active: true,
      description:
        "A playful quiz app with 3 smart categories: Knowledge, Entertainment, and Psychology. Choose a topic, test your mind, and discover something new — all in one smooth interface.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Zustand",
        "React Hook Form",
        "Yup",
        "Zustand",
        "Lucide React",
        "Mock Data",
        "GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://quiz-app-three-tawny.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/demo/demo-quiz-app.mov",
    },
    // {
    //   title: "Business Portfolio",
    //   href: "https://automatic.chat",
    //   dates: "10 May 2025 - 22 May 2025",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  reviews: [
    {
      name: "Ovidiu Popescu",
      role: "Project Manager",
      review:
          "It was truly a pleasure working together. You played a key role in the project’s front-end, and your professionalism showed at every stage. You delivered clean, well-structured code and consistently came up with fast, effective solutions tailored to the team’s needs. On top of that, communication with you was excellent — clear, timely, and collaboration-focused. Thank you for the great work — I genuinely hope we get to work together again!",
      project: "the Romanian Government Platform",
      image: "",
      linkedIn: "",
    },
    {
      name: "Gabriel Craiu",
      role: "Backend Developer",
      review:
          "Thank you for this successful collaboration. You showed efficiency, energy, initiative, flexibility, clear communication, and reliability. You were a key part of the project when it came to the user interface. Wishing you all the best moving forward — maybe we’ll work together again someday!",
      project: "the Romanian Government Platform",
      image: "",
      linkedIn: "",
    },
    {
      name: "Iustin Tanase",
      role: "DB Engineer",
      review:
        "I’ve said it more than once: this was a great collaboration. I truly appreciated your openness to understanding the project’s needs, your persistence in getting tasks done, and your genuine effort to grasp the business logic behind it all. The calm, thoughtful way you worked with others — always in the interest of the project — really stood out. Congratulations, and I’d love to work together again in the future!",
      project: "the Romanian Government Platform",
      image: "",
      linkedIn: "https://www.linkedin.com/in/iustin-tanase-85bba43/",
    },
    {
      name: "Claudiu Gaspar",
      role: "Tester",
      review:
        "It was nice working with you. Your professionalism, attention to detail, and clear communication contributed significantly to the smooth progress of everything. The collaboration was efficient throughout. I’d be happy to work together again in the future.",
      project: "the Romanian Government Platform",
      image: "",
      linkedIn: "",
    },
    {
      name: "Vasile Ropot",
      role: "Fullstack Developer",
      review:
        "It was a great collaboration. You adapted quickly to the project, came up with clear solutions, and worked in an organized way, which made things easier for everyone. Communication was easy, and your initiative showed up exactly when and where it was needed. I’d be happy to work together again.",
      project: "Latercut",
      image: "/vasile-ropot.jpg",
      linkedIn: "https://www.linkedin.com/in/ropotvs/",
    },
    {
      name: "Dacian Rusu",
      role: "Frontend Developer",
      review:
        "I really enjoyed working with you. You picked things up fast and never backed down from a tricky task. Even when I helped you out here and there, it never felt like I had to step in — you were always trying to figure things out on your own first, and when you asked for help, it was always thoughtful and to the point. You became more solid with every sprint, and honestly, I ended up learning from you too. It was a great collaboration — hope we get to do it again sometime.",
      project: "Latercut",
      image: "/dacian-rusu.jpg",
      linkedIn: "https://www.linkedin.com/in/dacian-rusu/",
    },
    {
      name: "Ina Ropot",
      role: "Tester",
      review:
        "I had the pleasure of working with Cleopatra, she was always reliable, collaborative, and proactive. She fixed bugs fast and made sure they didn’t return. Her clear communication and non-defensive attitude made collaboration easy. I appreciated that she cared about doing things right, not just getting them done.",
      project: "Codtal",
      image: "/ina-ropot.jpg",
      linkedIn: "https://www.linkedin.com/in/ina-stratulat/",
    },
    {
      name: "Dacian Rusu",
      role: "Frontend Developer",
      review:
        "I remember when you joined — you were still learning the ropes, but you picked things up fast. You asked for help when needed, but also took the time to research and try things on your own. Your code got cleaner with each task, and you were always open to feedback. It was cool to see your progress from sprint to sprint.",
      project: "Codtal",
      image: "/dacian-rusu.jpg",
      linkedIn: "https://www.linkedin.com/in/dacian-rusu/",
    },
    {
      name: "Vasile Ropot",
      role: "Fullstack Developer",
      review:
          "You were just starting out, but your curiosity and willingness to figure things out really stood out. You didn’t know everything (which was expected), but you asked smart questions and followed through. You weren’t afraid to take ownership of tasks, even if they were outside your comfort zone. That mindset is more valuable than memorizing syntax.",
      project: "Codtal",
      image: "/vasile-ropot.jpg",
      linkedIn: "https://www.linkedin.com/in/ropotvs/",
    },
    {
      name: "Victoria Gatcan",
      role: "UI/UX Designer",
      review:
        "I knew Cleopatra was still learning front-end, but even as a junior she cared about the visual side. She tried to follow the designs closely and always asked when something wasn’t clear. Was respectful of the design process, and that matters a lot. I appreciated her openness and effort to improve every week.",
      project: "Codtal",
      image: "/victoria-gatcan.jpg",
      linkedIn: "https://www.linkedin.com/in/victoria-gatcan/",
    },
  ],
} as const;
