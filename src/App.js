
import { useEffect, useRef } from 'react';
import Hero from './Components/Hero';
import MovieCards from './Components/MovieCards';
import Context from './GlobalState/Context';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
import useLocalScroll from './hooks/useLocalScroll';



function App() {

  const scrollRef = useRef(null); // Reference for the scroll container

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1, // Adjust scroll speed if needed
      getDirection: true,
    });

    // Update scroll after new content or resizing
    scroll.on('scroll', (args) => {
      console.log(args.direction); // Check scroll direction (optional)
    });

    // Clean up on unmount
    return () => {
      scroll.destroy();
    };
  }, []);
  
  return (
    <Context>
    <div ref={scrollRef} data-scroll-container className="App bg-[#060d17] main-container" id='main-container'   >
      <Hero/>
      <MovieCards/>
    </div>
    </Context>
  );
}

export default App;
