import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  // useEffect(()=>{
  //   setLocalStorage()
  // },[])

  const [userData, setUserData] = useState(null)

  useEffect(()=>{
    const {employees, admin} = getLocalStorage()
    setUserData({employees,admin})
  },[])

  return (
    <div>
      <AuthContext.Provider value={userData}> 
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider