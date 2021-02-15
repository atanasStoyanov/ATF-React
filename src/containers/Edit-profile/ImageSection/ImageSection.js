import React from 'react';

import styles from './ImageSection.module.css';

import Spinner from '../../../components/Spinner/Spinner';


const ImageSection = props => (
    <div className={styles['Image-section']}>
        <div className={styles['User-img']}>
            <div className={styles['Ar-box']}>
                {props.loading ?
                    <Spinner /> :
                    <img src={props.src} alt='profile' className={styles.Image} />
                }
            </div>
        </div>
        {props.imageElement}
    </div>
);

export default ImageSection;