"use client";

import React from "react";
import { motion } from "framer-motion";
import {Button, Avatar, Divider} from "@nextui-org/react";
import { AuroraBackground } from "./_Components/AuroraBackground";

const HomePage = () => {
  const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = link;
    }
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
              <Avatar src="http://files.techit.win/wp-content/uploads/2024/04/381373437_878368530383292_1922118991557438707_n.jpg" className="w-40 h-40 text-large" />
            </section>
            <section className="gap-2 flex flex-col">
              <h1 className="text-2xl md:text-2xl font-regular dark:text-white text-black">Hello! My name is...</h1>
              <h1 className="text-5xl md:text-5xl font-black dark:text-white text-black">Techit Thawiang</h1>
              <Divider/>
              <h1 className=" font-regular dark:text-white text-black">Web dev and Linux are my jam.</h1>
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
