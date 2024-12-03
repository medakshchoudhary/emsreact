import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../Tasklist/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='pt-8 px-10'>
        <Header changeUser={props.changeUser} user={props.user}  />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard