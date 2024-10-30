"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const userSchema = z.object({
  user_name: z.string(),
  user_email: z.string().email(),
  message: z.string().min(10).max(500),
});

const Contact = () => {
  const ref: any = useRef();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema) });

  const onSubmit = (data: any) => {
    emailjs
      .sendForm(
        "service_75u2gjj",
        "portofolio",
        ref.current,
        "xyrIQ7Ma4elNYu2Hs"
      )
      .then((res) => console.log("Success", res))
      .catch((err) => console.log("Error", err));

    router.push("/success");
  };

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-tertiary text-black hover:text-white transition-all duration-200 ease-linear">
            Contact Me
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-secondary">
          <DialogTitle className="text-2xl font-black text-tertiary">
            Contact Me
          </DialogTitle>
          <form
            ref={ref}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="user_name" className="font-black">
                Full Name
              </label>
              <Input {...register("user_name")} placeholder="Your Name" />
              {errors.user_name && (
                <span>{errors.user_name.message as ReactNode}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="user_email" className="font-black">
                Email Address
              </label>
              <Input
                {...register("user_email")}
                placeholder="example: myemail@gmail.com"
              />
              {errors.user_name && (
                <span>{errors.user_name.message as ReactNode}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-black">
                How can I help you?
              </label>
              <Textarea
                {...register("message")}
                placeholder="Your Name"
                rows={5}
              />
              {errors.user_name && (
                <span>{errors.message!.message as ReactNode}</span>
              )}
            </div>
            <Button
              className="text-black bg-tertiary hover:text-white"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
