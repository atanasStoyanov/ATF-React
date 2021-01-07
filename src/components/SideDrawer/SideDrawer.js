import React from 'react';
import styles from './SideDrawer.module.css';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const SideDrawer = props => {
    let attachedClasses = [styles.SideDrawer, styles.Close];

    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.drawerClosed} />
            <div className={attachedClasses.join(' ')}>
                <Logo />
                <Navigation />
            </div>
        </Aux>
    )
}

export default SideDrawer;