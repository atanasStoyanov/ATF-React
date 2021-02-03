import React from 'react';
import styles from './Input.module.css';

const Input = ({label, id, value, onChange, type, placeholder, readOnly}) => {
    return (
        <div className={styles['Form-div']}>
            <label className={styles.Label} htmlFor={id}>{label}</label>
            <input
                className={styles.Input}
                type={type || 'text'}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly || ''}
            />
        </div>
    )
}

export default Input;