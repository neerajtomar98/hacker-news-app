import { App } from '../App.js';
const routes = [
    {
        path: "/",
        component: App,
        exact: true,
    },
    {
        path: "/news",
        component: App,
        exact: true,
    }
];

export default routes;