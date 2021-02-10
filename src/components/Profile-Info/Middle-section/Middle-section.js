import React from 'react';

import styles from './Middle-section.module.css';

const MiddleSection = props => (
    <section className={styles['Middle-section']}>
        <div className={styles.Rating}>
            <h2>{props.rating}</h2>
            <p>RATING</p>
        </div>
        <div className={styles['User-img']}>
            <div className={styles['Ar-box']}>
                <img src={props.img} alt='avatar' className={styles.Image} />
            </div>
        </div>
    </section>
);

export default MiddleSection;