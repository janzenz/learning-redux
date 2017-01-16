import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const App = ({ todos, params }) => {
    return <div>
        <AddTodo />
        <TodoList
            filter={params.filter || 'all'}
        />
        <Footer />
    </div>
}

export default App

