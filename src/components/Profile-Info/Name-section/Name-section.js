import React from 'react';

import styles from './Name-section.module.css';

const NameSection = props => (
    <section className={styles.Name}>
        <h4>{props.name}</h4>
        <h1>{props.surname}</h1>
    </section>
)

export default NameSection