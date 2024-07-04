import React, { useEffect, useRef, useState } from "react";
 
const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
 
    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });
 
        scrollObserver.observe(ref.current);
 
        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);
 
    const classes = `transition-opacity duration-[3000ms] 
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`;
 
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};
export default RevealOnScroll;