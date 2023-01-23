import { useState, useEffect, useRef } from "react";

export default function useComponentVisible() {
    const [isVisible, setIsVisible] = useState(false);
    let ref = useRef();

    // useEffect(() => {
    //     document.addEventListener("mousedown", (event) => {
    //         if(!event.target)
    //         setIsVisible(false);
    //     })
    // })

    const handleClickOutside = (event) => {
        if (!ref.current.contains(event.target)) {
            setIsVisible(false);
        }
        console.log(ref)
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