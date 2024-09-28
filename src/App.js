
import { useEffect } from 'react';
import Hero from './Components/Hero';
import MovieCards from './Components/MovieCards';
import Context from './GlobalState/Context';



function App() {

  
  
  return (
    <Context>
    <div className="App bg-[#060d17]  w-full">
      <Hero/>
      <MovieCards/>
    </div>
    </Context>
  );
}

export default App;
