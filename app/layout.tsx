'use client';
import type { Metadata } from "next";
import {Noto_Sans, Noto_Sans_Thai} from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";
import React, {useEffect,useState} from 'react';
import {Providers} from "@/app/providers";
import {Footer, Navigator} from "@/app/_MainComponents";
import {usePathname} from "next/navigation";

const fontTH = Noto_Sans_Thai({ subsets: ["latin"]});

const wideLayoutRoutes = ['/html-editor', '/future-wide-page', '/another-wide-page'];

export default function RootLayout({ children }: Readonly <{ children: React.ReactNode; }>) {

  const [colorScheme, setColorScheme] = useState('light'); // Default to light mode

    const pathname = usePathname();
    const isWideLayout = wideLayoutRoutes.includes(pathname);

  useEffect(() => {
    // Function to handle color scheme change
    const handleColorSchemeChange = () => {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setColorScheme(prefersDarkMode ? 'dark' : 'light');
    };

    // Initial check
    handleColorSchemeChange();

    // Listen for changes in color scheme preference
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', handleColorSchemeChange);

    // Clean up the event listener
    return () => {
      mediaQueryList.removeEventListener('change', handleColorSchemeChange);
    };
  }, []); // Run only once on mount

    return (
        <html lang="en" className={colorScheme}>
            <head>
                <title>Techit&apos;s Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description"
                      content="Welcome to Techit's Home! This is where I keep all of my certificates, show off my projects and more."/>
                <script src="https://unpkg.com/@phosphor-icons/web@2.1.1" async></script>
            </head>
            <body className={`${GeistSans.className} flex flex-col items-center`}>
                <Navigator/>
                    <main className={`max-w-[64rem] w-full px-4 sm:px-8 flex flex-col ${isWideLayout ? 'max-w-full' : 'max-w-[64rem]'}`}>
                        <Providers>
                            {children}
                        </Providers>
                    </main>
                <Footer/>
            </body>
        </html>
    );
}
