import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskLists from '../Tasklist/TaskLists'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskLists data={data} />
    </div>
  )
}

export default EmployeeDashboard