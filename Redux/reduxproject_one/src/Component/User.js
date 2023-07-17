import React from 'react'

function User(props) {
  return (
    <div>
        User Component
        <p>Name: {props.data.name}</p>
    </div>
  )
}

export default User