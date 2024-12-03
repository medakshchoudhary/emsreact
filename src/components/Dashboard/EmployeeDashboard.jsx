import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskLists from '../Tasklist/TaskLists'

const EmployeeDashboard = (props) => {
  return (
    <div className='pt-8 px-10 pb-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskLists data={props.data} />
    </div>
  )
}

export default EmployeeDashboard