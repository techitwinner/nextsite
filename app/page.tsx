import React from 'react';
import {Button, ButtonGroup} from "@nextui-org/react";                         

const Home = () => (
  <main className="w-full justify-center flex flex-col items-center">
    <div className="w-full min-h-screen px-6 flex flex-col max-w-[1024px] justify-evenly gap-1 items-center">
      <section>
        <h1 className="text-2xl md:text-2xl font-regular">Hello! My name is...</h1>
        <h1 className="text-6xl md:text-8xl font-black">Techit Thawiang</h1>
        <h1 className="text-6xl md:text-8xl font-black text-b1 text-black">>_</h1>
      </section>
      <section className="gap-2 flex flex-row">
          <Button size="lg" color="primary" variant="shadow">Projects</Button>
          <Button size="lg">About Me</Button>
      </section>
    </div>
  </main>
);

export default Home;
