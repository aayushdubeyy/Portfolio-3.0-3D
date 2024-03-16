import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  // book,
} from "../assets/icons";
import book2 from "../assets/icons/book2.svg";
import portfolio2 from "../assets/icons/hair-styles-men-svgrepo-com.svg";
import techm from "../assets/images/Tech Mahindra.png";
import drdo from "../assets/images/drdo-official-logo.png";
import sql3 from "../assets/icons/sql3.svg";
import python2 from "../assets/icons/icons8-python-94.png";
import cpp2 from "../assets/icons/C++2.svg";
import dtu from "../assets/images/dtu.png";
import nfgs from "../assets/images/ngfs.png";
import apple from "../assets/icons/apple.svg";
import ai2 from "../assets/icons/ai-svgrepo-com (2).svg";
import threejs from "../assets/icons/threejs-1.svg";
// import fm from "../assets/icons/framer-motion.svg";
import glap from "../assets/icons/gsap-greensock.svg";
export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: cpp2,
    name: "C++",
    type: "Programming Language",
  },
  {
    imageUrl: python2,
    name: "Python",
    type: "Programming Language",
  },
  {
    imageUrl: sql3,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "3D Models",
  },
  {
    imageUrl: glap,
    name: "GSAP",
    type: "Animations",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Tech Mahindra",
    company_name: "Internship",
    icon: techm,
    iconBg: "#c2bcbc",
    date: "June 2023 - August 2023",
    points: [
      "Worked as a Quality and Management Intern for Business development of our client Airtel.",
      "Learnt about Advanced Computer Networking through Networking of Airtel and gained experience in Data Analyst field.",
      "Worked in Microsoft Excel and PowerBI to make dashboards for the end of the week final reports.",
      "Reviewed over 1000+ Service Requests and reduced the Non Compliance rate by 12%.",
    ],
  },
  {
    title: "Defense Research and Development Organization",
    company_name: "Internship",
    icon: drdo,
    iconBg: "#a2d2ff", //fbc3bc
    date: "June 2022 - August 2022",
    points: [
      "Worked under an 'E' Level Scientist of DRDO.",
      "Used Softwares like Creo Parametric and SolidWorks to make 3D models of the pressure vessels and Ansys for simulation.",
      "Designed Pressure Vessels like Blind Flange and Halon holding pressurized cylinder.",
      "Learnt about the working and disposal of Halon gases.",
    ],
  },
  {
    title: "Delhi Technological University",
    company_name: "B.Tech",
    icon: dtu,
    iconBg: "#fbc3bc", //b7e4c7
    date: "October 2020 - May 2024",
    points: [
      "Currently having an aggregate CGPA of 8.83/10 with consistently gaining 9+ in 3 consecutive semesters.",
      "Completed Minor Degree in AI and Machine Learning.",
      "Collaborated with students of various branches and professors throughout to make 5+ Projects.",
      "2 Research Papers are about to be published in next few days.",
    ],
  },
  {
    title: "Class 10th and 12th",
    company_name: "New Green Field School, Saket",
    icon: nfgs,
    iconBg: "#b7e4c7",
    date: "April 2017 - April 2019",
    points: [
      "Completed 12th Class in CBSE Board with 94% in PCM and 90% in PCMB.",
      "Consistently maintained the rank of under top 5 in Class.",
      "Got CGPA of 8.6 in 10th Class under CBSE Board.",
      "Participated in many inter school competitions of Soccer and Chess.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: book2,
    theme: "btn-back-blue",
    name: "Study Notion",
    description:
      "It's a Full Stacked Ed-tech platform utilizing the MERN stack. The platform encompasses essential features such as authorization, authentication, payment integration, course management, and cloud-based media handling.",
    link: "https://study-notion-an-ed-tech-website-jm3nxsdi9.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "Promptopia",
    description:
      "It's a Full Stacked AI Prompting Tool where user can use all CRUD operations to post, copy, search and delete Prompts. It is developed with the help of Next.js",
    link: "https://promptopia-ochre-kappa.vercel.app/",
  },
  {
    iconUrl: portfolio2,
    theme: "btn-back-pink",
    name: "Portfolio with Framer Motion",
    description:
      "This is my previous Portfolio websites which uses Framer Motion for very fluid animations. It's fully responsive and visually appealing. It uses React.js, Tailwind CSS and Framer Motion.",
    link: "https://portfolio-2-0-or1lww48e-aayushdubeyys-projects.vercel.app/",
  },
  {
    iconUrl: apple,
    theme: "btn-back-black",
    name: "Apple iPhone 15 Pro",
    description:
      "This is the page of Apple iPhone 15 Pro. Developed using Three.js and Gsap. It's a 3D website of iPhone 15 Pro with some amazing animations.",
    link: "https://i-phone-15-pro.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-green",
    name: "Car Hub",
    description:
      "Car Hub is your one stop platform for buying, selling or renting a car. It is developed using Next.js and TypeScript, it is fast like a ferrari.",
    link: "https://car-hub-chi-seven.vercel.app/",
  },
  {
    iconUrl: ai2,
    theme: "btn-back-yellow",
    name: "AI Article Summarizer",
    description:
      "This website uses the power of AI to summarize the articles. It is developed using React.js and Tailwind CSS.",
    link: "https://ai-article-summarizer-gilt.vercel.app/",
  },
];
