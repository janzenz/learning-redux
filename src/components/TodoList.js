import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import * as actions from '../actions'

class TodoList extends Component {
    _onTodoClick = (id) => {
        this.props.dispatch(actions.toggleTodo(id))
    }

    render() {
        const { todos } = this.props;
        return <ul>
            {todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onTodoClick={this._onTodoClick}
                />
            )}
        </ul>
    }
}

TodoList.propType = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        complete: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired)
}

const calculateTodos = (state) => {
    switch(state.visibilityFilter) {
        case actions.VisibilityFilters.SHOW_COMPLETED:
            return state.todos.filter(t => t.completed)
        case actions.VisibilityFilters.SHOW_ACTIVE:
            return state.todos.filter(t => !t.completed)
        case actions.VisibilityFilters.SHOW_ALL:
        default:
            return state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(actions.toggleTodo(id))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: calculateTodos(state)
    }
}

export default connect(mapStateToProps)(TodoList)

