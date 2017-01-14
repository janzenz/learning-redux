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