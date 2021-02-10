import React from 'react';

import styles from './Info-section.module.css';

import InfoBox from './Info-box';

const InfoSection = props => (
    <section className={styles['Info-section']}>
        <div className={styles.Row}>
            <InfoBox title='Age' value='28' row='1' />
            <InfoBox title='Weight' value='80' unit='kg' row='1'/>
            <InfoBox title='Height' value='185' unit='cm' row='1'/>
        </div>
        <div className={styles.Row}>
            <InfoBox title='Birthplace' value='Stara Zagora, Bulgaria' row='2' />
            <InfoBox title='Plays' value='Right-Handed' row='2'/>
            <InfoBox title='Backhand' value='One-Handed' row='2'/>
        </div>
    </section>
);

export default InfoSection;
