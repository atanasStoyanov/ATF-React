import React from 'react';
import styles from './PageLayout.module.css';

const PageLayout = (props) => {
    return (
        <div className={styles.app}>
            {props.children}
        </div>
    )
}

export default PageLayout;