import {Button, Divider} from "@nextui-org/react";
import React from "react";
import {Image} from "@nextui-org/react";

const Home = () => {
    const pfpSize = "150px"
    return (
        <div className="min-h-screen w-full flex flex-col">
            <div className="h-screen flex flex-col justify-center items-start gap-6">
                <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-8">
                    <section>
                        <Image src="https://images.techit.win/custom/PFP/realtechit.jpg" height={pfpSize}
                               width={pfpSize}/>
                    </section>
                    <section className="gap-2 flex-col flex">
                        <p className="font-bold text-5xl">Techit Thawiang</p>
                        <section className="flex flex-row gap-4 w-full">
                            <p className="inline-flex items-center gap-1"><i className="ph-fill ph-map-pin"></i>Thailand
                            </p>
                            <p className="inline-flex items-center gap-1"><i className="ph-fill ph-cake"></i>Jan, 05</p>
                            <p className="inline-flex items-center gap-1"><i className="ph-fill ph-bug"></i>Developer
                            </p>
                        </section>
                    </section>
                </div>
                <div>
                    <section>
                        <Button size="lg">About Me</Button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home