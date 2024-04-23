'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"
import React from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body className={inter.className}>
        <Header/>        
        {children}
      </body>
    </html>
  );
}
