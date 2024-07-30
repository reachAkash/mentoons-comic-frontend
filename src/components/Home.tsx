import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
// import 
const Home = () => {
  return (
    <div>
      <div>
        <h1 className='text-primary text-lg'>The Ultimate</h1>
        <div className='font-medium text-5xl'>Mentoons Comics.</div>
        <div className='w-fit flex items-center justify-between'>
          <button className='bg-primary text-white rounded-full px-4 py-2 text-xl'>Read Now</button>
          <div>
            <FaRegCirclePlay className='text-red-500 text-5xl' />
          </div>
        </div>
      </div>
      <div>
        {/* <img src={} alt='comic image' />
        <img src={} alt='comic image 2' /> */}
      </div>
    </div>
  )
}

export default Home