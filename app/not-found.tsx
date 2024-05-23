"use client";

import {Image} from "@nextui-org/image"
import {Button} from "@nextui-org/react";
import React from "react";

const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
        window.location.href = link;
    }
};

const handleRefresh = () => {
    window.location.reload();
};

const NotFound = () => {
    const imageSize = "250px"
    return (
        <div className="h-screen flex flex-col justify-evenly items-start gap-6">
            <div className="flex flex-col justify-center items-start gap-8">
                <p className="ph ph-file-dashed text-[10rem] ml-[-20px]"></p>
                <p className="text-5xl font-bold">404 - Not Found!</p>
                <p>Verify the URL or return to the homepage.
                </p>
                <section className="gap-2 flex">
                    <Button radius="sm" color="primary" onClick={() => handleButtonClick("/")}>
                        <p className="text-[1.25rem] ph-fill ph-house"></p>
                        Home
                    </Button>
                    <Button radius="sm" variant="faded" onClick={() => handleRefresh()}>
                        <p className="text-[1.25rem] ph ph-arrow-counter-clockwise"></p>
                        Refresh
                    </Button>
                </section>
            </div>
        </div>
    )
}

export default NotFound;