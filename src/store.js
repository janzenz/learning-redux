import { createStore, applyMiddleware, compose } from 'redux'
import * as actions from './actions'
import todos from './reducers'
import DevTools from './components/DevTools'

const enhancer = compose(
    // Apply middleware here first
    // Then enable Redux DevTools with the monitors you chose
    DevTools.instrument()
)

function configureStore(initialState) {
    const store = createStore(todos, initialState, DevTools.instrument())

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('./reducers'))/*.default if you use Babel 6+ */
        )
    }

    // Let's get the initial state
    // console.log('Initial State: ', store.getState())

    // Every time the state changes, let's log it
    // Note that `subscribe()` returns a function for unregistering the listeners

    const unsubcribeSiri = store.subscribe(() => {
        // console.log('This is our current State sir!')
    })

    // We can also have multiple subscription
    const unsubscribeLogging = store.subscribe(() => {
        // console.log(store.getState())
    })


    // Dispatch actions
    store.dispatch(actions.addTodo('Learn about actions'))
    store.dispatch(actions.addTodo('Learn about reducers'))
    store.dispatch(actions.addTodo('Learn about store'))

    // Stop listening to subscriptions
    // The order doesn't matter
    //unsubcribeSiri()
    //unsubscribeLogging()

    return store
}

export default configureStore

