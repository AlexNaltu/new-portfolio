import { MdDeveloperBoard, MdEventAvailable } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { RiTimeZoneFill, RiTailwindCssFill } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

export const heroInfo = [
  {
    title: "Full-Stack Developer",
    icon: <MdDeveloperBoard size={20} />,
  },
  {
    title: "Germany",
    icon: <HiLocationMarker size={20} />,
  },
  {
    title: "UTC+01",
    icon: <RiTimeZoneFill size={20} />,
  },
  {
    title: "Available to work",
    icon: <MdEventAvailable size={20} />,
  },
  {
    title: "Gym Enthusiast",
    icon: <CgGym size={20} />,
  },
];

export const services = [
  {
    service: "Full-Stack Web App",
  },
  {
    service: "Frontend Development",
  },
  {
    service: "Backend Development",
  },
  {
    service: "Database Management",
  },
  {
    service: "Web Performance ",
  },
  {
    service: "Testing and Debugging",
  },
  {
    service: "Deployment & Hosting",
  },
];

export const skills = [
  "React",
  "Next.Js",
  "Angular",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind CSS",
  "Express.Js",
  "Node.Js",
  "Shadcn-Ui",
  "MongoDB",
  "Prisma",
  "Supabase",
  "& More Libraries",
];

export const techStacks = [
  {
    title: "Next.Js",
    icon: <SiNextdotjs size={20} />,
  },
  {
    title: "React",
    icon: <FaReact size={20} />,
  },
  {
    title: "Tailwind CSS",
    icon: <RiTailwindCssFill size={20} />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size={20} />,
  },
];

export const frameworks = [
  {
    image: "/icons/React.png",
  },
  {
    image: "/icons/Angular.png",
  },
  {
    image: "/icons/Next.png",
  },
];

export const projects = [
  {
    title: "AlxnStore",
    href: "https://alxnstore-nextjs-sanitycms.vercel.app/",
    description:
      "An E-Commerce Store for selling clothes made with Next.Js, React, Tailwind CSS and Sanity.io",
  },
  {
    title: "MyAnimeNews",
    href: "https://anime-website-lac.vercel.app/",
    description:
      "A Blog for Anime News made with Next.Js, React, Tailwind CSS and Sanity.io",
  },
  {
    title: "Adelin Visuals Studio",
    href: "https://www.adelinvisuals.art/",
    description:
      "Photography Portfolio made with Next.Js, React and Tailwind CSS",
  },
];
