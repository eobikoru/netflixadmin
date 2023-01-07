import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './index';
function PrivateRoute({children}) {
    const authed = isAuthenticated();
console.log(authed , "auth");
  return (
 authed ? ( children) : (
     <Navigate  to={{
         pathname: "/"
     }} />
 ) 
  )
}

export default PrivateRoute;
