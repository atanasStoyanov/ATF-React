import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import styles from './SideBar.module.css';

const SideBar = () => {

    return (
        <div className={styles.SideBar}>
            <Logo />
            <Navigation/>
            {/* <nav >
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </nav> */}
        </div>
    )
}

export default SideBar;