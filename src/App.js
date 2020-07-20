import React from 'react';
import styles from './app.module.sass';
import BaseContainer from './containers/BaseContainer';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NotFound from 'components/notFound/NotFound';

function App() {
    return (
        <div className={styles["hacker-news-app"]}>
            <BaseContainer />
        </div>
    );
}
const appRoutes = (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/news" component={App} />
        <Route exact path="/*" component={NotFound} />
    </Switch>
);

const AppRouter = () => <HashRouter>{appRoutes}</HashRouter>;
export default AppRouter;

