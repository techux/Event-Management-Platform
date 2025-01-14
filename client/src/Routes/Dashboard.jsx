import React from 'react'
import Logout from '../components/LogoutButton'
import AddEvent from '../components/AddEvent'
import MyEvent from '../components/MyEvent'

const dashboard = () => {
  return (
    <div>
      {/* <AddEvent/> */}
      <MyEvent/>
    </div>
  )
}

export default dashboard