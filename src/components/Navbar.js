import React from 'react';
import { links, social } from '../data/NavbarData';

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
            </ul>
        </nav>
    );
}

export default Navbar;