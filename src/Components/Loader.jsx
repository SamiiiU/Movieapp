import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <span className='w-20 h-20 border-8 border-t-8 rounded-full border-yellow-600/10 border-t-yellow-500 animate-spin'/>
    </div>
  )
}

export default Loader
