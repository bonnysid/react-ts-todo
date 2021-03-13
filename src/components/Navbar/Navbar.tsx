import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">React + Typescript Todo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Todos</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    </nav>
)

export default Navbar