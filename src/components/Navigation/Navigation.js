import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Navigation.module.css';

import NavigationItem from './NavigationItem/NavigationItem';
import UserContext from '../../Context';

import { FaHome, FaRegIdCard, FaUsers, FaUser, FaInfoCircle } from 'react-icons/fa';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { GiPodiumWinner } from 'react-icons/gi';
import ScrollNavItem from './NavigationItem/ScrollNavItem';

const Navigation = props => {
    const context = useContext(UserContext);
    const history = useHistory();

    const {
        loggedIn,
        user,
        logOut
    } = context;

    const logOutHandler = () => {
        logOut();
        history.push('/');
    }

    let links = (
        <ul>
            <ScrollNavItem smooth to='/#home'><FaHome className={styles.Icon} />Home</ScrollNavItem>
            <ScrollNavItem smooth to='/#about' ><FaInfoCircle className={styles.Icon} />About</ScrollNavItem>
            <NavigationItem link='/sign-in'> <GoSignIn className={styles.Icon} /> Sign In</NavigationItem>
            <NavigationItem link='/sign-up'> <FaRegIdCard className={styles.Icon} /> Sign Up</NavigationItem>
        </ul>
    )

    if (loggedIn) {
        links = (
            <ul>
                <ScrollNavItem smooth to='/#home'><FaHome className={styles.Icon} />Home</ScrollNavItem>
                <ScrollNavItem smooth to='/#about' ><FaInfoCircle className={styles.Icon} />About</ScrollNavItem>
                <NavigationItem link={`/profile/${user && user.userId}`} > <FaUser className={styles.Icon} />My Profile</NavigationItem>
                <NavigationItem link='/players'> <FaUsers className={styles.Icon} />Players</NavigationItem>
                <NavigationItem link='/rankings'> <GiPodiumWinner className={styles.Icon} />Rankings</NavigationItem>
                <NavigationItem link='/sign-out' onClick={logOutHandler}> <GoSignOut className={styles.Icon} />Sign Out</NavigationItem>
            </ul>
        )
    }

    return (
        <nav className={styles.Navigation}>
            {links}
        </nav>
    )
};

export default Navigation;