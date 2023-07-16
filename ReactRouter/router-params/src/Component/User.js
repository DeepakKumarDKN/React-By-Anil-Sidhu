import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
  const params = useParams();
  const {name} = params
  return (
    <div>This is {name}'s Section</div>
  )
}

export default User