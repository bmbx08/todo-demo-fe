import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({user,children}) => {
  return (
    user? children:<Navigate to ='/login'/>
  )
}

//user값이 있으면 Todopage : 없으면 redirect to/login

export default PrivateRoute
