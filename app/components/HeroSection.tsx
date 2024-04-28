import {Link} from "@nextui-org/react";

const HeroSection = () => {
  return (
    <div className="py-24 text-center">
        <div className="mt-4 text-5xl font-black">
          Techit's Personal Blog
        </div>
        <div className="max-w-2xl mx-auto mt-2 text-xl">
          Nothing special, Forked from <Link className="text-xl" href="https://github.com/SeanPreusse/nextjs-notion-blog">SeanPreusse's</Link> project
        </div>
    </div>
  );
};

export default HeroSection;
