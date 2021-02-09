import React from 'react';
import {NavHashLink} from 'react-router-hash-link';

import styles from './NavigationItem.module.css';

const ScrollNavItem = props => (
    <li className={styles.NavigationItem}>
        <NavHashLink
            to={props.to}
            smooth={props.smooth}
            activeClassName={styles.active}
        >{props.children}</NavHashLink>
        
    </li>
);

export default ScrollNavItem;