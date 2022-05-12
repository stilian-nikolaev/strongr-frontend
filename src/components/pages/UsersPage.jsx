import React from 'react'

export default function UsersPage() {
    const workouts = fetch('http://localhost:5000')
        .then(res=> console.log(res))

  return (
    <div>UsersPage</div>
  )
}
