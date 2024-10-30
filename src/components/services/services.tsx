import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MdMiscellaneousServices } from "react-icons/md";
import Marquee from "../ui/marquee";

const firstRow = services.slice(0, services.length / 2);
const secondRow = services.slice(services.length / 2);

const ReviewCard = ({ service }: { service: string }) => {
  return (
    <figure
      className={cn(
        "relative w-56 cursor-pointer overflow-hidden p-4 rounded-lg",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
        // dark styles
      )}
    >
      <div className="flex flex-row items-center gap-2  w-fit px-4 rounded-full h-full py-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium  text-tertiary">
            {service}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

const Services = () => {
  return (
    <div>
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center font-black text-xl">
            <MdMiscellaneousServices size={27} className="text-tertiary" />{" "}
            Services
          </CardTitle>
          <h2 className="text-xs text-slate-300">
            Clean code, smart design, and seamless user experiences
          </h2>
        </CardHeader>
        <CardContent>
          <div className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent my-1">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:20s] mt-[-2rem]"
            >
              {secondRow.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent dark:from-background"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Services;
