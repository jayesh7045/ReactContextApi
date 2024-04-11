import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'
function Profile() {
    const {user, setUser} = useContext(UserContext);
  return (
    <div>
      Welcome : {user.username}
    </div>
  )
}

export default Profile
