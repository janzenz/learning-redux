These are my notes learning Redux.

Here's a quick diagram of how a Redux workflow:
`store.dispatch() [Actions (Action Creators)] -> (Old) Store -> Reducers (Entire State) -> (New) Store -> Components -> (Repeat)`

## Actions
Actions are payloads of information that send data from the application to the store. They are the only source of information for the store. There are two types of Actions:  
- Action Type (Constants)  
- Action Creators (Creates the Actions to be done by the Reducers)

## Reducers
Action specifies the work to be done while Reducers do the work and mutate the state.
