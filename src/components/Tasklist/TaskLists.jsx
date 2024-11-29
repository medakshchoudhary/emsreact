import React from 'react'
import NewTask from './NewTask'
import FailedTask from './FailedTask';
import CompleteTask from './CompletedTask';
import AcceptedTask from './AcceptedTask';

const TaskLists = ({data}) => {
  return (
    <div id='tasklist' className='tasklist-container flex flex-nowrap  items-center justify-start gap-5 text-white py-10 overflow-x-auto'>
      {data.tasks.map((item,index)=>{
        if(item.newTask) return <NewTask key={index} data={item} />;
        if(item.active) return <AcceptedTask key={index} data={item} />;
        if(item.completed) return <CompleteTask key={index} data={item} />;
        if(item.failed) return <FailedTask key={index} data={item} />;
      })}
    </div>
  )
}

export default TaskLists