import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { MdBusinessCenter } from "react-icons/md";
import { Button } from "../ui/button";
import Contact from "../contact/contact";

const Collaboration = () => {
  return (
    <div>
      <Card className="px-4 py-1 text-center">
        <CardHeader>
          <MdBusinessCenter size={40} className="text-tertiary mx-auto " />
        </CardHeader>
        <CardContent>
          <h1 className="font-black">Let &apos; s Collaborate</h1>
          <p className="mb-5 text-xs text-slate-300">
            Building Success Through Collaboration
          </p>
          <div className="flex flex-col gap-2">
            <Contact />
            <Link href="/portfolio.pdf" download="Portfolio" target="_blank">
              <Button className="w-full bg-[#151414]">Download CV</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Collaboration;
