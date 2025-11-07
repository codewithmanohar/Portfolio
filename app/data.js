import next_logo from "../public/next.svg";
import { FaCss3, FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
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
import profile from "../public/profile.jpg";

export const imgs = {
    profile, 
    sandip_university
}


export const experiences = [
        {
            logo: infosys,
            title: "Full Stack Intern",
            company: "Infosys Springboard",
            duration: "Aug 2025 – Oct 2025",
        },
        {
            logo: uptoskills_logo,
            title: "MERN Stack Intern",
            company: "UptoSkills ",
            duration: "Jan 2025 – Apr 2025",
        },
        // {
        //     logo: "/logos/freelance.png",
        //     title: "Freelance",
        //     company: "Building full stack apps",
        //     duration: "2024 – Early 2025",
        // },
        // {
        //     logo: "/logos/stealth.png",
        //     title: "Full Stack Development – TA",
        //     company: "Stealth Startup",
        //     duration: "Feb 2024 – June 2024",
        // },
    ];

export const projects = [
  {
    title: "Civix – Citizen Engagement Dashboard",
    description:
      "A full-stack web platform enabling citizens to report issues, submit feedback, and interact with local authorities seamlessly.",
    techStack: ["React", "Node.js", "MongoDB" , "Express.js", "react-toastify", "tailwind css" , "chart.js", "jspdf" , "framer motion", "papaparse" , "nodemailer"],
    website: "https://civix-yjhv.onrender.com/",
    code: "https://github.com/codewithmanohar/Civix-Citizen-Engagement-Dashboard",
    icon : civic_logo 
  },
  {
    title: "ChatFlow – Real-Time Chat Application",
    description:
      "A real-time messaging app with secure authentication, private chats, typing indicators, and persistent chat history.",
    techStack: ["React", "Daisy UI", "Node.js", "Socket.io" , "Express.js" , "MongoDB" , "React-toast", "Cloudinary"],
    website: "https://full-stack-chat-application-6kfg.onrender.com",
    code: "https://github.com/codewithmanohar/Full-Stack-Chat-Application",
    icon : chat_logo 
  },
  {
    title: "QuizForge – AI Quiz Generator",
    description:
      "An AI-powered quiz app that generates programming questions based on selected language and difficulty, with a 30-second timer.",
    techStack: ["React", "Google Gemini", "Tailwind CSS", "Node.js" , "Express.js" ,  ],
    website: "https://quizforge-demo.vercel.app",
    code: "https://github.com/codewithmanohar/AI_Quiz",
    icon : ai_quiz 
  },
  {
    title: "CodeSense – AI Code Reviewer",
    description:
      "An AI-driven code review tool that analyzes user-submitted code and returns refined, optimized, and corrected code suggestions.",
    techStack: ["React", "Node.js", "Express.js", "Prisma", "Zustand", "Google Gemini" , "react-markdown" , "react-toastify", "rehype-highlight" , "Daisy UI" ],
    website: "https://codesense-demo.vercel.app",
    code: "https://github.com/codewithmanohar/AI-Code-Reviwer",
    icon : ai_codeReviewer 
  },
  
];


export const skills = [
    { name: "React.js", icon : <FaReact /> },
    { name: "JavaScript", icon : <IoLogoJavascript />},
    { name: "Next.js", icon : <RiNextjsFill />},
    { name: "Tailwind CSS" , icon : < RiTailwindCssFill /> },
    { name: "Node.js" , icon :  <FaNodeJs />},
    { name: "Express.js", icon : <SiExpress /> },
    { name: "MongoDB", icon : <DiMongodb /> },
    { name: "Shadcn UI" , icon : <SiShadcnui /> },
    { name: "GitHub" , icon : <FaGithub /> },
    { name: "Docker" , icon : <FaDocker /> },
    { name: "HTML" , icon : <FaHtml5 />},
    { name: "Git " ,icon : <FaGitAlt />},
    { name: "Vercel " , icon : <IoLogoVercel /> },
    { name: "CSS" , icon : <FaCss3 />},
  { name: "Zustand ", icon : <FaCss3 />},
  { name: "Postman ", icon : <SiPostman />},
  { name: "Daisy UI" , icon : <FaCss3 />},
  { name: "Cloudinary", icon : <SiCloudinary />},
  { name: "Figma" , icon : <FaFigma /> },
];