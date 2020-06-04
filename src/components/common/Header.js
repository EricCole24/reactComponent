import React from 'react'
import { NavLink } from 'react-router-dom'
import tedd from './tedd-4.jpg'


function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ marginBottom: "10px" }}>
            <img src={tedd} alt="Author" style={{ width: 40, height: 40, paddingRight: "0.2em" }} className="d-inline-block align-top" />....
            <NavLink style={{ color: "white" }} className="navbar-brand" to="/">Home</NavLink>
            <NavLink style={{ color: "white" }} className="navbar-brand" to="/about">About</NavLink>
            <NavLink style={{ color: "white" }} className="navbar-brand " to="/view">ViewData</NavLink>
        </nav>
    )
}
export default Header