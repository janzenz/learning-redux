These are my notes learning Redux.

## Tips
- Start with one file for your app to easily identify the relationships of the Actions > Reducers > Store
- If you need to, spell out the variables, don't neglect the tedium of learning what's inside each abstraction.

Here's a quick diagram of how a Redux workflow:
`Root Reducer -> store.dispatch() [Actions (Action Creators)] -> (Old) Store -> Reducers (Entire State) -> (New) Store -> Components -> (Repeat)`

## Actions
Actions are payloads of information that send data from the application to the store. They are the only source of information for the store. There are two types of Actions:  
- Action Type (Constants)  
- Action Creators (Creates the Actions to be done by the Reducers)

## Reducers
Action specifies the work to be done while Reducers do the work and mutate the state. In my own understand, the Reducers define the data structure of your state. 

Redux provides a utility called `combineReducers()` which basically creates a single Reducer from a bunch of Reducers, this is how it works:

```
export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
```
To this:
```
const todoApp = combineReducers({
  visibilityFilter,
  todos
})
```
The output of a Reducer is just a Javascript Object that consists the mutated state (not modified because it's an entirely new instance of the old one).

## Store
Notice the singular word Store unlike the Actions & Reducers. In Redux there should only be ONE Store to manage your Application State, it is a ONE source of truth which I think is the gist of Redux. This is important in order to understand your Application State easily and so you can have an overview of the current State of your Application. A Store is just a container of your Application's State (both UI and Data).

To initialize the Store we can do:  
```
const initialState = {
	dummy: 'This does not matter, this will be overwritten by what is returned by the root reducer or todosReducer in this case.'
}

const store = createStore(todosReducer, initialState)
```

