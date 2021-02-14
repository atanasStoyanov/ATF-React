import React from 'react';
import styles from './InputEl.module.css';

const InputEl = props => {
    let inputElement = null;

    const inputClasses = [styles.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(styles.Invalid)
    }

    let validationError = null;

    if(props.invalid && props.touched) {
        validationError = <p className={styles.ValidationError}>Please enter a valid value!</p>
    }

    switch (props.elementType) {
        case 'input':
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case 'textarea':
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
            case 'select': 
            inputElement = (<select
                className={styles.Select}
                value={props.value}
                onChange={props.changed}
            >
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}> {option.displayedValue} </option>
                ))}
            </select>);
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} />;
            break;
    }

    const test = props.elementType !== 'select' ? 'InputElement' : 'SelectInputElement'

    return (
        <div className={styles[test]}>
            <label className={styles.Label} >{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default InputEl;