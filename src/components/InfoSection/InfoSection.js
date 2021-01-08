import React from 'react';
import styles from './InfoSection.module.css';
import Title from '../Title/Title';

const InfoSection = props => (
    <section className={styles.Info}>
        <Title main={props.mainTitle} sub={props.subTitle} />
        <h3>{props.message}</h3>
        <p className={styles.Slogan}>{props.slogan}</p>
    </section>
);

export default InfoSection;