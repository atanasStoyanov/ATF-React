import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import styles from './BackButton.module.css';

const BackButton = props => {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <button onClick={goBack} className={styles.BackBtn}><FaArrowLeft />Back</button>
    )
}
    

export default BackButton