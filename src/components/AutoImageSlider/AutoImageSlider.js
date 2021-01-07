import React from 'react';
import styles from './AutoImageSlider.module.css';

const AutoImageSlider = props => (
    <div className={styles.slider}>
        <div className={styles.load}>
            {props.children}
        </div>
    </div>
)

export default AutoImageSlider;