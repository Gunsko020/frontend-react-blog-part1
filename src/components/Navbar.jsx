import React from 'react';
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
            <nav className="outer-container navigation">
                <ul className="options">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/overview">Alle posts</NavLink></li>
                    <li>
                        <NavLink to="/post/:id">Nieuwe post maken</NavLink>
                    </li>
                </ul>
            </nav>

    );
};

export default Navbar;