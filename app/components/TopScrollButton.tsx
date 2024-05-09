"use client";

import useScrollToTop from "@/app/hook/useScrollToTop";
import { MoveUp } from "lucide-react";

const ScrollToTopButton = () => {
  const { showTopButton, scrollToTop } = useScrollToTop();

  return (
    <button
      className={`ghost fixed bottom-4 right-4 duration-300 rounded-full p-2 ${
        showTopButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <MoveUp />
    </button>
  );
};

export default ScrollToTopButton;
