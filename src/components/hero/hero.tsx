import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { heroInfo } from "@/lib/constants";
import { Button } from "../ui/button";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-fit">
      <Card className="p-4">
        <div className="flex">
          <CardHeader>
            <Image
              src="/icons/pfp.jpg"
              alt="hero"
              width={80}
              height={80}
              className="rounded-xl"
            />
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 items-center">
              <Image
                src="/icons/online-status.png"
                alt="online"
                width={15}
                height={15}
              />
              <p className="text-slate-300 text-xs">Available to work</p>
            </div>
            <h1 className="text-tertiary font-black text-xl mt-2">Alex</h1>
            <p className="text-tertiary text-xs">Full-Stack Developer</p>
          </CardContent>
        </div>
        <CardFooter className="flex flex-grow flex-wrap gap-x-2 gap-y-1">
          {heroInfo.map((info, i) => (
            <Badge key={i} className="flex-shrink gap-2">
              <i className="text-tertiary">{info.icon}</i>
              <h3>{info.title}</h3>
            </Badge>
          ))}
        </CardFooter>
        <div className="flex gap-3 my-4">
          <Link href="mailto:naltuok@gmail.com" className=" w-full">
            <Button className="bg-tertiary text-black w-full hover:bg-black hover:text-white transition-all duration-200 ease-linear">
              <BsPersonLinesFill size={20} /> Contact Me
            </Button>
          </Link>
          <Link
            href="https://github.com/AlexNaltu"
            target="_blank"
            className=" w-full"
          >
            <Button className="w-full bg-[#151414]">
              <FaGithub size={20} /> Github
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
