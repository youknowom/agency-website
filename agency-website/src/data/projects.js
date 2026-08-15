import codeTreeImg from "../assets/images/code-tree.png";
import aiVerifySnapImg from "../assets/images/ai-verify-snap.png";
import eventOrgImg from "../assets/images/event-org.png";

export const projects = [
  {
    title: "CodeTree",
    category: "EdTech Platform",
    description:
      "An interactive coding platform with a live editor, gamified learning paths, and structured courses covering HTML, CSS, JavaScript, React, Python, and Gen AI.",
    stat: "Strategy · UI/UX · Next.js",
    image: codeTreeImg,
    technologies: ["Strategy", "UI/UX", "Next.js"],
    liveUrl: "https://code-tree.vercel.app/",
    githubUrl: "https://github.com/youknowom/code-Tree",
  },
  {
    title: "AI Verify Snap",
    category: "AI / SaaS Product",
    description:
      "An AI-powered deepfake detection and image forensic analysis platform featuring dual-stream ResNet, ELA heatmaps, and enterprise-grade identity protection.",
    stat: "Design · AI/ML · Next.js",
    image: aiVerifySnapImg,
    technologies: ["Design", "AI/ML", "Next.js"],
    liveUrl: "https://ai-verify-snap.vercel.app/",
    githubUrl: "https://github.com/youknowom/ai-verify-snap",
  },
  {
    title: "Spott",
    category: "Event Management Platform",
    description:
      "A modern all-in-one event management platform to create, manage, and scale events with ticket management, analytics dashboards, and automated notifications.",
    stat: "Strategy · Design · Development",
    image: eventOrgImg,
    technologies: ["Strategy", "Design", "Development"],
    liveUrl: "https://spott-event-org.vercel.app/",
    githubUrl: "https://github.com/youknowom/event-org",
  },
];

