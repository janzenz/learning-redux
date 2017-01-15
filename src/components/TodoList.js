import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

class TodoList extends Component {
    _onTodoClick(id) {
        console.log(id)
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

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)
