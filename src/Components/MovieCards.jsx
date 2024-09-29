import React, { useEffect, useRef, useState } from 'react'
import Loader from './Loader';
import LocomotiveScroll from 'locomotive-scroll';

const MovieCards = () => {
  const [type , setType] = useState("cars");
  const [Movies , setMovies] = useState([]);
  const [loading , setLoading] = useState(false);


    const fetcher =  async () => {
      setLoading(true)
        const url = `https://api.tvmaze.com/search/shows?q=${type}`;
         const response = await fetch(url);
        console.log("ye hai response",response);
        const data = await response.json();
        console.log("yai hai json" , data)
        await setMovies(data)
        setLoading(false);
      }
      useEffect(() => {
        
        fetcher();
      }, [type])



  return (
    <div  data-scroll   className='flex flex-col items-center justify-center bg-[#060d17] w-full px-0 py-10 sm:p-20 '>
      <div className='relative flex items-center justify-center w-full'>
      <input data-scroll data-scroll-speed="-5"  type='text' placeholder='search your movie' className='w-3/4 p-4 text-xl font-bold rounded-full shadow-2xl outline-none bg-zinc-400/20 text-teal-50' value={type} onChange={(e) => setType(e.target.value)}/>
      
      </div>
      
    
      <div   className='flex flex-wrap items-center justify-center w-full gap-8 py-10 '>
        {/* Card1 */}
        {loading ? (<Loader/>) : (
          Movies!= null ? Movies.map((item , idx) => (
            <div key={idx} className='relative w-[300px]  group rounded-lg overflow-hidden border-teal-400 h-[400px]'
        style={{
          backgroundImage: `url(${item.show.image ? item.show.image.medium : 'https://media.istockphoto.com/id/1500807425/vector/image-not-found-icon-vector-design.jpg?s=612x612&w=0&k=20&c=SF3EoL0zSi3XUwFzduMo3xdJFEk8V5IUsGqRocgPEtU='})`,
          backgroundSize : 'cover',
          backgroundPosition : 'center'
        }}>
          <div className='absolute flex top-[100%] duration-1000   flex-col gap-y-5 group-hover:top-0 transition-all w-full h-full bg-gradient-to-t font-semibold from-[#060d17]/80 to-[#060d17]/60 p-5 text-teal-50'>
            <h1 className='text-5xl font-bold '>{item.show.name} </h1>
            <p className=' text-[#f1d031]'>{item.show.language}</p>

            <p >Premiered on : <span className='font-semibold text-[#f1d031]'><em>{item.show.premiered}</em></span></p>

            <p>Category : <div className='flex gap-2 text-[#f1d031]'>
            {  item.show.genres?.map((genre , indx) => (
              <p key={indx}>{genre}</p>
            )) || "Not Specified"}
              </div> </p>
            
            <p>Rating : <span className='text-[#f1d031]'><em>{item.show.rating.average || "Unknown"}</em></span></p>

            
          </div>
          <div className='absolute w-full py-4 font-bold text-center transition-all duration-300 cursor-pointer -bottom-20 group-hover:bottom-0 bg-black/50 text-teal-50'>Watch Now</div>
          </div>
          )) : (
            <div className='w-full h-screen bg-teal-300 text-teal-50'>Nhi mili bhai teri movies</div>
          )
        )     
        }

        
    </div>

    </div>
    
  )
}

export default MovieCards
