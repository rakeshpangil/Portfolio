import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar glass">
            <div className="navbar-container">
                <a href="#home" className="logo gradient-text"></a>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    <span className={isOpen ? "bar open" : "bar"}></span>
                    <span className={isOpen ? "bar open" : "bar"}></span>
                    <span className={isOpen ? "bar open" : "bar"}></span>
                </div>

                <ul className={isOpen ? "nav-menu active glass" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
