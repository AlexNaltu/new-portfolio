import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { frameworks, techStacks } from "@/lib/constants";
import Image from "next/image";
import { BsStack } from "react-icons/bs";

const TechStacks = () => {
  return (
    <div>
      <Card className=" pb-1 pt-3 w-full">
        <CardHeader className="text-center">
          <CardTitle className="font-black text-xl flex items-center gap-2 justify-center">
            <BsStack size={27} className="text-tertiary" /> My Tech Stacks
          </CardTitle>
          <h2 className="text-xs text-slate-300">My Favorite Tech Stacks</h2>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs mt-8">
          {techStacks.map((stack, i) => (
            <Card key={i}>
              <CardHeader className="flex-row items-center gap-3 bg-neutral-950 px-1 py-2">
                <i className="text-tertiary bg-slate-700 p-1 rounded-xl">
                  {stack.icon}
                </i>
                <CardTitle>{stack.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </CardContent>
      </Card>
      <div className="flex justify-between mt-2 gap-2">
        {frameworks.map((framework, i) => (
          <Card key={i}>
            <CardHeader className="bg-secondary px-1 py-2">
              <Image src={framework.image} width={150} height={150} alt="/" />
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
