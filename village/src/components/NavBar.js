import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <div>
                <NavLink  to ='/'> View just the Smurfs!</NavLink>
            </div>
            <div>
            <NavLink to ='/smurf-form'> Add a new Smurf!</NavLink>
            </div>           
        </div>
    )
}