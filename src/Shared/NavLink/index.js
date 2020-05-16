import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const NavLink = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <Link {...props} />
  </div>
))

export default NavLink
