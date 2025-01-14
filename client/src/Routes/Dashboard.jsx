import React from 'react'
import Logout from '../components/LogoutButton'
import AddEvent from '../components/AddEvent'
import MyEvent from '../components/MyCreatedEvent'
import Events from './Events'

const dashboard = () => {
  return (
    <div>
      <AddEvent/>
      <MyEvent/>
      {/* <Events/> */}
    </div>
  )
}

export default dashboard