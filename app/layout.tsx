'use client';
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import React, {useEffect,useState} from 'react';

const notoSans = Noto_Sans({ subsets: ["latin"]});

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
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Welcome to techit.win! This is where I keep all of my certificates, show off my projects, posting blog posts and more."/>
            <script src="https://kit.fontawesome.com/fad05709e1.js" crossOrigin="anonymous" async></script>
        </head>
        <body className={notoSans.className}>
            {children}
        </body>
    </html>
);
}
