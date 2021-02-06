import React, { useContext } from 'react';

import styles from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { FaHome, FaRegIdCard, FaUsers } from 'react-icons/fa';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { GiPodiumWinner } from 'react-icons/gi';
import UserContext from '../../Context';
import { useHistory } from 'react-router-dom';

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
            <NavigationItem link='/' exact> <FaHome className={styles.Icon} /> Home</NavigationItem>
            <NavigationItem link='/sign-in'> <GoSignIn className={styles.Icon} /> Sign In</NavigationItem>
            <NavigationItem link='/sign-up'> <FaRegIdCard className={styles.Icon} /> Sign Up</NavigationItem>
        </ul>
    )

    if (loggedIn) {
        links = (
            <ul>
                <NavigationItem link='/' exact> <FaHome className={styles.Icon} /> Home</NavigationItem>
                <NavigationItem link='/sign-out' onClick={logOutHandler}> <GoSignOut className={styles.Icon} />Sign Out</NavigationItem>
                <NavigationItem link='/players'> <FaUsers className={styles.Icon} />Players</NavigationItem>
                <NavigationItem link='/rankings'> <GiPodiumWinner className={styles.Icon} />Rankings</NavigationItem>
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