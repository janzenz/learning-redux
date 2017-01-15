import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

class TodoItem extends Component {
    _onClick = (e) => {
        this.props.onTodoClick(this.props.id)
    }

    render() {
        const { id, text } = this.props;
        return <li onClick={this._onClick}>
                {text}
            </li>
    }
}

TodoItem.propType = {
    id: PropTypes.number.isRequired,
    complete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

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

class FilterLink extends Component {
    _onClick = () => {
        this.props.handleFilter(this.props.filter)
    }

    render() {
        return <a 
            href="#" 
            onClick={this._onClick}
        >{this.props.children}</a>
    }
}

class Footer extends Component {
    _handleFilter = (filter) => {
        console.log(filter)
    }

    render() {
        return <div>
            <FilterLink filter="SHOW_COMPLETED" handleFilter={this._handleFilter}>
                Show Completed
            </FilterLink>{", "}
            <FilterLink filter="SHOW_ACTIVE" handleFilter={this._handleFilter}>
                Show Active
            </FilterLink>{", "}
            <FilterLink filter="SHOW_ALL" handleFilter={this._handleFilter}>
                Show All
            </FilterLink>
        </div>
    }
}

class AddTodo extends Component {
    _handleSubmit = (e) => {
        e.preventDefault();
        // Add to do here.
        console.log(this.refs.todo.value);
    }

    render() {
        return <form onSubmit={this._handleSubmit}>
            <input
                type="text"
                ref="todo"
            />
            <input
                type="submit" value="Add"
            />
        </form>
    }
}

class App extends Component {
    render() {
        return <div>
            <AddTodo />
            <TodoList
                {...this.props.todos}
            />
            <Footer />
        </div>
    }
}

const todos = {
    visibilityFilter: "SHOW_ALL",
    todos: [
        {
            id: 1,
            text: 'Integrate Redux to React',
            completed: false
        },
        {
            id: 2,
            text: 'Get Food',
            completed: false
        }
    ]
}

render(<App todos={todos}/>, document.getElementById('app'))

