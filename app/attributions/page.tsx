"use client";

import {Button, Link} from "@nextui-org/react";
import {Inter_Tight, Martian_Mono} from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"]});
const martianMono = Martian_Mono({ subsets: ["latin"]});

const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
        window.location.href = link;
    }
};

const Attributions = () => {
    return(
        <div className="min-h-screen py-24 flex flex-col gap-16">
            <div className=" flex flex-col items-start gap-6">
                <h1 className="text-5xl font-bold">Attributions</h1>
                <p>Last edited: May 25th, 2024 at 2:00PM</p>
                <p>This Attributions page acknowledges and provides credit to third-party sources and materials used
                    in the creation of this personal website. Some might not require an attribution, but I still want
                    to credit them.</p>
            </div>
            <div id="software" className=" flex flex-col items-start gap-6">
                <h1 className="text-3xl font-bold">Software</h1>
                <ul className="flex flex-col gap-4">
                    <li className="flex flex-col">
                        <h1 className="text-xl font-bold">Web Framework</h1>
                        <p>This website is written using Next.js, React, TailwindCSS, ESLint and more as web
                            framework.</p>
                        <div className="flex flex-row gap-1 mt-2">
                            <Button onClick={() => handleButtonClick("https://nextjs.org")} variant="ghost" radius="sm">
                                Next.js
                            </Button>
                            <Button onClick={() => handleButtonClick("https://react.dev")} variant="ghost" radius="sm">
                                React
                            </Button>
                            <Button onClick={() => handleButtonClick("https://tailwindcss.com")} variant="ghost"
                                    radius="sm">
                                TailwindCSS
                            </Button>
                            <Button onClick={() => handleButtonClick("https://eslint.org")} variant="ghost" radius="sm">
                                ESLint
                            </Button>
                        </div>
                    </li>
                    <li className="flex flex-col">
                        <h1 className="text-xl font-bold">Web Components</h1>
                        <p>This website is using NextUI as the main web&apos;s UI library.</p>
                        <div className="flex flex-row gap-1 mt-2">
                            <Button onClick={() => handleButtonClick("https://nextui.org")} variant="ghost" radius="sm">
                                NextUI
                            </Button>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="graphics" className=" flex flex-col items-start gap-6">
                <h1 className="text-3xl font-bold">Graphics</h1>
                <ul className="flex flex-col gap-4">
                    <li className="flex flex-col">
                        <h1 className="text-xl font-bold">Web Icons</h1>
                        <p>This website is using Phosphor Icons for it&apos;s main icon source.</p>
                        <div className="flex flex-row gap-1 mt-2">
                            <Button onClick={() => handleButtonClick("https://phosphoricons.com")} variant="ghost"
                                    radius="sm">
                                Phosphor Icons
                            </Button>
                        </div>
                    </li>
                    <li className="flex flex-col">
                        <h1 className="text-xl font-bold">Fonts</h1>
                        <p>This website is using <i className="font-bold not-italic">Inter</i> as
                            the main web font and <i className={`${interTight.className} font-bold`}>Inter Tight</i> for
                            web heading or big texts.</p>
                        <p>For my <Link color="foreground" underline="always" href="https://images.techit.win/logos/techit.win/TechitDotWinLogo.png">current logo</Link>. It was created using <i className={`${martianMono.className} font-bold`}>Martian Mono</i> font.
                        </p>
                        <div className="flex flex-row gap-1 mt-2">
                            <Button onClick={() => handleButtonClick("https://rsms.me/inter/")} variant="ghost"
                                    radius="sm">
                                Inter
                            </Button>
                            <Button onClick={() => handleButtonClick("https://fonts.google.com/specimen/Inter+Tight")}
                                    variant="ghost" radius="sm">
                                Inter Tight
                            </Button>
                            <Button onClick={() => handleButtonClick("https://evilmartians.com/products/martian-mono")}
                                    variant="ghost" radius="sm">
                                Martian Mono
                            </Button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Attributions;