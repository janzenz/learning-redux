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

import { createStore } from 'redux';
import { VisibilityFilters } from './actions.js';

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL
}

function todoApp(state = initialState, action) {
    console.log(action)
	switch (action.type) {
		case action.SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
                visibilityFilter: visibilityFilter(state, action)
			})
		case action.ADD_TODO:
		case action.TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: todos(state, action)
			})
		default:
			return state
	}
}

/* Reducer compositions */
function visibilityFilter(state = VisibilityFilter.SHOW_ALL, action) {
    switch (action.type) {
		case action.VisibilityFilter.SHOW_ALL:
		case action.VisibilityFilter.SHOW_COMPLETED:
		case action.VisibilityFilter.SHOW_ACTIVE:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			})
		default:
			return state
	}
}

function todos(state = initialState, action) {
	switch (action.type) {
		case action.ADD_TODO:
			return [
					...state.todos,
					{
						text: action.text,
						completed: false
					}
				]
		case action.TOGGLE_TODO:
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

let store = createStore(todoApp)
console.log(store.getState())

