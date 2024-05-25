'use client';
import type { Metadata } from "next";
import {Inter,Inter_Tight} from "next/font/google";
import "./globals.css";
import React, {useEffect,useState} from 'react';
import {Providers} from "@/app/providers";
import {Footer, Navigator} from "@/app/_MainComponents";

const font = Inter({ subsets: ["latin"]});


export default function RootLayout({ children }: Readonly <{ children: React.ReactNode; }>) {

  const [colorScheme, setColorScheme] = useState('light'); // Default to light mode

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
            <body className={`${font.className} flex flex-col items-center`}>
                <Navigator/>
                    <main className="max-w-[64rem] w-full px-4 sm:px-8 flex flex-col">
                        <Providers>
                            {children}
                        </Providers>
                    </main>
                <Footer/>
            </body>
        </html>
    );
}
