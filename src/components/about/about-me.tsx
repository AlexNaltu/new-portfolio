import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsInfoCircleFill } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div>
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-black text-xl">
            <BsInfoCircleFill size={20} className="text-tertiary" /> About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 text-sm">
            I am a 19-year-old full-stack developer from Germany with over 1.5
            years of experience building web applications. I love working with
            technologies like React, Next.js, Angular, and various CMS
            platforms. Fluent in German, English, and Romanian, I am passionate
            about learning new technologies and creating impactful web
            applications.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;
