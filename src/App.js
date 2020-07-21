import React from 'react';
import styles from './app.module.sass';
import BaseContainer from './containers/BaseContainer';
import { StaticRouter, HashRouter, Route, Switch } from 'react-router-dom';
import NotFound from 'components/notFound/NotFound';

function App() {
    return (
        <div className={styles["hacker-news-app"]}>
            <BaseContainer />
        </div>
    );
}
export const appRoutes = (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/news" component={App} />
        <Route exact path="/*" component={NotFound} />
    </Switch>
);

var AppRouter = () => <StaticRouter>{appRoutes}</StaticRouter>;

if (typeof window !== 'undefined') {
    AppRouter = () => <HashRouter>{appRoutes}</HashRouter>;
}

export default AppRouter;

