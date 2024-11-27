import React from 'react'

const TaskLists = () => {
  return (
    <div id='tasklist' className='tasklist-container flex flex-nowrap  items-center justify-start gap-5 text-white py-10 overflow-x-auto'>
      <div className='taskcard flex-shrink-0 p-8 w-[24vw] h-[45vh] bg-blue-500 rounded-lg'>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
          <h4>24 nov 2024</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-10'>Make a youtube video</h2>
        <p className='mt-4 leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ratione voluptas, vel cupiditate animi obcaecati qui voluptates odit ad nisi doloremque facilis consequatur.</p>
      </div>
      <div className='taskcard flex-shrink-0 p-8 w-[24vw] h-[45vh] bg-green-500 rounded-lg'>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
          <h4>24 nov 2024</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-10'>Make a youtube video</h2>
        <p className='mt-4 leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ratione voluptas, vel cupiditate animi obcaecati qui voluptates odit ad nisi doloremque facilis consequatur.</p>
      </div>
      <div className='taskcard flex-shrink-0 p-8 w-[24vw] h-[45vh] bg-red-500 rounded-lg'>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
          <h4>24 nov 2024</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-10'>Make a youtube video</h2>
        <p className='mt-4 leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ratione voluptas, vel cupiditate animi obcaecati qui voluptates odit ad nisi doloremque facilis consequatur.</p>
      </div>
      <div className='taskcard flex-shrink-0 p-8 w-[24vw] h-[45vh] bg-yellow-500 rounded-lg'>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
          <h4>24 nov 2024</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-10'>Make a youtube video</h2>
        <p className='mt-4 leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ratione voluptas, vel cupiditate animi obcaecati qui voluptates odit ad nisi doloremque facilis consequatur.</p>
      </div>
      <div className='taskcard flex-shrink-0 p-8 w-[24vw] h-[45vh] bg-blue-500 rounded-lg'>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
          <h4>24 nov 2024</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-10'>Make a youtube video</h2>
        <p className='mt-4 leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ratione voluptas, vel cupiditate animi obcaecati qui voluptates odit ad nisi doloremque facilis consequatur.</p>
      </div>
    </div>
  )
}

export default TaskLists