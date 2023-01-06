import React from 'react';
import './sidebar.css';


  import { Link } from "react-router-dom";
  
function Sidebar() {
  return (

    <>
    
    
   
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
            Users
            </li>
          
          </ul>
        </div>
   
     

      </div>
    </div>
    </>
  )
}

export default Sidebar