import { useState, useEffect, useRef } from "react";

export default function useComponentVisible() {
    const [isVisible, setIsVisible] = useState(false);
    let ref = useRef();
    const handleClickOutside = (event) => {
        if (!ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    });

    return { ref, isVisible, setIsVisible };
}