import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import styles from './SignUp.module.css';

import PageLayout from '../PageLayout/PageLayout';
import InputEl from '../../components/Input/InputEl';
import SubmitButton from '../../components/Button/SubmitButton';
import Spinner from '../../components/Spinner/Spinner';

import { updateObject } from '../../utils/updateObject';
import { checkValidity } from '../../utils/checkValidity';
import {authenticate, createUserInDb} from '../../utils/authenticate';
import UserContext from '../../Context';

const SignUp = props => {

    const [formElements, setFormElements] = useState(
        {
            firstName: {
                elementType: 'input',
                label: 'First Name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            secondName: {
                elementType: 'input',
                label: 'Second Name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Second Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
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
    const context = useContext(UserContext);

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
            setLoading(false);
            return;
        }

        const authData = {
            email: formElements.email.value,
            password: formElements.password.value,
            returnSecureToken: true
        }

        authenticate('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6Peyo5GN3spsTPYMadeQlfkp91rj6YMA',
            authData,
            (user) => {
                setLoading(false);

                const userData = {
                    userId: user.userId,
                    firstName: formElements.firstName.value,
                    secondName: formElements.secondName.value,
                    email: formElements.email.value,
                    age: '-',
                    weight: '-',
                    height: '-',
                    birthplace: '-',
                    plays: '-',
                    backhand: '-',
                    rating: 0
                };

                createUserInDb(userData);

                context.logIn(user);
                history.push('/');
            },
            (err) => {
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
                    {loading ? <Spinner /> : form}
                    <p className={styles.ErrorMsg}>{errorMsg}</p>
                    <SubmitButton title='Create Account' />
                    <p>Already have an account? <NavLink to='/sign-in' className={styles.Link}>Sign In here</NavLink> </p>
                </form>
            </div>
        </PageLayout>
    );
};

export default SignUp;