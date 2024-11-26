import React from 'react'

const CreateTask = () => {
  return (
    <div className='w-full text-white bg-zinc-800 flex p-5 rounded-md mt-5'>
        <div className="left w-1/2">
            <div className=''>
                <h3 className='text-lg'>Task Title</h3>
                <input className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="text" placeholder='e.g: Make a Youtube video' />
            </div>
            <div className='mt-4'>
                <h3 className='text-lg'>Date</h3>
                <input className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="date" />
            </div>
            <div className='mt-4'>
                <h3 className='text-lg'>Assign to</h3>
                <input className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="text" placeholder='e.g: Daksh Choudhary' />
            </div>
            <div className='mt-4'>
                <h3 className='text-lg'>Category</h3>
                <input className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="text" placeholder='e.g: dev,ui,design, etc' />
            </div>
        </div>
        <div className="right w-1/2">
            <div>
                <h3 className='text-lg'>Description</h3>
                <textarea className='w-full p-2 h-[30vh] bg-transparent outline-none border-2 rounded' name="" id=""></textarea>
                <button className='w-full bg-emerald-500 rounded py-3 mt-2'>Create Task</button>
            </div>
            
        </div>
    </div>
  )
}

export default CreateTask