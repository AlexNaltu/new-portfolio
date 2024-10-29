import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Skills from "@/components/skills/skills";
import TechStacks from "@/components/tech-stack/tech-stack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Skills />
      <TechStacks />
    </div>
  );
}
