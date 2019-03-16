import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to ='/login'>Login</NavLink></li>
            <li><NavLink to ='/signUp'>Sign up</NavLink></li>

        </ul>
    )
}

export default SignedInLinks;