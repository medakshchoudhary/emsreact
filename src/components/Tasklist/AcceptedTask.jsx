import React from 'react'

const AcceptTask = () => {
  return (
    <div className='taskcard flex-shrink-0 p-8 w-[24vw] h-[45vh] bg-yellow-500 rounded-lg'>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
          <h4>24 nov 2024</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-6'>Make a youtube video</h2>
        <p className='mt-4 leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ratione voluptas, vel cupiditate animi obcaecati qui voluptates odit ad nisi doloremque facilis consequatur.</p> 
        <div className='flex items-center justify-between'>
          <button className='bg-green-500 px-2 py-1 rounded-md mt-4 hover:bg-green-600'>Mark as completed</button>
          <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-600'>Mark as failed</button>
        </div>
      </div>
)
}

export default AcceptTask