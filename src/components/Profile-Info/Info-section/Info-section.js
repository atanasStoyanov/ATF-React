import React from 'react';

import styles from './Info-section.module.css';

import InfoBox from './Info-box';

const InfoSection = props => (
    <section className={styles['Info-section']}>
        <div className={styles.Row}>
            <InfoBox title='Age' value={props.userData.age || '-'} row='1' />
            <InfoBox title='Weight' value={props.userData.weight || '-'} unit='kg' row='1'/>
            <InfoBox title='Height' value={props.userData.height || '-'} unit='cm' row='1'/>
        </div>
        <div className={styles.Row}>
            <InfoBox title='Birthplace' value={props.userData.birthplace || '-'} row='2' />
            <InfoBox title='Play' value={props.userData.play || '-'} row='2'/>
            <InfoBox title='Backhand' value={props.userData.backhand || '-'} row='2'/>
        </div>
    </section>
);

export default InfoSection;
