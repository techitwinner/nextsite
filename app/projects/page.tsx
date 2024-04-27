"use client";

import React, { useState, useEffect } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Checkbox, Chip} from "@nextui-org/react";


const ResourcesPage = () => {

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
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const HandleButtonClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="w-full justify-center flex flex-col items-center">
      <section className="py-24 min-h-screen w-full px-6 flex flex-col max-w-[1024px] gap-8 items-start">
        <h1 id="unixlike" className="text-5xl font-black">Recommended UNIX-like Distros</h1>
        <div className="grid grid-cols-1 gap-4">
            {personalProjects.map((project, index) => (
                <div className="w-full" key={index}>
                    <section className="py-6 flex flex-col items-start gap-3">
                        <Image
                        alt={project.name}
                        height={96}
                        radius="sm"
                        src={project.logo_url}
                        width={96}
                        />
                        <div className="flex flex-col">
                          <p className="text-md text-4xl font-black">{project.name}</p>
                          <Link href={project.homepage} underline="hover" isExternal className="text-small text-default-500">{project.homepage}</Link>
                        </div>
                    </section>
                    <Divider/>
                    
                    <section className="py-6">
                        <p>{project.description}</p>
                    </section>
                    <Divider/>
                    <section>
                      <section className="py-6 flex flex-col gap-2 justify-center h-full">
                        <section className="gap-2 flex flex-row">
                          <p><strong>Recommended for:</strong></p>
                            {project.type.map((type, index) => (
                              <Chip size="sm" key={index}>{type}</Chip>
                            ))}
                        </section>
                        <section className="flex flex-row items-center gap-2">
                          <p><strong>Community Support:</strong></p><Checkbox isDisabled color="primary" defaultSelected={dist.community_support ? true : false}></Checkbox>  
                        </section>
                          <Link
                            isExternal
                            showAnchorIcon
                            href={dist.homepage}
                          >
                            Visit {dist.name}
                          </Link>
                      </section>
                    </section>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
