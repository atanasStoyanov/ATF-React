import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = props => (
    <button className={styles.Submit} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
);

export default SubmitButton;