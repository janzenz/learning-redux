import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import DevTools from './DevTools'

const App = ({ todos, params }) => {
    return <div>
        <AddTodo />
        <TodoList
            filter={params.filter || 'all'}
        />
        <Footer />
        <DevTools />
    </div>
}

export default App

