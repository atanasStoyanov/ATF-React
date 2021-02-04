import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from './SignUp.module.css';
import PageLayout from '../PageLayout/PageLayout';

import InputEl from '../../components/Input/InputEl';
import SubmitButton from '../../components/Button/SubmitButton';
import Spinner from '../../components/Spinner/Spinner';
import { updateObject } from '../../utils/updateObject';
import { checkValidity } from '../../utils/checkValidity';

const SignUp = props => {

    const [formElements, setFormElements] = useState(
        {
            email: {
                elementType: 'input',
                label: 'Email',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                label: 'Password',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            rePassword: {
                elementType: 'input',
                label: 'Repeat Password',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Repeat Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    );

    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const inputChangedHandler = (event, element) => {
        const updatedElements = updateObject(formElements, {
            [element]: updateObject(formElements[element], {
                value: event.target.value,
                valid: checkValidity(event.target.value, formElements[element].validation),
                touched: true
            })
        });

        setFormElements(updatedElements);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setLoading(true);

        if (formElements.password.value !== formElements.rePassword.value) {
            setErrorMsg('Passwords do not match');
            return;
        }

        const authData = {
            email: formElements.email.value,
            password: formElements.password.value,
            returnSecureToken: true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6Peyo5GN3spsTPYMadeQlfkp91rj6YMA', authData)
            .then(response => {
                setLoading(false);
                console.log(response);
                history.push('/');
            })
            .catch(err => {
                setLoading(false);
                setErrorMsg(err.response.data.error.message);
            });

    }

    const formElementsArray = [];

    for (const element in formElements) {
        formElementsArray.push({
            id: element,
            config: formElements[element]
        });
    }

    let form = formElementsArray.map(formElement => (
        <InputEl
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => inputChangedHandler(event, formElement.id)}
        />

    ));


    return (
        <PageLayout>
            <div className={styles.Media}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <h3>Create an Account</h3>
                    {loading ? <Spinner/> : form}
                    <p className={styles.ErrorMsg}>{errorMsg}</p>
                    <SubmitButton title='Create Account' />
                </form>
            </div>
        </PageLayout>
    );
};

export default SignUp;