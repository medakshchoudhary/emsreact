import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [task, setTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setTask({
            taskTitle,
            taskDate,
            taskDescription,
            category,
            active:true,
            failed:false,
            completed:false,
            newTask:true,
        })

        setAssignTo("")
        setCategory("")
        setTaskDate("")
        setTaskDescription("")
        setTaskTitle("")
    }

  return (
    <div>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='w-full text-white bg-zinc-800 flex px-4 py-3 rounded-md mt-3'>
            <div className="left w-1/2">
                <div className=''>
                    <h3 className='text-lg'>Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value)
                    }}
                    className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="text" placeholder='e.g: Make a Youtube video' />
                </div>
                <div className='mt-2'>
                    <h3 className='text-lg'>Date</h3>
                    <input 
                    value={taskDate}
                    onChange={(e)=>{
                        setTaskDate(e.target.value)
                    }}
                    className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="date" />
                </div>
                <div className='mt-2'>
                    <h3 className='text-lg'>Assign to</h3>
                    <input 
                    value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value)
                    }}
                    className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="text" placeholder='e.g: Daksh Choudhary' />
                </div>
                <div className='mt-2'>
                    <h3 className='text-lg'>Category</h3>
                    <input 
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                    className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="text" placeholder='e.g: dev,ui,design, etc' />
                </div>
            </div>
            <div className="right w-1/2">
                <div>
                    <h3 className='text-lg'>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    className='w-full p-2 h-[25vh] bg-transparent outline-none border-2 rounded' name="" id=""></textarea>
                    <button className='w-full bg-emerald-500 rounded py-3 mt-2'>Create Task</button>
                </div>
                
            </div>
        </form>
    </div>

  )
}

export default CreateTask