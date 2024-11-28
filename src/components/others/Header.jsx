import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex justify-between items-center'>
      <h2 className='text-white text-2xl font-semibold'>Hello <br /> <span className='font-bold text-3xl'>{data.firstName}</span> 👋</h2>
      <button className='bg-red-500 px-4 py-2 rounded-sm text-xl hover:bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header