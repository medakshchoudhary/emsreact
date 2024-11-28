import React from 'react'
import NewTask from './NewTask'
import FailedTask from './FailedTask';
import CompleteTask from './CompletedTask';
import AcceptedTask from './AcceptedTask';

const TaskLists = ({data}) => {
  return (
    <div id='tasklist' className='tasklist-container flex flex-nowrap  items-center justify-start gap-5 text-white py-10 overflow-x-auto'>
      {data.tasks.map((elem)=>{
        if(elem.newTask) return <NewTask />;
        if(elem.active) return <AcceptedTask />;
        if(elem.completed) return <CompleteTask />;
        if(elem.failed) return <FailedTask />;
      })}
    </div>
  )
}

export default TaskLists