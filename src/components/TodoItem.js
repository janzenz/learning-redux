import React, { Component, PropTypes } from 'react'

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

export default TodoItem
