import React, { useState } from 'react';
import PageLayout from '../PageLayout/PageLayout';
import styles from './SignUp.module.css';

// import Input from '../../components/Input/Input';
import InputEl from '../../components/Input/InputEl';
import SubmitButton from '../../components/Button/SubmitButton';
import {updateObject} from '../../utils/updateObject';
import {checkValidity} from '../../utils/checkValidity';

const SignUp = props => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [RePassword, setRePassword] = useState('');
    // const [errorMsg, setErrorMsg] = useState('');

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
    )

    const inputChangedHandler = (event, element) => {
        const updatedElements = updateObject(formElements, {
            [element]: updateObject(formElements[element], {
                value: event.target.value,
                valid:checkValidity(event.target.value, formElements[element].validation),
                touched: true
            })
        });

        setFormElements(updatedElements); 
    }

    const handleSubmit = event => {
        event.preventDefault();

    }

    const formElementsArray = [];

    for (const element in formElements) {
        formElementsArray.push({
            id: element,
            config: formElements[element]
        });
    }

    let form = formElementsArray.map(formElement =>(
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
    ))

    return (
        <PageLayout>
            <div className={styles.Media}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <h3>Create an Account</h3>
                    {form}
                    {/* <Input
                        label='Email'
                        id='email'
                        type='email'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                            setErrorMsg(null);
                        }}
                        placeholder='Please enter valid email'
                    />
                    <Input
                        label='Password'
                        id='password'
                        type='password'
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                            setErrorMsg(null);
                        }}
                        placeholder='******'
                    />
                    <Input
                        label='Re-Password'
                        id='re-password'
                        type='password'
                        value={RePassword}
                        onChange={e => {
                            setRePassword(e.target.value);
                            setErrorMsg(null);
                        }}
                        placeholder='******'
                    /> */}


                    <SubmitButton title='Create Account'/>
                </form>
            </div>
        </PageLayout>
    );
};

export default SignUp;