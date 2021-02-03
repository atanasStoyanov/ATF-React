import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import styles from './SideBar.module.css';

const SideBar = () => {

    return (
        <div className={styles.SideBar}>
            <Logo />
            <Navigation />
        </div>
    )
}

export default SideBar;