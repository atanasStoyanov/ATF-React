import React from 'react';
import styles from './Logo.module.css';
import logo from '../../images/atf-logo.PNG';

const Logo = () => (
    <div className={styles.Logo}>
        <img src={logo} alt='atf-logo'/>
    </div>
);

export default Logo;
