import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './Edit-profile.module.css';


import PageLayout from '../PageLayout/PageLayout';
import InputEl from '../../components/Input/InputEl';
import Spinner from '../../components/Spinner/Spinner';
import SubmitButton from '../../components/Button/SubmitButton';

import { checkValidity } from '../../utils/checkValidity';
import { getUserData, updateUserInDb } from '../../utils/user';
import { updateObject } from '../../utils/updateObject';
import { uploadImage } from '../../utils/uploadImage';

import playerIcon from '../../images/player-icon.png'


const UpdateProfile = props => {

    const [formElements, setFormElements] = useState(
        {
            firstName: {
                elementType: 'input',
                label: 'First Name',
                formType: 'personal',
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
                formType: 'personal',
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
            weight: {
                elementType: 'input',
                label: 'Weight',
                formType: 'measures',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Weight in KG'
                },
                value: '',
                validation: {
                    isNumeric: true,

                },
                valid: false,
                touched: false
            },
            height: {
                elementType: 'input',
                label: 'Height',
                formType: 'measures',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Height in CM'
                },
                value: '',
                validation: {
                    isNumeric: true,

                },
                valid: false,
                touched: false
            },
            age: {
                elementType: 'input',
                label: 'Age',
                formType: 'measures',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Age'
                },
                value: '',
                validation: {
                    isNumeric: true,

                },
                valid: false,
                touched: false
            },
            birthplace: {
                elementType: 'input',
                label: 'Birthplace',
                formType: 'personal',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Birthplace'
                },
                value: '',
                validation: {},
                valid: true,
                touched: false
            },
            plays: {
                elementType: 'select',
                label: 'Plays',
                formType: 'tennis',
                elementConfig: {
                    options: [
                        { value: '-', displayedValue: 'Select Plays' },
                        { value: 'Right-Handed', displayedValue: 'Right-Handed' },
                        { value: 'Left-Handed', displayedValue: 'Left-Handed' }
                    ]
                },
                value: 'rightHanded',
                validation: {},
                valid: true
            },
            backhand: {
                elementType: 'select',
                label: 'Backhand',
                formType: 'tennis',
                elementConfig: {
                    options: [
                        { value: '-', displayedValue: 'Select Backhand' },
                        { value: 'One-Handed', displayedValue: 'One-Handed' },
                        { value: 'Two-Handed', displayedValue: 'Two-Handed' }
                    ]
                },
                value: 'rightHanded',
                validation: {},
                valid: true
            },
            image: {
                elementType: 'input',
                label: 'Profile Picture',
                formType: 'image',
                elementConfig: {
                    type: 'file',
                    placeholder: 'Select image'
                },
                value: '',
                validation: {},
                valid: true,
                touched: false
            },
        }
    )

    const [loading, setLoading] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [userInDb, setUserInDb] = useState('');

    const history = useHistory();
    const params = useParams();

    const userId = params.userId;

    const getData = useCallback(async () => {
        const userInfo = await getUserData(userId);

        setUserInDb(userInfo.userIdentification);

        let updatedElements = { ...formElements };

        for (const element in userInfo) {

            if (updatedElements.hasOwnProperty(element)) {
                updatedElements = updateObject(updatedElements, {
                    [element]: updateObject(updatedElements[element], {
                        value: userInfo[element]
                    })
                });

            }

        }

        setFormElements(updatedElements);

    }, [userId]);

    useEffect(() => {
        getData();
    }, [getData]);

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

    const uploadImageHandler = async event => {
        setLoading(true);

        const imageUrl = await uploadImage(event.target.files, 'https://api.cloudinary.com/v1_1/dbnasko/image/upload', 'ATF-user-pictures');

        const updatedElements = updateObject(formElements, {
            'image': updateObject(formElements.image, {
                value: imageUrl
            })
        });

        setFormElements(updatedElements);
        setLoading(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoadingSubmit(true);

        const userData = {
            firstName: formElements.firstName.value,
            secondName: formElements.secondName.value,
            birthplace: formElements.birthplace.value,
            age: formElements.age.value,
            height: formElements.height.value,
            weight: formElements.weight.value,
            plays: formElements.plays.value,
            backhand: formElements.backhand.value,
            image: formElements.image.value
        }

        await updateUserInDb(userData, userInDb);

        setLoadingSubmit(false);
        history.push(`/profile/${userId}`);
    }

    const formElementsArray = [];

    for (const element in formElements) {

        formElementsArray.push({
            id: element,
            config: formElements[element]
        });
    }

    const personalElements = formElementsArray
        .filter(formElement => formElement.config.formType === 'personal')
        .map(formElement => (
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

    const measuresElements = formElementsArray
        .filter(formElement => formElement.config.formType === 'measures')
        .map(formElement => (
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

    const tennisElements = formElementsArray
        .filter(formElement => formElement.config.formType === 'tennis')
        .map(formElement => (
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

    const imageElement = formElementsArray
        .filter(formElement => formElement.config.formType === 'image')
        .map(formElement => (
            <InputEl
                key={formElement.id}
                label={formElement.config.label}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={event => uploadImageHandler(event)}
            />
        ));

    return (
        <PageLayout>
            <div className={styles.Media}>
                {loadingSubmit ?
                    <Spinner /> :
                    (
                        <form className={styles.Form} onSubmit={handleSubmit}>
                            <h3>Edit Profile Details</h3>
                            <div className={styles.Elements}>
                                <div className={styles['Inputs-section']}>
                                    <fieldset className={styles.Fields}>
                                        <legend className={styles.Legend}>Personal</legend>
                                        {personalElements}
                                    </fieldset>
                                    <fieldset className={styles.Fields}>
                                        <legend className={styles.Legend}>Measures</legend>
                                        {measuresElements}
                                    </fieldset>
                                </div>
                                <div className={styles['Image-section']}>
                                    <div className={styles['User-img']}>
                                        <div className={styles['Ar-box']}>
                                            {loading ?
                                                <Spinner /> :
                                                <img src={formElements.image.value || playerIcon} alt='profile' className={styles.Image} />
                                            }
                                        </div>
                                    </div>
                                    {imageElement}
                                </div>
                            </div>
                            <fieldset className={styles['Tennis-fields']}>
                                <legend className={styles.Legend}>Tennis</legend>
                                {tennisElements}
                            </fieldset>
                            <SubmitButton title='Save updates' />
                        </form>
                    )
                }
            </div>
        </PageLayout>
    )
};

export default UpdateProfile;