import React from 'react';
import styles from './app.module.sass';
import BaseContainer from './containers/BaseContainer';

function App() {
    return (
        <div className={styles["hacker-news-app"]}>
            <BaseContainer />
        </div>
    );
}

export default App;
