import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/constants";
import { SiHyperskill } from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full">
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="font-black text-xl flex items-center gap-2">
            <SiHyperskill size={27} className="text-tertiary" /> Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-grow flex-wrap gap-3 text-xs mt-2">
          {skills.map((skill, i) => (
            <h1 key={i} className="flex-shrink">
              {skill}
            </h1>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
