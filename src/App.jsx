import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './Contexts/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

const App = () => {
  
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)  
  //     }
  //   } 
  // }, [authData])
  
  
  const handleLogin = (email,password)=>{
    if(email === "admin@me.com" && password === "123"){
      setUser("admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    }else if(authData){
        const employee = authData.employees.find((e)=>
          email == e.email && password == e.password
        )
        if(employee){
          setUser("employee")
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:"employee"}))
        }
      }
      else{
      alert("Invalid email or password")
    }
  }
  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : (user === "admin" ? <AdminDashboard /> : <EmployeeDashboard data={loggedInUserData} />)}
      {}
    </>
  )
}

export default App