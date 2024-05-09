"use client";
import {motion} from 'framer-motion';

const NotFound = () => {

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleButtonClick = (link: string) => {
        if (typeof window !== 'undefined') {
            window.location.href = link;
        }
    };

    return (
        <motion.div initial={{ filter: "blur(16    px)", opacity: 0 }}
                    animate={{ filter: "blur(0)", opacity: 1 }}
                    transition={{ duration: 0.75 }}
                    className={"flex min-h-screen flex-col w-screen items-center gap-4 p-8"}
        >
            <img alt="dialog-warning"
                 src="https://images.techit.win/papirus-icon-theme-master/Papirus-Dark/22x22/actions/dialog-warning.svg"
                 height="240px" width="240px"/>
            <p className="text-5xl font-bold">404 - Not Found</p>
            <p>Verify the URL or return to the homepage.</p>
            <section className="flex flex-row gap-2">
                <button className="ghost" onClick={handleRefresh}>Refresh</button>
                <button className="ghost" onClick={() => handleButtonClick("/")}>Go Home</button>
            </section>
        </motion.div>
    )
}

export default NotFound