import AboutMe from "@/components/about/about-me";
import Collaboration from "@/components/collaboration/collaboration";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Services from "@/components/services/services";
import Skills from "@/components/skills/skills";
import TechStacks from "@/components/tech-stack/tech-stack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 min-[1650px]:grid-cols-custom min-[1650px]:px-6  gap-2 px-2 py-2 sm:py-6">
      <div className="flex flex-col gap-2 min-w-0 overflow-hidden">
        <Hero />
        <Services />
        <Skills />
      </div>
      <div className="flex flex-col gap-2 min-w-0 overflow-hidden">
        <TechStacks />
        <Collaboration />
      </div>
      <div className="flex flex-col gap-2 min-w-0 overflow-hidden">
        <Projects />
        <AboutMe />
      </div>
    </div>
  );
}
