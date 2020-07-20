import React from 'react';
import styles from './notFound.module.sass';

const NotFound = () => (
    <div className={styles["not-found-container"]}>
        <div label="pageNotFound" className={styles["not-found-content"]}>
            Page Not Found !!
        </div>
    </div>
);

export default NotFound;