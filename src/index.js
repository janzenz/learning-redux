import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import configureStore from './store'
import DevTools from './components/DevTools'
import App from './components/App'

const store = configureStore()

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App} />
            <DevTools />
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

render(<Root store={store} />, document.getElementById('app'))

