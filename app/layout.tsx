import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/_Components/Header";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Techit&apos;s Home</title>
                <script src="https://kit.fontawesome.com/fad05709e1.js" async crossOrigin="anonymous"></script>
            </head>
            <body className="ubuntu-sans" style={{scrollBehavior:'smooth'}}>
                <Header/>
                <div className="md:pl-[68px] flex justify-center">
                    {children}
                </div>
            </body>
        </html>
    );
}
