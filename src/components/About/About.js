import React from 'react';

import styles from './About.module.css';
import aboutImg from '../../images/about.jpg';


const About = props => (
    <section id='about' className={styles.About}>
        <h1 className={styles.Title}>About ATF</h1>
        <div className={styles.Content}>
            <div>
                <p className={styles.Info}>ATF /Association of Tennis Friends/ is an innovation in Bulgarian amateur tennis. The main goal is to unite all tennis fans and provide them the opportunity to interactively conduct and cover matches, complemented by a ranking system.</p>
                <p className={styles.Info}>Thanks to the ATF rating we provide the opportunity for every fan of the game to find their place in the tennis community according to their skills and current abilities. It also enables players to track their development and encourage them to work on improving their skills and reach new heights in tennis.</p>
                <p className={styles.Info}>The Association of Tennis Friends will continue to develop its website and plans to become a social platform through which you can quickly find a partner for training or a match. ATF also plans to organize tournaments in the future.</p>
            </div>
            <img src={aboutImg} />
        </div>
    </section>
);

export default About;