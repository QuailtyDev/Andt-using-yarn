import React, { useContext }from "react";
import { UserContext } from '../App'

const UserComponent = () => { 
  const username = useContext(UserContext);
  return (
    <div>
      <h1>Context</h1>
      <div>{username}</div>
    </div>
  )
}

export default UserComponent;
