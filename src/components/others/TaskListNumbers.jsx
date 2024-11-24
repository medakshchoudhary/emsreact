import React from 'react'

const TaskListNumbers = () => {
  let Tasklist = [
    {tasks:0,taskType:"New Task",color:"bg-red-500"},
    {tasks:0,taskType:"New Task",color:"bg-yellow-500"},
    {tasks:0,taskType:"New Task",color:"bg-green-500"},
    {tasks:0,taskType:"New Task",color:"bg-blue-500"},
  ]
  return (
    <div className='taskcontainer flex items-center justify-center gap-5 mt-10'>
      {Tasklist.map((item,index)=>(
        <div key={index} className={`card ${item.color} text-white w-[25%] p-10 rounded-md`}>
          <h2 className='text-3xl font-semibold'>{item.tasks}</h2>
          <h3 className='text-3xl'>{item.taskType}</h3>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers