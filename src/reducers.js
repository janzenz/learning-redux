/**
 * Reducer is a PURE function that takes a previous state and an Action and returns a New State.
 * (previousState, action) => newState
 */

/* It's a good idea to think of its shape before writing any code. */
/*
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/

import { combineReducers } from 'redux'
import * as constants from './actions.js';

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

/* This code block is literrally the `combineReducers` implementation */
/*
const todoApp = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
}
*/

export default todoApp

/* Reducer compositions */
function visibilityFilter(state = constants.VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
		case constants.SET_VISIBILITY_FILTER:
            return action.filter
		default:
			return state
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case constants.ADD_TODO:
            return [
				        ...state,
					{
						id: action.id,
						text: action.text,
						completed: false
					}
				]
		case constants.TOGGLE_TODO:
			return state.map((todo) => {
					if (todo.id === action.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						})
					}

					return todo
				})
		default:
			return state
	}
}

