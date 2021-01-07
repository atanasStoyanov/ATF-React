import React from 'react';
import styles from './SiteMain.module.css';

const SiteMain = props => {
    return (
        <div className={styles['site-main']}>
            {props.children}
        </div>
    );
}

export default SiteMain;