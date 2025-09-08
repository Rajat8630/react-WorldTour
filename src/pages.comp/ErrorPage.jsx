import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();

    
  return (
    <div>
      <h1>Ooops ! eroor occur</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/"> <button>GO Back</button></NavLink>
    </div>
  )
}
