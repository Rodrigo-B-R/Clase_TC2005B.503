import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
        <Link to= '/'> Home</Link>
        <Link to= '/counter'> Counter</Link>

        


    </nav>
  )
}

export default Nav
