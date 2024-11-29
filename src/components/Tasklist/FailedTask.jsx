import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='taskcard flex flex-col justify-between flex-shrink-0 p-8 w-fit h-[45vh] bg-red-400 rounded-lg'>
      <div className="container">
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-6'>{data.title}</h2>
        <p className='mt-4 leading-5 w-[24vw]'>{data.description}</p>
      </div>
      <button className='w-full bg-red-600 px-2 py-1 rounded-md hover:bg-red-700'>Failed</button>
    </div>
  )
}

export default FailedTask