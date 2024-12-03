import React, { useState, useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            title,
            description,
            date,
            category,
            active: false,
            failed: false,
            completed: false,
            newTask: true,
        }

        const updatedData = [...userData]

        updatedData.forEach((elem) => {
            if(assignTo === elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCount.newTask += 1
            }
        })

        setUserData(updatedData)

        localStorage.setItem("employees",JSON.stringify(updatedData))

        setAssignTo("")
        setCategory("")
        setDate("")
        setDescription("")
        setTitle("")
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
                    required    
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="text" placeholder='e.g: Make a Youtube video' />
                </div>
                <div className='mt-2'>
                    <h3 className='text-lg'>Date</h3>
                    <input
                    required 
                    value={date}
                    onChange={(e)=>{
                        setDate(e.target.value)
                    }}
                    className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="date" />
                </div>
                <div className='mt-2'>
                    <h3 className='text-lg'>Assign to</h3>
                    <input
                    required 
                    value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value)
                    }}
                    className='bg-transparent border-2 rounded px-3 w-3/4 outline-none py-1' type="text" placeholder='e.g: Daksh Choudhary' />
                </div>
                <div className='mt-2'>
                    <h3 className='text-lg'>Category</h3>
                    <input
                    required 
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
                    value={description}
                    required
                    onChange={(e)=>{
                        setDescription(e.target.value)
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