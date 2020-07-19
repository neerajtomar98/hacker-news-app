import React from 'react';
import styles from './app.module.sass';
import BaseContainer from './containers/BaseContainer';
import { HashRouter, Route } from 'react-router-dom';

function App() {
    return (
        <div className={styles["hacker-news-app"]}>
            <BaseContainer />
        </div>
    );
}
const appRoutes = (
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/news" component={App} />
    </div>

);

const AppRouter = () => <HashRouter>{appRoutes}</HashRouter>;
export default AppRouter;

