import React from 'react'

const Header = (props) => {

  const handleLogout = () => {
    localStorage.setItem("loggedInUser","")
    // changes the screen to login page without reloading the page
    props.changeUser('')
  }

  return (
    <div className='flex justify-between items-center text-white'>
      <h2 className='text-2xl font-semibold'>Hello <br /> <span className='font-bold text-3xl'>{props.user === "admin" ? "Admin" : props.data.firstName + ' ' + props.data.lastName}</span> 👋</h2>
      <button onClick={handleLogout} className='bg-red-500 px-4 py-2 rounded-sm text-xl hover:bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header