import React from 'react';

import styles from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { FaHome, FaRegIdCard, FaUsers } from 'react-icons/fa';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import {GiPodiumWinner} from 'react-icons/gi';

const Navigation = props => (
    <nav className={styles.Navigation}>
        <ul >
            <NavigationItem link='/' exact> <FaHome className={styles.Icon} /> Home</NavigationItem>
            <NavigationItem link='/sign-in'> <GoSignIn className={styles.Icon} /> Sign In</NavigationItem>
            <NavigationItem link='/sign-up'> <FaRegIdCard className={styles.Icon} /> Sign Up</NavigationItem>
            <NavigationItem link='/logout'> <GoSignOut className={styles.Icon} />Sign Out</NavigationItem>
            <NavigationItem link='/players'> <FaUsers className={styles.Icon} />Players</NavigationItem>
            <NavigationItem link='/rankings'> <GiPodiumWinner className={styles.Icon} />Rankings</NavigationItem>
        </ul>
    </nav>
);

export default Navigation;