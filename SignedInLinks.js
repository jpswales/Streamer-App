import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to ='/addFilm'>Add film</NavLink></li>
            <li><NavLink to ='/'>Recent</NavLink></li>
            <li><NavLink to ='/'>Recommended</NavLink></li>
            <li><NavLink to ='/'>Logout</NavLink></li>
            <li><NavLink to ='/' className='btn btn-floating pin lighten-1'>JS</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;