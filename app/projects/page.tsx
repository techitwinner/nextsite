"use client";

import React, { useState, useEffect } from "react";
import {motion} from "framer-motion";
import Link from "next/link";


const ProjectPage = () => {

  const [personalProjects, setPersonalProjects] = useState(null);
  const [usedTools, setUsedTools] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [d1, d2] = await Promise.all([
          fetch('https://api.techit.win/personal-projects'),
          fetch('https://api.techit.win/things-used-to-create-this-web'),
        ]);

        const jsonData1 = await d1.json();
        const jsonData2 = await d2.json();

        setPersonalProjects(jsonData1);
        setUsedTools(jsonData2);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <motion.div className="w-full justify-center flex flex-col items-center h-[calc(100vh-63px)]">
        <p className="font-bold text-2xl">techit.win</p>
        <p>Fetching Data, Please wait...</p>
      </motion.div>
    );
  }

  const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = link;
    }
  };

  return (
    <motion.div  initial={{ filter: "blur(16    px)", opacity: 0 }}
                 animate={{ filter: "blur(0)", opacity: 1 }}
                 transition={{ duration: 0.75 }}
                 className="w-full justify-center flex flex-col items-center">
      <section className="py-8 md:py-24 min-h-screen w-full px-6 flex flex-col max-w-[1024px] gap-8 items-start">
        <h1 id="unixlike" className="text-5xl font-black">Projects</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
            {(personalProjects ?? []).map((project:any, index) => (
                <div className="card" key={index}>
                    <section className="card-header">
                        <img
                        alt={project.name}
                        height="64px"
                        src={project.logo_url}
                        width="64px"
                        />
                        <div className="flex flex-col">
                          <p className="text-md text-2xl font-black">{project.name}</p>
                          <Link href={project.homepage} className="text-sm">{project.homepage}</Link>
                        </div>
                    </section>
                    <hr/>
                  <section className="card-content gap-4">
                    <p className="text-md">{project.description}</p>
                  </section>
                  <hr/>
                  <section className="card-footer">
                    <button className="w-full ghost">{project.url2}</button>
                    <button className="w-full" onClick={() => handleButtonClick(project.homepage)}>Webpage</button>
                  </section>
                </div>
            ))}
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectPage;
