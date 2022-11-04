import React from 'react'
import "./Dash.css"
const Dash = () => {
 
  const handleClick = () => {
    localStorage.clear();
    window.location.reload()
  
  }
  function noBack()
         {
             window.history.forward()          
         }
        noBack();
        window.onload = noBack;
        window.onpageshow = function(event) { if (event.persisted) noBack() }
        window.onunload = function() { void (0) }
  return (
    <div className='Admin-body'>
      <div className='Dash-div'>
        <h2 >Admin Page</h2>
        <button id="user-btn">User</button>
        <button id="logout-btn" onClick={handleClick}>Log out</button>
      </div>
    </div>
  )
}

export default Dash;