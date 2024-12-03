import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

  return (
        <div className='bg-zinc-800 rounded mt-3 h-[35vh] px-5 pt-3 text-white'>
            <div className='topbar flex justify-between p-3 bg-red-400 rounded-md mb-2'>
                <h3 className='text-xl font-medium w-1/5'>Employee Name</h3>
                <h3 className='text-xl font-medium w-1/5'>New Task</h3>
                <h3 className='text-xl font-medium w-1/5'>Active Task</h3>
                <h3 className='text-xl font-medium w-1/5'>Completed Task</h3>
                <h3 className='text-xl font-medium w-1/5'>Failed Task</h3>
            </div>
            <div id='alltask' className='h-[calc(35vh-12vh)] overflow-y-auto'>
                    {userData.map((item,index)=>{
                        return (
                            <div key={index} className='flex justify-between p-3 border-emerald-500 border-2 rounded-md mb-2'>
                                <h3 className='text-lg font-medium w-1/5'>{item.firstName}</h3>
                                <h3 className='text-lg font-medium w-1/5 text-blue-500'>{item.taskCount.newTask}</h3>
                                <h3 className='text-lg font-medium w-1/5 text-yellow-500'>{item.taskCount.active}</h3>
                                <h3 className='text-lg font-medium w-1/5'>{item.taskCount.completed}</h3>
                                <h3 className='text-lg font-medium w-1/5 text-red-500'>{item.taskCount.failed}</h3>
                            </div>
                        )
                    })}
            </div>
        </div>
  )
}

export default AllTask