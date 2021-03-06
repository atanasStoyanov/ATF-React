import React from 'react';

import styles from './Info-box.module.css';

const InfoBox = props => {
    const valueStyle = props.row === '1' ? 'First-row-value' : 'Second-row-value';

    return (
        <div className={styles.Box}>
            <p className={styles.Meta}>{props.title}</p>
            <p className={styles[valueStyle]}>{props.value}<span> {props.unit}</span></p>
        </div>
    );
}

export default InfoBox;