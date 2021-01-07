import React from 'react';
import styles from './Title.module.css';

const Title = props => (
    <div className={styles.Title}>
        <h1>{props.main}</h1>
        <h6>{props.sub}</h6>
    </div>
);

export default Title;