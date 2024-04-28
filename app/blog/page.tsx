"use client";

import { useEffect } from 'react';
import {Link} from "@nextui-org/react"

const RedirectPage = ({ redirectUrl }: { redirectUrl: string }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);

  return null;
};

const MyPage = () => {
  return (

        <div className="w-full justify-center flex flex-col items-center">
                <RedirectPage redirectUrl="https://blog.techit.win/" />
        <section className="py-24 min-h-screen w-full px-6 flex flex-col max-w-[1024px] gap-8 items-start">
          <h1 className="text-5xl font-black">/blog is deprecated</h1>
          <h1 className="text-5xl font-black">Redirecting to <Link className="text-5xl" href="https://blog.techit.win">blog.techit.win</Link></h1>
          <div className="grid grid-cols-1 gap-4">
          </div>
        </section>
      </div>
  );
};

export default MyPage;