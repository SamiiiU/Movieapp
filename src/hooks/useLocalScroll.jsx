import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";



export default function useLocalScroll(start) {
    useEffect(() => {
        if(!start) return;

        const scrollEl = document.getElementById('main-container');

        const localScroll = new LocomotiveScroll({

            el : scrollEl,
            smooth : true,
            multiplier : 1,
            class : 'is-reveal',
        })
    } , [start])
}