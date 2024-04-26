import React from "react";
import {Button, Avatar} from "@nextui-org/react";
import { AuroraBackground } from "./_Components/AuroraBackground";

const HomePage = () => {
  return (
    <AuroraBackground>
      <div className="w-full justify-center flex flex-col items-center">
        <section className="min-h-screen w-full px-6 flex flex-col max-w-[1024px] justify-evenly gap-1 items-start">
          <section className="flex flex-col gap-4">
            <section>
              <Avatar src="http://files.techit.win/wp-content/uploads/2024/04/381373437_878368530383292_1922118991557438707_n.jpg" className="w-40 h-40 text-large" />
            </section>
            <section>
              <h1 className="text-2xl md:text-2xl font-regular dark:text-white text-black">Hello! My name is...</h1>
              <h1 className="text-5xl md:text-5xl font-black dark:text-white text-black">Techit Thawiang</h1>
            </section>      
          </section>
          <section className="gap-2 flex flex-row">
            <Button size="md" color="primary" variant="shadow">Projects</Button>
            <Button size="md">About Me</Button>
          </section>
        </section>
      </div>
    </AuroraBackground>

  )
};

export default HomePage;
