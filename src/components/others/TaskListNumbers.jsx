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
        <div key={index} className={`card ${item.color} text-white w-[25%] px-10 py-8 rounded-md`}>
          <h2 className='text-5xl font-bold'>{item.tasks}</h2>
          <h3 className='text-3xl font-semibold'>{item.taskType}</h3>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers