"use client";

import React from "react";
import { motion } from "framer-motion";
import {Button, Image, Divider} from "@nextui-org/react";
import { AuroraBackground } from "@/app/_Components/AuroraBackground";

const HomePage = () => {
  const handleButtonClick = (link: string) => {
    window.location.href = link;
  };
  return (
    <AuroraBackground>
      <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="w-full justify-center flex flex-col items-center">
        <section className="min-h-screen w-full px-6 flex flex-col max-w-[1024px] justify-evenly gap-1 items-start">
          <section className="flex flex-col gap-4">
            <section>
              <Image alt="email icon" height={96} width={96} src="https://images.techit.win/papirus-icon-theme-master/Papirus/22x22/apps/email.svg"></Image>
            </section>
            <section className="gap-2 flex flex-col">
              <h1 className="text-5xl md:text-5xl font-black dark:text-white text-black">Contact Me</h1>
            </section>      
          </section>
          <section className="gap-2 flex flex-row">
            <Button onClick={() => handleButtonClick("/projects")} size="md" color="primary" variant="shadow">Projects</Button>
            <Button onClick={() => handleButtonClick("/about")} size="md">About Me</Button>
          </section>
        </section>        
      </motion.div>
    </AuroraBackground>
  )
};

export default HomePage;
