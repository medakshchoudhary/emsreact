import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log('form submitted')
    }

  return (
    <div className="login w-screen h-screen flex items-center justify-center px-[30vw] py-[20vh] leading-none">
        <div className="container border-emerald-600 border-2 py-[10vh] rounded-2xl flex flex-col items-center justify-between gap-16">
            <h1 className='text-white text-4xl'>Log In</h1>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
                setEmail("")
                setPassword("")
            }}
            className='flex flex-col items-center justify-center gap-4'>
                <input 
                required 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className='outline-none bg-transparent border-2 border-emerald-600 rounded-full px-[2vw] py-[1.2vw] text-[1.5vw] text-white placeholder:text-gray-400' type="email" placeholder='Enter your email'
                />
                <input 
                required 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                className='outline-none bg-transparent border-2 border-emerald-600 rounded-full px-[2vw] py-[1.2vw] text-[1.5vw] text-white placeholder:text-gray-400' type="password" placeholder='Enter your password'/>
                <button className='mt-[5vh] bg-emerald-600 rounded-full text-3xl font-semibold px-20 py-2'>Login</button>
            </form>
        </div>

    </div>
  )
}

export default Login