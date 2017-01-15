import { createStore } from 'redux'
import * as actions from './actions'
import todos from './reducers'

// const initialState = {
//     dummy: 'This doesnt matter, this will be overwritten by the reducer.'
// }
const store = createStore(todos, {})

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

export default store
