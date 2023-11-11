import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'} >Home</Link>
                </li>
                <li>
                    <Link to={'/about'} >About</Link>
                </li>
                <li>
                    <Link to={'/contacts'} >Contact</Link>
                </li>
                <li>
                    <Link to={'/hola'} >Hola</Link>
                </li>
            </ul>
        </nav>
    )
}
