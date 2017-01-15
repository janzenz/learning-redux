/**
 * Actions - are payloads of information that send data from your application to your store. Actions can be divided into 2 functions:
 * - ActionTypes - are just constants to identify Actions.
 * - ActionCreators - are functions that create an Action.
 *   - You can use `bindActionCreators()` to automatically bind to a `dispatch()` function.
 */

/*
 * Action Types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * Other constants
 */
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * Action creators
 */
export function addTodo(text) {
    // Generate id here
    // Maximum of 999 items
    const id = Math.floor(Math.random() * 999)
    return { type: ADD_TODO, text, id }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}
