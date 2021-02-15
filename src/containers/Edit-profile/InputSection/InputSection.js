import React from 'react';

import styles from './InputSection.module.css';

const InputSection = props => (
    <div className={styles['Inputs-section']}>
        <fieldset className={styles.Fields}>
            <legend className={styles.Legend}>Personal</legend>
            {props.personalElements}
        </fieldset>
        <fieldset className={styles.Fields}>
            <legend className={styles.Legend}>Measures</legend>
            {props.measuresElements}
        </fieldset>
    </div>
);

export default InputSection;