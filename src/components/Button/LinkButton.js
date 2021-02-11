import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './LinkButton.module.css';

const LinkButton = props => (
    <NavLink to={props.to} className={styles.LinkBtn} >{props.title}</NavLink>
);

export default LinkButton;