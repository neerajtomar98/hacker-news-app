const path = require('path');
const fs = require('fs');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
import App from '../src/App'
import store from '../src/store/store';
import { Provider } from 'react-redux'

const PORT = 8080
const app = express()
const router = express.Router()


const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve(path.join(__dirname, '../build', 'index.html')), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <App />
                    </Provider>
                )}</div>`
            )
        )
    })
}
router.use('^/$', serverRenderer)

router.use(
    express.static(path.resolve(__dirname, '..', 'build'))
)

app.use(router)

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
})