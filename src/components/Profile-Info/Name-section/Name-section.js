import React from 'react';

import styles from './Name-section.module.css';

const NameSection = props => (
    <section className={styles.Name}>
        <h4>{props.firstName}</h4>
        <h1>{props.secondName}</h1>
    </section>
)

export default NameSection