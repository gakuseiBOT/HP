import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    console.log("called useWindowSize");
    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log("window is defined");
            const handleResize = () => {
                setWindowSize({
                    width:
                        window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        } else {
            console.log("window is undefined");
            
            return;
        }
    }, []);
    return windowSize;
};