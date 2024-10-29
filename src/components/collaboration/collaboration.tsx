import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { MdBusinessCenter } from "react-icons/md";
import { Button } from "../ui/button";
import { BsPersonLinesFill } from "react-icons/bs";

const Collaboration = () => {
  return (
    <div>
      <Card className="px-4 py-1 text-center">
        <CardHeader>
          <MdBusinessCenter size={40} className="text-tertiary mx-auto " />
        </CardHeader>
        <CardContent>
          <h1 className="font-black">Let's Collaborate</h1>
          <p className="mb-5 text-xs text-slate-300">
            Building Success Through Collaboration
          </p>
          <div className="flex flex-col gap-2">
            <Link href="mailto:naltuok@gmail.com">
              <Button className="w-full bg-tertiary text-black hover:text-white">
                <BsPersonLinesFill size={20} /> Contact Me
              </Button>
            </Link>
            <Link href="">
              <Button className="w-full bg-[#151414]">Download CV</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Collaboration;
