"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { imgs } from "@/app/data";
export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify- text-center sm:min-h-screen px-4 py-32 sm:py-0 sm:pt-40">
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="h-20 w-20 mb-6">
          <AvatarImage className="bg-" src='/profile.jpeg' alt="logo" />
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
      </motion.div>

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
        Hi, I'm Manohar 
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl mt-4 text-muted-foreground text-sm sm:text-base">
        Curious developer who learns fast, adapts quickly, and builds with purpose. Working with Next.js and the MERN stack, passionate about web development.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button className="px-6 py-2 rounded-full" asChild>
          <a href="https://drive.google.com/file/d/1GkEbY6S5Z6XGbl0yxdNqmYuAbWNM9dEt/view?usp=sharing" target="_blank">Resume</a>
        </Button>
        <Button
          variant="secondary"
          className="px-6 py-2 rounded-full"
          asChild
        >
          <a href="#contact">Get in touch</a>
        </Button>
      </div>

    </section>
  );
}
