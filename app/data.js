import next_logo from "../public/next.svg";
import { FaAws, FaCss3, FaGit, FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import civic_logo from "../public/civil-liberties.png";
import chat_logo from "../public/chat.png";
import ai_quiz from "../public/answer.png";
import ai_codeReviewer from "../public/code-review.png";
import infosys from "../public/infosys_logo.png";
import sandip_university from "../public/university_logo.jpg";
import uptoskills_logo from "../public/uptoskills_logo.jpeg";
import profile from "../public/profile.jpeg";
import cookify_logo from "../public/cookify.png"
import nptel_logo from "../public/nptel_logo.png"
import letUpgrade from "../public/lets_upgrade.png" 
import nptel from "../public/certificate1.jpg"
import chatgpt from "../public/certificate2.jpg"
import infosys_certificate from "../public/certificate_infosys.jpg"
import uptoskills from "../public/certificate_uptoskills.jpg"

export const imgs = {
  profile,
  sandip_university,
}

export const experiences = [
  {
    logo: infosys,
    title: "Full Stack Intern",
    company: "Infosys Springboard",
    duration: "Aug 2025 – Oct 2025",
    link: infosys_certificate
  },
  {
    logo: uptoskills_logo,
    title: "MERN Stack Intern",
    company: "UptoSkills ",
    duration: "Jan 2025 – Apr 2025",
    link: uptoskills
  },
];

export const certification = [
  {
    logo: nptel_logo,
    title: "Cloud Computing",
    company: "NPTEL",
    duration: "Apr 2025",
    link: nptel
  },
  {
    logo: letUpgrade,
    title: "Chat GPT Bootcamp",
    company: "Lets Upgrade",
    duration: "June 2025",
    link: chatgpt
  },
];

export const projects = [
  {
    title: "Cookify – AI Recipe Generator ",
    description:
      "Cookify is an AI-powered recipe generator built with Next.js that creates personalized recipes based on ingredients and preferences.",
    techStack: ["React", "Next.js", "MongoDB", "Genmini", "Zustand","NextAuth", "Tailwind CSS"],
    website: "https://trycookify.vercel.app/",
    code: "https://github.com/codewithmanohar/cookify",
    icon: cookify_logo,
  },
    {
    title: "Civix – Citizen Engagement ",
    description:
      "A full-stack web platform enabling citizens to report issues, submit feedback, and interact with local authorities seamlessly.",
    techStack: ["React","jspdf", "MongoDB", "Express.js", "chart.js",  "framer motion","nodemailer"],
    website: "https://civixs.vercel.app/",
    code: "https://github.com/codewithmanohar/Civix-Citizen-Engagement-Dashboard",
    icon: civic_logo
  },
  {
    title: "ChatFlow – Real-Time Chat Application",
    description:
      "A real-time messaging app with secure authentication, private chats, typing indicators, and persistent chat history.",
    techStack: ["React", "Daisy UI", "Node.js", "Socket.io", "Express.js", "MongoDB", "Cloudinary"],
    website: "https://trychatflow.vercel.app",
    code: "https://github.com/codewithmanohar/ChatFlow",
    icon: chat_logo
  },
  {
    title: "QuizForge – AI Quiz Generator",
    description:
      "An AI-powered quiz app that generates programming questions based on selected language and difficulty, with a 30-second timer.",
    techStack: ["React", "Google Gemini", "Tailwind CSS", "Node.js", "Express.js",],
    website: "https://ai-quizforge.vercel.app/",
    code: "https://github.com/codewithmanohar/QuizForge",
    icon: ai_quiz
  },
  {
    title: "CodeSense – AI Code Reviewer",
    description:
      "An AI-driven code review tool that analyzes user-submitted code and returns refined, optimized, and corrected code suggestions.",
    techStack: ["React", "Node.js", "Express.js", "Prisma", "Zustand", "Google Gemini", "react-markdown", "react-toastify", "rehype-highlight", "Daisy UI"],
    website: "https://code-sence.vercel.app/",
    code: "https://github.com/codewithmanohar/CodeSence",
    icon: ai_codeReviewer
  },

];

export const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Tailwind CSS", icon: < RiTailwindCssFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "Git ", icon: <FaGitAlt /> },
  { name: "Shadcn UI", icon: <SiShadcnui /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Vercel ", icon: <IoLogoVercel /> },
  { name: "Zustand ", icon: <FaCss3 /> },
  { name: "Postman ", icon: <SiPostman /> },
  { name: "Daisy UI", icon: <FaCss3 /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Cloudinary", icon: <SiCloudinary /> },
  // { name: "Git" , icon : <FaGit />},

];