import React from 'react'

const CompleteTask = () => {
  return (
    <div className='taskcard flex-shrink-0 p-8 w-[24vw] h-[45vh] bg-green-400 rounded-lg'>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
          <h4>24 nov 2024</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-6'>Make a youtube video</h2>
        <p className='mt-4 leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ratione voluptas, vel cupiditate animi obcaecati qui voluptates odit ad nisi doloremque facilis consequatur.</p>
        <button className='w-full bg-emerald-600 px-2 py-1 rounded-md mt-4 hover:bg-emerald-700'>Completed</button>
      </div>
  )
}

export default CompleteTask