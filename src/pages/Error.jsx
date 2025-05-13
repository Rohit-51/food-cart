import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log("errorRoute", err)
  return (
    <div>
        <h1>Oops!</h1>
        <h2>
            {err.data}
        </h2>
    </div>
  )
}

export default Error