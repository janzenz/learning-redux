import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux';
import store from './store'
import * as actions from './actions'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

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

render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'))

