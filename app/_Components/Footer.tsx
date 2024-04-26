import React from 'react';

export default function Footer() {
    function getCurrentYear() {
        return new Date().getFullYear();
    }
      
    const currentYear = getCurrentYear();
    return (
        <React.Fragment>
            <div className="flex flex-col z-40 py-2 px-6 w-full items-center justify-center inset-x-0 border-t border-divider backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70 fixed bottom-0">
                <p className="text-[12px] dark:text-white text-black"><strong>© 2023-{currentYear} — Techit Thawiang</strong> All right reserved.</p>
                <p className="text-[12px] dark:text-white text-black">Any trademarks or logos used on this website are property of their respective owner.</p>
            </div>
        </React.Fragment>
    );
} 