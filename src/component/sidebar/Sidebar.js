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
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
              Create Movie
              </li>
            </Link>
            <Link to='/newuser' className="link">
               <li className="sidebarListItem">
            Create Admin
            </li>
            </Link>
         
         <Link  to='/list' className="link"> 
             <li className="sidebarListItem">
             Movie List
            </li>
         </Link>
        
          
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar