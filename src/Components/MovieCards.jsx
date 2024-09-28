import React, { useEffect, useState } from 'react'

const MovieCards = () => {
  const [type , setType] = useState("cars");
  const [Movies , setMovies] = useState([])
    const fetcher =  async () => {
        const url = `https://api.tvmaze.com/search/shows?q=${type}`;
         const response = await fetch(url);
        console.log("ye hai response",response);
        const data = await response.json();
        console.log("yai hai json" , data)
        setMovies(data)
      }
      useEffect(() => {
        
        fetcher();
      }, [type])
  return (
    <div className='flex flex-col items-center justify-center w-full p-20'>
      <input type='text' placeholder='search your movie' className='w-3/4 p-4 outline-none font-bold rounded-full bg-[#f1d031]/50 text-teal-50 shadow-2xl text-xl ' value={type} onChange={(e) => setType(e.value)}/>

      <div className='flex flex-wrap items-center justify-center w-full gap-8 py-20 '>
        {/* Card1 */}
        {
          Movies.map((item , idx) => (
            <div key={idx} className='relative w-[300px] group rounded-lg overflow-hidden border-teal-400 h-[400px]'
        style={{
          backgroundImage : `url(${item.show.image.medium})`,
          backgroundSize : 'cover',
          backgroundPosition : 'center'
        }}>
          <div className='absolute flex top-[100%] duration-1000   flex-col gap-y-5 group-hover:top-0 transition-all w-full h-full bg-gradient-to-t font-semibold from-[#060d17]/80 to-[#060d17]/60 p-5 text-teal-50'>
            <h1 className='text-5xl font-bold '>{item.show.name} </h1>
            <p className=' text-[#f1d031]'>{item.show.language}</p>

            <p >Premiered on : <span className='font-semibold text-[#f1d031]'><em>{item.show.premiered}</em></span></p>

            <p>Category : <div className='flex w-full gap-2 text-[#f1d031]'>
            {item.show.genres.map((genre , indx) => (
              <p key={indx}>{genre}</p>
            ))}
              </div> </p>
            
            <p>Rating : <span className='text-[#f1d031]'><em>{item.show.rating.average}</em></span></p>

            
          </div>
          <div className='absolute w-full py-4 font-bold text-center transition-all duration-300 -bottom-20 group-hover:bottom-0 bg-black/50 text-teal-50'>Watch Now</div>
          </div>
          ))
        }
    </div>

    </div>
    
  )
}

export default MovieCards
