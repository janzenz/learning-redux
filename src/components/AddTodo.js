import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class AddTodo extends Component {
    _handleSubmit = (e) => {
        e.preventDefault();
        // Add to do here.
        this.props.dispatch(actions.addTodo(this.textInput.value))
    }

    render() {
        return <form onSubmit={this._handleSubmit}>
            <input
                type="text"
                ref={ input => this.textInput = input }
            />
            <input
                type="submit"
                value="Add"
                onClick={this.focus}
            />
        </form>
    }
}

export default connect()(AddTodo)