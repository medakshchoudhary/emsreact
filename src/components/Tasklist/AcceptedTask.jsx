import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='taskcard flex flex-shrink-0 flex-col justify-between p-8 w-fit h-[45vh] bg-yellow-500 rounded-lg'>
      <div className="container">
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-6'>{data.title}</h2>
        <p className='mt-4 leading-5 w-[24vw]'>{data.description}</p> 
      </div>
        <div className='flex items-center justify-between'>
          <button className='bg-green-500 px-2 py-1 rounded-md hover:bg-green-600'>Mark as completed</button>
          <button className='bg-red-500 px-2 py-1 rounded-md hover:bg-red-600'>Mark as failed</button>
        </div>
      </div>
)
}

export default AcceptTask