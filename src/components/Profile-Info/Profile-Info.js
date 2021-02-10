import React from 'react';

import styles from './Profile-Info.module.css';
import testImg from '../../images/about.jpg'

import NameSection from './Name-section/Name-section';
import MiddleSection from './Middle-section/Middle-section';
import InfoSection from './Info-section/Info-section';

const ProfileInfo = props => (
    <div className={styles.Media}>
        <NameSection name='Test' surname='Testov' />
        <MiddleSection rating='4.5' img={testImg}/>
        <InfoSection />
    </div>

);

export default ProfileInfo;