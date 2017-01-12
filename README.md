These are my notes learning Redux.

Here's a quick diagram of how a Redux workflow:
`Actions (Action Types) -> store.dispatch() -> (Old) Store -> Reducers (Entire State) -> (New) Store -> Components -> (Repeat)`

## Actions
Actions are payloads of information that send data from the application to the store. They are the only source of information for the store.
- Plain JavaScript objects.
