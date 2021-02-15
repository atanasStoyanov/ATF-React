import React, {useContext, useState} from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import styles from './SignIn.module.css';

import PageLayout from '../PageLayout/PageLayout';
import InputEl from '../../components/Input/InputEl';
import SubmitButton from '../../components/Button/SubmitButton';
import Spinner from '../../components/Spinner/Spinner';

import { checkValidity } from '../../utils/checkValidity';
import { updateObject } from '../../utils/updateObject';
import {authenticate} from '../../utils/user';

import UserContext from '../../Context';


const SignIn = props => {

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

        const authData = {
            email: formElements.email.value,
            password: formElements.password.value,
            returnSecureToken: true
        }

        authenticate('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6Peyo5GN3spsTPYMadeQlfkp91rj6YMA',
            authData,
            (user) => {
                setLoading(false);
                context.logIn(user);
                history.push('/');
            },
            (err) => {
                setLoading(false);
                setErrorMsg('INVALID EMAIL or PASSWORD');
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
                    <h3>Sign In to your Account</h3>
                    {loading ? <Spinner /> : form}
                    <p className={styles.ErrorMsg}>{errorMsg}</p>
                    <SubmitButton title='Sign In'/>
                    <p>Not a member? <NavLink to='/sign-up' className={styles.Link}>Sign Up now</NavLink></p>
                </form>
            </div>
        </PageLayout>
    )
};

export default SignIn;