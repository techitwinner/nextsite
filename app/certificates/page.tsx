"use client";

import React, { useState, useEffect } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Checkbox, Chip} from "@nextui-org/react";


const ProjectPage = () => {

  const [personalCertificates, setPersonalCertificates] = useState(null);
  const [usedTools, setUsedTools] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [d1, d2] = await Promise.all([
          fetch('https://api.techit.win/personal-certificates'),
          fetch('https://api.techit.win/things-used-to-create-this-web'),
        ]);

        const jsonData1 = await d1.json();
        const jsonData2 = await d2.json();

        setPersonalCertificates(jsonData1);
        setUsedTools(jsonData2);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = link;
    }
  };

  return (
    <div className="w-full justify-center flex flex-col items-center">
      <section className="py-24 min-h-screen w-full px-6 flex flex-col max-w-[1024px] gap-8 items-start">
        <h1 id="unixlike" className="text-5xl font-black">Projects</h1>
        <div className="grid grid-cols-1 gap-4">
            {personalCertificates.map((cert, index) => (
                <div className="w-full" key={index}>
                    <section className="py-6 flex flex-col items-start gap-3">
                        <Image
                        alt={cert.name}
                        height={96}
                        radius="sm"
                        src={cert.logo_url}
                        width={96}
                        />
                        <div className="flex flex-col">
                          <p className="text-md text-4xl font-black">{cert.name}</p>
                          <p className="text-small text-default-500">{cert.type}</p>
                        </div>
                    </section>
                    <Divider/>
                    
                    <section className="py-6">
                        <p>{cert.description}</p>
                    </section>
                    <Divider/>
                    <section>
                      <section className="py-6 flex flex-col gap-2 justify-center h-full">
                        <section className="gap-2 flex flex-row">
                          <p><strong>Type:</strong></p>
                            {cert.type.map((type:string, index:string) => (
                              <Chip size="sm" key={index}>{type}</Chip>
                            ))}
                        </section>
                        <Link href={cert.link} underline="hover" color="primary" className="cursor-default" isExternal showAnchorIcon>View my {cert.name} certificate.</Link>
                      </section>
                    </section>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
