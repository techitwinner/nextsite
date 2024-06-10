"use client";

import {Button, Divider, Tooltip} from "@nextui-org/react";
import React, {useEffect, useRef, useState} from "react";
import {Image} from "@nextui-org/react";

const socialItems = () => [
    {"label": "GitHub", "website": "https://github.com/", "username": "techitwinner", "icon": "github-logo"},
    {"label": "X / Twitter", "website": "https://x.com/", "username": "techitwinner", "icon": "x-logo"},
    {"label": "Facebook", "website": "https://facebook.com/", "username": "techitwinner", "icon": "facebook-logo"},
    {"label": "LinkedIn", "website": "https://linkedin.com/", "username": "in/techit-thawiang-02b56b27a", "icon": "linkedin-logo"}
];

const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
        window.location.href = link;
    }
};

const Home = () => {
    const pfpSize = "200px"

    return (
        <div className="h-screen flex flex-col justify-evenly items-start gap-6">
            <div className="flex flex-col justify-center items-start gap-8">
                <section>
                    <Image src="https://images.techit.win/custom/PFP/realtechit.jpg" height={pfpSize}
                           width={pfpSize}
                           radius="sm"/>
                </section>
                <section className="gap-2 flex-col flex">
                    <p className="font-bold text-5xl">Techit Thawiang</p>
                    <section className="flex flex-row gap-4 w-full">
                        <p className="inline-flex items-center gap-1"><i className="ph-fill ph-map-pin"></i>Thailand</p>
                        <p className="inline-flex items-center gap-1"><i className="ph-fill ph-cake"></i>Jan, 05</p>
                        <p className="inline-flex items-center gap-1"><i className="ph-fill ph-bug"></i>Student,
                            Developer</p>
                    </section>
                </section>
                <section className="gap-2 flex">
                    {socialItems().map((item, index) => (
                        <Tooltip key={index} showArrow={true} content={item.label} placement="bottom">
                            <Button
                                radius="full"
                                isIconOnly
                                variant="ghost"
                                onClick={() => handleButtonClick(item.website + item.username)}
                            >
                                <p className={`ph ph-${item.icon} text-[1.25rem]`}></p>
                            </Button>
                        </Tooltip>

                    ))}
                </section>
            </div>
            <div className="flex flex-col gap-2">
                <section className="gap-2 flex">
                    <Button radius="sm" color="primary" onClick={() => handleButtonClick("/about")}>About Me</Button>
                    <Button radius="sm" variant="faded" onClick={() => handleButtonClick("/contact")}>Contact Me</Button>
                </section>
            </div>
        </div>)
}

export default Home