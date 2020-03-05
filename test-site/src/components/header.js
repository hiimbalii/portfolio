import React from 'react';
import { Link } from 'gatsby';

const Header=()=>{
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Kapcsolat</Link></li>
            </ul>
        </nav>
    )
}
export default Header