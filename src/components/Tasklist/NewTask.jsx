import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='taskcard flex flex-col justify-between flex-shrink-0 p-8 w-fit h-[45vh] bg-blue-500 rounded-lg'>
      <div className="conatiner">
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className='font-bold text-3xl text-nowrap mt-6'>{data.title}</h2>
        <p className='mt-4 leading-5 w-[24vw]'>{data.description}</p>
      </div>
      <button className='bg-yellow-500 px-2 py-1 rounded-md hover:bg-yellow-600'>Accept Task</button>
    </div>
  )
}

export default NewTask