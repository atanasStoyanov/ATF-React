import React from 'react';

import styles from './TennisSection.module.css';

const TennisSection = props => (
    <fieldset className={styles['Tennis-fields']}>
        <legend className={styles.Legend}>Tennis</legend>
        {props.tennisElements}
    </fieldset>
);

export default TennisSection;