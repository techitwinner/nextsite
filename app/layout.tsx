'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_Components/Header";
import Footer from "@/app/_Components/Footer"
import React, {useEffect,useState} from 'react';

const inter = Inter({ subsets: ["latin"] });

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <script src="https://kit.fontawesome.com/fad05709e1.js" crossOrigin="anonymous" async></script>
      </head>
      <body className={inter.className}>
        <Header/>       
        {children}
        <Footer/>
      </body>
    </html>
  );
}
