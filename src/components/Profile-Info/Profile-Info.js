import React from 'react';

import styles from './Profile-Info.module.css';
import playerIcon from '../../images/player-icon.png'

import NameSection from './Name-section/Name-section';
import MiddleSection from './Middle-section/Middle-section';
import InfoSection from './Info-section/Info-section';

const ProfileInfo = props => (
    <div className={styles.Media}>
        <NameSection firstName={props.userData.firstName || '-'} secondName={props.userData.secondName || '-'} />
        <MiddleSection rating={props.userData.rating || '0'} img={props.userData.image || playerIcon}/>
        <InfoSection userData={props.userData}/>
    </div>

);

export default ProfileInfo;