import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './Contexts/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

const App = () => {
  
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email,password)=>{
    if(email === "admin@me.com" && password === "123"){
      setUser("admin")
    }else if(email === "emp@emp.com" && password === "123"){
      setUser("employee")
    }
    else{
      alert("Invalid email or password")
    }
  }
  
  
  return (
    <>
      {user === null ? (
        <Login handleLogin={handleLogin} />
      ) : (
        user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />
      )}
    </>
  )
}

export default App