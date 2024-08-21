import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link styling
import { MenuItems } from './MenuItems';

import DarkMode from "../DarkMode/DarkMode"

import './Navbar.css';
import logo from "../../images/pizzalogo.svg"

class Navbar extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        // This. used to access litteral value of the mention component value.
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <NavLink to="/" className='navbar-logo'>
                        <img src={logo} alt='pizzalogo' className='temp' />
                        Mania
                    </NavLink>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* map method used to access array */}
                    {MenuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                className={item.cName}
                                to={item.url}
                                onClick={this.handleClick} // Close menu on link click
                            >
                                {/* this is the name showing part */}
                                {item.title} 
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <DarkMode />
            </nav>
        );
    }
}

export default Navbar;
