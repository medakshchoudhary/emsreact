import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../Tasklist/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='pt-10 px-10'>
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard