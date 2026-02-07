"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollNavigator() {
    // 'up' means user is scrolling UP, so we show DOWN arrow
    // 'down' means user is scrolling DOWN, so we show UP arrow
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show button after scrolling a bit
            if (currentScrollY > 100) {
                setIsVisible(true);
            } else {
                // At the very top, stick to "Go Down" logic effectively, 
                // or just hide it until they scroll?
                // Let's keep it visible if they scrolled a bit, but if at 0 maybe hide?
                // User asked for "scrolling down so it show up".
                setIsVisible(currentScrollY > 50);
            }

            if (currentScrollY > lastScrollY) {
                // Scrolling DOWN
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY) {
                // Scrolling UP
                setScrollDirection("up");
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        if (scrollDirection === "down") {
            // User is scrolling DOWN -> Button shows DOWN -> Go to BOTTOM
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        } else {
            // User is scrolling UP -> Button shows UP -> Go to TOP
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={handleClick}
            className="
        fixed right-8 bottom-8 z-50
        w-14 h-14
        bg-black text-white
        rounded-full
        flex items-center justify-center
        shadow-xl
        hover:scale-110 transition-transform duration-300
        group
      "
            aria-label={scrollDirection === "down" ? "Scroll to Bottom" : "Scroll to Top"}
        >
            {scrollDirection === "down" ? (
                <ArrowDown className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            ) : (
                <ArrowUp className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            )}
        </button>
    );
}
