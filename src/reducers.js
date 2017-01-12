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

import { addTodo, createStore } from 'redux';
import * as constants from './actions.js';

const initialState = {
	visibilityFilter: constants.VisibilityFilters.SHOW_ALL
}

function todoApp(state = {}, action) {
	switch (action.type) {
		case constants.SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
                visibilityFilter: visibilityFilter(state, action)
			})
		case constants.ADD_TODO:
		case constants.TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: todos(state.todos, action)
			})
		default:
			return state
	}
}

/* Reducer compositions */
function visibilityFilter(state = constants.VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
		case constants.VisibilityFilters.SHOW_ALL:
		case constants.VisibilityFilters.SHOW_COMPLETED:
		case constants.VisibilityFilters.SHOW_ACTIVE:
			return Object.assign({}, state, action.filter)
		default:
			return state
	}
}

function todos(state = {}, action) {
	switch (action.type) {
		case constants.ADD_TODO:
            return Object.assign({}, state, {
                todos: [
					...state,
					{
						text: action.text,
						completed: false
					}
				]})
		case constants.TOGGLE_TODO:
			return state.todos.map((todo, index) => {
					if (index === action.index) {
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

